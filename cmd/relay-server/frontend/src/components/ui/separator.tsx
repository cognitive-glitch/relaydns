import * as React from "react";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="presentation"
    className={cn("h-px w-full bg-border/50", className)}
    {...props}
  />
));
Separator.displayName = "Separator";

export { Separator };
