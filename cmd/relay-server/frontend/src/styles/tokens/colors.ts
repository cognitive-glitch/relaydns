const semanticColorVars = {
	background: "--background",
	foreground: "--foreground",
	muted: "--muted",
	"muted-foreground": "--muted-foreground",
	card: "--card",
	"card-foreground": "--card-foreground",
	popover: "--popover",
	"popover-foreground": "--popover-foreground",
	border: "--border",
	input: "--input",
	ring: "--ring",
	primary: "--primary",
	"primary-foreground": "--primary-foreground",
	secondary: "--secondary",
	"secondary-foreground": "--secondary-foreground",
	accent: "--accent",
	"accent-foreground": "--accent-foreground",
	destructive: "--destructive",
	"destructive-foreground": "--destructive-foreground",
	"status-online": "--status-online",
	"status-offline": "--status-offline",
	"status-warning": "--status-warning",
} as const;

const addAlphaChannel = (cssVar: string) => `hsl(var(${cssVar}) / <alpha-value>)`;

export type SemanticColorToken = keyof typeof semanticColorVars;

export const tailwindColorTokens: Record<SemanticColorToken, string> = Object.fromEntries(
	Object.entries(semanticColorVars).map(([token, cssVar]) => [token, addAlphaChannel(cssVar)]),
) as Record<SemanticColorToken, string>;

export const paletteTokens = {
	default: {
		dark: {
			canvas: "240 5% 10%",
			surface: "240 4% 16%",
			overlay: "240 4% 20%",
			highlight: "240 5% 25%",
			ink: "240 5% 90%",
			muted: "240 5% 65%",
			primary: "199 89% 48%",
			secondary: "240 4% 22%",
			border: "240 4% 26%",
			accentForeground: "240 5% 80%",
			accent: "240 5% 25%",
		},
		light: {
			canvas: "240 5% 98%",
			surface: "0 0% 100%",
			overlay: "240 5% 96%",
			highlight: "240 6% 94%",
			ink: "240 5% 15%",
			muted: "240 4% 50%",
			border: "240 6% 90%",
			accentForeground: "240 5% 85%",
			accent: "240 6% 94%",
		},
		status: {
			online: "150 60% 45%",
			offline: "0 60% 55%",
			warning: "35 90% 50%",
		},
	},
	warm: {
		dark: {
			canvas: "24 15% 12%",
			surface: "24 14% 18%",
			overlay: "24 12% 22%",
			highlight: "27 20% 30%",
			ink: "28 32% 90%",
			muted: "28 20% 65%",
			primary: "18 70% 52%",
			secondary: "28 12% 28%",
			border: "24 12% 28%",
			accentForeground: "34 45% 92%",
			accent: "27 25% 32%",
		},
		light: {
			canvas: "26 40% 97%",
			surface: "0 0% 100%",
			overlay: "27 30% 93%",
			highlight: "28 30% 90%",
			ink: "26 35% 18%",
			muted: "28 22% 48%",
			border: "28 25% 80%",
			accentForeground: "26 35% 20%",
			accent: "28 55% 88%",
		},
		status: {
			online: "150 60% 45%",
			offline: "0 60% 55%",
			warning: "35 90% 50%",
		},
	},
	cool: {
		dark: {
			canvas: "218 20% 12%",
			surface: "218 16% 18%",
			overlay: "218 14% 22%",
			highlight: "210 20% 30%",
			ink: "210 20% 90%",
			muted: "210 12% 65%",
			primary: "192 70% 55%",
			secondary: "220 12% 26%",
			border: "218 12% 28%",
			accentForeground: "210 25% 90%",
			accent: "210 24% 32%",
		},
		light: {
			canvas: "210 25% 97%",
			surface: "0 0% 100%",
			overlay: "210 20% 95%",
			highlight: "210 20% 92%",
			ink: "210 20% 15%",
			muted: "210 12% 50%",
			border: "210 18% 84%",
			accentForeground: "210 20% 18%",
			accent: "208 55% 88%",
		},
		status: {
			online: "150 60% 45%",
			offline: "0 60% 55%",
			warning: "35 90% 50%",
		},
	},
} as const;

export type PaletteName = keyof typeof paletteTokens;
export type PaletteMode = "dark" | "light";

const semanticToPaletteKey = {
	background: "canvas",
	foreground: "ink",
	muted: "overlay",
	"muted-foreground": "muted",
	card: "surface",
	"card-foreground": "ink",
	popover: "overlay",
	"popover-foreground": "ink",
	border: "border",
	input: "border",
	ring: "primary",
	primary: "primary",
	"primary-foreground": "canvas",
	secondary: "secondary",
	"secondary-foreground": "ink",
	accent: "highlight",
	"accent-foreground": "accentForeground",
	destructive: "offline",
	"destructive-foreground": "ink",
	"status-online": "online",
	"status-offline": "offline",
	"status-warning": "warning",
} as const;

export const semanticColorList = Object.keys(semanticColorVars) as SemanticColorToken[];

export function resolveSemanticHsl(
	palette: PaletteName,
	mode: PaletteMode,
	token: SemanticColorToken,
): string {
	const paletteDefinition = paletteTokens[palette];
	const semanticTarget = semanticToPaletteKey[token];
	if (semanticTarget === "online" || semanticTarget === "offline" || semanticTarget === "warning") {
		return paletteDefinition.status[semanticTarget];
	}
	const modePalette = paletteDefinition[mode];
	return modePalette[semanticTarget as keyof typeof modePalette];
}

export const paletteMetadata = {
	default: {
		title: "Classic Neutral",
		description: "Calm graphite surfaces with confident blue actions",
	},
	warm: {
		title: "Warm Neo-Neutral",
		description: "Soft terracotta neutrals with approachable warmth",
	},
	cool: {
		title: "Cool Tech",
		description: "Slate and teal palette for analytical contexts",
	},
} as const;
