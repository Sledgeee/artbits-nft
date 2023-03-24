export interface User extends Creator {
	id: number
	username: string
	email: string
	avatar_image: string
	metamask_address: string
	createdCount: number
	ownedCount: number
	collectionCount: number
	followers_to_count: number
	followers_from_count: number
	transactions_from_sum_value: string
	transactions_from_count: number
}

export interface Creator {
	bio: string
	banner_image: string
}

export interface UserWithCreator extends User {
	creator: Creator
}

export interface RankingCreators extends UserWithCreator {
	transactions_from_count: number
}
