import {FC, useEffect, useState} from 'react'
import {Nft} from "@/types/nft.type"
import {Button, Card, Grid, Spacer, Text} from "@nextui-org/react"
import Box from "@/Components/Box"
import confetti from 'canvas-confetti'

interface NftPageCardProps {
    nft: Nft
}

const wallet = '0x7a1347561b78425bdce62a56ceda9006856d6bd5'
const AuctionCard: FC = () => {
    const [date, setDate] = useState(new Date())
    const auctionDate = new Date(2024)

    useEffect(() => {
        const interval = setInterval(() =>
                setDate(new Date(+auctionDate - +new Date())),
            1000)
        return () => clearInterval(interval)
    }, []);

    const handleConfetti = () => confetti({
        particleCount: 200,
        startVelocity: 30,
        spread: 360,
        origin: {
            x: Math.random(),
            y: Math.random() - 0.2
        }
    });

    return <Card
        css={{
            mw: "340px",
            height: '50%',
            borderWidth: '0px'
        }}>
        <Card.Body>
            <Text>Auction ends in:</Text>
            <Spacer y={1}/>
            <Box className='flex justify-between mx-3'>
                <Box>
                    <Text h3 b>{date.getHours()}</Text>
                    <Text h6>Hours</Text>
                </Box>
                <Box>
                    <Text h3 b>:</Text>
                </Box>
                <Box>
                    <Text h3 b>{date.getMinutes()}</Text>
                    <Text h6>Minutes</Text>
                </Box>
                <Box>
                    <Text h3 b>:</Text>
                </Box>
                <Box>
                    <Text h3 b>{date.getSeconds()}</Text>
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

}

const CardTag: FC<
    { text: string }
> = ({text}) => {

    return <Card
        isPressable
        css={{borderWidth: '0px'}}
    >
        <Card.Header>
            <Text b>
                {text}
            </Text>
        </Card.Header>
    </Card>

}


const NftPageCard: FC<
    NftPageCardProps
> = ({nft}) => {
    return <div className='container mx-auto'>
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={7}>
                <Box>
                    <>
                        <Text h1>{nft?.name}</Text>
                        <Text
                            h5
                            color='#787f85'
                        >Minted on {new Date(nft.created_at).toDateString()}
                        </Text>
                    </>
                    <Spacer y={0.5}/>
                    <>
                        <Text
                            span
                            color='#787f85'
                        >Description
                        </Text>
                        <Text
                            size="$md"
                            css={{maxW: '400px'}}
                        >
                            {nft.description}
                        </Text>
                    </>
                    <Spacer y={0.5}/>
                    <>
                        <Text
                            span
                            color='#787f85'
                        >Details
                        </Text>
                        <Text size="$md">
                            <a
                                target='_blank'
                                href={'https://etherscan.io/address/' + wallet}
                            >
                                View on Etherscan
                            </a>
                        </Text>
                    </>
                    <Spacer y={0.7}/>
                    {nft.nft_item_tags && <>
                        <Text
                            span
                            color='#787f85'
                        >Tags
                        </Text>
                        {nft.nft_item_tags?.map(value =>
                            <>
                                <Spacer y={1}/>
                                <CardTag
                                    key={value.name}
                                    text={value.name}
                                />
                            </>
                        )}
                    </>
                    }


                </Box>
            </Grid>
            <Grid
                xs={12}
                sm={5}
                className='flex-end'
            >
                <AuctionCard/>
            </Grid>
        </Grid.Container>
    </div>


}

export default NftPageCard
