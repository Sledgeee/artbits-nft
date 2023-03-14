import {FC} from 'react'
import {Card, Row, Text} from "@nextui-org/react";
import {Category} from "@/types/category.type";
import {router} from "@inertiajs/react";

interface ICategoryCard {
    category: Category
}

const CategoryCard: FC<ICategoryCard> = ({category}) => {
    const navigate = (id: number) => router.replace(`category/${id}`)

    return <Card
        isPressable
        variant="shadow"
        onClick={() => navigate(category.id)}
        css={{borderWidth: '0px'}}
    >
        <Card.Body css={{p: 0}}>
            <Card.Image
                src={category.image}
                objectFit="cover"
                width="100%"
                height="100%"
                alt={category.name}
            />
        </Card.Body>
        <Card.Footer css={{justifyItems: "flex-start"}}>
            <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{category.name}</Text>
            </Row>
        </Card.Footer>
    </Card>
}

export default CategoryCard
