import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ChevronDown, Search, Folder, FolderOpen, FileText, Download } from "lucide-react";
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

// Helper function to generate href for a topic
const generateHref = (node: TocNode, depth: number, index: number): string => {
  const key = `${depth}-${index}-${node.title}`;
  
  // If node already has an href, use it
  if (node.href) {
    return node.href;
  }
  
  // Generate href based on title - create a more specific key
  const title = node.title.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/chapter\s+(\d+)/, 'chapter-$1')
    .replace(/section\s+(\d+)-(\d+)/, 'section-$1-$2')
    .replace(/(\d+)\.(\d+)/, '$1-$2')
    .replace(/general\s+principles/, 'general-principles')
    .replace(/strategic\s+guidelines/, 'strategic-guidelines')
    .replace(/police\s+uniform\s+and\s+accessories/, 'police-uniform-and-accessories')
    .replace(/appearing\s+before\s+the\s+public/, 'appearing-before-the-public')
    .replace(/carrying\s+of\s+basic\s+police\s+equipment/, 'carrying-of-basic-police-equipment')
    .replace(/categories\s+of\s+police\s+operations/, 'categories-of-police-operations')
    .replace(/patrol\s+operations/, 'patrol-operations')
    .replace(/law\s+enforcement\s+operations/, 'law-enforcement-operations')
    .replace(/internal\s+security\s+operations/, 'internal-security-operations')
    .replace(/public\s+safety\s+operations/, 'public-safety-operations')
    .replace(/special\s+police\s+operations/, 'special-police-operations')
    .replace(/investigation\s+operations/, 'investigation-operations')
    .replace(/police\s+community\s+relations/, 'police-community-relations')
    .replace(/operational\s+guidelines/, 'operational-guidelines')
    .replace(/pre-operational\s+clearance/, 'pre-operational-clearance')
    .replace(/coordination/, 'coordination')
    .replace(/inter-office\s+coordination/, 'inter-office-coordination')
    .replace(/coordination\s+by\s+filing\s+coordination\s+form/, 'coordination-by-filing-coordination-form')
    .replace(/coordination\s+by\s+practical-available\s+means\s+of\s+communication/, 'coordination-by-practical-available-means-of-communication')
    .replace(/requirements\s+of\s+police\s+operations/, 'requirements-of-police-operations')
    .replace(/basic\s+requirements/, 'basic-requirements')
    .replace(/use\s+of\s+megaphones\s+and\s+similar\s+instruments-devices/, 'use-of-megaphones-and-similar-instruments-devices')
    .replace(/accessories/, 'accessories')
    .replace(/use\s+of\s+body\s+worn\s+camera/, 'use-of-body-worn-camera')
    .replace(/use\s+of\s+force\s+policy/, 'use-of-force-policy')
    .replace(/application\s+of\s+necessary\s+and\s+reasonable\s+force/, 'application-of-necessary-and-reasonable-force')
    .replace(/the\s+force\s+continuum/, 'the-force-continuum')
    .replace(/responsibility\s+of\s+the\s+police\s+officer\s+in\s+charge\s+of\s+the\s+operations/, 'responsibility-of-the-police-officer-in-charge-of-the-operations')
    .replace(/use\s+of\s+firearm\s+during\s+police\s+operations/, 'use-of-firearm-during-police-operations')
    .replace(/use\s+of\s+firearm\s+when\s+justified/, 'use-of-firearm-when-justified')
    .replace(/firing\s+at\s+moving\s+vehicles\s+is\s+prohibited/, 'firing-at-moving-vehicles-is-prohibited')
    .replace(/filing\s+of\s+an\s+incident\s+report\s+after\s+the\s+use\s+of\s+firearm/, 'filing-of-an-incident-report-after-the-use-of-firearm')
    .replace(/procedures\s+after\s+an\s+armed\s+confrontation/, 'procedures-after-an-armed-confrontation');
  
  return `/topic/${title}`;
};

// Helper function to flatten the tree structure for table display
const flattenTocData = (nodes: TocNode[], depth = 0, expanded: Set<string>): Array<{ node: TocNode; depth: number; key: string; isVisible: boolean; href: string }> => {
  const result: Array<{ node: TocNode; depth: number; key: string; isVisible: boolean; href: string }> = [];
  
  nodes.forEach((node, index) => {
    const key = `${depth}-${index}-${node.title}`;
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expanded.has(key);
    const href = generateHref(node, depth, index);
    
    // Always show the current node
    result.push({ node, depth, key, isVisible: true, href });
    
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
  const navigate = useNavigate();
  
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
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/POP-Manual-2021.pdf';
    link.download = 'POP-Manual-2021.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleRowClick = (node: TocNode, href: string) => {
    if (hasChildren(node)) {
      // Don't navigate, just toggle expansion
      return;
    } else {
      // Navigate to topic page
      navigate(href);
    }
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
            {flattenedData.map(({ node, depth, key, isVisible, href }, index) => (
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
                onClick={() => handleRowClick(node, href)}
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
      
      {/* Action Buttons */}
      <div className="flex gap-4 justify-between items-center">
        {/* Expand/Collapse All Buttons */}
        <div className="flex gap-2">
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
        
        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          <Download className="h-4 w-4" />
          Download POP Book
        </button>
      </div>
    </div>
  );
};
