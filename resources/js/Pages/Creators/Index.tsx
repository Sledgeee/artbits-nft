import CollectionList from '@/Components/collections/CollectionList'
import CreatorSection from '@/Components/creators/creatorPage/CreatorSection'
import Layout from '@/Components/Layout'
import DefaultNftList from '@/Components/nft/DefaultNftList'
import HeaderImageSection from '@/Components/nft/nftPage/HeaderImageSection'
import { BaseProps } from '@/types/base.type'
import { Collection } from '@/types/collection.type'
import { Follower } from '@/types/follower.type'
import { Nft } from '@/types/nft.type'
import { User } from '@/types/user.type'
import { Head } from '@inertiajs/react'
import { FC } from 'react'

interface CreatorProps extends BaseProps {
	creator: User
	creatorItems: Nft[]
	creatorCollections: Collection[]
	followers: Follower[]
}

const Index: FC<CreatorProps> = ({
	creatorItems,
	creatorCollections,
	followers,
	auth,
	creator
}) => {
	return (
		<>
			<Head title={creator?.username} />
			<Layout auth={auth}>
				<HeaderImageSection image={creator.banner_image} />
				<CreatorSection
					followers={followers}
					creator={creator}
				/>
				{location.pathname ===
				`/creator/${creator.username}/collections` ? (
					<CollectionList
						collections={creatorCollections}
					/>
				) : (
					<DefaultNftList trendingNftList={creatorItems} />
				)}
			</Layout>
		</>
	)
}

export default Index
