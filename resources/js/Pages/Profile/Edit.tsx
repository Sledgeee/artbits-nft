import { Head } from '@inertiajs/react'
import Layout from '@/Components/Layout'
import { BaseProps } from '@/types/base.type'
import UpdatePasswordForm from '@/Components/auth/Partials/UpdatePasswordForm'
import DeleteUserForm from '@/Components/auth/Partials/DeleteUserForm'
import UpdateProfileInformationForm from '@/Components/auth/Partials/UpdateProfileInformationForm'
import ConnectWalletForm from '@/Components/auth/Partials/ConnectWalletForm'

const Edit = ({ auth }: BaseProps) => {
	return (
		<>
			<Head title='Profile' />
			<Layout auth={auth}>
				<div className='container mx-auto'>
					<div className='my-8 mx-2 space-y-6'>
						<UpdateProfileInformationForm />
						<ConnectWalletForm />
						<UpdatePasswordForm />
						<DeleteUserForm />
					</div>
				</div>
			</Layout>
		</>
	)
}
export default Edit
