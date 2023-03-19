import { Head, Link, useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'
import Layout from '@/Components/Layout'
import { BaseProps } from '@/types/base.type'
import {
	Button,
	Card,
	Input,
	Row,
	Spacer,
	Text
} from '@nextui-org/react'
import { BsAt } from 'react-icons/bs'

interface Props extends BaseProps {
	token: string
	email: string
}

export default function ResetPassword({
	token,
	email,
	auth
}: Props) {
	const { data, setData, post, processing, errors, reset } =
		useForm({
			token: token,
			email: email,
			password: '',
			password_confirmation: ''
		})

	useEffect(() => {
		return () => {
			reset('password', 'password_confirmation')
		}
	}, [])

	const onHandleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setData(
			event.target.name as
				| 'email'
				| 'password'
				| 'password_confirmation'
				| 'token',
			event.target.value
		)
	}

	const submit = () => post(route('password.store'))

	return (
		<>
			<Head title='Reset Password' />
			<Layout auth={auth}>
				<Card
					css={{
						borderWidth: '0px',
						maxWidth: '400px',
						mt: '120px'
					}}
					isHoverable
				>
					<Card.Body>
						<Text h3 className='text-center'>
							Reset Password
						</Text>
						<Spacer y={1} />
						<Input
							type='email'
							placeholder='Enter your email'
							value={data.email}
							onChange={e =>
								setData('email', e.target.value)
							}
							helperText={errors.email}
							helperColor='error'
							clearable
							bordered
							fullWidth
							color='primary'
							size='lg'
							contentLeft={<BsAt />}
						/>
						<Spacer y={1} />
						<Input
							type='password'
							placeholder='Enter your password'
							value={data.password}
							onChange={e =>
								setData('password', e.target.value)
							}
							helperText={errors.password}
							helperColor='error'
							clearable
							bordered
							fullWidth
							color='primary'
							size='lg'
							contentLeft={<BsAt />}
						/>
						<Spacer y={1} />
						<Input
							type='password'
							placeholder='Confirm your password'
							value={data.password_confirmation}
							onChange={e =>
								setData(
									'password_confirmation',
									e.target.value
								)
							}
							helperText={errors.password_confirmation}
							helperColor='error'
							clearable
							bordered
							fullWidth
							color='primary'
							size='lg'
							contentLeft={<BsAt />}
						/>
						<Spacer y={1} />
						<Row>
							<Button
								onPress={submit}
								disabled={processing}
								css={{ width: '100%' }}
							>
								Sign in
							</Button>
						</Row>
					</Card.Body>
					<Card.Footer>
						<Row
							justify='space-between'
							css={{ mx: '10px' }}
						>
							<Link href={route('login')}>
								<Text size={14}>Already have account?</Text>
							</Link>

							<Link href={route('register')}>
								<Text size={14}>Not registered yet?</Text>
							</Link>
						</Row>
					</Card.Footer>
				</Card>
			</Layout>
		</>
	)
}
