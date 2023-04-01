import { UserWithCreator } from '@/types/creator.type'
import { router } from '@inertiajs/react'
import { Badge, Card, User } from '@nextui-org/react'
import { FC } from 'react'
import { useInView } from 'react-intersection-observer'

interface ICreatorCardProps {
	creator: UserWithCreator
	id: number
}

const CreatorCard: FC<ICreatorCardProps> = ({
	creator,
	id
}) => {
	const [ref, inView] = useInView()

	return (
		<Card
			ref={ref}
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
			<Card.Body
				className={`transition duration-500 motion-reduce:transition-none ${
					inView
						? 'opacity-100 blur-none translate-y-0'
						: 'opacity-70 blur-sm translate-y-5'
				} motion-reduce:hover:transform-none`}
			>
				<Badge
					content={id + 1}
					enableShadow
					variant='bordered'
				>
					<User
						size='xl'
						src={
							creator.avatar_image || '/images/icons/1.png'
						}
						name={creator.username || 'username'}
						description={`Total sales: ${
							creator.transactions_from_sum_value || 0
						} ETH`}
					/>
				</Badge>
			</Card.Body>
		</Card>
	)
}

export default CreatorCard
