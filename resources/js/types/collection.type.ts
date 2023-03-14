import {Nft, NftItemsLimited} from "@/types/nft.type";
import {Creator} from "@/types/creator.type";

export interface Collection {
    nft_items_limited: NftItemsLimited[],
    name: string,
    creator: Creator
}
