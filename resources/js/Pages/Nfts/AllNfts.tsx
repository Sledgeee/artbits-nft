import Layout from '@/Components/Layout'
import NftListWithPagination from '@/Components/nft/NftListWithPagination'
import { PaginationResponse } from '@/interfaces/nft.interface'
import { BaseProps } from '@/interfaces/base.interface'
import { Head } from '@inertiajs/react'
import { FC } from 'react'
import { Nft } from '@/interfaces/nft.interface'

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
