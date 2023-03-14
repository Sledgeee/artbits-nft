import {FC, useState} from 'react'
import {Avatar, Button, Card, Grid, Image, Row, Spacer, Text} from "@nextui-org/react";
import Box from "@/Components/Box";
import {User} from "@/types/user.type";
import {BsClipboard, BsDiscord, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs";

interface CreatorPageCardProps {
    user: User
}

const CreatorButtons: FC<
    CreatorPageCardProps
> = ({user}) => {
    const wallet = user?.wallet?.address || ''
    const shortText = wallet.substring(0, 8) + "..." +
        wallet.substring(wallet.length - 5)
    const [buttonText, setButtonText] = useState<string>(shortText)
    const copyToClipboard = () => {
        navigator.clipboard.writeText(wallet)
        setButtonText('Copied to clipboard!')
        setTimeout(() => setButtonText(shortText), 3000)
    }
    return <Box className='flex z-0 mx-auto md:mx-0'>
        <Button> + Follow </Button>
        <Spacer y={0.5}/>
        <Button
            bordered
            onPress={copyToClipboard}
            color='gradient'
        >
            <BsClipboard className='mr-2'/>
            {buttonText}
        </Button>
    </Box>
}


const CreatorPageCard: FC<
    CreatorPageCardProps
> = ({
         user
     }) => {
    return <div className='container mx-auto'>
        <Grid.Container gap={2}>
            <Grid xs={12} sm={7}>
                <Box className='mx-auto md:mx-0'>
                    <Box>
                        <Spacer y={-2}/>
                        <Avatar
                            size='xl'
                            src={user.avatar_image}
                            alt={user.username + ' image'}
                        />
                    </Box>
                    <Text h1>{user.username}</Text>
                    <Spacer y={1}/>
                    <Box className='flex justify-between mr-6'>
                        <Box>
                            <Text h4 b>240k+</Text>
                            <Text h6>Volume</Text>
                        </Box>
                        <Box>
                            <Text h4 b>100k+</Text>
                            <Text h6>Nfts Sold</Text>
                        </Box>
                        <Box>
                            <Text h4 b>340k+</Text>
                            <Text h6>Followers</Text>
                        </Box>
                    </Box>
                    <>
                        <Text
                            span
                            color='#787f85'
                        >Bio
                        </Text>
                        <Text
                            size="$md"
                            css={{maxW: '400px'}}
                        >
                            {user.creator.bio}
                        </Text>
                    </>
                    <Spacer y={0.5}/>
                    <>
                        <Text small>Join our community</Text>
                        <Row className="gap-x-2 text-gray-500">
                            <BsDiscord/>
                            <BsYoutube/>
                            <BsInstagram/>
                            <BsTwitter/>
                        </Row>
                    </>
                    <Spacer y={0.7}/>
                </Box>
            </Grid>
            <Grid
                xs={12}
                sm={5}
                className='flex-end'
            >
                <CreatorButtons user={user}/>
            </Grid>
        </Grid.Container>
    </div>


}

export default CreatorPageCard
