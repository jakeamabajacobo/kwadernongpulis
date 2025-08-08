import React, { useState, useMemo } from "react";
import { ChevronRight, ChevronDown, Search, Folder, FolderOpen, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TocNode } from "@/pages/tocData";

// Helper function to flatten the tree structure for table display
const flattenTocData = (nodes: TocNode[], depth = 0, expanded: Set<string>): Array<{ node: TocNode; depth: number; key: string; isVisible: boolean }> => {
  const result: Array<{ node: TocNode; depth: number; key: string; isVisible: boolean }> = [];
  
  nodes.forEach((node, index) => {
    const key = `${depth}-${index}-${node.title}`;
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expanded.has(key);
    
    // Always show the current node
    result.push({ node, depth, key, isVisible: true });
    
    // Show children only if expanded
    if (hasChildren && isExpanded) {
      const childResults = flattenTocData(node.children!, depth + 1, expanded);
      result.push(...childResults);
    }
  });
  
  return result;
};

// Helper function to filter tree data
const filterTree = (nodes: TocNode[], query: string): TocNode[] => {
  if (!query) return nodes;
  
  const filtered: TocNode[] = [];
  
  nodes.forEach(node => {
    const matchesQuery = node.title.toLowerCase().includes(query.toLowerCase());
    const children = node.children ? filterTree(node.children, query) : [];
    
    if (matchesQuery || children.length > 0) {
      filtered.push({
        ...node,
        children: children.length > 0 ? children : undefined
      });
    }
  });
  
  return filtered;
};

interface TocTableProps {
  data: TocNode[];
}

export const TocTable: React.FC<TocTableProps> = ({ data }) => {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  
  const visible = useMemo(() => filterTree(data, query), [data, query]);
  const flattenedData = useMemo(() => flattenTocData(visible, 0, expanded), [visible, expanded]);
  
  const toggle = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };
  
  const isExpanded = (node: TocNode, depth: number, index: number) => {
    const key = `${depth}-${index}-${node.title}`;
    return expanded.has(key);
  };
  
  const hasChildren = (node: TocNode) => {
    return node.children && node.children.length > 0;
  };
  
  const getIndentation = (depth: number) => {
    return depth * 24; // 24px per level
  };
  
  const getRowStyle = (depth: number) => {
    const baseStyle = {
      paddingLeft: `${getIndentation(depth)}px`,
      transition: "all 0.3s ease-in-out",
    };
    
    return baseStyle;
  };
  
  const getExpandIcon = (node: TocNode, depth: number, index: number) => {
    const key = `${depth}-${index}-${node.title}`;
    const expanded = isExpanded(node, depth, index);
    const hasChildren = node.children && node.children.length > 0;
    
    if (!hasChildren) {
      return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
    
    return expanded ? (
      <FolderOpen className="h-4 w-4 text-primary" />
    ) : (
      <Folder className="h-4 w-4 text-primary" />
    );
  };
  
  const getChevronIcon = (node: TocNode, depth: number, index: number) => {
    const expanded = isExpanded(node, depth, index);
    return expanded ? (
      <ChevronDown className="h-4 w-4 text-primary" />
    ) : (
      <ChevronRight className="h-4 w-4 text-primary" />
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search topics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 shadow-elegant border-primary/20 focus:border-primary/40 transition-all duration-200"
        />
      </div>
      
      {/* Table */}
      <div className="table-elegant shadow-elegant">
        <Table>
          <TableHeader>
            <TableRow className="table-header-elegant hover:shadow-none hover:scale-100">
              <TableHead className="w-[60%] text-primary font-bold">Topic</TableHead>
              <TableHead className="w-[20%] text-center text-primary font-bold">Page</TableHead>
              <TableHead className="w-[20%] text-center text-primary font-bold">Expand</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {flattenedData.map(({ node, depth, key, isVisible }, index) => (
              <TableRow 
                key={key}
                className={`
                  table-row-elegant shadow-elegant hover:shadow-elegant-hover
                  ${hasChildren(node) ? 'cursor-pointer' : ''}
                  ${depth === 0 ? 'font-semibold bg-primary/5 border-l-4 border-primary' : ''}
                  ${depth === 1 ? 'font-medium bg-secondary/30 border-l-2 border-secondary' : ''}
                  ${depth >= 2 ? 'text-sm border-l border-muted' : ''}
                  hover:bg-accent/50
                  ${isVisible ? 'opacity-100' : 'opacity-50'}
                `}
                onClick={() => {
                  if (hasChildren(node)) {
                    toggle(key);
                  } else if (node.href) {
                    window.location.href = node.href;
                  }
                }}
              >
                <TableCell style={getRowStyle(depth)} className="table-cell-elegant">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                      {getExpandIcon(node, depth, index)}
                    </div>
                    <span className={`
                      ${depth === 0 ? 'text-primary font-bold text-lg' : ''}
                      ${depth === 1 ? 'text-foreground font-semibold' : ''}
                      ${depth >= 2 ? 'text-muted-foreground' : ''}
                      transition-colors duration-200
                    `}>
                      {node.title}
                    </span>
                    {hasChildren(node) && (
                      <span className="text-xs text-muted-foreground ml-2">
                        ({node.children!.length} items)
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-center table-cell-elegant">
                  {node.page !== undefined && (
                    <span className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20 shadow-sm hover:shadow-md transition-all duration-200">
                      {node.page}
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-center table-cell-elegant">
                  {hasChildren(node) && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggle(key);
                      }}
                      className="inline-flex items-center justify-center p-2 rounded-full hover:bg-accent hover:shadow-md transition-all duration-200"
                      title={isExpanded(node, depth, index) ? "Collapse" : "Expand"}
                    >
                      {getChevronIcon(node, depth, index)}
                    </button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Expand/Collapse All Buttons */}
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => {
            const allKeys = new Set<string>();
            const collectKeys = (nodes: TocNode[], depth = 0) => {
              nodes.forEach((node, index) => {
                const key = `${depth}-${index}-${node.title}`;
                if (hasChildren(node)) {
                  allKeys.add(key);
                  if (node.children) {
                    collectKeys(node.children, depth + 1);
                  }
                }
              });
            };
            collectKeys(visible);
            setExpanded(allKeys);
          }}
          className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-md transition-colors duration-200"
        >
          Expand All
        </button>
        <button
          onClick={() => setExpanded(new Set())}
          className="px-4 py-2 text-sm font-medium text-muted-foreground bg-muted hover:bg-muted/80 rounded-md transition-colors duration-200"
        >
          Collapse All
        </button>
      </div>
    </div>
  );
};
