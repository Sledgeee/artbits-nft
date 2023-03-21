import CategoryList from '@/Components/category/CategoryList'
import CollectionList from '@/Components/collections/CollectionList'
import CreatorList from '@/Components/creators/CreatorList'
import FaqSection from '@/Components/faq/FaqSection'
import HeroSection from '@/Components/hero/HeroSection'
import {Layout} from '@/Components/Layout'
import DefaultNftList from '@/Components/nft/DefaultNftList'
import SubsCard from '@/Components/subscription/SubsCard'
import {BaseProps} from '@/types/base.type'
import {Category} from '@/types/category.type'
import {Collection} from '@/types/collection.type'
import {UserWithCreator} from '@/types/creator.type'
import {Nft} from '@/types/nft.type'
import {Head} from '@inertiajs/react'
import {FC} from 'react'

interface IHomePageProps extends BaseProps {
    heroNft: Nft,
    categories: Category[]
    creators: UserWithCreator[]
    collections: Collection[]
    trendingNftList: Nft[]
}

const Home: FC<
    IHomePageProps
> = ({
         categories,
         auth,
         creators,
         collections,
         trendingNftList,
         heroNft
     }) => {
    return (
        <>
            <Head title='Home'/>

            <Layout auth={auth}>
                <HeroSection nft={heroNft}/>
                <CategoryList categories={categories}/>
                <CollectionList
                    title='Trending Collection'
                    description='Checkout our weekly updated trending collection.'
                    collections={collections}
                />
                <DefaultNftList
                    trendingNftList={trendingNftList}
                    title='Discover More Nfts'
                    desc='Explore New Trending Nfts'
                    buttonHref='/nft'
                    buttonName='See all'
                />
                <CreatorList creators={creators} />
                <FaqSection />
                <SubsCard />
            </Layout>
        </>
    )
}
export default Home
