import { Nft } from '@/types/nft.type'

export interface PageLink {
	url: string | null
	label: string
	active: boolean
}

export interface NftResponse {
	current_page: number
	data: Nft[]
	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	links: PageLink[]
	next_page_url: string | null
	path: string
	per_page: number
	prev_page_url: string | null
	to: number
	total: number
}
