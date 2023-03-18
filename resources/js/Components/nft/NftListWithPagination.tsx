import NftCard from '@/Components/nft/NftCard'
import { NftResponse } from '@/Pages/Nfts/nft.interface'
import { router } from '@inertiajs/react'
import { Button, Grid, Pagination, Spacer, Text } from '@nextui-org/react'
import { FC } from 'react'
import { BsEye } from 'react-icons/bs'

interface NftListProps {
	paginationItems: NftResponse
	title?: string
	buttonHref?: string
	buttonName?: string
}

const NftListWithPagination: FC<NftListProps> = ({
	paginationItems,
	title,
	buttonHref,
	buttonName
}) => {
	const navigate = (page: number) =>
		router.replace(`${location.pathname}?page=${page}`)

	return (
		<div className='container mx-auto'>
			<Spacer y={1} />
			<div className='mx-2'>
				<Text h2 className='flex'>
					{title || 'Discover More NFTs'}
					{buttonHref && buttonName && (
						<Button
							className='absolute ml-auto mt-2 z-0'
							bordered
							color='secondary'
							auto
							onPress={() => router.replace(buttonHref)}
						>
							<BsEye className='mr-2' />
							{buttonName}
						</Button>
					)}
				</Text>
			</div>
			<Grid.Container gap={2}>
				{paginationItems.data.map((item, index) => (
					<Grid xs={12} sm={3} md={3} key={index}>
						<NftCard item={item} />
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
					page={paginationItems.current_page}
					total={paginationItems.last_page}
				/>
			</Grid.Container>
			<Spacer y={0.5} />
		</div>
	)
}
export default NftListWithPagination
