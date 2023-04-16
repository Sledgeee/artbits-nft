import { Head } from '@inertiajs/react'
import React from 'react'
import Layout from '@/Components/Layout'
import { BaseProps } from '@/interfaces/base.interface'
import LoginForm from '@/Components/auth/LoginForm'

const Login = ({ auth }: BaseProps) => {
	return (
		<>
			<Head title='Log in' />
			<Layout auth={auth}>
				<LoginForm />
			</Layout>
		</>
	)
}

export default Login
