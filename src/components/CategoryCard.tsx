import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  pageNumber?: number;
  href: string;
  isSubItem?: boolean;
  level?: number;
}

export const CategoryCard = ({ title, pageNumber, href, isSubItem = false, level = 1 }: CategoryCardProps) => {
  const getIndentation = () => {
    if (!isSubItem) return "";
    if (level === 2) return "ml-8";
    return "ml-4";
  };

  return (
    <Link to={href} className="block">
      <Card className={`hover:shadow-md transition-all duration-200 hover:bg-primary-soft border-border ${getIndentation()}`}>
        <CardContent className="flex items-center justify-between p-3">
          <div className="flex-1">
            <h3 className={`${isSubItem ? 'text-sm text-muted-foreground' : 'font-medium text-foreground'}`}>
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            {pageNumber && (
              <span className="text-sm font-mono">{pageNumber}</span>
            )}
            <ChevronRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};