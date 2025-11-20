import { AVAILABLE_PALETTES, type Palette, useTheme } from "@/components/theme-provider";

const paletteLabels: Record<Palette, string> = {
	default: "Classic",
	warm: "Warm",
	cool: "Cool",
};

export function PaletteSwitcher() {
	const { palette, setPalette } = useTheme();

	return (
		<label className="flex items-center gap-[var(--spacing-2)] rounded-full border border-border/60 bg-card/80 px-[var(--spacing-3)] py-[calc(var(--spacing-2)/1.4)] text-[var(--font-size-2xs)] text-muted-foreground shadow-[var(--shadow-pressed)]">
			<span className="hidden sm:inline">Palette</span>
			<select
				className="bg-transparent text-foreground focus-visible:outline-none"
				value={palette}
				onChange={(event) => setPalette(event.target.value as Palette)}
				aria-label="Select interface palette"
			>
				{AVAILABLE_PALETTES.map((value) => (
					<option key={value} value={value} className="text-foreground">
						{paletteLabels[value]}
					</option>
				))}
			</select>
		</label>
	);
}
