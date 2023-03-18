import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import { useEffect } from 'react'

export default function Register() {
	const { data, setData, post, processing, errors, reset } = useForm({
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

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setData(
			event.target.name as
				| 'username'
				| 'email'
				| 'password'
				| 'password_confirmation',
			event.target.type === 'checkbox'
				? event.target.checked + ''
				: event.target.value
		)
	}

	const submit = (e: React.SyntheticEvent) => {
		e.preventDefault()

		post(route('register'))
	}

	return (
		<GuestLayout>
			<Head title='Register' />

			<form onSubmit={submit}>
				<div>
					<InputLabel htmlFor='username' value='Username' />

					<TextInput
						id='username'
						name='username'
						value={data.username}
						className='mt-1 block w-full'
						autoComplete='username'
						isFocused={true}
						onChange={handleOnChange}
						required
					/>

					<InputError message={errors.username as string} className='mt-2' />
				</div>

				<div className='mt-4'>
					<InputLabel htmlFor='email' value='Email' />

					<TextInput
						id='email'
						type='email'
						name='email'
						value={data.email}
						className='mt-1 block w-full'
						autoComplete='email'
						onChange={handleOnChange}
						required
					/>

					<InputError message={errors.email as string} className='mt-2' />
				</div>

				<div className='mt-4'>
					<InputLabel htmlFor='password' value='Password' />

					<TextInput
						id='password'
						type='password'
						name='password'
						value={data.password}
						className='mt-1 block w-full'
						autoComplete='new-password'
						onChange={handleOnChange}
						required
					/>

					<InputError message={errors.password as string} className='mt-2' />
				</div>

				<div className='mt-4'>
					<InputLabel
						htmlFor='password_confirmation'
						value='Confirm Password'
					/>

					<TextInput
						id='password_confirmation'
						type='password'
						name='password_confirmation'
						value={data.password_confirmation}
						className='mt-1 block w-full'
						autoComplete='new-password'
						onChange={handleOnChange}
						required
					/>

					<InputError
						message={errors.password_confirmation as string}
						className='mt-2'
					/>
				</div>

				<div className='flex items-center justify-end mt-4'>
					<Link
						href={route('login')}
						className='underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800'
					>
						Already registered?
					</Link>

					<PrimaryButton className='ml-4' disabled={processing}>
						Register
					</PrimaryButton>
				</div>
			</form>
		</GuestLayout>
	)
}
