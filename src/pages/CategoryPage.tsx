import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { ChapterContent } from "@/components/ChapterContent";

// Sample content data
const categoryContent: Record<string, any> = {
  "action-adventure": {
    author: "Angie Diane Hart",
    chapter: "Chapter 1",
    title: "Why we struggle?",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    ]
  },
  "adventure": {
    author: "Marcus Thompson",
    chapter: "Chapter 1", 
    title: "The Journey Begins",
    content: [
      "In the heart of the Amazon rainforest, where ancient trees whisper secrets of centuries past, our expedition began with the promise of discovery.",
      "The morning mist clung to the canopy like a veil, revealing glimpses of the verdant world that awaited us. Each step forward was a step into the unknown.",
      "As we navigated through the dense undergrowth, the sounds of the jungle created a symphony that had remained unchanged for millennia."
    ]
  },
  "african-american-fiction": {
    author: "Zora Williams",
    chapter: "Chapter 1",
    title: "Roots and Branches", 
    content: [
      "The old oak tree in grandmother's backyard held more than leaves and bark; it held our family's stories, passed down through generations.",
      "Every summer, we would gather beneath its sprawling branches, listening to tales of resilience, love, and triumph that shaped who we were.",
      "These stories weren't just entertainment—they were our heritage, our strength, and our connection to something greater than ourselves."
    ]
  }
};

export const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const content = category ? categoryContent[category] : null;

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Content Not Found</h1>
          <p className="text-muted-foreground">The requested content is not available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <ChapterContent {...content} />
    </div>
  );
};