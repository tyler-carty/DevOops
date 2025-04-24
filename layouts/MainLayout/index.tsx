// library imports
import Head from "next/head";
import { JSX, memo, ReactElement, ReactNode } from "react";

// local
import MainMenu from "@/components/MainMenu";
import { Layout, LayoutProps } from "../types";

// types
type MainProps = LayoutProps & {
	children: ReactNode;
};

/**
 * Main Comp used by MainLayout
 *
 * this is needed for scroll restoration to work since
 * we remount on key change
 */
const MainContent = memo(function MainContent({ children }: MainProps): ReactElement {
	return <>{children}</>;
});

// component
const MainLayout = memo(function MainLayout({
	children,
	mainClassName,
	pageTitle,
}: MainProps): ReactElement {
	return (
		<>
			<Head>
				<link
					key="apple-touch-icon-180x180"
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/images/logo/apple-touch-icon.png"
				/>
				<link
					key="favicon-32x32"
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/images/logo/favicon-32x32.png"
				/>
				<link
					key="favicon-16x16"
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/images/logo/favicon-16x16.png"
				/>
				<link key="manifest" rel="manifest" href="/site.webmanifest" />
			</Head>
			<title key="title">{pageTitle.trim()}</title>

			<main id="main" className={`${mainClassName ? mainClassName : ""}`.trim()}>
				<MainMenu />

				<MainContent>{children}</MainContent>
			</main>
		</>
	);
});

export function createLayout(layoutProps: LayoutProps): Layout {
	const layout = (page: ReactElement): JSX.Element => (
		<MainLayout {...layoutProps}>{page}</MainLayout>
	);

	return layout;
}
