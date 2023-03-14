import {Head} from "@inertiajs/react";
import {NftProps} from "./nft.interface";
import Layout from "@/Components/Layout";
import TrendingNftList from "@/Components/discoveredNfts/TrendingNftList";
import NftList from "@/Components/nft/NftList";

const Index = (props: NftProps) => {
    return (
        <>
            <Head title="Nft"/>
            <Layout auth={props.auth}>
                <NftList data={props}/>
            </Layout>
        </>
    );
};

export default Index;
