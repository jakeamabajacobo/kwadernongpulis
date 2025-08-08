import { Header } from "@/components/Header";
import { CategoryTabs } from "@/components/CategoryTabs";
import { CategoryCard } from "@/components/CategoryCard";

const categories = [
  { title: "Action & Adventure", bookCount: 515, href: "/category/action-adventure" },
  { title: "Adventure", bookCount: 3971, href: "/category/adventure" },
  { title: "African American fiction", bookCount: 219, href: "/category/african-american-fiction" },
  { title: "Alternative history", bookCount: 104, href: "/category/alternative-history" },
  { title: "Anthologies", bookCount: 1288, href: "/category/anthologies" },
  { title: "Art", bookCount: 795, href: "/category/art" },
  { title: "Biographical", bookCount: 183, href: "/category/biographical" },
  { title: "Biography", bookCount: 2435, href: "/category/biography" },
  { title: "Business", bookCount: 99, href: "/category/business" },
  { title: "Children", bookCount: 460, href: "/category/children" },
  { title: "Children's Books", bookCount: 579, href: "/category/childrens-books" },
  { title: "Christian", bookCount: 892, href: "/category/christian" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryTabs />
      
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              bookCount={category.bookCount}
              href={category.href}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
