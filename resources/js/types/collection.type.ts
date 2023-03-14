import {INftType, NftItemsLimited} from "@/types/nft.type";
import {Creator} from "@/types/creator.type";

export interface ICollection {
    nft_items_limited: NftItemsLimited[],
    name: string,
    creator: Creator
}
