import type {
	ErrorBag,
	Errors,
	Page,
	PageProps
} from '@inertiajs/core'
import { useForm, usePage } from '@inertiajs/react'
import {
	Button,
	Card,
	Input,
	Spacer,
	Text
} from '@nextui-org/react'
import { BsLock } from 'react-icons/bs'
import React from 'react'

export interface InertiaPage extends Page<PageProps> {
	props: {
		errors: Errors & ErrorBag
		auth: {
			user: {
				username: string
				email: string
			}
		}
	}
}

const UpdateProfileInformation = () => {
	const user = usePage<
		InertiaPage & { [key: string]: any }
	>().props.auth.user

	const {
		data,
		setData,
		patch,
		errors,
		processing,
		recentlySuccessful
	} = useForm({
		username: user.username,
		email: user.email
	})

	const submit = () => patch(route('profile.update'))

	return (
		<Card css={{ borderWidth: '0px' }}>
			<Card.Body>
				<Text h4>Profile Information</Text>

				<Text color='gray' size='$sm'>
					Update your account's profile information and
					email address.
				</Text>

				<Spacer y={1} />
				<div className='space-y-4'>
					<Input
						value={data.email}
						onChange={e => setData('email', e.target.value)}
						helperColor='error'
						helperText={errors.email}
						clearable
						bordered
						fullWidth
						color='primary'
						size='lg'
						placeholder='Change email'
						contentLeft={<BsLock />}
					/>

					<Input
						value={data.username}
						onChange={e =>
							setData('username', e.target.value)
						}
						helperColor='error'
						helperText={errors.username}
						clearable
						bordered
						fullWidth
						color='primary'
						size='lg'
						placeholder='Change username'
						contentLeft={<BsLock />}
					/>
				</div>
				<Spacer y={1} />
				<Button
					disabled={processing}
					css={{ width: '100%' }}
					color='primary'
				>
					Update user
				</Button>
			</Card.Body>
		</Card>
	)
}
export default UpdateProfileInformation
