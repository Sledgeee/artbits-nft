import Layout from '@/Components/Layout'
import NftListWithPagination from '@/Components/nft/NftListWithPagination'
import { BaseProps } from '@/types/base.type'
import { Head } from '@inertiajs/react'
import { FC } from 'react'
import { PaginationResponse } from './nft.interface'

interface NftPageProps extends BaseProps {
	nfts: PaginationResponse
}

const ByCategory: FC<NftPageProps> = ({ nfts, auth }) => {
	return (
		<>
			<Head title='Marketplace' />
			<Layout auth={auth}>
				<NftListWithPagination paginationItems={nfts} />
			</Layout>
		</>
	)
}

export default ByCategory
