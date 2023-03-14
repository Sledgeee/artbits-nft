import {FC} from 'react'
import {Card, User} from "@nextui-org/react";

const HeroCard: FC = () => {

    return <Card css={{w: "100%", h: "400px", borderWidth:'0px'}}>
        <Card.Body css={{p: 0}}>
            <Card.Image
                src="/images/hero/hero.gif"
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Relaxing app background"
            />
        </Card.Body>
        <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#0f111466",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
            }}
        >
            <User
                src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
                name='Space Walking'
            />
        </Card.Footer>
    </Card>
}

export default HeroCard
