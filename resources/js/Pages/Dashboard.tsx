import Layout from '@/Components/Layout'
import { Head } from '@inertiajs/react'
import { FC } from 'react'

interface DashboardProps {
	auth: any
	errors: any
}

const Dashboard: FC<DashboardProps> = ({
                                           errors,
                                           auth
                                       }) => {
    return (
        <>
            <Head title='Dashboard' />

            <Layout auth={auth}>
                <div className='py-12'>
                    <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                        <div className='bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg'>
                            <div className='p-6 text-gray-900 dark:text-gray-100'>
                                You're logged in!
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Dashboard
