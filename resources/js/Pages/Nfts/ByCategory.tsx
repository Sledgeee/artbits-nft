import Layout from '@/Components/Layout'
import NftListWithPagination from '@/Components/nft/NftListWithPagination'
import { BaseProps } from '@/types/base.type'
import { Head } from '@inertiajs/react'
import { FC } from 'react'
import { PaginationResponse } from './nft.interface'
import { Nft } from '@/types/nft.type'
import { Category } from '@/types/category.type'

interface NftPageProps extends BaseProps {
	category: Category
	nfts: PaginationResponse<Nft>
}

const ByCategory: FC<NftPageProps> = ({
	nfts,
	auth,
	category
}) => {
	return (
		<>
			<Head title={`${category.name} category`} />
			<Layout auth={auth}>
				<NftListWithPagination
					paginationItems={nfts}
					title={`${category.name} category`}
				/>
			</Layout>
		</>
	)
}

export default ByCategory
