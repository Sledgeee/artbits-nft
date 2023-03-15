import {FC} from "react";
import {Head} from "@inertiajs/react";
import {Layout} from "@/Components/Layout";
import {Category} from "@/types/category.type";
import {UserWithCreator} from "@/types/creator.type";
import {Collection} from "@/types/collection.type";
import {Nft, NftItemsLimited} from "@/types/nft.type";
import HeroSection from "@/Components/hero/HeroSection";
import FaqSection from "@/Components/faq/FaqSection";
import CategoryList from "@/Components/category/CategoryList";
import CollectionList from "@/Components/collections/CollectionList";
import SubsCard from "@/Components/subscription/SubsCard";
import CreatorList from "@/Components/creators/CreatorList";
import DefaultNftList from "@/Components/nft/DefaultNftList";
import {BaseProps} from "@/types/base.type";

interface IHomePageProps extends BaseProps{
    categories: Category[];
    creators: UserWithCreator[];
    collections: Collection[];
    trendingNftList: Nft[];
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
                <DefaultNftList
                    trendingNftList={trendingNftList}
                    title={'Discover More Nfts'}
                    desc={'Explore New Trending Nfts'}
                    buttonHref={'/nft'}
                    buttonName={'See all'}
                />
                <CreatorList creators={creators}/>
                <FaqSection/>
                <SubsCard/>
            </Layout>
        </>
    );
};
export default Home;
