import {Head} from "@inertiajs/react";
import {NftResponse} from "./nft.interface";
import NftListWithPagination from "@/Components/nft/NftListWithPagination";
import Layout from "@/Components/Layout";
import {BaseProps} from "@/types/base.type";
import {FC} from "react";

interface NftPageProps extends BaseProps {
    nfts: NftResponse
}

const ByCategory: FC<
    NftPageProps
> = ({nfts, auth}) => {
    return (
        <>
            <Head title="Marketplace"/>
            <Layout auth={auth}>
                <NftListWithPagination
                    paginationItems={nfts}
                />
            </Layout>
        </>
    );
};

export default ByCategory;
