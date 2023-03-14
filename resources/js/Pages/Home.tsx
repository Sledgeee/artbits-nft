import {FC} from "react";
import {Head} from "@inertiajs/react";
import {Layout} from "@/Components/Layout";
import {ICategory} from "@/types/category.type";
import {UserWithCreator} from "@/types/creator.type";
import {ICollection} from "@/types/collection.type";
import {IUserType} from "@/types/user.type";
import {INftType} from "@/types/nft.type";
import HeroSection from "@/Components/hero/HeroSection";
import FaqSection from "@/Components/faq/FaqSection";
import CategoryList from "@/Components/category/CategoryList";
import CollectionList from "@/Components/collections/CollectionList";
import SubsCard from "@/Components/subscription/SubsCard";
import CreatorList from "@/Components/creators/CreatorList";
import TrendingNftList from "@/Components/discoveredNfts/TrendingNftList";

interface IHomePageProps {
    auth: { user: IUserType };
    categories: ICategory[];
    creators: UserWithCreator[];
    collections: ICollection[];
    trendingNftList: INftType[];
}

const Home: FC<
    IHomePageProps
> = ({
         categories,
         auth,
         creators,
         collections,
         trendingNftList,
     }) => {
    return (
        <>
            <Head title="Home"/>

            <Layout auth={auth}>
                <HeroSection/>
                <CategoryList categories={categories}/>
                <CollectionList collections={collections}/>
                <TrendingNftList trendingNftList={trendingNftList}/>
                <CreatorList creators={creators}/>
                <FaqSection/>
                <SubsCard/>
            </Layout>
        </>
    );
};
export default Home;
