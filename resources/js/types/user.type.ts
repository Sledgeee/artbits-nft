import {Creator} from "@/types/creator.type";
import {UserWallet} from "@/types/wallet.type";

export interface User {
    id: number
    creator: Creator
    wallet: UserWallet
    username: string,
    email: string,
    avatar_image: string
}
