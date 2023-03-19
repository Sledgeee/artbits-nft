import Box from '@/Components/Box'
import { Nft } from '@/types/nft.type'
import { router } from '@inertiajs/react'
import { Card, Col, Grid, Row, Text, User } from '@nextui-org/react'
import { FC } from 'react'
import ScaleIn from '@/Components/ScaleIn'

interface NftCardProps {
    item: Nft
}

const NftCard: FC<NftCardProps> = ({ item }) => {
    const user = item?.user
    const navigate = () =>
        router.replace(`/nft/${user?.username}/${item?.name}`)

    return (
        <ScaleIn>
            <Card
                isPressable
                css={{ w: '100%', h: '400px', borderWidth: '0px' }}
                onPress={navigate}
            >
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={item?.image || ''}
                        objectFit='cover'
                        width='100%'
                        height='100%'
                        alt={item?.name}
                    />
                </Card.Body>
                <Card.Footer className='my-2'>
                    <Row>
                        <Col>
                            <Grid.Container>
                                <Grid xs={12}>
                                    <Text h5 size='' className='pl-3'>
                                        {item?.name}
                                    </Text>
                                </Grid>
                                <Grid xs={12}>
                                    <User
                                        size='xs'
                                        name={''}
                                        description={user?.username}
                                        src={user?.avatar_image}
                                    />
                                </Grid>
                            </Grid.Container>
                        </Col>
                        <Row justify='flex-end'>
                            <Box className='mr-2 mt-3 text-right'>
                                <Text h6 color='#858584'>
                                    Price
                                </Text>
                                <Text h5>{item?.price} ETH</Text>
                            </Box>
                        </Row>
                    </Row>
                </Card.Footer>
            </Card>
        </ScaleIn>
    )
}

export default NftCard
