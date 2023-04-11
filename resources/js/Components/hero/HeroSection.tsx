import HeroCard from '@/Components/hero/HeroCard'
import { router } from '@inertiajs/react'
import { Button, Grid, Text } from '@nextui-org/react'
import { FC } from 'react'
import { Nft } from '@/types/nft.type'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'

const HeroSection: FC<{ nft: Nft }> = ({ nft }) => {
	return (
		<div className='container mx-auto'>
			<Grid.Container gap={2} justify='center'>
				<Grid xs={12} sm={5}>
					<motion.div variants={textVariant(0)}>
						<Text h1>
							Discover digital art & Collect NFTs
						</Text>
						<Text h4>
							NFT marketplace. Collect, buy and sell art
							from more than 20k NFT artists.
						</Text>
						<Button
							shadow
							color='gradient'
							className='z-0'
							onPress={() => router.replace('/nft')}
						>
							Get Started
						</Button>
						<div className='mt-6 flex justify-between mr-4'>
							<div>
								<Text h4 b>
									240k+
								</Text>
								<Text h6>Total Sale</Text>
							</div>
							<div>
								<Text h4 b>
									100k+
								</Text>
								<Text h6>Auctions</Text>
							</div>
							<div>
								<Text h4 b>
									340k+
								</Text>
								<Text h6>Creators</Text>
							</div>
						</div>
					</motion.div>
				</Grid>
				<Grid xs={12} sm={7}>
					<HeroCard nft={nft} />
				</Grid>
			</Grid.Container>
		</div>
	)
}

export default HeroSection
