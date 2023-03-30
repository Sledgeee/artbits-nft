import Layout from '@/Components/Layout'
import { Head } from '@inertiajs/react'
import { FC } from 'react'
import { BaseProps } from '@/types/base.type'
import { TotalTransaction } from '@/types/transaction.type'
import { Nft } from '@/types/nft.type'
import { Category } from '@/types/category.type'
import TransactionGraph from '@/Components/user/analytics/TransactionGraph'
import CreateNftCard from '@/Components/user/CreateNftCard'
import { Spacer, Text } from '@nextui-org/react'
import UserNftsTable from '@/Components/user/UserNftsTable'

interface Props extends BaseProps {
	transactions: TotalTransaction[]
	userItems: Nft[]
	categories: Category[]
}

const Dashboard: FC<Props> = ({
	auth,
	transactions,
	userItems,
	categories
}) => {
	return (
		<>
			<Head title='Dashboard' />

			<Layout auth={auth}>
				<div className='container mx-auto max-w-7xl py-12 px-4'>
					<Text h2>Dashboard</Text>
					<CreateNftCard
						userItems={userItems}
						categories={categories}
					/>
                    <Spacer y={1} />
					<UserNftsTable userItems={userItems} />
					<Spacer y={1} />
					<TransactionGraph transactions={transactions} />
				</div>
			</Layout>
		</>
	)
}
export default Dashboard
