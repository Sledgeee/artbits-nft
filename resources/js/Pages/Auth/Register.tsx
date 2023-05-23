import { Head } from '@inertiajs/react'
import Layout from '@/Components/Layout'
import { BaseProps } from '@/interfaces/base.interface'
import RegisterForm from '@/Components/auth/RegisterForm'

const Register = ({ auth }: BaseProps) => {
	return (
		<>
			<Head title='Register' />
			<Layout auth={auth}>
				<RegisterForm />
			</Layout>
		</>
	)
}
export default Register
