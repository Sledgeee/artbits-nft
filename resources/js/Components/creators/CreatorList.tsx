import CreatorCard from '@/Components/creators/CreatorCard'
import { UserWithCreator } from '@/types/creator.type'
import { router } from '@inertiajs/react'
import { Button, Grid, Text } from '@nextui-org/react'
import { FC } from 'react'
import { GoRocket } from 'react-icons/go'
import { textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'

interface ICreatorListProps {
	creators: UserWithCreator[]
}

const CreatorList: FC<ICreatorListProps> = ({
	creators
}) => {
	return (
		<>
			<div className='container mx-auto'>
				<motion.div
					variants={textVariant(0)}
					className='mx-2'
				>
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
				</motion.div>
				<Grid.Container gap={2}>
					{creators.map((value, index) => (
						<CreatorCard
							key={index}
							id={index}
							creator={value}
						/>
					))}
				</Grid.Container>
			</div>
		</>
	)
}

export default CreatorList
