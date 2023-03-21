import {Category} from '@/types/category.type'
import {router} from '@inertiajs/react'
import {Card, Row, Text} from '@nextui-org/react'
import {FC} from 'react'
import {useInView} from "react-intersection-observer";

interface ICategoryCard {
    category: Category
}

const CategoryCard: FC<ICategoryCard> = ({category}) => {
    const [ref, inView] = useInView()

    const navigate = (id: number) =>
        router.replace(`category/${id}`)

    return (
        <Card
            ref={ref}
            isPressable
            isHoverable
            onClick={() => navigate(category.id)}
            css={{borderWidth: '0px'}}
        >
            <Card.Body
                css={{p: 0}}
                className={`transition duration-500 motion-reduce:transition-none ${
                    inView ? "opacity-100 blur-none translate-y-0"
                        : "opacity-70 blur-sm translate-y-5"
                } motion-reduce:hover:transform-none`}>
                <Card.Image
                    src={category.image}
                    objectFit='cover'
                    width='100%'
                    height='100%'
                    alt={category.name}
                />
            </Card.Body>
            <Card.Footer css={{justifyItems: 'flex-start'}}>
                <Row
                    wrap='wrap'
                    justify='space-between'
                    align='center'
                >
                    <Text b>{category.name}</Text>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default CategoryCard
