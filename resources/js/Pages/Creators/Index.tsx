import CreatorPageCard from "@/Components/creators/creatorPage/CreatorPageCard";
import Layout from "@/Components/Layout";
import DefaultNftList from "@/Components/nft/DefaultNftList";
import HeaderImage from "@/Components/nft/nftPage/HeaderImage";
import { BaseProps } from "@/types/base.type";
import { Nft } from "@/types/nft.type";
import { User } from "@/types/user.type";
import { Head } from "@inertiajs/react";
import { FC } from "react";

interface CreatorProps extends BaseProps {
    user: User;
    creatorItems: Nft[];
}

const Index: FC<CreatorProps> = ({ creatorItems, auth, user }) => {
    return (
        <>
            <Head title={user?.username} />
            <Layout auth={auth}>
                <HeaderImage image={user.creator.banner_image || ""} />
                <CreatorPageCard user={user} />
                <DefaultNftList trendingNftList={creatorItems} />
            </Layout>
        </>
    );
};

export default Index;
