import {IUserType} from "@/types/user.type";


export interface Creator {
    id: number,
    bio: string,
    banner_image?: string,
    totalSales?: number,
    user?: IUserType
}

export interface UserWithCreator extends IUserType {
    transactions_from_sum_value: string
    creator: Creator
}
