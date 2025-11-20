import type { KeyboardEvent } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ServerCardProps {
	name: string;
	description: string;
	tags: string[];
	thumbnail: string;
	owner: string;
	online: boolean;
	dns: string;
	serverUrl?: string;
}

export function ServerCard({
	name,
	description,
	tags,
	thumbnail,
	owner,
	online,
	dns,
	serverUrl,
}: ServerCardProps) {
	const defaultThumbnail =
		"https://cdn.jsdelivr.net/gh/gosuda/portal@main/portal.jpg";
	const initials = owner
		? owner
				.split(" ")
				.map((part) => part[0])
				.join("")
				.slice(0, 2)
				.toUpperCase()
		: name.slice(0, 2).toUpperCase();

	const handleNavigate = () => {
		if (serverUrl) {
			window.location.href = serverUrl;
		}
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			handleNavigate();
		}
	};

	return (
		<Card
			role="link"
			tabIndex={0}
			aria-label={`Open ${name}`}
			onClick={handleNavigate}
			onKeyDown={handleKeyDown}
			className="group flex h-full cursor-pointer flex-col gap-[var(--spacing-3)] border border-border/50 bg-card/90 p-[var(--spacing-4)] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
		>
			<div className="relative h-32 w-full overflow-hidden rounded-[var(--radius-lg)] border border-border/40">
				<img
					src={thumbnail || defaultThumbnail}
					alt={`Preview for ${name}`}
					className="h-full w-full object-cover"
					loading="lazy"
				/>
				<div className="absolute inset-0 bg-black/40" aria-hidden="true" />
			</div>
			<div className="flex flex-col gap-[var(--spacing-3)]">
				<div className="flex items-center gap-[var(--spacing-2)]">
					<Badge variant={online ? "success" : "destructive"}>
						{online ? "Online" : "Offline"}
					</Badge>
					{dns && (
						<Badge
							variant="outline"
							className="text-[var(--font-size-2xs)] lowercase"
						>
							{dns}
						</Badge>
					)}
				</div>
				<div className="flex items-start justify-between gap-[var(--spacing-3)]">
					<div className="space-y-[var(--spacing-2)]">
						<h3 className="text-[var(--font-size-lg)] font-semibold tracking-tight text-foreground">
							{name}
						</h3>
						{description && (
							<p className="text-[var(--font-size-sm)] text-muted-foreground leading-[var(--line-height-base)] line-clamp-2">
								{description}
							</p>
						)}
					</div>
				</div>
				{tags && tags.length > 0 && (
					<div className="flex flex-wrap gap-[var(--spacing-2)]">
						{tags.map((tag) => (
							<Badge key={tag} variant="soft">
								{tag}
							</Badge>
						))}
					</div>
				)}
				{owner && (
					<div className="flex items-center gap-[var(--spacing-2)] pt-[var(--spacing-2)]">
						<Avatar className="h-9 w-9">
							<AvatarFallback>{initials}</AvatarFallback>
						</Avatar>
						<div className="text-[var(--font-size-sm)] text-muted-foreground leading-[var(--line-height-tight)]">
							<p className="font-medium text-foreground">{owner}</p>
							<p className="text-[var(--font-size-2xs)] uppercase tracking-[0.12em] text-muted-foreground">
								Owner
							</p>
						</div>
					</div>
				)}
			</div>
		</Card>
	);
}
