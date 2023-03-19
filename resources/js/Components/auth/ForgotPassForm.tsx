import React, { FC } from 'react'
import { Link, useForm } from '@inertiajs/react'
import {
	Button,
	Card,
	Input,
	Row,
	Spacer,
	Text
} from '@nextui-org/react'
import { BsAt } from 'react-icons/bs'

const ForgotPassForm: FC = () => {
	const { data, setData, post, processing, errors } =
		useForm({
			email: ''
		})

	const submit = () => post(route('password.email'))

	return (
		<div>
			<div className='min-h-screen flex max-w-[1920px] mx-auto'>
				<div className='hidden lg:flex w-full lg:w-1/2 justify-around items-center bg-gradient-to-bl from-purple-900 to-blue-900'>
					<div className=' w-full mx-auto px-20 flex-col items-center space-y-6'>
						<h1 className='text-white font-bold text-4xl font-sans'>
							Forgot password
						</h1>
						<p className='text-white mt-1'>
							Forgot your password? No problem. Just let us
							know your email address and we will email you
							a password reset link that will allow you to
							choose a new one.
						</p>
					</div>
				</div>
				<div className='flex w-full lg:w-1/2 justify-center items-center bg-gray-900 space-y-8'>
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
								type='email'
								placeholder='Email'
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
									<Text size={14}>
										Already have account?
									</Text>
								</Link>

								<Link href={route('register')}>
									<Text size={14}>Not registered yet?</Text>
								</Link>
							</Row>
						</Card.Footer>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default ForgotPassForm
