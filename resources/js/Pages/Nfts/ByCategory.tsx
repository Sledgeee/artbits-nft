import { Head } from "@inertiajs/react";
import { NftProps } from "./nft.interface";
import NftListWithPagination from "@/Components/nft/NftListWithPagination";
import Layout from "@/Components/Layout";

const Index = (props: NftProps) => {
    return (
        <>
            <Head title="Nft by category" />
            <Layout auth={props.auth}>
                <NftListWithPagination data={props}/>
            </Layout>
        </>
    );
};

export default Index;
