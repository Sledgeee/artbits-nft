import {Head} from "@inertiajs/react";
import {NftProps} from "./nft.interface";
import Layout from "@/Components/Layout";
import NftListWithPagination from "@/Components/nft/NftListWithPagination";

const Index = (props: NftProps) => {
    return (
        <>
            <Head title="Marketplace"/>
            <Layout auth={props.auth}>
                <NftListWithPagination data={props}/>
            </Layout>
        </>
    );
};

export default Index;
