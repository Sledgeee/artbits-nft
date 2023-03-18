import { NftItemsLimited } from '@/types/nft.type'
import { User } from './user.type'

export interface Collection {
	id: number
	name: string
	nft_items_limited: NftItemsLimited[]
	user: User
}
