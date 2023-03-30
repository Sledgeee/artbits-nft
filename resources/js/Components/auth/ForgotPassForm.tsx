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
				<div className='hidden lg:flex w-full lg:w-1/2'>
					<div className='w-full h-full overflow-hidden'>
						<img
							src='https://cdn.i-scmp.com/sites/default/files/styles/portrait/public/d8/images/canvas/2021/12/17/986e4a7b-7baf-4078-b82c-4c44d1958150_2fa4f97a.jpg?itok=kcHz5C3G&v=1639737717'
							className='object-cover h-full'
						/>
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
