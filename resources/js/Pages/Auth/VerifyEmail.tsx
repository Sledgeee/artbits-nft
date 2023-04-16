import { Head, Link, useForm } from '@inertiajs/react'
import Layout from '@/Components/Layout'
import { Button } from '@nextui-org/react'
import { BaseProps } from '@/interfaces/base.interface'
import { FormEvent } from 'react'

interface Props extends BaseProps {
	status: string
}

const VerifyEmail = ({ status, auth }: Props) => {
	const { post, processing } = useForm({})
	const submit = (e: FormEvent) =>
		post(route('verification.send'))

	return (
		<>
			<Head title='Email Verification' />
			<Layout auth={auth}>
				<div className='mb-4 text-sm text-gray-400'>
					Thanks for signing up! Before getting started,
					could you verify your email address by clicking on
					the link we just emailed to you? If you didn't
					receive the email, we will gladly send you
					another.
				</div>

				{status === 'verification-link-sent' ? (
					<div className='mb-4 font-medium text-sm text-green-400'>
						A new verification link has been sent to the
						email address you provided during registration.
					</div>
				) : (
					<div />
				)}

				<form onSubmit={submit}>
					<div className='mt-4 flex items-center justify-between'>
						<Button disabled={processing}>
							Resend Verification Email
						</Button>

						<Link
							href={route('logout')}
							method='post'
							as='button'
							className='underline text-sm text-gray-600 hover:text-gray-900 rounded-md'
						>
							Log Out
						</Link>
					</div>
				</form>
			</Layout>
		</>
	)
}
export default VerifyEmail
