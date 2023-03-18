import Layout from '@/Components/Layout'
import NftListWithPagination from '@/Components/nft/NftListWithPagination'
import { PaginationResponse } from '@/Pages/Nfts/nft.interface'
import { BaseProps } from '@/types/base.type'
import { Head } from '@inertiajs/react'
import { FC } from 'react'
import { Nft } from '@/types/nft.type'

interface NftPageProps extends BaseProps {
	nfts: PaginationResponse<Nft>
}

const AllNfts: FC<NftPageProps> = ({ nfts, auth }) => {
	return (
		<>
			<Head title='Marketplace' />
			<Layout auth={auth}>
				<NftListWithPagination paginationItems={nfts} />
			</Layout>
		</>
	)
}

export default AllNfts
