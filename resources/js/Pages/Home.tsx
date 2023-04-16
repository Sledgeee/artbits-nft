import CategoryList from '@/Components/category/CategoryList'
import CollectionList from '@/Components/collections/CollectionList'
import CreatorList from '@/Components/creators/CreatorList'
import FaqSection from '@/Components/faq/FaqSection'
import HeroSection from '@/Components/hero/HeroSection'
import { Layout } from '@/Components/Layout'
import DefaultNftList from '@/Components/nft/DefaultNftList'
import SubsCard from '@/Components/subscription/SubsCard'
import { BaseProps } from '@/interfaces/base.interface'
import { Category } from '@/interfaces/category.interface'
import { Collection } from '@/interfaces/collection.interface'
import { UserWithCreator } from '@/interfaces/creator.interface'
import { Nft } from '@/interfaces/nft.interface'
import { Head } from '@inertiajs/react'
import { FC } from 'react'
import SectionWrapper from '@/Components/SectionWrapper'

interface IHomePageProps extends BaseProps {
	heroNft: Nft
	categories: Category[]
	creators: UserWithCreator[]
	collections: Collection[]
	trendingNftList: Nft[]
}

const Home: FC<IHomePageProps> = ({
	categories,
	auth,
	creators,
	collections,
	trendingNftList,
	heroNft
}) => {
	return (
		<>
			<Head title='Home' />

			<Layout auth={auth}>
				<SectionWrapper
					children={<HeroSection nft={heroNft} />}
				/>
				<SectionWrapper
					children={
						<CategoryList categories={categories} />
					}
				/>
				<SectionWrapper>
					<CollectionList
						title='Trending Collection'
						description='Checkout our weekly updated trending collection.'
						collections={collections}
					/>
				</SectionWrapper>
				<SectionWrapper>
					<DefaultNftList
						trendingNftList={trendingNftList}
						title='Discover More Nfts'
						desc='Explore New Trending Nfts'
						buttonHref='/nft'
						buttonName='See all'
					/>
				</SectionWrapper>
				<SectionWrapper
					children={<CreatorList creators={creators} />}
				/>
				<SectionWrapper children={<FaqSection />} />
                <SectionWrapper children={<SubsCard />} />
			</Layout>
		</>
	)
}
export default Home
