import { User } from '@/interfaces/user.interface'

export interface Auction {
	id: number
	nft_item_id: number
	end_at: string
	auction_bets: AuctionBet[]
	created_at: string
}

export interface AuctionBet {
	id: number
	value: number
	auction_id: number
	user_id: number
	created_at: string
	user: User
}
