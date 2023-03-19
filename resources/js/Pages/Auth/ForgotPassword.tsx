import { Head } from '@inertiajs/react'
import { BaseProps } from '@/types/base.type'
import Layout from '@/Components/Layout'
import ForgotPassForm from '@/Components/auth/ForgotPassForm'

const ForgotPassword = ({ auth }: BaseProps) => {
	return (
		<>
			<Head title='Forgot password?' />
			<Layout auth={auth}>
				<ForgotPassForm />
			</Layout>
		</>
	)
}
export default ForgotPassword
