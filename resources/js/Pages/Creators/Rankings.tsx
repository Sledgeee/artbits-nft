import {FC} from 'react'
import {Head} from "@inertiajs/react";
import Layout from "@/Components/Layout";
import {BaseProps} from "@/types/base.type";
import {RankingCreators} from "@/types/creator.type";
import RankingsContent from "@/Components/creators/rankings/RankingsContent";

interface CreatorsProps extends BaseProps {
    topCreators: RankingCreators[]
}

const Rankings: FC<
    CreatorsProps
> = ({
         auth,
         topCreators
     }) => {
    return <>
        <Head title="Rankings"/>
        <Layout auth={auth}>
            <RankingsContent topCreators={topCreators}/>
        </Layout>
    </>


}

export default Rankings
