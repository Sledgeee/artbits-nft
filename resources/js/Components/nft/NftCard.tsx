import { FC } from "react";
import { Card, Col, Grid, Row, Text, User } from "@nextui-org/react";
import { Nft } from "@/types/nft.type";
import Box from "@/Components/Box";

interface NftCardProps {
    data: Nft;
}

const NftCard: FC<NftCardProps> = ({ data }) => {
    return (
        <Card isPressable css={{ w: "100%", h: "400px", borderWidth: "0px" }}>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={data.image}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                />
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Grid.Container>
                            <Grid xs={12}>
                                <Text h3 className="pl-3">
                                    {data.name}
                                </Text>
                            </Grid>
                            <Grid xs={12}>
                                <User
                                    size="xs"
                                    name="username"
                                    src={data.header_image}
                                />
                            </Grid>
                        </Grid.Container>
                    </Col>
                    <Row justify="flex-end">
                        <Box className="mr-2 mt-3 text-right">
                            <Text h6 color="#858584">
                                Price
                            </Text>
                            <Text h5>{data.price} ETH</Text>
                        </Box>
                    </Row>
                </Row>
            </Card.Footer>
        </Card>
    );
};

export default NftCard;
