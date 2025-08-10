import React from "react";
import { Header } from "@/components/Header";
import { contentData } from "@/data/contentData";

const TestTopics: React.FC = () => {
  const testTitles = [
    "Section 1-1 Police Uniform and Accessories",
    "1.1 Agency Prescribed  fdafadsfdsf",
    "1.2 Appearing Before the Public",
    "1.3 Carrying of Basic Police Equipment"
  ];

  // This is the EXACT logic from TocTable generateHref function
  const generateTestHref = (title: string) => {
    const result = title.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/chapter\s+(\d+)/, 'chapter-$1')
      .replace(/section\s+(\d+)-(\d+)/, 'section-$1-$2')
      .replace(/(\d+)\.(\d+)/, '$1-$2')
      .replace(/general\s+principles/, 'general-principles')
      .replace(/strategic\s+guidelines/, 'strategic-guidelines')
      .replace(/police\s+uniform\s+and\s+accessories/, 'police-uniform-and-accessories')
      .replace(/appearing\s+before\s+the\s+public/, 'appearing-before-the-public')
      .replace(/carrying\s+of\s+basic\s+police\s+equipment/, 'carrying-of-basic-police-equipment')
      .replace(/categories\s+of\s+police\s+operations/, 'categories-of-police-operations')
      .replace(/patrol\s+operations/, 'patrol-operations')
      .replace(/law\s+enforcement\s+operations/, 'law-enforcement-operations')
      .replace(/internal\s+security\s+operations/, 'internal-security-operations')
      .replace(/public\s+safety\s+operations/, 'public-safety-operations')
      .replace(/special\s+police\s+operations/, 'special-police-operations')
      .replace(/investigation\s+operations/, 'investigation-operations')
      .replace(/police\s+community\s+relations/, 'police-community-relations')
      .replace(/operational\s+guidelines/, 'operational-guidelines')
      .replace(/pre-operational\s+clearance/, 'pre-operational-clearance')
      .replace(/coordination/, 'coordination')
      .replace(/inter-office\s+coordination/, 'inter-office-coordination')
      .replace(/coordination\s+by\s+filing\s+coordination\s+form/, 'coordination-by-filing-coordination-form')
      .replace(/coordination\s+by\s+practical-available\s+means\s+of\s+communication/, 'coordination-by-practical-available-means-of-communication')
      .replace(/requirements\s+of\s+police\s+operations/, 'requirements-of-police-operations')
      .replace(/basic\s+requirements/, 'basic-requirements')
      .replace(/use\s+of\s+megaphones\s+and\s+similar\s+instruments-devices/, 'use-of-megaphones-and-similar-instruments-devices')
      .replace(/accessories/, 'accessories')
      .replace(/use\s+of\s+body\s+worn\s+camera/, 'use-of-body-worn-camera')
      .replace(/use\s+of\s+force\s+policy/, 'use-of-force-policy')
      .replace(/application\s+of\s+necessary\s+and\s+reasonable\s+force/, 'application-of-necessary-and-reasonable-force')
      .replace(/the\s+force\s+continuum/, 'the-force-continuum')
      .replace(/responsibility\s+of\s+the\s+police\s+officer\s+in\s+charge\s+of\s+the\s+operations/, 'responsibility-of-the-police-officer-in-charge-of-the-operations')
      .replace(/use\s+of\s+firearm\s+during\s+police\s+operations/, 'use-of-firearm-during-police-operations')
      .replace(/use\s+of\s+firearm\s+when\s+justified/, 'use-of-firearm-when-justified')
      .replace(/firing\s+at\s+moving\s+vehicles\s+is\s+prohibited/, 'firing-at-moving-vehicles-is-prohibited')
      .replace(/filing\s+of\s+an\s+incident\s+report\s+after\s+the\s+use\s+of\s+firearm/, 'filing-of-an-incident-report-after-the-use-of-firearm')
      .replace(/procedures\s+after\s+an\s+armed\s+confrontation/, 'procedures-after-an-armed-confrontation');
    
    return result;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Debug: URL Generation Test</h1>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">URL Generation Test (Exact TocTable Logic)</h2>
            <div className="space-y-2">
              {testTitles.map((title, index) => {
                const generatedUrl = generateTestHref(title);
                const contentKey = generatedUrl;
                const hasContent = contentData[contentKey];
                
                return (
                  <div key={index} className="p-3 border rounded">
                    <div className="font-medium">{title}</div>
                    <div className="text-sm text-muted-foreground">
                      Generated URL: {generatedUrl}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Content Key: {contentKey}
                    </div>
                    <div className="text-sm">
                      Has Content: {hasContent ? '✅ YES' : '❌ NO'}
                    </div>
                    {hasContent && (
                      <div className="text-sm text-green-600 mt-2">
                        Content: {hasContent.content[0]?.substring(0, 100)}...
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Available Content Keys</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {Object.keys(contentData).map((key) => (
                <div key={key} className="text-sm p-2 bg-muted rounded">
                  {key}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTopics;
