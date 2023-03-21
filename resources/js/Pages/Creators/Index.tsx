import CollectionList from '@/Components/collections/CollectionList'
import CreatorPageCard from '@/Components/creators/creatorPage/CreatorPageCard'
import Layout from '@/Components/Layout'
import DefaultNftList from '@/Components/nft/DefaultNftList'
import HeaderImage from '@/Components/nft/nftPage/HeaderImage'
import { BaseProps } from '@/types/base.type'
import { Collection } from '@/types/collection.type'
import { Follower } from '@/types/follower.type'
import { Nft } from '@/types/nft.type'
import { User } from '@/types/user.type'
import { Head } from '@inertiajs/react'
import { FC } from 'react'

interface CreatorProps extends BaseProps {
	user: User
	followers: Follower[]
	creatorItems: Nft[]
	creatorCollections: Collection[]
}

const Index: FC<CreatorProps> = ({
	creatorItems,
	creatorCollections,
	followers,
	auth,
	user
}) => {
	return (
		<>
			<Head title={user?.username} />
			<Layout auth={auth}>
				<HeaderImage image={user.banner_image || ''} />
				<CreatorPageCard
					followers={followers}
					creator={user}
				/>
				{location.pathname ===
				`/creator/${user.username}/collections` ? (
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
