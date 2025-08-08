import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ChapterContentProps {
  author?: string;
  chapter: string;
  title: string;
  content: string[];
}

export const ChapterContent = ({ author, chapter, title, content }: ChapterContentProps) => {
  return (
    <div className="min-h-screen bg-reading-bg">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4 pl-0">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Table of Contents
            </Button>
          </Link>
        </div>
        
        <article className="bg-card rounded-lg shadow-sm p-8">
          {author && (
            <div className="author-credit">
              {author}
            </div>
          )}
          
          <h1 className="chapter-title">
            {chapter}
          </h1>
          
          <h2 className="chapter-subtitle">
            {title}
          </h2>
          
          <div className="chapter-content">
            {content.map((paragraph, index) => (
              <p key={index} className="text-reading-text leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};