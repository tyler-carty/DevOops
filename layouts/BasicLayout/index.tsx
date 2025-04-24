// library imports
import Head from "next/head";
import { memo, ReactElement, ReactNode } from "react";

// local
import { Layout, LayoutProps } from "../types";
import { PageDescription, PageFavIcon, PageTitle } from "@shared-packages/ui";

// types
type BasicProps = LayoutProps & {
    children: ReactNode;
};

// component
const BasicLayout = memo(function BasicLayout({
    children,
    mainClassName,
    pageTitle,
    pageDescription,
}: BasicProps): ReactElement {
    return (
        <>
            <PageTitle title={pageTitle} app="studio" />
            <PageDescription description={pageDescription} app="studio" />
            <PageFavIcon app="studio" />
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

            <main id="basic" className={`${mainClassName ? mainClassName : ""}`.trim()}>
                {children}
            </main>
        </>
    );
});

export const createLayout = (layoutProps: LayoutProps): Layout => {
    const layout = (page: ReactElement): JSX.Element => <BasicLayout {...layoutProps}>{page}</BasicLayout>;

    return layout;
};
