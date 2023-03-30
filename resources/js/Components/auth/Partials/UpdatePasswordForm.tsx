import { useForm } from '@inertiajs/react'
import React from 'react'
import {
	Button,
	Card,
	Input,
	Spacer,
	Text
} from '@nextui-org/react'
import { BsLock, BsLockFill } from 'react-icons/bs'

export default function UpdatePasswordForm() {
	const {
		data,
		setData,
		errors,
		put,
		reset,
		processing,
		recentlySuccessful
	} = useForm({
		current_password: '',
		password: '',
		password_confirmation: ''
	})

	const updatePassword = () => {
		put(route('password.update'), {
			preserveScroll: true,
			onSuccess: () => reset(),
			onError: () => {
				if (errors.password) {
					reset('password', 'password_confirmation')
				}
				if (errors.current_password) {
					reset('current_password')
				}
			}
		})
	}

	return (
		<Card css={{ borderWidth: '0px' }}>
			<Card.Body>
				<Text h4>Update Password</Text>

				<Text color='gray' size='$sm'>
					Ensure your account is using a long, random
					password to stay secure.
				</Text>

				<Spacer y={1} />
				<div className='space-y-4'>
					<Input.Password
						value={data.current_password}
						onChange={e =>
							setData('current_password', e.target.value)
						}
						helperColor='error'
						helperText={errors.current_password}
						clearable
						bordered
						fullWidth
						color='primary'
						size='lg'
						placeholder='Enter current password'
						contentLeft={<BsLockFill />}
					/>

					<Input.Password
						value={data.password}
						onChange={e =>
							setData('password', e.target.value)
						}
						helperColor='error'
						helperText={errors.password}
						clearable
						bordered
						fullWidth
						color='primary'
						size='lg'
						placeholder='Enter your password'
						contentLeft={<BsLock />}
					/>

					<Input.Password
						value={data.password_confirmation}
						onChange={e =>
							setData(
								'password_confirmation',
								e.target.value
							)
						}
						helperColor='error'
						helperText={errors.password_confirmation}
						clearable
						bordered
						fullWidth
						color='primary'
						size='lg'
						placeholder='Confirm your password'
						contentLeft={<BsLock />}
					/>
				</div>
				<Spacer y={1} />
				<Button
					disabled={processing}
					css={{ width: '100%' }}
					color='default'
					onPress={updatePassword}
				>
					Update password
				</Button>
			</Card.Body>
		</Card>
	)
}
