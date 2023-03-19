import { Link, useForm } from '@inertiajs/react'
import { BaseProps } from '@/types/base.type'
import React, { useEffect } from 'react'
import {
	Button,
	Card,
	Input,
	Row,
	Spacer,
	Text
} from '@nextui-org/react'
import { BsAt } from 'react-icons/bs'

const ConfirmPassword = ({ auth }: BaseProps) => {
	const { data, setData, post, processing, errors, reset } =
		useForm({
			password: ''
		})

	useEffect(() => {
		return () => {
			reset('password')
		}
	}, [])

	const submit = () => post(route('password.email'))

	return (
		<div>
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
						Password reset
					</Text>
					<Spacer y={1} />
					<Input
						type='password'
						placeholder='Confirm your password'
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
					<Row justify='space-between' css={{ mx: '10px' }}>
						<Link href={route('login')}>
							<Text size={14}>Already have account?</Text>
						</Link>

						<Link href={route('register')}>
							<Text size={14}>Not registered yet?</Text>
						</Link>
					</Row>
				</Card.Footer>
			</Card>
		</div>
	)
}
export default ConfirmPassword
