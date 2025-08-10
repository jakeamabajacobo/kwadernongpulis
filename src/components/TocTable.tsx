import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ChevronDown, Search, Folder, FolderOpen, FileText, Download, BookOpen, FileText as FileTextIcon, Layers } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TocNode } from "@/pages/tocData";
import { contentData } from "@/data/contentData";

// Helper function to generate href for a topic
const generateHref = (node: TocNode, depth: number, index: number): string => {
  const key = `${depth}-${index}-${node.title}`;
  
  // If node already has an href, use it
  if (node.href) {
    return node.href;
  }
  
  // COMMENTED OUT: Generate href for chapters 2-4 to prevent navigation
  // Check if this is a chapter 2, 3, or 4 node
  if (node.title.includes('CHAPTER 2') || 
      node.title.includes('CHAPTER 3') || 
      node.title.includes('CHAPTER 4') ||
      node.title.includes('Section 2-') ||
      node.title.includes('Section 3-') ||
      node.title.includes('Section 4-') ||
      node.title.includes('2.') ||
      node.title.includes('3.') ||
      node.title.includes('4.')) {
    // Return empty string for chapters 2-4 to disable href links
    return '';
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
    
    // Show children if expanded OR if it's Section 2-1 Pre-Operational Clearance
    if (hasChildren && (isExpanded || node.title === "Section 2-1 Pre-Operational Clearance")) {
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
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  const visible = useMemo(() => filterTree(data, query), [data, query]);
  const flattenedData = useMemo(() => flattenTocData(visible, 0, expanded), [visible, expanded]);
  
  const toggle = (key: string) => {
    // Don't allow toggling for Section 2-1 Pre-Operational Clearance
    if (key.includes("Section 2-1 Pre-Operational Clearance")) {
      return;
    }
    
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };
  
  const isExpanded = (node: TocNode, depth: number, index: number) => {
    // Always show Section 2-1 Pre-Operational Clearance as expanded
    if (node.title === "Section 2-1 Pre-Operational Clearance") {
      return true;
    }
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
    
    // Always show Section 2-1 Pre-Operational Clearance as expanded
    if (node.title === "Section 2-1 Pre-Operational Clearance") {
      return <FolderOpen className="h-4 w-4 text-primary" />;
    }
    
    return expanded ? (
      <FolderOpen className="h-4 w-4 text-primary" />
    ) : (
      <Folder className="h-4 w-4 text-primary" />
    );
  };
  
  const getChevronIcon = (node: TocNode, depth: number, index: number) => {
    const expanded = isExpanded(node, depth, index);
    
    // Always show Section 2-1 Pre-Operational Clearance as expanded
    if (node.title === "Section 2-1 Pre-Operational Clearance") {
      return <ChevronDown className="h-4 w-4 text-primary" />;
    }
    
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
    // Don't navigate if href is empty (chapters 2-4)
    if (!href || href === '') {
      console.log(`Row click on "${node.title}" - href is empty, not navigating.`);
      return;
    }
    
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
    
    // Don't navigate for sections 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, and 2.9 since content is displayed directly
    if (["2.1 Inter-Office Coordination", "2.2 Coordination by Filing Coordination Form", "2.3 Coordination by Practical/Available Means of Communication", "2.4 Basic Requirements", "2.5 Use of Megaphones and Similar Instruments/devices", "2.6 Accessories", "2.7 Use of Body Worn Camera", "2.8 Application of Necessary and Reasonable Force", "2.9 The Force Continuum"].includes(node.title)) {
      console.log(`Row click on "${node.title}" - content displayed directly, not navigating.`);
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
      
      {/* Card-based Layout */}
      <div className="space-y-4">
            {flattenedData.map(({ node, depth, key, isVisible, href }, index) => (
          <Card 
                key={key}
                className={`
              transition-all duration-300 hover:shadow-lg hover:scale-[1.02]
              ${hasChildren(node) && !["CHAPTER 1 GENERAL GUIDELINES", "1.1 Agency Prescribed Uniform", "1.2 Appearing Before the Public", "1.3 Carrying of Basic Police Equipment", "1.4 Patrol Operations", "1.5 Law Enforcement Operations", "1.6 Internal Security Operations", "1.7 Public Safety Operations", "1.8 Special Police Operations", "1.9 Investigation Operations", "1.10 Police Community Relations", "2.1 Inter-Office Coordination", "2.2 Coordination by Filing Coordination Form", "2.3 Coordination by Practical/Available Means of Communication", "2.4 Basic Requirements", "2.5 Use of Megaphones and Similar Instruments/devices", "2.6 Accessories", "2.7 Use of Body Worn Camera", "2.8 Application of Necessary and Reasonable Force", "2.9 The Force Continuum", "Section 1-1 Police Uniform and Accessories", "Section 1-2 Categories of Police Operations"].includes(node.title) && href && href !== '' ? 'cursor-pointer hover:bg-accent/30' : ''}
              ${depth === 0 ? 'border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent shadow-md' : ''}
              ${depth === 1 ? 'border-l-4 border-l-secondary bg-gradient-to-r from-secondary/5 to-transparent shadow-sm' : ''}
              ${depth >= 2 ? 'border-l-2 border-l-muted bg-gradient-to-r from-muted/5 to-transparent' : ''}
                  ${isVisible ? 'opacity-100' : 'opacity-50'}
                `}
            onClick={!["CHAPTER 1 GENERAL GUIDELINES", "1.1 Agency Prescribed Uniform", "1.2 Appearing Before the Public", "1.3 Carrying of Basic Police Equipment", "1.4 Patrol Operations", "1.5 Law Enforcement Operations", "1.6 Internal Security Operations", "1.7 Public Safety Operations", "1.8 Special Police Operations", "1.9 Investigation Operations", "1.10 Police Community Relations", "2.1 Inter-Office Coordination", "2.2 Coordination by Filing Coordination Form", "2.3 Coordination by Practical/Available Means of Communication", "2.4 Basic Requirements", "2.5 Use of Megaphones and Similar Instruments/devices", "2.6 Accessories", "2.7 Use of Body Worn Camera", "Section 1-1 Police Uniform and Accessories", "Section 1-2 Categories of Police Operations"].includes(node.title) && href && href !== '' ? () => handleRowClick(node, href) : undefined}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  {/* Expand/Collapse Icon */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                      {getExpandIcon(node, depth, index)}
                    </div>
                  
                  {/* Title and Icon */}
                  <div className="flex items-center gap-2 flex-1">
                    <div className={`
                      ${depth === 0 ? 'text-primary' : 'text-muted-foreground'}
                      ${depth === 0 ? 'text-2xl' : depth === 1 ? 'text-lg' : 'text-base'}
                    `}>
                      {depth === 0 ? <BookOpen className="h-6 w-6" /> : 
                       depth === 1 ? <Layers className="h-5 w-5" /> : 
                       <FileTextIcon className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <h3 className={`
                        ${depth === 0 ? 'text-primary font-bold text-xl' : ''}
                        ${depth === 1 ? 'text-foreground font-semibold text-lg' : ''}
                        ${depth >= 2 ? 'text-muted-foreground font-medium' : ''}
                      transition-colors duration-200
                    `}>
                      {node.title}
                      </h3>
                    {hasChildren(node) && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {node.children!.length} {node.children!.length === 1 ? 'item' : 'items'}
                        </p>
                    )}
                  </div>
                  </div>
                </div>
                
                {/* Page Number */}
                  {node.page !== undefined && (
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20 shadow-sm">
                      Page {node.page}
                    </span>
                  </div>
                  )}
                
                {/* Expand Button for Parent Nodes */}
                  {hasChildren(node) && (
                  <Button
                    variant="ghost"
                    size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggle(key);
                      }}
                    className="ml-2 hover:bg-accent hover:shadow-md transition-all duration-200"
                      title={isExpanded(node, depth, index) ? "Collapse" : "Expand"}
                    >
                      {getChevronIcon(node, depth, index)}
                  </Button>
                )}
              </div>
            </CardHeader>
            
            {/* Content Display */}
            <CardContent className="pt-0">
              {/* Display content directly for multiple sections */}
              {node.title === "CHAPTER 1 GENERAL GUIDELINES" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Chapter Overview</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Chapter 1
                  </p>
                </div>
              )}
              
              {node.title === "Section 1-1 Police Uniform and Accessories" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-lg border border-secondary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">Section Content</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/50 rounded-lg border-l-4 border-l-primary">
                      <h4 className="text-sm font-semibold text-primary mb-1">1.1 Agency Prescribed Uniform</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A police officer shall always wear the prescribed uniform for the kind of police operation to be undertaken (Annex "A").
                      </p>
                    </div>
                    <div className="p-3 bg-white/50 rounded-lg border-l-4 border-l-secondary">
                      <h4 className="text-sm font-semibold text-secondary mb-1">1.2 Appearing Before the Public</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        When wearing the police uniform, a police officer shall, at all times, appear to look presentable, respectable, smart, and well-groomed. A police officer shall refrain from doing unnecessary activities and/or actions while on duty.
                      </p>
                    </div>
                    <div className="p-3 bg-white/50 rounded-lg border-l-4 border-l-accent">
                      <h4 className="text-sm font-semibold text-accent-foreground mb-1">1.3 Carrying of Basic Police Equipment</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Every police officer on patrol, whether on board a vehicle or on foot patrol, shall always carry with him/her his/her issued firearm, and other equipment such as but not limited to restraint device, impact device and personal protective equipment. He/she shall also use other accessories required for the specific police operation being conducted.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {node.title === "Section 1-2 Categories of Police Operations" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-lg border border-secondary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">Section Overview</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Police operations are categorized into distinct types based on their purpose, scope, and required resources. Understanding these categories helps ensure appropriate planning, resource allocation, and execution of law enforcement activities. Each category has specific procedures, requirements, and protocols that must be followed for effective implementation.
                  </p>
                </div>
              )}
              
              {node.title === "Section 2-1 Pre-Operational Clearance" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-lg border border-secondary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">Section Content</span>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg border-l-4 border-l-primary">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      In all planned police operations, the team leader of the operating team/s shall secure a Pre-Operation Clearance prior to the conduct of operation. This clearance must be approved by their Chief/Commander/Head of Office/Unit and must be submitted at the Operations Section/Division of the concerned operating police units for record purposes.
                    </p>
                  </div>
                </div>
              )}
              
              {node.title === "1.1 Agency Prescribed Uniform" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A police officer shall always wear the prescribed uniform for the kind of police operation to be undertaken (Annex "A").
                  </p>
                </div>
              )}
              
              {node.title === "1.2 Appearing Before the Public" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    When wearing the police uniform, a police officer shall, at all times, appear to look presentable, respectable, smart, and well-groomed. A police officer shall refrain from doing unnecessary activities and/or actions while on duty.
                  </p>
                </div>
              )}
              
              {node.title === "1.3 Carrying of Basic Police Equipment" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every police officer on patrol, whether on board a vehicle or on foot patrol, shall always carry with him/her his/her issued firearm, and other equipment such as but not limited to restraint device, impact device and personal protective equipment. He/she shall also use other accessories required for the specific police operation being conducted.
                  </p>
                </div>
              )}
              
              {node.title === "1.4 Patrol Operations" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Patrol operations form the backbone of community policing and crime prevention efforts. These operations involve regular monitoring of assigned areas, responding to calls for service, and maintaining visible police presence. Effective patrol operations require strategic deployment, proper equipment, and continuous communication with command centers.
                  </p>
                </div>
              )}
              
              {node.title === "1.5 Law Enforcement Operations" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Law enforcement operations focus on the detection, investigation, and prevention of criminal activities. These operations include arrest procedures, search and seizure activities, and evidence collection. All law enforcement operations must comply with legal requirements and constitutional protections.
                  </p>
                </div>
              )}
              
              {node.title === "1.6 Internal Security Operations" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Internal security operations address threats to national security and public order. These operations require coordination with other government agencies and specialized units. Proper protocols must be followed to ensure effective response while protecting civil liberties.
                  </p>
                </div>
              )}
              
              {node.title === "1.7 Public Safety Operations" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Public safety operations focus on protecting the public from various hazards and emergencies. These operations include disaster response, crowd control, and emergency management activities. Coordination with emergency services and community organizations is essential for effective response.
                  </p>
                </div>
              )}
              
              {node.title === "1.8 Special Police Operations" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Special police operations involve specialized tactics and equipment for unique situations. These operations may include hostage rescue, counter-terrorism, and high-risk interventions. Specialized training and equipment are required for personnel involved in these operations.
                  </p>
                </div>
              )}
              
              {node.title === "1.9 Investigation Operations" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Investigation operations focus on gathering evidence and information to solve crimes. These operations require specialized skills in evidence collection, witness interviews, and case management. Proper documentation and chain of custody procedures are essential for successful prosecutions.
                  </p>
                </div>
              )}
              
              {node.title === "1.10 Police Community Relations" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Police community relations focus on building trust and cooperation between law enforcement and the community. These activities include community outreach, educational programs, and partnership initiatives. Strong community relations enhance public safety and support for law enforcement efforts.
                  </p>
                </div>
              )}
              
              {node.title === "2.1 Inter-Office Coordination" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The operations officer or Team Leader/s (TL) of Local Police Units (LPUs) operating outside their territorial jurisdiction and National Support units (NSUs) shall, whenever practicable, coordinate personally at any levels of police offices (Police Regional Office (PRO) to Municipal Police Station (MPS)) or other friendly units within whose jurisdiction the operation is to be conducted.
                  </p>
                </div>
              )}
              
              {node.title === "2.2 Coordination by Filing Coordination Form" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Prior to the launching of the operation except in cases where the formal (in writing) inter-unit coordination cannot be made due to the nature and/or urgency of the situation such as, but not limited to, cross-jurisdiction pursuit operations, coordination should be made formally using the prescribed Coordination Form, which shall be filed with the Chapter 2 PNPM-DO-D-0-2-13-21 RESTRICTED RESTRICTED 5 concerned operation center of the Police Regional, Provincial or City Police Office and Police Stations (Annex "B").
                  </p>
                </div>
              )}
              
              {node.title === "2.3 Coordination by Practical/Available Means of Communication" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    In cases where formal inter-unit coordination is not feasible, the Police Unit concerned shall endeavor to notify the Local Police Unit (LPU) through any practical/available means of communication including but not limited to electronic or signal communication at any time before the operation and shall accomplish and furnish the LPU a written incident report immediately after the termination of the operation.
                  </p>
                </div>
              )}
              
              {node.title === "2.4 Basic Requirements" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Police operations such as but not limited to arrest, search and seizure, checkpoint, roadblocks, and civil disturbance management shall, whenever applicable and practicable, be conducted as follows: a. With marked police vehicle; b. Led by a Police Commissioned Officer (PCO) or the most senior Police Non-Commissioned Officer (PNCO) in the absence or unavailability of a PCO; and c. With personnel in prescribed police uniform except for covert operatives when serving warrant of arrest provided personnel in uniform shall be present during the arrest d. With the use of Body Worn Cameras (BWCs) and/or Alternative Recording Devices (ARDs) during the conduct of searches and arrests.
                  </p>
                </div>
              )}
              
              {node.title === "2.5 Use of Megaphones and Similar Instruments/devices" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    During actual police intervention operations, the Team Leader shall use peaceful means including the use of megaphones or any other similar instruments/devices to warn or influence the offender/s or suspect/s to stop and/or peacefully surrender.
                  </p>
                </div>
              )}
              
              {node.title === "2.6 Accessories" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A police officer may carry or use accessories appropriate to the police operation being performed. Accessories may include, ballistic vest, handheld radio, first aid kit, flashlight, hand cuff, whistle and non-lethal equipment Chapter 2 PNPM-DO-D-0-2-13-21 RESTRICTED RESTRICTED 6 including but not limited to baton, truncheon, and night stick to be used in a nonarmed confrontation with a violent, uncooperative and unruly offender.
                  </p>
                </div>
              )}
              
              {node.title === "2.7 Use of Body Worn Camera" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                    <p>
                      <strong>a. Chain of Custody over the Recordings in the Execution of Arrest and Search:</strong> The chain of custody over the recordings shall at all times be preserved from improper access, review, and tampering. It shall cover the following events:
                    </p>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>Recording of the footage using the BWCs/ARDs;</li>
                      <li>Turnover of the BWCs/ARDs used by the arresting or searching team, or of the data by the media representative to the Data Custodian to which they belong;</li>
                      <li>Downloading of the data by the Data Custodian;</li>
                      <li>Redaction of personal identities by the Data Custodian or his/her representative, whenever applicable;</li>
                      <li>Retrieval of recording data and their transfer to an external media storage device by the Data Custodian;</li>
                      <li>Submission and delivery of the recordings contained in an external media storage device to the court.</li>
                    </ol>
                    <p>
                      <strong>b.</strong> The BWC/ARD shall be used/activated during the conduct of arrest, search and whenever practicable, in cases of warrantless arrests. The rules on the use of BWC under A.M. No. 21-06-08-SC shall be observed.
                    </p>
                    <p>
                      <strong>c.</strong> The BWC/ARD shall not be used/activated in the following circumstances:
                    </p>
                    <ol className="list-decimal list-inside ml-4 space-y-1">
                      <li>In police facilities unless in an official capacity, or as part of an investigation procedure;</li>
                      <li>Conduct of any personal activity (in any location where individuals have a reasonable expectation of privacy, such as restrooms, Chapter 2 PNPM-DO-D-0-2-13-21 RESTRICTED RESTRICTED 7 locker rooms, or break rooms). As a reminder, there is potential criminal and civil liability if this restriction is violated;</li>
                      <li>Conduct of any personal activity in locations where individuals have reasonable expectation of privacy such as in residences, unless the recording is being made pursuant to a valid arrest or search warrant of the individuals or locations;</li>
                      <li>During strip or body cavity searches when such is necessary as provided in the warrant;</li>
                      <li>Conduct of tactical planning before the planned operation;</li>
                      <li>Intentionally activated to record conversations/communications between PNP personnel without their knowledge during routine, and other non-law enforcement related activities;</li>
                      <li>Between confidential informants or undercover officers;</li>
                      <li>Privileged communications between the subject of recordings and other individuals, such as attorneys, members of the clergy, peer support councilors and medical professionals;</li>
                      <li>While on the grounds of any public, private or parochial elementary or secondary school, hospitals, churches and other places of worship except when responding to an imminent threat to life or health; and</li>
                      <li>Other circumstances as may be provided by the trial court issuing the warrant which is part of constitutional privilege and where the dignity of an individual may outweigh the public necessity for recording.</li>
                    </ol>
                  </div>
                </div>
              )}
              
              {node.title === "2.8 Application of Necessary and Reasonable Force" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                    <p>
                      <strong>a. Use of Force:</strong> The use of force by police officers is authorized only when necessary and reasonable to accomplish a lawful objective. The degree of force used must be proportional to the threat or resistance encountered.
                    </p>
                    <p>
                      <strong>b. Necessity:</strong> Force may only be used when there is no reasonable alternative available to accomplish the lawful objective. Officers must consider whether the use of force is necessary under the circumstances.
                    </p>
                    <p>
                      <strong>c. Reasonableness:</strong> The amount and type of force used must be reasonable under the circumstances. Officers must consider factors such as:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>The severity of the crime or threat</li>
                      <li>Whether the suspect poses an immediate threat to the safety of officers or others</li>
                      <li>Whether the suspect is actively resisting arrest or attempting to evade arrest by flight</li>
                      <li>The availability of alternative methods to accomplish the objective</li>
                    </ul>
                    <p>
                      <strong>d. De-escalation:</strong> Officers must attempt to de-escalate situations when possible and reasonable to do so, using communication and other non-force methods to resolve conflicts.
                    </p>
                  </div>
                </div>
              )}
              
              {node.title === "2.9 The Force Continuum" && (
                <div className="mt-2 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Topic Content</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                    <p>
                      <strong>The Force Continuum:</strong> Police officers must follow the force continuum, which provides a framework for determining the appropriate level of force to use in any given situation. The continuum includes:
                    </p>
                    <ol className="list-decimal list-inside ml-4 space-y-2">
                      <li>
                        <strong>Officer Presence:</strong> The mere presence of a police officer in uniform is often sufficient to gain compliance.
                      </li>
                      <li>
                        <strong>Verbal Commands:</strong> Clear, calm, and professional verbal commands should be used to direct individuals.
                      </li>
                      <li>
                        <strong>Soft Empty Hand Control:</strong> Techniques such as escort holds, wrist locks, and pressure point applications.
                      </li>
                      <li>
                        <strong>Hard Empty Hand Control:</strong> Strikes, kicks, and other defensive tactics when necessary.
                      </li>
                      <li>
                        <strong>Intermediate Weapons:</strong> Use of batons, pepper spray, or other less-lethal weapons.
                      </li>
                      <li>
                        <strong>Lethal Force:</strong> Use of firearms only when there is an immediate threat of death or serious bodily injury.
                      </li>
                    </ol>
                    <p>
                      <strong>Progressive Response:</strong> Officers should progress through the continuum based on the subject's behavior and the circumstances. Officers may skip levels if the situation escalates rapidly.
                    </p>
                    <p>
                      <strong>Documentation:</strong> All uses of force must be documented in detail, including the circumstances, the level of force used, and the justification for its use.
                    </p>
                    
                    <div className="mt-6 pt-4 border-t border-primary/20">
                      <h4 className="text-base font-semibold text-primary mb-3">a. Three Approaches on The Use of Force Continuum</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-semibold text-muted-foreground mb-2">1) Non-Lethal Approach</h5>
                          <p className="text-sm text-muted-foreground mb-3">
                            This involves the police presence in crime-prone areas and the employment of activities or actions to persuade and/or request cooperation of people particularly suspects and law offenders to police instructions and other control efforts.
                          </p>
                          
                          <div className="bg-muted/30 rounded-lg p-3 mb-3">
                            <h6 className="text-xs font-semibold text-primary mb-2">Table 1.1 Non-Lethal Approach</h6>
                            
                            <div className="space-y-3 text-xs">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <div className="font-medium text-primary">Officer's Presence</div>
                                <div className="font-medium text-primary">Suspect Threats or Resistance: Cooperative</div>
                                <div className="font-medium text-primary">Police Response/Equipment</div>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <div className="text-muted-foreground">• Compliant and cooperative with police control efforts.</div>
                                <div className="text-muted-foreground">• Display professional and respectable deportment.</div>
                                <div className="text-muted-foreground">• Wear the prescribed uniform with the equipment securely attached to the rig or utility belt.</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-muted/30 rounded-lg p-3 mb-3">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div className="font-medium text-primary">Verbal Command</div>
                              <div className="font-medium text-primary">Suspect Threats or Resistance: Non-Verbal and Verbal Non-Compliance</div>
                              <div className="font-medium text-primary">Police Response/Equipment</div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                              <div className="text-muted-foreground">• Non-compliant, uncooperative or resist to follow police control efforts.</div>
                              <div className="text-muted-foreground">• Do not present immediate physical resistance or threats of physical injury to the police or to other persons.</div>
                              <div className="text-muted-foreground">
                                • Employ communication techniques, including: request, persuasion, command and/or issuance of warning by voice, print and/or electronic in clear and understandable manner.<br/>
                                • Use of whistle<br/>
                                • Use of language that is known to the offender or in the national language<br/>
                                • The verbal command shall be done in a loud, firm and clear manner.<br/>
                                • Use of sign language for speech-impaired offenders
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-muted/30 rounded-lg p-3 mb-3">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div className="font-medium text-primary">Physical Control-Soft Hand Technique</div>
                              <div className="font-medium text-primary">Suspect Threats or Resistance: Passive Resistance</div>
                              <div className="font-medium text-primary">Police Response/Equipment</div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                              <div className="text-muted-foreground">• Unarmed</div>
                              <div className="text-muted-foreground">• Non-compliant, uncooperative and verbally abusive.</div>
                              <div className="text-muted-foreground">
                                • Ensure the employment of reasonable force that will cause no harm or minimal chance of injury to the suspect or law offender.<br/>
                                • Includes but not limited to:<br/>
                                &nbsp;&nbsp;o Use of bare hands to guide, escort, hold and/or apply restraining equipment (handcuffs or flex cuffs/plastic strap).<br/>
                                &nbsp;&nbsp;o Application of body joint manipulation, immobilization and/or touch pressure point stimulation to ensure cooperation, compliance or surrender.
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-muted/30 rounded-lg p-3 mb-3">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div className="font-medium text-primary">Physical Control-Hard Hand Technique</div>
                              <div className="font-medium text-primary">Suspect Threats or Resistance: Active Resistance</div>
                              <div className="font-medium text-primary">Police Response/Equipment</div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                              <div className="text-muted-foreground">• Unarmed.</div>
                              <div className="text-muted-foreground">• Non-compliant, uncooperative and verbally abusive.</div>
                              <div className="text-muted-foreground">
                                • As much as possible, the employment of reasonable force will not result to serious injury.<br/>
                                • Employ reasonable physical control and/or pain-compliant techniques, such as: punches, kicks and other striking techniques to ensure cooperation, compliance or surrender.<br/>
                                • May orally summon as many persons as he/she deems necessary to assist him/her in effecting the arrest.
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-semibold text-muted-foreground mb-2">2) Less Lethal Approach</h5>
                          <p className="text-sm text-muted-foreground">
                            This involves the employment of less lethal equipment that do not cause serious injury and/or death and that less physical measures have been tried and deemed inappropriate purposely to ensure cooperation, compliance or surrender. The age, gender and health condition of offenders shall be considered before the employment of less lethal equipment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-4 justify-between items-center">
        {/* Expand/Collapse All Buttons */}
        <div className="flex gap-2">
          <Button
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
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-primary border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
          >
            Expand All
          </Button>
          <Button
            onClick={() => setExpanded(new Set())}
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-muted-foreground border-muted hover:bg-muted/80 transition-all duration-200"
          >
            Collapse All
          </Button>
        </div>
        
        {/* Download Button */}
        <Button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          <Download className="h-4 w-4" />
          Download POP Book
        </Button>
      </div>
    </div>
  );
};
