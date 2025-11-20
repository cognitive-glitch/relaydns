import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

type Theme = "dark" | "light";
export type Palette = "default" | "warm" | "cool";

export const AVAILABLE_PALETTES = ["default", "warm", "cool"] as const satisfies readonly Palette[];

interface ThemeContextValue {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
	palette: Palette;
	setPalette: (palette: Palette) => void;
	availablePalettes: readonly Palette[];
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
	defaultTheme?: Theme;
	defaultPalette?: Palette;
	children: ReactNode;
}

export function ThemeProvider({
	defaultTheme = "dark",
	defaultPalette = "default",
	children,
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	const [palette, setPalette] = useState<Palette>(defaultPalette);

	useEffect(() => {
		if (typeof document === "undefined") {
			return;
		}

		document.documentElement.setAttribute("data-theme", theme);
		document.documentElement.setAttribute("data-palette", palette);
	}, [theme, palette]);

	const toggleTheme = useCallback(() => {
		setTheme((current) => (current === "dark" ? "light" : "dark"));
	}, []);

	const contextValue = useMemo<ThemeContextValue>(
		() => ({
			theme,
			setTheme,
			toggleTheme,
			palette,
			setPalette,
			availablePalettes: AVAILABLE_PALETTES,
		}),
		[palette, theme, toggleTheme],
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
}
