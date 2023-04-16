import { FaqCardData } from '@/interfaces/faq.interface'
import { AppRoute } from '@/interfaces/route.interface'
import {
	userNftsTableColumns,
	betsTableColumns,
	rankingsTableColumns
} from '@/constants/tableColumns'

const faqData: FaqCardData[] = [
	{
		title: 'Setup Your wallet',
		desc: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.',
		img: '/images/faq/1.png'
	},
	{
		title: 'Create Collection',
		desc: 'Upload your work and setup your collection. Add a description, social links and floor price.',
		img: '/images/faq/2.png'
	},
	{
		title: 'Start Earning',
		desc: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
		img: '/images/faq/3.png'
	}
]

const routes: AppRoute[] = [
	{
		name: 'Marketplace',
		href: '/nft'
	},
	{
		name: 'Rankings',
		href: '/rankings'
	},
	{
		name: 'Collections',
		href: '/collections'
	}
]

export {
	faqData,
	routes,
	userNftsTableColumns,
	rankingsTableColumns,
	betsTableColumns
}
