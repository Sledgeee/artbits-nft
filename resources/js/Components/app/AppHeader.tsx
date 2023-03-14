import { FC } from "react";
import {
    Button,
    changeTheme,
    Navbar,
    Spacer,
    Switch,
    Text,
    useTheme,
} from "@nextui-org/react";
import { SiCoinmarketcap } from "react-icons/si";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link, router } from "@inertiajs/react";

interface IAppHeaderProps {
    auth: any;
}

export const routes = [
    {
        name: "Marketplace",
        href: "/nft",
    },
    {
        name: "Rankings",
        href: "/rankings",
    },
    {
        name: "Connect a wallet",
        href: "/wallet",
    },
];

const navigate = (href: string) => router.replace(href);

const AppHeader: FC<IAppHeaderProps> = ({ auth }) => {
    const { isDark } = useTheme();

    const handleChange = () => {
        const nextTheme = isDark ? "light" : "dark";
        window.localStorage.setItem("data-theme", nextTheme);
        changeTheme(nextTheme);
    };
    const checkActive = (href: string) => location.pathname === href;

    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Brand>
                <SiCoinmarketcap className="mr-2 text-3xl sm:text-md" />
                <Text b color='primary' hideIn="xs">
                    <Link href="/">ArtBits</Link>
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="secondary"
                hideIn="xs"
                variant="underline"
            >
                {routes.map((value) => (
                    <Navbar.Link
                        key={value.href}
                        isActive={checkActive(value.href)}
                        href={value.href}
                    >
                        {value.name}
                    </Navbar.Link>
                ))}
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Switch
                        checked={isDark}
                        onChange={handleChange}
                        iconOn={<BsSunFill />}
                        iconOff={<BsMoonFill />}
                    />
                </Navbar.Item>
                <Navbar.Item>
                    {!auth.user ? (
                        <>
                            <Spacer x={-1.5} />
                            <Button
                                light
                                color="primary"
                                auto
                                onPress={() => navigate(route("login"))}
                            >
                                Login
                            </Button>
                            <Spacer x={0.1} />
                            <Button
                                auto
                                bordered
                                shadow
                                color="gradient"
                                onPress={() => navigate(route("register"))}
                            >
                                Register
                            </Button>
                        </>
                    ) : (
                        <Button
                            shadow
                            bordered
                            color="gradient"
                            auto
                            onPress={() => navigate(route("dashboard"))}
                        >
                            Dashboard
                        </Button>
                    )}
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    );
};

export default AppHeader;
