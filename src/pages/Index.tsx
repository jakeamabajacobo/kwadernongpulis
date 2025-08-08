import { Header } from "@/components/Header";
import { CategoryCard } from "@/components/CategoryCard";

const tableOfContents = [
  { title: "GENERAL PRINCIPLES", pageNumber: 1, href: "/chapter/general-principles" },
  { title: "Strategic Guidelines", pageNumber: 1, href: "/chapter/strategic-guidelines", isSubItem: true },
  { title: "CHAPTER 1 GENERAL GUIDELINES", pageNumber: 2, href: "/chapter/general-guidelines-chapter" },
  { title: "Section 1-1 Police Uniform and Accessories", pageNumber: 2, href: "/chapter/police-uniform", isSubItem: true },
  { title: "1.1 Agency Prescribed Uniform", pageNumber: 2, href: "/chapter/agency-uniform", isSubItem: true, level: 2 },
  { title: "1.2 Appearing Before the Public", pageNumber: 2, href: "/chapter/appearing-public", isSubItem: true, level: 2 },
  { title: "1.3 Carrying of Basic Police Equipment", pageNumber: 2, href: "/chapter/basic-equipment", isSubItem: true, level: 2 },
  { title: "Section 1-2 Categories of Police Operations", pageNumber: 2, href: "/chapter/police-operations", isSubItem: true },
  { title: "1.4 Patrol Operations", pageNumber: 2, href: "/chapter/patrol-operations", isSubItem: true, level: 2 },
  { title: "1.5 Law Enforcement Operations", pageNumber: 2, href: "/chapter/law-enforcement", isSubItem: true, level: 2 },
  { title: "1.6 Internal Security Operations", pageNumber: 3, href: "/chapter/internal-security", isSubItem: true, level: 2 },
  { title: "1.7 Public Safety Operations", pageNumber: 3, href: "/chapter/public-safety", isSubItem: true, level: 2 },
  { title: "1.8 Special Police Operations", pageNumber: 3, href: "/chapter/special-operations", isSubItem: true, level: 2 },
  { title: "1.9 Investigation Operations", pageNumber: 3, href: "/chapter/investigation", isSubItem: true, level: 2 },
  { title: "1.10 Police Community Relations", pageNumber: 3, href: "/chapter/community-relations", isSubItem: true, level: 2 },
  { title: "CHAPTER 2 OPERATIONAL GUIDELINES", pageNumber: 4, href: "/chapter/operational-guidelines" },
  { title: "Section 2-1 Pre-Operational Clearance", pageNumber: 4, href: "/chapter/pre-operational", isSubItem: true },
  { title: "Section 2-2 Coordination", pageNumber: 4, href: "/chapter/coordination", isSubItem: true },
  { title: "2.1 Inter-Office Coordination", pageNumber: 4, href: "/chapter/inter-office", isSubItem: true, level: 2 },
  { title: "2.2 Coordination by Filing Coordination Form", pageNumber: 4, href: "/chapter/filing-form", isSubItem: true, level: 2 },
  { title: "2.3 Coordination by Practical/Available Means of Communication", pageNumber: 5, href: "/chapter/communication", isSubItem: true, level: 2 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-primary">
              TABLE OF CONTENTS
            </h1>
            <div className="space-y-2">
              {tableOfContents.map((item, index) => (
                <CategoryCard
                  key={index}
                  title={item.title}
                  pageNumber={item.pageNumber}
                  href={item.href}
                  isSubItem={item.isSubItem}
                  level={item.level}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
