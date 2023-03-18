import { UserWithCreator } from '@/types/creator.type'
import { router } from '@inertiajs/react'
import { Badge, Card, User } from '@nextui-org/react'
import { FC } from 'react'

interface ICreatorCardProps {
	creator: UserWithCreator
	id: number
}

const CreatorCard: FC<ICreatorCardProps> = ({ creator, id }) => {
	return (
		<Card
			isHoverable
			isPressable
			variant='shadow'
			css={{ borderWidth: '0px' }}
			onPress={() => router.replace(`/creator/${creator.username}`)}
		>
			<Card.Body>
				<Badge content={id + 1} enableShadow variant='bordered'>
					<User
						size='xl'
						src={creator.avatar_image || '/images/icons/1.png'}
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
