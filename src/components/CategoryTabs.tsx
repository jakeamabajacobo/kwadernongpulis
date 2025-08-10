import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CategoryTabs = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="general-principles" className="w-full">
          <TabsList className="h-12 w-full bg-transparent border-b border-primary-foreground/20 rounded-none">
            <TabsTrigger 
              value="general-principles" 
              className="flex-1 text-primary-foreground data-[state=active]:bg-primary-foreground/10 data-[state=active]:text-primary-foreground font-medium"
            >
              GENERAL PRINCIPLES
            </TabsTrigger>
            <TabsTrigger 
              value="operational-guidelines" 
              className="flex-1 text-primary-foreground data-[state=active]:bg-primary-foreground/10 data-[state=active]:text-primary-foreground font-medium"
            >
              OPERATIONAL GUIDELINES
            </TabsTrigger>
            <TabsTrigger 
              value="police-operations" 
              className="flex-1 text-primary-foreground data-[state=active]:bg-primary-foreground/10 data-[state=active]:text-primary-foreground font-medium"
            >
              POLICE OPERATIONS
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};