import { useEffect, useState } from "react";
import { Filter, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { Card } from "@/components/ui/card";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  sortBy: string;
  onSortByChange: (value: string) => void;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  status,
  onStatusChange,
  sortBy,
  onSortByChange,
}: SearchBarProps) {
  const [commandOpen, setCommandOpen] = useState(false);
  const searchInputId = "server-search";

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  const applyStatus = (value: string) => {
    onStatusChange(value);
    setCommandOpen(false);
  };

  const applySort = (value: string) => {
    onSortByChange(value);
    setCommandOpen(false);
  };

  return (
    <>
      <Card className="toolbar-surface border-none px-4 py-4">
        <div className="flex flex-col gap-[var(--spacing-3)]">
          <label
            htmlFor={searchInputId}
            className="flex items-center gap-3 text-sm text-muted-foreground"
          >
            <span className="hidden sm:inline">Search</span>
            <span className="sr-only">Search servers</span>
          </label>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-full border border-border/60 bg-card/70 px-4 shadow-[var(--shadow-pressed)]">
              <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Input
                id={searchInputId}
                placeholder="Search by name, description, tags..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-10 border-none bg-transparent px-0 shadow-none focus-visible:ring-0"
                aria-label="Search servers"
              />
            </div>
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
              <Select value={status} onValueChange={onStatusChange}>
                <SelectTrigger className="w-full md:w-[160px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All status</SelectItem>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={onSortByChange}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default order</SelectItem>
                  <SelectItem value="description">Description</SelectItem>
                  <SelectItem value="tags">Tags</SelectItem>
                  <SelectItem value="owner">Owner</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="justify-between px-3"
              onClick={() => setCommandOpen(true)}
            >
              <span className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Quick filters
              </span>
              <span className="text-xs text-muted-foreground">Ctrl K</span>
            </Button>
          </div>
        </div>
      </Card>

      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput placeholder="Jump to a filter" />
        <CommandList>
          <CommandEmpty>No filter found.</CommandEmpty>
          <CommandGroup heading="Status">
            {[
              { value: "all", label: "All" },
              { value: "online", label: "Online" },
              { value: "offline", label: "Offline" },
            ].map((item) => (
              <CommandItem key={item.value} onSelect={() => applyStatus(item.value)}>
                {item.label}
                {status === item.value && <CommandShortcut>Active</CommandShortcut>}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Sort">
            {[
              { value: "default", label: "Default" },
              { value: "description", label: "Description" },
              { value: "tags", label: "Tags" },
              { value: "owner", label: "Owner" },
            ].map((item) => (
              <CommandItem key={item.value} onSelect={() => applySort(item.value)}>
                {item.label}
                {sortBy === item.value && <CommandShortcut>Active</CommandShortcut>}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
