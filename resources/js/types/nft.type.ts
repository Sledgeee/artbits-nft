import { User } from './user.type'

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
