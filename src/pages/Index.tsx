import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { TocTable } from "@/components/TocTable";
import { tocData, TocNode } from "./tocData";
import { useIsMobile } from "@/hooks/use-mobile";

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

const Index = () => {
  const [query, setQuery] = useState("");
  const isMobile = useIsMobile();

  const visible = useMemo(() => filterTree(tocData, query), [query]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Banner Image */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            {isMobile ? (
              // Mobile banner - existing banner.jpeg
              <img 
                src="/banner.jpeg" 
                alt="Philippine National Police Banner" 
                className="w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/banner.jpg";
                  target.onerror = () => {
                    target.src = "/police-logo.png";
                  };
                }}
              />
            ) : (
              // Desktop banner - new banner for web browser
              <img 
                src="/web_banner.jpeg" 
                alt="Philippine National Police Banner" 
                className="w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/banner-web.jpg";
                  target.onerror = () => {
                    target.src = "/banner.jpeg";
                    target.onerror = () => {
                      target.src = "/police-logo.png";
                    };
                  };
                }}
              />
            )}
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-6 mb-8 border border-border/50">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                TABLE OF CONTENTS
              </h1>
            </div>

            <TocTable data={visible} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
