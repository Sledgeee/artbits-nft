import {FC} from 'react'
import HeaderImage from "@/Components/nft/nft_page/HeaderImage";
import {Head} from "@inertiajs/react";
import Layout from "@/Components/Layout";
import {BaseProps} from "@/types/base.type";
import {Nft} from "@/types/nft.type";
import NftPageCard from "@/Components/nft/nft_page/NftPageCard";
import DefaultNftList from "@/Components/nft/DefaultNftList";

interface CurrentNftProps extends BaseProps {
    nft: Nft,
    nfts: Nft[]
}

const CurrentNft: FC<
    CurrentNftProps
> = ({
         auth,
         nft,
         nfts
     }) => {
    return <>
        <Head title={nft.name}/>
        <Layout auth={auth}>
            <HeaderImage image={nft.header_image}/>
            <NftPageCard nft={nft}/>
            <DefaultNftList
                trendingNftList={nfts}
                title='More From This Artist'
                buttonName='Go to artist page'
                buttonHref={'/creator/' + nft.creator.user?.username}
            />
        </Layout>
    </>


}

export default CurrentNft
