import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider as GlobalStateProvider } from "react-redux";
import { store } from "@/store";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	layout?: (page: ReactElement) => ReactNode;
};

type AppWithLayoutProps = AppProps & {
	Component: NextPageWithLayout;
	pageProps: any;
};

export default function App({ Component, pageProps }: AppWithLayoutProps) {
	const layout = Component.layout ?? ((page) => page);

	return (
		<>
			<GlobalStateProvider store={store}>
				{layout(<Component {...pageProps} />)}
			</GlobalStateProvider>
		</>
	);
}
