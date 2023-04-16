import RankingsTable from '@/Components/creators/rankings/RankingsTable'
import { RankingCreators } from '@/interfaces/creator.interface'
import { Text } from '@nextui-org/react'
import { FC } from 'react'
import { fadeIn } from '@/utils/motion'
import { motion } from 'framer-motion'

interface RankingsContentProps {
	topCreators: RankingCreators[]
}

const RankingsContent: FC<RankingsContentProps> = ({
	topCreators
}) => {
	return (
		<>
			<div className='container mx-auto'>
				<motion.div
					variants={fadeIn('up', 'spring', 0.5, 1)}
					className='mx-2'
				>
					<Text h2 className='flex'>
						Top creators
					</Text>
					<Text h4>
						Check out Top Rated Creators on the NFT
						Marketplace
					</Text>
					<RankingsTable topCreators={topCreators} />
				</motion.div>
			</div>
		</>
	)
}

export default RankingsContent
