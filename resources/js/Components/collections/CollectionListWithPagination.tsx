import { FC } from 'react'
import {
	Grid,
	Pagination,
	Spacer,
	Text
} from '@nextui-org/react'
import CollectionCard from '@/Components/collections/CollectionCard'
import { PaginationResponse } from '@/interfaces/nft.interface'
import { Collection } from '@/interfaces/collection.interface'
import { router } from '@inertiajs/react'

interface CollectionListWithPaginationProps {
	collections: PaginationResponse<Collection>
}

const CollectionListWithPagination: FC<
	CollectionListWithPaginationProps
> = ({ collections }) => {
	const navigate = (page: number) =>
		router.replace(`${location.pathname}?page=${page}`)

	return (
		<>
			<div className='container mx-auto'>
				<div className='mx-2'>
					<Text h2>All Collection</Text>
				</div>
				<Grid.Container gap={2}>
					{collections.data.map((value, index) => (
						<Grid xs={12} sm={4} key={index}>
							<CollectionCard collection={value} />
						</Grid>
					))}
				</Grid.Container>
				<Spacer y={0.7} />
				<Grid.Container justify='center'>
					<Pagination
						shadow
						color='gradient'
						initialPage={1}
						onChange={navigate}
						page={collections.current_page}
						total={collections.last_page}
					/>
				</Grid.Container>
				<Spacer y={0.5} />
			</div>
		</>
	)
}

export default CollectionListWithPagination
