import { Category } from '@/types/category.type'
import { Grid, Text } from '@nextui-org/react'
import { FC } from 'react'
import CategoryCard from './CategoryCard'

interface ICategoryListProps {
	categories: Category[]
}

const CategoryList: FC<ICategoryListProps> = ({
	categories
}) => {
	return (
		<div className='container mx-auto'>
			<div className='mx-2'>
				<Text h2>Browse Categories</Text>
			</div>
			<Grid.Container gap={2} justify='center'>
				{categories.map(value => (
					<Grid key={value.id} xs={5} sm={3}>
						<CategoryCard category={value} />
					</Grid>
				))}
			</Grid.Container>
		</div>
	)
}

export default CategoryList
