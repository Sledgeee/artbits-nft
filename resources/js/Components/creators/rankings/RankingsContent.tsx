import {FC} from 'react'
import {Button, Grid, Text} from "@nextui-org/react";
import CreatorCard from "@/Components/creators/CreatorCard";
import {RankingCreators} from "@/types/creator.type";
import RankingsTable from "@/Components/creators/rankings/RankingsTable";

interface RankingsContentProps {
    topCreators: RankingCreators[]
}

const RankingsContent: FC<
    RankingsContentProps
> = ({topCreators}) => {
    return <>
        <div className='container mx-auto'>
            <div className='mx-2'>
                <Text h2 className='flex'>Top creators </Text>
                <Text h4>Check out Top Rated Creators on the NFT Marketplace</Text>
                <RankingsTable topCreators={topCreators}/>
            </div>
        </div>
    </>

}

export default RankingsContent
