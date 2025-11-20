import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center gap-1 rounded-full border px-[var(--spacing-3)] py-[calc(var(--spacing-2)/1.5)] text-[var(--font-size-2xs)] font-medium uppercase tracking-[0.08em] transition-colors",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-secondary/80 text-secondary-foreground shadow-[var(--shadow-raised)]",
				outline: "border-border/60 bg-transparent text-muted-foreground",
				soft: "border-transparent bg-muted/40 text-foreground",
				success:
					"border-transparent bg-[hsl(var(--status-online))] text-[hsl(var(--primary-foreground))]",
				destructive:
					"border-transparent bg-[hsl(var(--status-offline))] text-white",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
