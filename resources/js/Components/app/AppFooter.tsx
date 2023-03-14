import { FC } from "react";
import { Row, Spacer, Text, Input, Button } from "@nextui-org/react";
import { BsDiscord, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillShop } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Box from "@/Components/Box";

const AppFooter: FC = () => {
    return (
        <Box className="min-h-[20px] container mx-auto border-t-[0.5px] mt-3">
            <Box className="my-4 flex justify-between ml-4 mr-20">
                <Box>
                    <Row>
                        <AiFillShop className="mr-1 mt-1" />
                        <Text b>ArtBits - NFT Marketplace</Text>
                    </Row>
                    <Text>
                        NFT marketplace UI created with Anima for Figma.
                    </Text>
                    <Spacer y={1} />
                    <Text small>Join our community</Text>
                    <Row className="gap-x-2">
                        <BsDiscord />
                        <BsYoutube />
                        <BsInstagram />
                        <BsTwitter />
                    </Row>
                </Box>
                <Box>
                    <Text h4 b>
                        Explore
                    </Text>
                    <Text h6>Marketplace</Text>
                    <Text h6>Rankings</Text>
                    <Text h6>Connect a wallet</Text>
                </Box>
                <Box>
                    <Text h4 b>
                        Join our weekly digest
                    </Text>
                    <Text h6>
                        Get exclusive promotions & updates straight to your
                        inbox.
                    </Text>
                    <Row>
                        <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        css={{width:'100%'}}
                        />
                        <Button className="ml-2" shadow color="secondary" auto>
                            <MdEmail className="mr-1" />
                            <Text span>Subscribe</Text>
                        </Button>
                    </Row>
                </Box>
            </Box>
        </Box>
    );
};

export default AppFooter;
