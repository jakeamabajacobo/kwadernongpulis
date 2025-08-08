import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  bookCount: number;
  href: string;
}

export const CategoryCard = ({ title, bookCount, href }: CategoryCardProps) => {
  return (
    <Link to={href} className="block">
      <Card className="hover:shadow-md transition-all duration-200 hover:bg-primary-soft border-border">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex-1">
            <h3 className="font-medium text-foreground">{title}</h3>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="text-sm font-medium">{bookCount} Books</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};