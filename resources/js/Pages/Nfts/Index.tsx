import Layout from '@/Components/Layout'
import NftListWithPagination from '@/Components/nft/NftListWithPagination'
import { NftResponse } from '@/Pages/Nfts/nft.interface'
import { BaseProps } from '@/types/base.type'
import { Head } from '@inertiajs/react'
import { FC } from 'react'

interface NftPageProps extends BaseProps {
	nfts: NftResponse
}

const Index: FC<NftPageProps> = ({ nfts, auth }) => {
	return (
		<>
			<Head title='Marketplace' />
			<Layout auth={auth}>
				<NftListWithPagination paginationItems={nfts} />
			</Layout>
		</>
	)
}

export default Index
