import type { Config } from "tailwindcss";

import { tailwindColorTokens } from "./src/styles/tokens/colors";

const config = {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: tailwindColorTokens,
		},
	},
} satisfies Config;

export default config;
