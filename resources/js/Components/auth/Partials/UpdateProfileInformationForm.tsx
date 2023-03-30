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
	Text,
	Textarea
} from '@nextui-org/react'
import {
	BsAt,
	BsImage,
	BsPersonCircle
} from 'react-icons/bs'
import React from 'react'
import { User } from '@/types/user.type'

export interface InertiaPage extends Page<PageProps> {
	props: {
		errors: Errors & ErrorBag
		auth: {
			user: User
		}
	}
}

const UpdateProfileInformation = () => {
	const user = usePage<
		InertiaPage & { [key: string]: any }
	>().props.auth.user

	const { data, setData, patch, errors, processing } =
		useForm({
			username: user.username,
			email: user.email,
			banner_image: user.banner_image,
			avatar_image: user.avatar_image,
			bio: user.bio
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
				<div className='space-y-8'>
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
						contentLeft={<BsAt />}
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
						labelLeft='username'
					/>
					<Input
						value={data.avatar_image}
						onChange={e =>
							setData('avatar_image', e.target.value)
						}
						helperColor='error'
						helperText={errors.avatar_image}
						clearable
						bordered
						fullWidth
						color='primary'
						size='lg'
						placeholder='Enter avatar image url'
						contentLeft={<BsPersonCircle />}
					/>
					<Input
						value={data.banner_image}
						onChange={e =>
							setData('banner_image', e.target.value)
						}
						helperColor='error'
						helperText={errors.banner_image}
						clearable
						bordered
						fullWidth
						color='primary'
						size='lg'
						placeholder='Enter banner image url'
						contentLeft={<BsImage />}
					/>
					<Textarea
						value={data.bio}
						onChange={e => setData('bio', e.target.value)}
						helperColor='error'
						helperText={errors.bio}
						bordered
						fullWidth
						color='primary'
						size='lg'
						placeholder='Enter bio info'
					/>
				</div>
				<Spacer y={1} />
				<Button
					disabled={processing}
					css={{ width: '100%' }}
					color='primary'
					onPress={submit}
				>
					Update user
				</Button>
			</Card.Body>
		</Card>
	)
}
export default UpdateProfileInformation
