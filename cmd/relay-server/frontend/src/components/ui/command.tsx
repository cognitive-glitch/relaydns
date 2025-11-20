import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";
import {
	Dialog,
	DialogContent,
	type DialogProps,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const Command = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
	<CommandPrimitive
		ref={ref}
		className={cn(
			"flex h-full w-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-card text-foreground",
			className,
		)}
		{...props}
	/>
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => (
	<Dialog {...props}>
		<DialogContent className="overflow-hidden p-0">
			<Command className="bg-card/95">{children}</Command>
		</DialogContent>
	</Dialog>
);

const CommandInput = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Input>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
	<div className="flex items-center border-b border-border/50 px-3">
		<CommandPrimitive.Input
			ref={ref}
			className={cn(
				"flex h-[var(--control-height-md)] w-full bg-transparent text-[var(--font-size-sm)] outline-none placeholder:text-muted-foreground",
				className,
			)}
			{...props}
		/>
	</div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.List
		ref={ref}
		className={cn(
			"max-h-72 overflow-y-auto p-[var(--spacing-2)] text-[var(--font-size-sm)]",
			className,
		)}
		{...props}
	/>
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Empty>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Empty
		ref={ref}
		className={cn(
			"py-[var(--spacing-6)] text-center text-[var(--font-size-sm)] text-muted-foreground",
			className,
		)}
		{...props}
	/>
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Group>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Group
		ref={ref}
		className={cn(
			"px-[var(--spacing-2)] py-[calc(var(--spacing-2)/1.5)] text-[var(--font-size-2xs)] font-semibold uppercase tracking-[0.12em] text-muted-foreground",
			className,
		)}
		{...props}
	/>
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Separator
		ref={ref}
		className={cn(
			"mx-[var(--spacing-2)] my-[var(--spacing-2)] h-px bg-border/50",
			className,
		)}
		{...props}
	/>
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Item
		ref={ref}
		className={cn(
			"flex cursor-pointer select-none items-center gap-[var(--spacing-2)] rounded-md px-[var(--spacing-2)] py-[var(--spacing-2)] text-[var(--font-size-sm)] data-[disabled]:opacity-50 data-[disabled]:pointer-events-none aria-selected:bg-muted/60",
			className,
		)}
		{...props}
	/>
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
	<span
		className={cn("ml-auto text-xs text-muted-foreground", className)}
		{...props}
	/>
);
CommandShortcut.displayName = "CommandShortcut";

export {
	Command,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator,
};
