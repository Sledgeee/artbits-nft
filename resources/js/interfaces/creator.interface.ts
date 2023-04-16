import { User } from '@/interfaces/user.interface'

export interface Creator {
	id: number
	bio: string
	banner_image?: string
	user?: User
}

export interface UserWithCreator extends User {
	transactions_from_sum_value: string
	creator: Creator
}

export interface RankingCreators extends UserWithCreator {
	transactions_from_count: number
}
