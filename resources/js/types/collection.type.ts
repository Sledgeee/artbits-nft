import {Nft, NftItemsLimited} from "@/types/nft.type";
import {Creator} from "@/types/creator.type";

export interface Collection {
    id: number
    name: string,
    nft_items_limited: NftItemsLimited[],
    creator: Creator
}

