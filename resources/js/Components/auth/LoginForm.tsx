import React, { FC, useEffect } from 'react'
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
import { useForm } from '@inertiajs/react'

interface LoginFormProps {
	status: string
}

const LoginForm: FC<LoginFormProps> = ({ status }) => {
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

	const submit = () => post(route('login'))

	return (
		<div>
			<div className='min-h-screen flex max-w-[1920px] mx-auto'>
				<div className='hidden lg:flex w-full lg:w-1/2 justify-around items-center bg-gradient-to-bl from-purple-900 to-blue-900'>
					<div className=' w-full mx-auto px-20 flex-col items-center space-y-6'>
						<h1 className='text-white font-bold text-4xl font-sans'>
							A highly-curated platform for creating,
							collecting and trading unique NFTs
						</h1>
						<p className='text-white mt-1'></p>
					</div>
				</div>
				<div className='flex w-full lg:w-1/2 justify-center items-center bg-gray-900 space-y-8'>
					<Card
						css={{
							borderWidth: '0px',
							maxWidth: '400px',
							mt: '120px'
						}}
					>
						<Card.Body>
							<Text h3 className='text-center'>
								Login
							</Text>
							<Text h5 color='red' className='text-center'>
								{status}
							</Text>
							<Spacer y={1} />
							<Input
								name='email'
								type='email'
								placeholder='Email'
								value={data.email}
								onChange={e =>
									setData('email', e.target.value)
								}
								clearable
								bordered
								fullWidth
								color='primary'
								size='lg'
								contentLeft={<BsAt />}
							/>
							<Spacer y={1} />
							<Input.Password
								name='password'
								type='password'
								placeholder='Password'
								value={data.password}
								onChange={e =>
									setData('password', e.target.value)
								}
								clearable
								bordered
								fullWidth
								color='primary'
								size='lg'
								contentLeft={<BsLock />}
							/>
							<Spacer y={1} />
							<Row justify='space-between'>
								<Checkbox
									value={data.remember}
									onChange={isSelected =>
										setData('remember', isSelected + '')
									}
								>
									<Text size={14}>Remember me</Text>
								</Checkbox>
								<Text size={14}>Forgot password?</Text>
							</Row>
						</Card.Body>
						<Card.Footer>
							<Button
								onPress={submit}
								disabled={processing}
								css={{ width: '100%' }}
							>
								Sign in
							</Button>
						</Card.Footer>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
