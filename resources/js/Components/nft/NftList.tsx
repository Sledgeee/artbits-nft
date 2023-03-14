import {Grid, Pagination, Spacer, Text} from '@nextui-org/react'
import {FC} from "react";
import {NftProps} from "@/Pages/Nft/nft.interface";
import NftCard from "@/Components/nft/NftCard";
import {router} from "@inertiajs/react";

interface NftListProps {
    data: NftProps
}

const NftList: FC<NftListProps> = ({data}) => {
    const navigate = (page: number) => router.replace(`nft?page=${page}`)

    return <div className="container mx-auto">
        <Spacer y={1}/>
        <div className="mx-2">
            <Text h2>
                Discover More NFTs
            </Text>
        </div>
        <Grid.Container gap={2} justify='center'>
            {data.nfts.data.map((item, index) =>
                <Grid xs={12} sm={4} key={index}>
                    <NftCard data={item}/>
                </Grid>
            )}
        </Grid.Container>
        <Spacer y={0.7}/>
        <Grid.Container justify='center'>
            <Pagination
                shadow
                color='gradient'
                initialPage={1}
                onChange={navigate}
                page={data.nfts.current_page}
                total={data.nfts.last_page}
            />
        </Grid.Container>
        <Spacer y={0.5}/>
    </div>


}
export default NftList
