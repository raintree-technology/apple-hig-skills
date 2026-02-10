import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: [
			"lucide-react",
			"@fortawesome/react-fontawesome",
			"@fortawesome/free-brands-svg-icons",
		],
	},
};

export default nextConfig;
