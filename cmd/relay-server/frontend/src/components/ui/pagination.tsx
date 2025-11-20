import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full items-center justify-center", className)}
    {...props}
  />
);

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 shadow-[var(--shadow-raised)]",
      className
    )}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("list-none", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

interface PaginationLinkProps
  extends React.ComponentPropsWithoutRef<"button"> {
  isActive?: boolean;
}

const PaginationLink = React.forwardRef<HTMLButtonElement, PaginationLinkProps>(
  ({ className, isActive, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-full border border-transparent px-3 text-sm font-medium text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isActive
          ? "bg-primary text-primary-foreground shadow-[var(--shadow-raised)]"
          : "bg-transparent text-muted-foreground hover:bg-muted/40",
        className
      )}
      {...props}
    />
  )
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" {...props} className={cn("px-2", className)}>
    <ChevronLeft className="h-4 w-4" />
  </PaginationLink>
);

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" {...props} className={cn("px-2", className)}>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cn("inline-flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
    <span className="sr-only">More pages</span>
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
