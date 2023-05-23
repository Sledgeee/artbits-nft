import { FC } from 'react'
import { Collection } from '@/interfaces/collection.interface'
import { Head } from '@inertiajs/react'
import Layout from '@/Components/Layout'
import { BaseProps } from '@/interfaces/base.interface'
import CollectionListWithPagination from '@/Components/collections/CollectionListWithPagination'
import { PaginationResponse } from '@/interfaces/nft.interface'

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
