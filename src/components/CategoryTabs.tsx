import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CategoryTabs = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="fiction" className="w-full">
          <TabsList className="h-12 w-full bg-transparent border-b border-primary-foreground/20 rounded-none">
            <TabsTrigger 
              value="fiction" 
              className="flex-1 text-primary-foreground data-[state=active]:bg-primary-foreground/10 data-[state=active]:text-primary-foreground font-medium"
            >
              FICTION
            </TabsTrigger>
            <TabsTrigger 
              value="non-fiction" 
              className="flex-1 text-primary-foreground data-[state=active]:bg-primary-foreground/10 data-[state=active]:text-primary-foreground font-medium"
            >
              NON FICTION
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};