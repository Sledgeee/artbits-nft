import { Head } from '@inertiajs/react'
import React from 'react'
import Layout from '@/Components/Layout'
import { BaseProps } from '@/types/base.type'
import LoginForm from '@/Components/auth/LoginForm'

interface Props extends BaseProps {
	status: string
}

const Login = ({ status, auth }: Props) => {
	return (
		<>
			<Head title='Log in' />
			<Layout auth={auth}>
				<LoginForm status={status} />
			</Layout>
		</>
	)
}

export default Login
