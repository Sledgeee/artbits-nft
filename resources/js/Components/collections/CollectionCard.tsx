import {Collection} from '@/types/collection.type'
import {router} from '@inertiajs/react'
import {Card, Grid, Spacer, User} from '@nextui-org/react'
import {FC} from 'react'
import {useInView} from "react-intersection-observer";

interface ICollectionCardProps {
    collection: Collection
}

const CollectionCard: FC<ICollectionCardProps> = ({collection}) => {
    const [ref, inView] = useInView()

    return (
        <Card
            ref={ref}
            css={{borderWidth: '0px'}}
            isPressable
            isHoverable
            onPress={() => router.replace(`/collection/${collection.id}`)}
        >
            <div className={`p-1 transition duration-500 motion-reduce:transition-none ${
                inView ? "opacity-100 blur-none translate-y-0"
                    : "opacity-70 blur-sm translate-y-5"
            } motion-reduce:hover:transform-none`}>
                <Card css={{borderWidth: '0px',}}>
                    <Card.Image
                        src={collection.nft_items_limited[0].nft_item.image}
                        objectFit='cover'
                        width='100%'
                        height={250}
                        alt={collection.nft_items_limited[0].nft_item.name}
                    />
                </Card>
                <Spacer y={0.2}/>
                <div>
                    <Grid.Container gap={1} justify='flex-start'>
                        {collection.nft_items_limited.map((value, index) => (
                            <Grid xs key={index}>
                                <Card css={{borderWidth: '0px'}}>
                                    <Card.Image
                                        src={value.nft_item.image}
                                        objectFit='cover'
                                        width='100%'
                                        height='100%'
                                        alt={value.nft_item.name}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid.Container>
                </div>
                <Spacer y={0.2}/>
                <User
                    name={collection.name}
                    src={collection.user?.avatar_image || '/images/icons/1.png'}
                    description={collection.user?.username}
                />
            </div>
        </Card>
    )
}

export default CollectionCard
