import CreatorPageCard from '@/Components/creators/creatorPage/CreatorPageCard'
import Layout from '@/Components/Layout'
import DefaultNftList from '@/Components/nft/DefaultNftList'
import HeaderImage from '@/Components/nft/nftPage/HeaderImage'
import { BaseProps } from '@/types/base.type'
import { Nft } from '@/types/nft.type'
import { User } from '@/types/user.type'
import { Head } from '@inertiajs/react'
import { FC } from 'react'
import { Collection } from '@/types/collection.type'
import CollectionList from '@/Components/collections/CollectionList'

interface CreatorProps extends BaseProps {
	user: User
	creatorItems: Nft[]
	creatorCollections: Collection[]
}

const Index: FC<CreatorProps> = ({
	creatorItems,
	creatorCollections,
	auth,
	user
}) => {
	return (
		<>
			<Head title={user?.username} />
			<Layout auth={auth}>
				<HeaderImage image={user.banner_image || ''} />
				<CreatorPageCard user={auth.user} creator={user} />
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
