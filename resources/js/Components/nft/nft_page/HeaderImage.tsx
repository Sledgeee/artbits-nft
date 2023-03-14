import {FC} from 'react'
import {Image} from "@nextui-org/react";
import Box from "@/Components/Box";

interface HeaderImageProps {
    image: string
}

const HeaderImage: FC<
    HeaderImageProps
> = ({image}) => {

    return <Box>
        <Image
            showSkeleton
            width='100%'
            objectFit={"cover"}
            height={300}
            src={image}
            alt="Header Image"
        />
    </Box>

}

export default HeaderImage
