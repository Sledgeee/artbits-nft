import {FC} from 'react'
import {Grid, Text} from "@nextui-org/react";
import FaqCard from "@/Components/faq/FaqCard";

const FaqSection: FC = () => {
    const faqData = [
        {
            title: 'Setup Your wallet',
            desc: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.',
            img: '/images/faq/1.png',
        },
        {
            title: 'Create Collection',
            desc: 'Upload your work and setup your collection. Add a description, social links and floor price.',
            img: '/images/faq/2.png',
        },
        {
            title: 'Start Earning',
            desc: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
            img: '/images/faq/3.png',
        }
    ]
    return <>
        <div className='container mx-auto'>
            <div className='mx-2'>
                <Text h2>How it works</Text>
                <Text h4>Find out how to get started</Text>
            </div>
            <Grid.Container gap={1} justify="center">
                {faqData.map((value, index) =>
                    <Grid xs={6} md={3} key={index}>
                        <FaqCard data={value}/>
                    </Grid>
                )}
            </Grid.Container>
        </div>
    </>
}

export default FaqSection
