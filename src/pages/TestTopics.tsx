import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { contentData } from "@/data/contentData";

const TestTopics: React.FC = () => {
  const topics = Object.keys(contentData);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold text-foreground mb-6">Available Topics</h1>
            <p className="text-muted-foreground mb-6">
              Total topics available: {topics.length}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {topics.map((topicId) => (
                <div key={topicId} className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">{topicId}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {contentData[topicId].title}
                  </p>
                  <Link to={`/topic/${topicId}`}>
                    <Button size="sm" variant="outline">
                      View Topic
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
            
            <Link to="/">
              <Button>
                Back to Table of Contents
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTopics;
