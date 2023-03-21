import Box from '@/Components/Box'
import {Nft} from '@/types/nft.type'
import {Button, Card, Grid, Spacer, Text, User} from '@nextui-org/react'
import confetti from 'canvas-confetti'
import {FC, useEffect, useState} from 'react'
import {Auction} from "@/types/auction.type";
import {Link} from "@inertiajs/react";

interface NftPageCardProps {
    nft: Nft,
    auction: Auction
}

const AuctionCard: FC<{ auction: Auction }> = ({auction}) => {
    const [date, setDate] = useState(new Date())
    const auctionDate = new Date(auction?.end_at || new Date().toDateString())
    const hasEnded = new Date(auction?.end_at) <= new Date()
    if (hasEnded)
        return <></>
    useEffect(() => {
        const interval = setInterval(
            () =>
                setDate(new Date(+auctionDate - +new Date())),
            1000
        )
        return () => clearInterval(interval)
    }, [])

    const handleConfetti = () =>
        confetti({
            particleCount: 200,
            startVelocity: 30,
            spread: 360,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        })

    return (
        <div className='ml-auto w-full sm:max-w-min'>
            <Card
                css={{
                    minWidth: '340px',
                    borderWidth: '0px'
                }}
            >
                <Card.Body>
                    <Text>Auction ends in: {auctionDate.toString()}</Text>
                    <Spacer y={1}/>
                    <Box className='flex justify-between mx-3'>
                        <Box>
                            <Text h3 b>
                                {date.getUTCDate() - 1}
                            </Text>
                            <Text h6>Days</Text>
                        </Box>
                        <Box>
                            <Text h3 b>
                                :
                            </Text>
                        </Box>
                        <Box>
                            <Text h3 b>
                                {date.getUTCHours()}
                            </Text>
                            <Text h6>Hours</Text>
                        </Box>
                        <Box>
                            <Text h3 b>
                                :
                            </Text>
                        </Box>
                        <Box>
                            <Text h3 b>
                                {date.getUTCMinutes()}
                            </Text>
                            <Text h6>Minutes</Text>
                        </Box>
                        <Box>
                            <Text h3 b>
                                :
                            </Text>
                        </Box>
                        <Box>
                            <Text h3 b>
                                {date.getUTCSeconds()}
                            </Text>
                            <Text h6>Seconds</Text>
                        </Box>
                    </Box>
                    <Spacer y={0.5}/>
                    <Button
                        onPress={handleConfetti}
                        shadow
                        color='gradient'
                    >
                        Place Bid
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

const CardTag: FC<{ text: string }> = ({text}) => {
    return (
        <Card isPressable css={{borderWidth: '0px'}}>
            <Card.Header>
                <Text b>{text}</Text>
            </Card.Header>
        </Card>
    )
}

const NftPageCard: FC<NftPageCardProps> = ({nft, auction}) => {
    return (
        <div className='container mx-auto'>
            <Grid.Container gap={2} justify='center'>
                <Grid xs={12} sm={7}>
                    <Box>
                        <>
                            <Text h1>{nft?.name}</Text>
                            <Text h5 color='#787f85'>
                                Minted on{' '}
                                {new Date(nft.created_at).toDateString()}
                            </Text>
                        </>
                        <Spacer y={0.5}/>
                        <Link href={`/creator/${nft.user.username}/created`}>
                            <Text h5 color='#787f85' className='flex items-center'>
                                Minted by
                                <User
                                    src={nft.user.avatar_image}
                                    name={nft.user.username}
                                />
                            </Text>
                        </Link>
                        <Spacer y={0.5}/>
                        <>
                            <Text span color='#787f85'>
                                Description
                            </Text>
                            <Text size='$md' css={{maxW: '400px'}}>
                                {nft.description}
                            </Text>
                        </>
                        <Spacer y={0.5}/>
                        <>
                            <Text span color='#787f85'>
                                Details
                            </Text>
                            <Text size='$md'>
                                <a
                                    target='_blank'
                                    href={
                                        'https://etherscan.io/address/' +
                                        nft.name
                                    }
                                >
                                    View on Etherscan
                                </a>
                            </Text>
                        </>
                        <Spacer y={0.7}/>
                        {nft.nft_item_tags && (
                            <>
                                <Text span color='#787f85'>
                                    Tags
                                </Text>
                                <Grid.Container gap={1}>
                                    {nft.nft_item_tags?.map(value => (
                                        <Grid xs={6} lg={2}>
                                            <CardTag
                                                key={value.name}
                                                text={value.name}
                                            />
                                        </Grid>
                                    ))}
                                </Grid.Container>
                            </>
                        )}
                    </Box>
                </Grid>
                <Grid sm={5}>
                    {auction?.end_at &&
                        <AuctionCard auction={auction}/>
                    }
                </Grid>

            </Grid.Container>
        </div>
    )
}

export default NftPageCard
