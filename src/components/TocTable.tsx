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
import { contentData } from "@/data/contentData";

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
  
  const href = `/topic/${title}`;
  
  // Debug logging for specific items
  if (node.title.includes('Police Uniform and Accessories') || 
      node.title.includes('Agency Prescribed Uniform') ||
      node.title.includes('Appearing Before the Public') ||
      node.title.includes('Carrying of Basic Police Equipment')) {
    console.log(`generateHref for "${node.title}":`, {
      originalTitle: node.title,
      afterToLowerCase: node.title.toLowerCase(),
      afterReplaceSpecialChars: node.title.toLowerCase().replace(/[^a-z0-9\s]/g, ''),
      afterReplaceSpaces: node.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-'),
      afterReplaceSection: node.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').replace(/section\s+(\d+)-(\d+)/, 'section-$1-$2'),
      finalTitle: title,
      finalHref: href
    });
  }
  
  return href;
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
    // Don't navigate for 1.1 Agency Prescribed Uniform since content is displayed directly
    if (node.title === "1.1 Agency Prescribed Uniform") {
      console.log(`Row click on "${node.title}" - content displayed directly, not navigating.`);
      return;
    }
    
    // Don't navigate for Section 1-1 Police Uniform and Accessories
    if (node.title === "Section 1-1 Police Uniform and Accessories") {
      console.log(`Row click on "${node.title}" - not navigating.`);
      return;
    }
    
    const topicId = href.replace('/topic/', '');
    const hasAssociatedContent = !!contentData[topicId]; // Check if content exists for this node's generated ID
    
    // Debug logging for specific items
    if (node.title.includes('Police Uniform and Accessories') || 
        node.title.includes('Agency Prescribed Uniform') ||
        node.title.includes('Appearing Before the Public') ||
        node.title.includes('Carrying of Basic Police Equipment')) {
      console.log(`handleRowClick for "${node.title}":`, { node, href, hasChildren: hasChildren(node), hasAssociatedContent, topicId });
    }
    
    if (hasAssociatedContent) {
      // If this node has content, navigate to its topic page
      console.log(`Navigating to: ${href}`);
      navigate(href);
    } else if (hasChildren(node)) {
      // If it has children but NO direct content, clicking the row should just toggle expansion.
      // However, the current setup relies on the expand button for toggling.
      // So, if it's a parent without direct content, the row click should do nothing.
      console.log(`Row click on "${node.title}" (no direct content, has children). Not navigating.`);
      // Don't navigate, just toggle expansion
      return;
    } else {
      // Navigate to topic page
      console.log(`Navigating to: ${href}`);
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
                  ${hasChildren(node) && !["CHAPTER 1 GENERAL GUIDELINES", "1.1 Agency Prescribed Uniform", "1.2 Appearing Before the Public", "1.3 Carrying of Basic Police Equipment", "1.4 Patrol Operations", "1.5 Law Enforcement Operations", "1.6 Internal Security Operations", "1.7 Public Safety Operations", "1.8 Special Police Operations", "1.9 Investigation Operations", "1.10 Police Community Relations", "Section 1-1 Police Uniform and Accessories", "Section 1-2 Categories of Police Operations"].includes(node.title) ? 'cursor-pointer' : ''}
                  ${depth === 0 ? 'font-semibold bg-primary/5 border-l-4 border-primary' : ''}
                  ${depth === 1 ? 'font-medium bg-secondary/30 border-l-2 border-secondary' : ''}
                  ${depth >= 2 ? 'text-sm border-l border-muted' : ''}
                  hover:bg-accent/50
                  ${isVisible ? 'opacity-100' : 'opacity-50'}
                `}
                onClick={!["CHAPTER 1 GENERAL GUIDELINES", "1.1 Agency Prescribed Uniform", "1.2 Appearing Before the Public", "1.3 Carrying of Basic Police Equipment", "1.4 Patrol Operations", "1.5 Law Enforcement Operations", "1.6 Internal Security Operations", "1.7 Public Safety Operations", "1.8 Special Police Operations", "1.9 Investigation Operations", "1.10 Police Community Relations", "Section 1-1 Police Uniform and Accessories", "Section 1-2 Categories of Police Operations"].includes(node.title) ? () => handleRowClick(node, href) : undefined}
              >
                <TableCell style={getRowStyle(depth)} className="table-cell-elegant">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                      {getExpandIcon(node, depth, index)}
                    </div>
                    <div className="flex-1">
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
                      
                                    {/* Display content directly for multiple sections */}
              {node.title === "CHAPTER 1 GENERAL GUIDELINES" && (
                <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Chapter 1
                  </p>
                </div>
              )}
              
              {node.title === "Section 1-1 Police Uniform and Accessories" && (
                <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    1.1 Agency Prescribed Uniform. A police officer shall always wear the prescribed uniform for the kind of police operation to be undertaken (Annex "A").
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    1.2 Appearing Before the Public. When wearing the police uniform, a police officer shall, at all times, appear to look presentable, respectable, smart, and well-groomed. A police officer shall refrain from doing unnecessary activities and/or actions while on duty.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    1.3 Carrying of Basic Police Equipment. Every police officer on patrol, whether on board a vehicle or on foot patrol, shall always carry with him/her his/her issued firearm, and other equipment such as but not limited to restraint device, impact device and personal protective equipment. He/she shall also use other accessories required for the specific police operation being conducted.
                  </p>
                </div>
              )}
              
              {node.title === "Section 1-2 Categories of Police Operations" && (
                <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Police operations are categorized into distinct types based on their purpose, scope, and required resources. Understanding these categories helps ensure appropriate planning, resource allocation, and execution of law enforcement activities. Each category has specific procedures, requirements, and protocols that must be followed for effective implementation.
                  </p>
                </div>
              )}
              
              {node.title === "1.1 Agency Prescribed Uniform" && (
                        <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            A police officer shall always wear the prescribed uniform for the kind of police operation to be undertaken (Annex "A").
                          </p>
                        </div>
                      )}
                      
                      {node.title === "1.2 Appearing Before the Public" && (
                        <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            When wearing the police uniform, a police officer shall, at all times, appear to look presentable, respectable, smart, and well-groomed. A police officer shall refrain from doing unnecessary activities and/or actions while on duty.
                          </p>
                        </div>
                      )}
                      
                      {node.title === "1.3 Carrying of Basic Police Equipment" && (
                        <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Every police officer on patrol, whether on board a vehicle or on foot patrol, shall always carry with him/her his/her issued firearm, and other equipment such as but not limited to restraint device, impact device and personal protective equipment. He/she shall also use other accessories required for the specific police operation being conducted.
                          </p>
                        </div>
                      )}
                      
                      {node.title === "1.4 Patrol Operations" && (
                        <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Patrol operations form the backbone of community policing and crime prevention efforts. These operations involve regular monitoring of assigned areas, responding to calls for service, and maintaining visible police presence. Effective patrol operations require strategic deployment, proper equipment, and continuous communication with command centers.
                          </p>
                        </div>
                      )}
                      
                      {node.title === "1.5 Law Enforcement Operations" && (
                        <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Law enforcement operations focus on the detection, investigation, and prevention of criminal activities. These operations include arrest procedures, search and seizure activities, and evidence collection. All law enforcement operations must comply with legal requirements and constitutional protections.
                          </p>
                        </div>
                      )}
                      
                      {node.title === "1.6 Internal Security Operations" && (
                        <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Internal security operations address threats to national security and public order. These operations require coordination with other government agencies and specialized units. Proper protocols must be followed to ensure effective response while protecting civil liberties.
                          </p>
                        </div>
                      )}
                      
                      {node.title === "1.7 Public Safety Operations" && (
                        <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Public safety operations focus on protecting the public from various hazards and emergencies. These operations include disaster response, crowd control, and emergency management activities. Coordination with emergency services and community organizations is essential for effective response.
                          </p>
                        </div>
                      )}
                      
                      {node.title === "1.8 Special Police Operations" && (
                        <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Special police operations involve specialized tactics and equipment for unique situations. These operations may include hostage rescue, counter-terrorism, and high-risk interventions. Specialized training and equipment are required for personnel involved in these operations.
                          </p>
                        </div>
                      )}
                      
                      {node.title === "1.9 Investigation Operations" && (
                        <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Investigation operations focus on gathering evidence and information to solve crimes. These operations require specialized skills in evidence collection, witness interviews, and case management. Proper documentation and chain of custody procedures are essential for successful prosecutions.
                          </p>
                        </div>
                      )}
                      
                      {node.title === "1.10 Police Community Relations" && (
                        <div className="mt-2 p-3 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Police community relations focus on building trust and cooperation between law enforcement and the community. These activities include community outreach, educational programs, and partnership initiatives. Strong community relations enhance public safety and support for law enforcement efforts.
                          </p>
                        </div>
                      )}
                    </div>
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
