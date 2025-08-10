import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, FileText } from "lucide-react";
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
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
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
    <div className="min-h-screen bg-[#f5f5dc]">
      <Header />
      
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4 pl-0 text-gray-700 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Table of Contents
            </Button>
          </Link>
        </div>
        
        {/* Main Content Card */}
        <article className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-blue-800">
                  {content.title}
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  {content.title}
                </p>
              </div>
            </div>
            
            {/* Page number */}
            {content.page && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>Page {content.page}</span>
              </div>
            )}
          </div>
          
          {/* Content paragraphs */}
          <div className="space-y-6 mb-8">
            {content.content.map((paragraph, index) => (
              <div key={index}>
                <p className="text-gray-700 leading-relaxed text-base">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Points Section */}
            <div className="bg-gray-100 rounded-lg p-6 rounded-b-lg">
              <h3 className="font-semibold text-gray-800 mb-4 text-lg">Key Points</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Follow established procedures and protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Maintain professional standards at all times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Ensure compliance with legal requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Prioritize public safety and security</span>
                </li>
              </ul>
            </div>
            
            {/* Related Topics Section */}
            <div className="bg-gray-100 rounded-lg p-6 rounded-b-lg">
              <h3 className="font-semibold text-gray-800 mb-4 text-lg">Related Topics</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Police Operations Procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Law Enforcement Guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Public Safety Protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Community Relations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Operational Standards</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TopicPage;
