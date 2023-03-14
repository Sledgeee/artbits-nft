import {FC} from 'react'
import {Button, Grid, Text} from "@nextui-org/react";
import Box from "@/Components/Box";
import HeroCard from "@/Components/hero/HeroCard";

const HeroSection: FC = () => {

    return <div className='container mx-auto'>
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={5}>
                <Box>
                    <Text h1>Discover digital art & Collect NFTs</Text>
                    <Text h4>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than
                        20k NFT artists.</Text>
                    <Button
                        shadow
                        color="gradient"
                        className='z-0'
                    >Get Started</Button>
                    <Box className='mt-6 flex justify-between mr-4'>
                        <Box>
                            <Text h4 b>240k+</Text>
                            <Text h6>Total Sale</Text>
                        </Box>
                        <Box>
                            <Text h4 b>100k+</Text>
                            <Text h6>Auctions</Text>
                        </Box>
                        <Box>
                            <Text h4 b>340k+</Text>
                            <Text h6>Creators</Text>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={12} sm={7}> <HeroCard/> </Grid>
        </Grid.Container>
    </div>


}

export default HeroSection
