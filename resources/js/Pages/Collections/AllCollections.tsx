import { FC } from 'react'
import { Collection } from '@/types/collection.type'
import { Head } from '@inertiajs/react'
import Layout from '@/Components/Layout'
import { BaseProps } from '@/types/base.type'
import CollectionListWithPagination from '@/Components/collections/CollectionListWithPagination'
import { PaginationResponse } from '@/Pages/Nfts/nft.interface'

interface AllCollectionsProps extends BaseProps {
	collections: PaginationResponse<Collection>
}

const AllCollections: FC<AllCollectionsProps> = ({
	collections,
	auth
}) => {
	return (
		<>
			<Head title='All collections' />
			<Layout auth={auth}>
				<CollectionListWithPagination
					collections={collections}
				/>
			</Layout>
		</>
	)
}

export default AllCollections
