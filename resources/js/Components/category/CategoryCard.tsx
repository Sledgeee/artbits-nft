import { Category } from '@/types/category.type'
import { router } from '@inertiajs/react'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { FC } from 'react'
import { fadeIn } from '@/utils/motion'
import { motion } from 'framer-motion'

interface ICategoryCard {
	category: Category
}

const CategoryCard: FC<ICategoryCard> = ({ category }) => {
	const navigate = (pathname: string) =>
		router.replace(`category/${pathname}`)

	return (
		<Grid xs={6} sm={3}>
			<motion.div
				variants={fadeIn(
					'up',
					'spring',
					category.id * 0.15,
					0.75
				)}
				className='w-full'
			>
				<Card
					isPressable
                    isHoverable
					onClick={() => navigate(category.pathname)}
					css={{ borderWidth: '0px', minWidth: '100%' }}
				>
					<Card.Body
						css={{ p: 0 }}
						className='transition duration-500'
					>
						<Card.Image
							src={category.image}
							objectFit='cover'
							width='100%'
							height='100%'
							alt={category.name}
						/>
					</Card.Body>
					<Card.Footer css={{ justifyItems: 'flex-start' }}>
						<Row
							wrap='wrap'
							justify='space-between'
							align='center'
						>
							<Text b>{category.name}</Text>
						</Row>
					</Card.Footer>
				</Card>
			</motion.div>
		</Grid>
	)
}

export default CategoryCard
