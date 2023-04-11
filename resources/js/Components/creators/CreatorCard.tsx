import { UserWithCreator } from '@/types/creator.type'
import { router } from '@inertiajs/react'
import { Badge, Card, Grid, User } from '@nextui-org/react'
import { FC } from 'react'
import { fadeIn, tiltOptions } from '@/utils/motion'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

interface ICreatorCardProps {
	creator: UserWithCreator
	id: number
}

const CreatorCard: FC<ICreatorCardProps> = ({
	creator,
	id
}) => {
	return (
		<Grid xs={12} sm={4}>
			<motion.div
				variants={fadeIn('up', 'spring', id * 0.15, 0.75)}
				className='w-full'
			>
				<Tilt options={tiltOptions()}>
					<Card
						isHoverable
						isPressable
						variant='shadow'
						css={{ borderWidth: '0px' }}
						onPress={() =>
							router.replace(
								`/creator/${creator.username}/created`
							)
						}
					>
						<Card.Body className='transition duration-500'>
							<Badge
								content={id + 1}
								enableShadow
								variant='bordered'
							>
								<User
									size='xl'
									src={
										creator.avatar_image ||
										'/images/icons/1.png'
									}
									name={creator.username || 'username'}
									description={`Total sales: ${
										creator.transactions_from_sum_value || 0
									} ETH`}
								/>
							</Badge>
						</Card.Body>
					</Card>
				</Tilt>
			</motion.div>
		</Grid>
	)
}

export default CreatorCard
