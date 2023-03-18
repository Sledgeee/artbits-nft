import { Head, useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'
import Layout from '@/Components/Layout'
import {
	Button,
	Card,
	Checkbox,
	Input,
	Row,
	Spacer,
	Text
} from '@nextui-org/react'
import { BsAt, BsLock } from 'react-icons/bs'
import { BaseProps } from '@/types/base.type'

interface Props extends BaseProps {
	status: string
}

const Login = ({ status, auth }: Props) => {
	const { data, setData, post, processing, errors, reset } =
		useForm({
			email: '',
			password: '',
			remember: ''
		})

	useEffect(() => {
		return () => {
			reset('password')
		}
	}, [])

	const handleOnChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setData(
			event.target.name as
				| 'email'
				| 'password'
				| 'remember',
			event.target.type === 'checkbox'
				? event.target.checked + ''
				: event.target.value
		)
	}

	const submit = (e: React.FormEvent) => {
		e.preventDefault()
		post(route('login'))
	}

	return (
		<>
			<Head title='Log in' />
			<Layout auth={auth}>
				<div className='flex justify-center '>
					<Card
						css={{
							borderWidth: '0px',
							maxWidth: '400px',
							mt: '120px'
						}}
					>
						<Card.Body>
							<Spacer y={1} />
							<Input
								clearable
								bordered
								fullWidth
								color='primary'
								size='lg'
								type='email'
								placeholder='Email'
								contentLeft={<BsAt />}
							/>
							<Spacer y={1} />
							<Input
								clearable
								bordered
								fullWidth
								color='primary'
								type='password'
								size='lg'
								placeholder='Password'
								contentLeft={<BsLock />}
							/>
							<Spacer y={1} />
							<Row justify='space-between'>
								<Checkbox>
									<Text size={14}>Remember me</Text>
								</Checkbox>
								<Text size={14}>Forgot password?</Text>
							</Row>
						</Card.Body>
						<Card.Footer className=''>
							<Button>Sign in</Button>
						</Card.Footer>
					</Card>
				</div>
			</Layout>
		</>
	)
}

export default Login
