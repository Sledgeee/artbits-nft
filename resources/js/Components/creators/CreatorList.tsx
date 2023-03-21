import CreatorCard from '@/Components/creators/CreatorCard'
import { UserWithCreator } from '@/types/creator.type'
import { router } from '@inertiajs/react'
import { Button, Grid, Text } from '@nextui-org/react'
import { FC } from 'react'
import { GoRocket } from 'react-icons/go'

interface ICreatorListProps {
	creators: UserWithCreator[]
}

const CreatorList: FC<ICreatorListProps> = ({
	creators
}) => {
	return (
		<>
			<div className='container mx-auto'>
				<div className='mx-2'>
					<Text h2 className='flex'>
						Top creators
						<Button
							className='absolute ml-auto mt-2 z-0'
							bordered
							color='secondary'
							auto
							onPress={() => router.replace('/rankings')}
						>
							<GoRocket className='mr-2' />
							View Rankings
						</Button>
					</Text>
					<Text h4>
						Checkout Top Rated Creators on the NFT
						Marketplace
					</Text>
				</div>
				<Grid.Container gap={2}>
					{creators.map((value, index) => (
						<Grid xs={12} sm={4} key={index}>
							<CreatorCard creator={value} id={index} />
						</Grid>
					))}
				</Grid.Container>
			</div>
		</>
	)
}

export default CreatorList
