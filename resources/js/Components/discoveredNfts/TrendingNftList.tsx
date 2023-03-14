import { FC } from "react";
import { Button, Grid, Text } from "@nextui-org/react";
import { INftType } from "@/types/nft.type";
import NftCard from "@/Components/nft/NftCard";
import { BsEye } from "react-icons/bs";

interface TrendingNftListProps {
    trendingNftList: INftType[];
}

const TrendingNftList: FC<TrendingNftListProps> = ({ trendingNftList }) => {
    return (
        <>
            <div className="container mx-auto">
                <div className="mx-2">
                    <Text h2 className="flex">
                        Discover More NFTs
                        <Button
                            className="absolute ml-auto mt-2 z-0"
                            bordered
                            color="secondary"
                            auto
                        >
                            <BsEye className="mr-2" />
                            See All
                        </Button>
                    </Text>
                    <Text h4>Explore new trending NFTs</Text>
                </div>
                <Grid.Container gap={2}>
                    {trendingNftList.map((value, index) => (
                        <Grid xs={12} sm={4} key={index}>
                            <NftCard data={value} />
                        </Grid>
                    ))}
                </Grid.Container>
            </div>
        </>
    );
};

export default TrendingNftList;
