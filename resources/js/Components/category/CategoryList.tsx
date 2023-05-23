import { Category } from '@/interfaces/category.interface'
import { Grid, Text } from '@nextui-org/react'
import { FC } from 'react'
import CategoryCard from './CategoryCard'
import { fadeIn } from '@/utils/motion'
import { motion } from 'framer-motion'

interface ICategoryListProps {
	categories: Category[]
}

const CategoryList: FC<ICategoryListProps> = ({
	categories
}) => {
	return (
		<div className='container mx-auto'>
			<motion.div
				variants={fadeIn('up', 'spring', 0.5, 1)}
				className='mx-2'
			>
				<Text h2>Browse Categories</Text>
			</motion.div>
			<Grid.Container gap={2} justify='center'>
				{categories.map(value => (
					<CategoryCard key={value.id} category={value} />
				))}
			</Grid.Container>
		</div>
	)
}

export default CategoryList
