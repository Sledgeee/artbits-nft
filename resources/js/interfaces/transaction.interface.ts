export interface Transaction {
	value: number
	from_user_id: number
	to_user_id: number
	nft_item_id: number
}

export interface TotalTransaction {
	total_value: number
	created_at: string
}
