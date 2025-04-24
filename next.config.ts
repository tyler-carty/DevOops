import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	sassOptions: {
		prependData: `@import "./_mantine.scss";`,
	},
};

export default nextConfig;
