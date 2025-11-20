import { Github, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-border/60 bg-card/80 px-4 py-3 shadow-[var(--shadow-raised)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/80 text-primary shadow-[var(--shadow-raised)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 906.26 1457.543"
            className="h-5 w-5"
            fill="currentColor"
            role="img"
            aria-label="Portal icon"
          >
            <path d="M254.854 137.158c-34.46 84.407-88.363 149.39-110.934 245.675 90.926-187.569 308.397-483.654 554.729-348.685 135.487 74.216 194.878 270.78 206.058 467.566 21.924 385.996-190.977 853.604-467.585 943.057-174.879 56.543-307.375-86.447-364.527-198.115-176.498-344.82 2.041-910.077 182.259-1109.498zm198.13 7.918C202.61 280.257 4.622 968.542 207.322 1270.414c51.713 77.029 194.535 160.648 285.294 71.318-209.061 31.529-288.389-176.143-301.145-340.765 31.411 147.743 139.396 326.12 309.075 253.588 251.957-107.723 376.778-648.46 269.433-966.817 22.394 134.616 15.572 317.711-47.551 412.087 86.655-230.615 7.903-704.478-269.444-554.749z" />
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs uppercase text-muted-foreground">Relay network</span>
          <h1 className="text-lg font-semibold tracking-tight text-foreground">Portal</h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild aria-label="View source on GitHub">
          <a
            href="https://github.com/gosuda/portal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="soft" size="sm">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Add your server</span>
        </Button>
      </div>
    </header>
  );
}
