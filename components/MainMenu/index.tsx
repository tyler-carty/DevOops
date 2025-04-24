// styles
import classes from "./styles.module.scss";

// library imports
import {
	Group,
	ScrollArea,
	Drawer,
	Anchor,
	CloseButton,
	Text,
	ThemeIcon,
	Menu as MantineMenu,
	Indicator,
	UnstyledButton,
	Badge,
	Card,
	Box,
} from "@mantine/core";
import Link from "next/link";

// shared
import {
	LinksGroup,
	SpotlightSearchButton,
	ColorSchemeToggle,
	IconVaulte,
	GitBranchBadge,
	IconUtilities,
	UserProfileButton,
} from "@shared-packages/ui";
import { IconChevronRight, IconDoorExit, studioLinksGroup, signout } from "@shared-packages/ui";

// local
import { useMemo, useState } from "react";
import { useApp } from "@/hooks";
import { partitionArray } from "@shared-packages/utils";
import { openSpotlight } from "@mantine/spotlight";
import { useRouter } from "next/router";
import { useActivityNotifications, useScreenQueryOpinion } from "@shared-packages/hooks";

const siteMapValues = formSiteMapValues(Object.values(siteMap).filter((item) => item.meta.hidden));

// helper components
function Menu() {
	const { pageTitle, toggleMenu } = useApp();

	const [accountMenuOpened, setAccountMenuOpened] = useState<boolean>(false);

	const { pathname } = useRouter();

	const mobileDown = useScreenQueryOpinion("mobileDown");

	// functions
	const closeMenu = () => {
		toggleMenu(false);
	};

	const accountLinks = useMemo(() => {
		const links: {
			groups: any[];
			childLinks: any[];
			link: string;
			id: string;
			icon: TablerIcon;
		} = [];
		return links;
	}, []);

	const accountLinksGroup = useMemo(() => {
		return {
			...studioLinksGroup["account"],
			title: studioLinksGroup["account"].label,
			linksPartition: partitionArray<(typeof links)["0"]>(accountLinks, (link) =>
				link.groups.includes("account-partition-1")
			),
		};
	}, [accountLinks]);

	const menuItems = siteMapValues.map((item) => (
		<MenuLinkGroupX
			key={item.label}
			initiallyOpened={item?.id === "overview"}
			{...item}
			activePathname={closeMenu}
		/>
	));

	return (
		<Box component="nav" className={classes.navbar}>
			<div className={classes.header}>
				<Group justify="space-between" wrap="nowrap">
					<Group className={classes["logo-container"]}>
						<Anchor
							component={Link}
							href={{ pathname: "/" }}
							className={classes.logo}
							onClick={closeMenu}
						>
							<IconVaulte app="studio" variant="full" />
						</Anchor>
						<Group className={classes["page-title"]}>
							<GitBranchBadge
								badgeProps={{
									className: classes["git-branch-badge"],
								}}
							/>
							{(pageTitle.title || pageTitle.icon) && (
								<Card
									py={0}
									px="xs"
									withBorder
									style={{
										"--paper-radius": "var(--mantine-radius-default)",
									}}
								>
									<Group justify="center" gap={4}>
										{pageTitle.icon && <pageTitle.icon size={12} />}
										<Text size="xs">{pageTitle.title}</Text>
									</Group>
								</Card>
							)}
						</Group>
					</Group>

					<CloseButton onClick={closeMenu} className={classes["close-button"]} />
				</Group>
			</div>

			<ScrollArea className={classes.links} scrollbarSize={0}>
				<div className={classes["links-inner"]}>{menuItems}</div>
			</ScrollArea>
			<Box className={classes["search-and-theme"]} p="md">
				<Group justify="space-between" wrap="nowrap">
					<SpotlightSearchButton
						postClick={closeMenu}
						className={classes["search-button"]}
					/>
					<ColorSchemeToggle />
				</Group>
			</Box>
			<div className={classes.footer}>
				{!mobileDown && (
					<MantineMenu
						trigger="click"
						transitionProps={{ transition: "pop" }}
						radius="md"
						shadow="xl"
						styles={{
							dropdown: {
								marginTop: -2,
							},
						}}
						opened={accountMenuOpened}
						onChange={setAccountMenuOpened}
						position="right"
					>
						<MantineMenu.Target>
							<Indicator
								inline
								disabled={accountMenuOpened}
								className={classes["account-menu-indicator"]}
							>
								<UnstyledButton
									py="xs"
									px="md"
									className={classes["account-menu-button"]}
								>
									<Group justify="space-between">
										<ThemeIcon
											variant="light"
											size={32}
											radius="md"
											w={40}
											color={accountLinksGroup.color || "brand"}
										>
											{accountLinksGroup.icon && (
												<accountLinksGroup.icon size={16} />
											)}
										</ThemeIcon>

										{accountLinksGroup.title}

										<IconChevronRight size={12} stroke={1.5} />
									</Group>
								</UnstyledButton>
							</Indicator>
						</MantineMenu.Target>
						<MantineMenu.Dropdown className={classes["account-menu-dropdown"]} mt={-6}>
							{true && (
								<>
									<UserProfileButton
										asSkeleton={false}
										label={"TODO"}
										buttonProps={{
											onClick: () => {
												push({
													pathname: accountProfileRoute,
												});

												setAccountMenuOpened(false);
											},
											variant: "transparent",
										}}
										avatarPlaceHolderSeed={"TODO"}
									/>

									<MantineMenu.Divider />
								</>
							)}

							{accountLinksGroup.linksPartition[0].map(
								({ icon: Icon, childLinks: _childLinks, ...item }) => (
									<MantineMenu.Item
										key={item.id}
										component={Link}
										href={item.link}
										leftSection={Icon ? <Icon size={16} /> : null}
										{...item}
									>
										{item.label}
									</MantineMenu.Item>
								)
							)}

							<MantineMenu.Divider />

							{accountLinksGroup.linksPartition[1].map(
								({ icon: Icon, childLinks: _childLinks, ...item }) => (
									<MantineMenu.Item
										key={item.id}
										component={Link}
										href={item.link}
										leftSection={Icon ? <Icon size={16} /> : null}
										{...(item.id === "notifications" && {
											component: undefined,
											href: undefined,
											onClick: () => {
												openActivityNotifications();
											},
											...(session && {
												rightSection: (
													<Badge variant="outline" ml="xs">
														{activitiesUnreadCount || 0}
													</Badge>
												),
											}),
										})}
										{...item}
									>
										{item.label}
									</MantineMenu.Item>
								)
							)}
							<MantineMenu.Item
								onClick={() => {
									openSpotlight();
								}}
								leftSection={<IconUtilities size={16} />}
							>
								More
							</MantineMenu.Item>

							<MantineMenu.Divider />

							<MantineMenu.Item
								onClick={signout}
								c="red"
								leftSection={<IconDoorExit size={16} />}
							>
								Sign out
							</MantineMenu.Item>
						</MantineMenu.Dropdown>
					</MantineMenu>
				)}
			</div>
		</Box>
	);
}

// component
export default function MainMenu() {
	// state
	const { menuOpened, toggleMenu } = useApp();

	const mobileDown = useScreenQueryOpinion("mobileDown");

	// functions
	const closeMenu = () => {
		toggleMenu(false);
	};

	return mobileDown ? (
		<Drawer
			opened={menuOpened}
			onClose={closeMenu}
			size="80%"
			classNames={{
				root: classes["drawer-root"],
				content: classes["drawer-drawer"],
				body: classes["drawer-body"],
			}}
			withCloseButton={false}
			transitionProps={{
				duration: 300,
				timingFunction: "cubic-bezier(0.39,0.58,0.57,1)",
			}}
		>
			<Menu />
		</Drawer>
	) : (
		<aside className={classes.aside}>
			<Menu />
		</aside>
	);
}
