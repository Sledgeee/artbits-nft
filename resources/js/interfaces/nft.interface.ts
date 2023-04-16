import { User } from './user.interface'

export interface NftItemsLimited {
	nft_item: Nft
}

export interface NftItemTag {
	name: string
}

export interface Nft {
	id: number
	created_at: string
	name: string
	description: string
	image: string
	header_image: string
	price: string
	user: User
	nft_item_tags?: NftItemTag[]
}

export interface PageLink {
    url: string | null
    label: string
    active: boolean
}

export interface PaginationResponse<T> {
    current_page: number
    data: T[]
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

