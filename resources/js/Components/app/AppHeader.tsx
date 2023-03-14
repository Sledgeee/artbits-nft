import {FC} from "react";
import {
    Avatar,
    Button,
    changeTheme, Dropdown,
    Navbar,
    Spacer,
    Switch,
    Text,
    useTheme,
} from "@nextui-org/react";
import {SiCoinmarketcap} from "react-icons/si";
import {BsMoonFill, BsSunFill} from "react-icons/bs";
import {Link, router} from "@inertiajs/react";
import {User} from "@/types/user.type";

interface IAppHeaderProps {
    user: User
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

const AppHeader: FC<IAppHeaderProps> = ({user}) => {
    const {isDark} = useTheme();
    const handleChange = () => {
        const nextTheme = isDark ? "light" : "dark";
        window.localStorage.setItem("data-theme", nextTheme);
        changeTheme(nextTheme);
    };
    const checkActive = (href: string) => location.pathname === href;

    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Brand>
                <SiCoinmarketcap className="mr-2 text-3xl sm:text-md"/>
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
                        as='li'
                    >
                        <Link
                            href={value.href}

                        >
                            {value.name}
                        </Link>
                    </Navbar.Link>
                ))}
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Switch
                        checked={isDark}
                        onChange={handleChange}
                        iconOn={<BsSunFill/>}
                        iconOff={<BsMoonFill/>}
                    />
                </Navbar.Item>
                <Navbar.Item>
                    {!user ? (
                        <>
                            <Spacer x={-0.5}/>
                            <Button
                                auto
                                bordered
                                shadow
                                color="gradient"
                                onPress={() => navigate(route("login"))}
                            >
                                Login
                            </Button>
                        </>
                    ) : (
                        <>

                            <Spacer x={-0.5}/>
                            <Dropdown placement="bottom-right">
                                <Navbar.Item>
                                    <Dropdown.Trigger>
                                        <Avatar
                                            bordered
                                            as="button"
                                            color="primary"
                                            size="md"
                                            src={user.avatar_image}
                                        />
                                    </Dropdown.Trigger>
                                </Navbar.Item>
                                <Dropdown.Menu
                                    aria-label="User menu actions"
                                    color="primary"
                                >
                                    <Dropdown.Item key="profile" css={{height: "$18"}}>
                                        <Text b color="inherit" css={{d: "flex"}}>
                                            Signed in as
                                        </Text>
                                        <Text b color="inherit" css={{d: "flex"}}>
                                            {user.email}
                                        </Text>
                                    </Dropdown.Item>
                                    <Dropdown.Item key="settings" withDivider>
                                        <Link href={route("dashboard")}>
                                            Dashboard
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        withDivider
                                        color="error"
                                    >
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                        >Log Out
                                        </Link>

                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                    )}
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Collapse>
                {routes.map((item, index) => (
                    <Navbar.CollapseItem key={index}>
                        <Link
                            color="inherit"
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppHeader;
