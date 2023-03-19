import CollectionCard from '@/Components/collections/CollectionCard'
import { Collection } from '@/types/collection.type'
import { Grid, Text } from '@nextui-org/react'
import { FC } from 'react'

interface CollectionListProps {
    collections: Collection[]
    title?: string,
    description?: string,
}

const CollectionList: FC<CollectionListProps> = ({
                                                     collections,
                                                     title,
                                                     description
                                                 }) => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='mx-2'>
                    {title && <Text h2>{title}</Text>}
                    {description && <Text h4>{description}</Text>}
                </div>
                <Grid.Container gap={2}>
                    {collections.map((value, index) => (
                        <Grid xs={12} sm={4} key={index}>
                            <CollectionCard collection={value} />
                        </Grid>
                    ))}
                </Grid.Container>
            </div>
        </>
    )
}

export default CollectionList
