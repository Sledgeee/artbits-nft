import { Head } from "@inertiajs/react";
import { NftProps } from "./nft.interface";

const Index = (props: NftProps) => {
    return (
        <>
            <Head title="Nft" />
            {props.nfts.data.map((x) => (
                <>
                    <div>{x.name}</div>
                    <img src={x.image} alt={x.name} />
                </>
            ))}
        </>
    );
};

export default Index;
