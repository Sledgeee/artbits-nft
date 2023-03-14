import {FC} from 'react'
import {Grid, Text} from "@nextui-org/react";
import {ICollection} from "@/types/collection.type";
import CollectionCard from "@/Components/collections/CollectionCard";

interface CollectionListProps {
    collections: ICollection[]
}

const CollectionList: FC<
    CollectionListProps
> = ({collections}) => {

    return <>
        <div className='container mx-auto'>
            <div className='mx-2'>
                <Text h2>Trending Collection</Text>
                <Text h4>Checkout our weekly updated trending collection.</Text>
            </div>
            <Grid.Container gap={2}>
                {collections.map((value, index) =>
                    <Grid xs={12} sm={4} key={index}>
                        <CollectionCard collection={value}/>
                    </Grid>
                )}
            </Grid.Container>
        </div>
    </>
}

export default CollectionList
