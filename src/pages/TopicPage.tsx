import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, FileText } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { contentData, ContentData } from "@/data/contentData";

const TopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  
  // Debug logging
  console.log("TopicPage - topicId:", topicId);
  console.log("TopicPage - available keys:", Object.keys(contentData));
  console.log("TopicPage - contentData:", contentData);
  
  // Find the content data for this topic
  const content = contentData[topicId || ""];
  
  console.log("TopicPage - found content:", content);
  
  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-lg p-8 text-center">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-4">Topic Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The requested topic "{topicId}" could not be found. Please check the URL or return to the table of contents.
              </p>
              <div className="text-sm text-muted-foreground mb-4">
                Available topics: {Object.keys(contentData).slice(0, 5).join(", ")}...
              </div>
              <Link to="/">
                <Button className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Table of Contents
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-reading-bg">
      <Header />
      
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4 pl-0">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Table of Contents
            </Button>
          </Link>
        </div>
        
        {/* Content */}
        <article className="bg-card rounded-lg shadow-lg p-8 border border-border/50">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {content.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {content.chapter}
                </p>
              </div>
            </div>
            
            {/* Page number */}
            {content.page && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Page {content.page}</span>
              </div>
            )}
          </div>
          
          {/* Content paragraphs */}
          <div className="space-y-6">
            {content.content.map((paragraph, index) => (
              <div key={index} className="prose prose-lg max-w-none">
                <p className="text-reading-text leading-relaxed text-base">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
          
          {/* Additional information */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Key Points</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Follow established procedures and protocols</li>
                  <li>• Maintain professional standards at all times</li>
                  <li>• Ensure compliance with legal requirements</li>
                  <li>• Prioritize public safety and security</li>
                </ul>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Related Topics</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• Police Operations Procedures</p>
                  <p>• Law Enforcement Guidelines</p>
                  <p>• Public Safety Protocols</p>
                  <p>• Community Relations</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TopicPage;
