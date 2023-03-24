import React, { FC, useEffect } from 'react'
import { Link, useForm } from '@inertiajs/react'
import {
	Button,
	Card,
	Input,
	Row,
	Spacer,
	Text
} from '@nextui-org/react'
import {
	BsAt,
	BsFillPersonFill,
	BsLock,
	BsLockFill
} from 'react-icons/bs'

const RegisterForm: FC = () => {
	const { data, setData, post, processing, errors, reset } =
		useForm({
			username: '',
			email: '',
			password: '',
			password_confirmation: ''
		})

	useEffect(() => {
		return () => {
			reset('password', 'password_confirmation')
		}
	}, [])

	const submit = () => post(route('register'))

	return (
		<div>
			<div className='min-h-screen flex max-w-[1920px] mx-auto'>
				<div className='hidden lg:flex w-full lg:w-1/2'>
					<div className='w-full h-full overflow-hidden'>
						<img
							src='https://airnfts.s3.amazonaws.com/nft-images/20210829/Out_of_space_1630263137497.jpg'
							className='object-cover h-full'
						/>
					</div>
				</div>
				<div className='flex w-full lg:w-1/2 justify-center items-center bg-gray-900 space-y-8'>
					<Card
						isHoverable
						css={{
							borderWidth: '0px',
							maxWidth: '400px',
							mt: '120px'
						}}
					>
						<Card.Body>
							<Text h3 className='text-center'>
								Register
							</Text>
							<Spacer y={2} />
							<Input
								type='username'
								placeholder='Enter your username'
								value={data.username}
								onChange={e =>
									setData('username', e.target.value)
								}
								helperText={errors.username}
								helperColor='error'
								clearable
								bordered
								fullWidth
								color='primary'
								size='lg'
								contentLeft={<BsFillPersonFill />}
							/>
							<Spacer y={1.5} />
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
							<Spacer y={1.5} />
							<Input.Password
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
								contentLeft={<BsLock />}
							/>
							<Spacer y={1.5} />
							<Input.Password
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
								contentLeft={<BsLockFill />}
							/>
							<Spacer y={1} />
							<Button
								onPress={submit}
								disabled={processing}
								css={{ width: '100%' }}
							>
								Sign up
							</Button>
						</Card.Body>
						<Card.Footer>
							<Row
								justify='space-between'
								css={{ mx: '10px' }}
								className='-mt-3'
							>
								<Link href={route('password.request')}>
									<Text size={14}>Forgot password?</Text>
								</Link>

								<Link href={route('login')}>
									<Text size={14}>
										Already have account?
									</Text>
								</Link>
							</Row>
						</Card.Footer>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default RegisterForm
