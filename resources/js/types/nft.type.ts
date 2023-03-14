export interface NftItemsLimited {
    nft_item: INftType
}

export interface INftType {
    name: string,
    describtion: string,
    image: string,
    header_image: string,
    price: string,
}
