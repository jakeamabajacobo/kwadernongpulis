import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { ChapterContent } from "@/components/ChapterContent";

// Police Operations Procedure content data
const policeContent: Record<string, any> = {
  "general-principles": {
    chapter: "GENERAL PRINCIPLES",
    title: "Overview of Police Operations Framework",
    content: [
      "The Police Operations Procedure provides a comprehensive framework for law enforcement activities and establishes the standard operating procedures for police personnel.",
      "These principles ensure consistency, accountability, and effectiveness in police operations while maintaining public trust and safety.",
      "All police operations must be conducted within the bounds of law, with respect for human rights, and in accordance with established procedures."
    ]
  },
  "strategic-guidelines": {
    chapter: "Strategic Guidelines", 
    title: "Core Strategic Framework",
    content: [
      "Strategic guidelines form the foundation of effective police operations and provide direction for tactical implementation.",
      "These guidelines ensure coordinated responses, optimal resource allocation, and adherence to constitutional principles.",
      "Strategic planning must incorporate community needs, operational requirements, and legal constraints to achieve maximum effectiveness."
    ]
  },
  "general-guidelines-chapter": {
    chapter: "Chapter 1",
    title: "General Guidelines",
    content: [
      "Chapter 1 establishes the fundamental guidelines for police operations, covering uniform requirements, equipment standards, and operational categories.",
      "This chapter provides the baseline standards that all police personnel must follow in their daily duties and operations.",
      "Compliance with these guidelines ensures professionalism, safety, and effectiveness in all police activities."
    ]
  },
  "police-uniform": {
    chapter: "Section 1-1",
    title: "Police Uniform and Accessories",
    content: [
      "Police uniforms serve as a symbol of authority and must be worn with pride and dignity at all times during official duties.",
      "Proper uniform standards ensure public recognition, professional appearance, and officer safety through appropriate protective gear.",
      "All uniform components must meet prescribed specifications and be maintained in good condition to reflect the professionalism of the police force."
    ]
  },
  "agency-uniform": {
    chapter: "1.1",
    title: "Agency Prescribed Uniform",
    content: [
      "The agency prescribed uniform is the standard dress code that must be worn by all police personnel during official duties.",
      "Uniform specifications include specific colors, materials, insignia placement, and accessory requirements as defined by departmental policy.",
      "Proper wearing of the prescribed uniform demonstrates respect for the institution and helps maintain public confidence in law enforcement."
    ]
  },
  "appearing-public": {
    chapter: "1.2", 
    title: "Appearing Before the Public",
    content: [
      "Police officers must maintain a professional appearance when appearing before the public, whether in uniform or civilian clothes.",
      "Public appearance standards include proper grooming, neat attire, and courteous behavior that reflects positively on the police force.",
      "Officers represent the entire law enforcement community and must conduct themselves accordingly in all public interactions."
    ]
  },
  "basic-equipment": {
    chapter: "1.3",
    title: "Carrying of Basic Police Equipment", 
    content: [
      "All police officers must carry prescribed basic equipment necessary for the performance of their duties and personal protection.",
      "Basic equipment includes service weapons, handcuffs, radio communication devices, identification, and other items as specified by policy.",
      "Proper maintenance and inspection of equipment ensures operational readiness and officer safety during field operations."
    ]
  },
  "police-operations": {
    chapter: "Section 1-2",
    title: "Categories of Police Operations",
    content: [
      "Police operations are categorized into distinct types based on their purpose, scope, and required resources.",
      "Understanding these categories helps ensure appropriate planning, resource allocation, and execution of law enforcement activities.",
      "Each category has specific procedures, requirements, and protocols that must be followed for effective implementation."
    ]
  },
  "patrol-operations": {
    chapter: "1.4",
    title: "Patrol Operations",
    content: [
      "Patrol operations form the backbone of community policing and crime prevention efforts.",
      "These operations involve regular monitoring of assigned areas, responding to calls for service, and maintaining visible police presence.",
      "Effective patrol operations require strategic deployment, proper equipment, and continuous communication with command centers."
    ]
  },
  "law-enforcement": {
    chapter: "1.5", 
    title: "Law Enforcement Operations",
    content: [
      "Law enforcement operations encompass activities directed at detecting, investigating, and prosecuting criminal activities.",
      "These operations require specialized training, proper legal procedures, and coordination with judicial authorities.",
      "Success in law enforcement operations depends on thorough preparation, evidence collection, and adherence to constitutional rights."
    ]
  }
};

export const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const content = category ? policeContent[category] : null;

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