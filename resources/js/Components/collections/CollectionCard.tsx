import {FC} from 'react'
import {ICollection} from "@/types/collection.type";
import {Button, Card, Grid, Spacer, User} from "@nextui-org/react";
import Box from "@/Components/Box";

interface ICollectionCardProps {
    collection: ICollection
}

const CollectionCard: FC<
    ICollectionCardProps
> = ({collection}) => {
    return <Card css={{borderWidth:'0px'}} isPressable>
        <Box className='p-1'>
            <Card css={{borderWidth:'0px'}}>
                <Card.Image
                    src={collection.nft_items_limited[0].nft_item.image}
                    objectFit="cover"
                    width="100%"
                    height={250}
                    alt={collection.nft_items_limited[0].nft_item.name}
                />
            </Card>
            <Spacer y={0.2}/>
            <Box>
                <Grid.Container
                    gap={1}
                    justify="flex-start"
                >
                    {collection.nft_items_limited.map((value, index) =>
                        <Grid xs key={index}>
                            <Card css={{borderWidth:'0px'}}>
                                <Card.Image
                                    src={value.nft_item.image}
                                    objectFit="cover"
                                    width="100%"
                                    height="100%"
                                    alt={value.nft_item.name}
                                />
                            </Card>
                        </Grid>
                    )}
                </Grid.Container>
            </Box>
            <Spacer y={0.2}/>
            <User
                name={collection.name}
                src={collection.creator.user?.avatar_image || '/images/icons/1.png'}
                description={collection.creator.user?.username}
            />
        </Box>
    </Card>
}

export default CollectionCard
