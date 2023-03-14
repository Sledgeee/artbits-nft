import {FC} from 'react'
import {Head} from "@inertiajs/react";
import Layout from "@/Components/Layout";
import HeaderImage from "@/Components/nft/nft_page/HeaderImage";
import DefaultNftList from "@/Components/nft/DefaultNftList";
import {Nft} from "@/types/nft.type";
import {BaseProps} from "@/types/base.type";
import CreatorPageCard from "@/Components/creators/creator_page/CreatorPageCard";
import {User} from "@/types/user.type";

interface CreatorProps extends BaseProps {
    user: User
    creatorItems: Nft[]
}

const Index: FC<
    CreatorProps
> = ({
         creatorItems,
         auth,
         user
     }) => {
    return <>
        <Head title={user?.username}/>
        <Layout auth={auth}>
            <HeaderImage image={user.creator.banner_image || ''}/>
            <CreatorPageCard user={user}/>
            <DefaultNftList trendingNftList={creatorItems}/>
        </Layout>
    </>

}

export default Index
