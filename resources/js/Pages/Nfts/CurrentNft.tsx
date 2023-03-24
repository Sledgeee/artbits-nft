import Layout from '@/Components/Layout'
import DefaultNftList from '@/Components/nft/DefaultNftList'
import HeaderImageSection from '@/Components/nft/nftPage/HeaderImageSection'
import NftSection from '@/Components/nft/nftPage/NftSection'
import { BaseProps } from '@/types/base.type'
import { Nft } from '@/types/nft.type'
import { Head } from '@inertiajs/react'
import { FC } from 'react'
import { Auction } from '@/types/auction.type'

interface CurrentNftProps extends BaseProps {
	nft: Nft
	nfts: Nft[]
	auction: Auction
}

const CurrentNft: FC<CurrentNftProps> = ({
	auth,
	nft,
	nfts,
	auction
}) => {
	return (
		<>
			<Head title={nft.name} />
			<Layout auth={auth}>
				<HeaderImageSection image={nft.header_image} />
				<NftSection nft={nft} auction={auction} />
				<DefaultNftList
					trendingNftList={nfts}
					title='More From This Artist'
					buttonName='Go to artist page'
					buttonHref={`/creator/${nft.user?.username}/created`}
				/>
			</Layout>
		</>
	)
}

export default CurrentNft
