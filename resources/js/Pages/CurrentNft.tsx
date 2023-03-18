import Layout from '@/Components/Layout'
import DefaultNftList from '@/Components/nft/DefaultNftList'
import HeaderImage from '@/Components/nft/nftPage/HeaderImage'
import NftPageCard from '@/Components/nft/nftPage/NftPageCard'
import { BaseProps } from '@/types/base.type'
import { Nft } from '@/types/nft.type'
import { Head } from '@inertiajs/react'
import { FC } from 'react'

interface CurrentNftProps extends BaseProps {
	nft: Nft
	nfts: Nft[]
}

const CurrentNft: FC<CurrentNftProps> = ({ auth, nft, nfts }) => {
	return (
		<>
			<Head title={nft.name} />
			<Layout auth={auth}>
				<HeaderImage image={nft.header_image} />
				<NftPageCard nft={nft} />
				<DefaultNftList
					trendingNftList={nfts}
					title='More From This Artist'
					buttonName='Go to artist page'
					buttonHref={'/creator/' + nft.user?.username}
				/>
			</Layout>
		</>
	)
}

export default CurrentNft
