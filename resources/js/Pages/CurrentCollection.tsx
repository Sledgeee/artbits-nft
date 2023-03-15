import {FC} from 'react'
import {Head} from "@inertiajs/react";
import Layout from "@/Components/Layout";
import NftListWithPagination from "@/Components/nft/NftListWithPagination";
import {NftResponse} from "@/Pages/Nfts/nft.interface";
import {Collection} from "@/types/collection.type";
import {BaseProps} from "@/types/base.type";


interface CurrentCollectionProps extends BaseProps {
    collection: Collection
    collectionItems: NftResponse
}

const CurrentCollection: FC<
    CurrentCollectionProps
> = ({
         collectionItems,
         collection,
         auth
     }) => {


    return <>
        <Head title={`${collection.name} collection`}/>
        <Layout auth={auth}>
            <NftListWithPagination
                title={collection.name + ' collection'}
                paginationItems={collectionItems}
                buttonName='Go to artist page'
                buttonHref={'/creator/' + collection.creator.user?.username}
            />
        </Layout>
    </>
}

export default CurrentCollection
