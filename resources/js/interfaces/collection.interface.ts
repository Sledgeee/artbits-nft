import { NftItemsLimited } from '@/interfaces/nft.interface'
import { User } from './user.interface'

export interface Collection {
	id: number
	name: string
	nft_items_limited: NftItemsLimited[]
	user: User
}
