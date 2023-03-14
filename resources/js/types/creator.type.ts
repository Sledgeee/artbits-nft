import {User} from "@/types/user.type";


export interface Creator {
    id: number,
    bio: string,
    banner_image?: string,
    totalSales?: number,
    user?: User
}

export interface UserWithCreator extends User {
    transactions_from_sum_value: string
    creator: Creator
}
