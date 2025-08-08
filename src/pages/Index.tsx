import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import { tocData, type TocNode } from "./tocData";

function highlight(text: string, query: string) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);
  return (
    <>
      {before}
      <mark className="bg-yellow-200 text-foreground rounded px-0.5">{match}</mark>
      {after}
    </>
  );
}

function filterTree(nodes: TocNode[], query: string): TocNode[] {
  if (!query) return nodes;
  const q = query.toLowerCase();
  const walk = (node: TocNode): TocNode | null => {
    const selfMatch = node.title.toLowerCase().includes(q);
    const filteredChildren = (node.children || [])
      .map(walk)
      .filter(Boolean) as TocNode[];
    if (selfMatch || filteredChildren.length) {
      return { ...node, children: filteredChildren };
    }
    return null;
  };
  return nodes.map(walk).filter(Boolean) as TocNode[];
}

function TopicList({
  nodes,
  expanded,
  toggle,
  depth = 0,
  query,
}: {
  nodes: TocNode[];
  expanded: Set<string>;
  toggle: (key: string) => void;
  depth?: number;
  query: string;
}) {
  return (
    <ul className="space-y-1">
      {nodes.map((node, i) => {
        const key = `${depth}-${i}-${node.title}`;
        const hasChildren = !!node.children && node.children.length > 0;
        const autoExpand = query.length > 0;
        const isOpen = autoExpand || expanded.has(key);
        return (
          <li key={key}>
            <div
              className={`flex items-center justify-between rounded-md px-3 py-2 ${
                hasChildren ? "cursor-pointer hover:bg-accent hover:text-accent-foreground" : ""
              } ${node.href ? "cursor-pointer hover:bg-accent hover:text-accent-foreground" : ""}`}
              style={{ paddingLeft: `${12 + depth * 16}px` }}
              onClick={() => {
                if (hasChildren) {
                  toggle(key);
                } else if (node.href) {
                  window.location.href = node.href;
                }
              }}
            >
              <div className="flex items-center gap-2">
                {hasChildren && (
                  <ChevronRight
                    className={`h-4 w-4 text-red-600 transition-transform ${isOpen ? "rotate-90" : ""}`}
                  />
                )}
                <span className="text-sm">
                  {highlight(node.title, query)}
                </span>
              </div>
              {node.page !== undefined && (
                <span className="text-xs text-muted-foreground font-mono">{node.page}</span>
              )}
            </div>
            {hasChildren && isOpen && (
              <div className="mt-1">
                <TopicList
                  nodes={node.children!}
                  expanded={expanded}
                  toggle={toggle}
                  depth={depth + 1}
                  query={query}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

const Index = () => {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const visible = useMemo(() => filterTree(tocData, query), [query]);

  const toggle = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h1 className="text-2xl font-bold text-foreground">TABLE OF CONTENTS</h1>
              <div className="w-72 max-w-full">
                <Input
                  placeholder="Search topics..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            <TopicList nodes={visible} expanded={expanded} toggle={toggle} query={query} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
