import { Card, User } from '@nextui-org/react'
import { FC } from 'react'
import { Nft } from '@/interfaces/nft.interface'
import { router } from '@inertiajs/react'
import { Tilt } from 'react-tilt'
import { fadeIn, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'

const HeroCard: FC<{ nft: Nft }> = ({ nft }) => {
	const navigate = () =>
		router.replace(
			`/creator/${nft?.user?.username}/created`
		)

	return (
		<motion.div variants={fadeIn('up', 'spring', 0.15, 0.75)}
        className='w-full'>
			<Tilt options={{ max: 45, scale: 1, speed: 450 }}>
				<Card
					isPressable
					onPress={navigate}
					css={{
						w: '100%',
						h: '400px',
						borderWidth: '0px'
					}}
				>
					<Card.Body css={{ p: 0 }}>
						<Card.Image
							src={nft.image}
							objectFit='cover'
							width='100%'
							height='100%'
							alt={nft?.user?.username + ' image'}
						/>
					</Card.Body>
					<Card.Footer
						isBlurred
						css={{
							position: 'absolute',
							bgBlur: '#0f111466',
							borderTop:
								'$borderWeights$light solid $gray800',
							bottom: 0,
							zIndex: 1
						}}
					>
						<User
							src={nft?.user?.avatar_image}
							name={nft?.user?.username}
						/>
					</Card.Footer>
				</Card>
			</Tilt>
		</motion.div>
	)
}

export default HeroCard
