import {FC} from 'react'
import {Card, Row, Text} from "@nextui-org/react";
import {ICategory} from "@/types/category.type";

interface ICategoryCard {
    category: ICategory
}

const CategoryCard: FC<ICategoryCard> = ({category}) => {

    return <Card isPressable variant="shadow" css={{borderWidth:'0px'}}>
        <Card.Body css={{p: 0}}>
            <Card.Image
                src={category.image}
                objectFit="cover"
                width="100%"
                height={180}
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
