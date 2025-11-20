import {
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	Pagination as PaginationRoot,
} from "@/components/ui/pagination";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

function getPages(currentPage: number, totalPages: number) {
	if (totalPages <= 5) {
		return Array.from({ length: totalPages }, (_, idx) => idx + 1);
	}

	const pages: Array<number | "left" | "right"> = [1];
	let start = Math.max(2, currentPage - 1);
	let end = Math.min(totalPages - 1, currentPage + 1);

	if (currentPage <= 2) {
		end = Math.min(totalPages - 1, 3);
	}

	if (currentPage >= totalPages - 1) {
		start = Math.max(2, totalPages - 3);
	}

	if (start > 2) {
		pages.push("left");
	}

	for (let page = start; page <= end; page += 1) {
		pages.push(page);
	}

	if (end < totalPages - 1) {
		pages.push("right");
	}

	pages.push(totalPages);
	return pages;
}

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	if (totalPages <= 1) {
		return null;
	}

	const pages = getPages(currentPage, totalPages);

	return (
		<PaginationRoot className="py-[var(--spacing-5)]">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						disabled={currentPage === 1}
						onClick={() => onPageChange(Math.max(1, currentPage - 1))}
					/>
				</PaginationItem>
				{pages.map((page) => {
					if (page === "left" || page === "right") {
						return (
							<PaginationItem key={page}>
								<PaginationEllipsis />
							</PaginationItem>
						);
					}
					return (
						<PaginationItem key={page}>
							<PaginationLink
								isActive={page === currentPage}
								onClick={() => onPageChange(page)}
							>
								{page}
							</PaginationLink>
						</PaginationItem>
					);
				})}
				<PaginationItem>
					<PaginationNext
						disabled={currentPage === totalPages}
						onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
					/>
				</PaginationItem>
			</PaginationContent>
		</PaginationRoot>
	);
}
