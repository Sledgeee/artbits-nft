import {FC} from "react";
import {Button, Grid, Text} from "@nextui-org/react";
import {Nft, NftItemsLimited} from "@/types/nft.type";
import NftCard from "@/Components/nft/NftCard";
import {BsEye} from "react-icons/bs";
import {router} from "@inertiajs/react";

interface TrendingNftListProps {
    trendingNftList: Nft[];
    title?: string,
    desc?: string | boolean,
    buttonHref?: string,
    buttonName?: string
}

const DefaultNftList: FC<
    TrendingNftListProps
> = ({
         trendingNftList,
         title,
         buttonHref,
         buttonName,
         desc
     }) => {

    return (
        <>
            <div className="container mx-auto">
                <div className="mx-2">
                    <Text h2 className="flex">
                        {title}
                        {buttonHref && buttonName &&
                            <Button
                                className="absolute ml-auto mt-2 z-0"
                                bordered
                                color="secondary"
                                auto
                                onPress={() => router.replace(buttonHref)}>
                                <BsEye className="mr-2"/>
                                {buttonName}
                            </Button>
                        }

                    </Text>
                    {desc &&
                        <Text h4>{desc}</Text>}

                </div>
                <Grid.Container gap={2}>
                    {trendingNftList.map((value, index) => (
                        <Grid xs={12} sm={3} md={3} key={index}>
                            <NftCard item={value}/>
                        </Grid>
                    ))}
                </Grid.Container>
            </div>
        </>
    );
};

export default DefaultNftList;
