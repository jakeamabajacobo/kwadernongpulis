export interface ContentData {
  id: string;
  title: string;
  chapter: string;
  content: string[];
  page?: number;
}

export const contentData: Record<string, ContentData> = {
  // GENERAL PRINCIPLES
  "general-principles": {
    id: "general-principles",
    title: "General Principles",
    chapter: "GENERAL PRINCIPLES",
    content: [
      "The Police Operations Procedure provides a comprehensive framework for law enforcement activities and establishes the standard operating procedures for police personnel.",
      "These principles ensure consistency, accountability, and effectiveness in police operations while maintaining public trust and safety.",
      "All police operations must be conducted within the bounds of law, with respect for human rights, and in accordance with established procedures.",
      "The PNP shall maintain the highest standards of professionalism, integrity, and service excellence in all operations.",
      "Every police operation shall be guided by the principles of transparency, accountability, and respect for human dignity."
    ],
    page: 1
  },
  "strategic-guidelines": {
    id: "strategic-guidelines",
    title: "Strategic Guidelines",
    chapter: "Strategic Guidelines",
    content: [
      "Strategic guidelines form the foundation of effective police operations and provide direction for tactical implementation.",
      "These guidelines ensure coordinated responses, optimal resource allocation, and adherence to constitutional principles.",
      "Strategic planning must incorporate community needs, operational requirements, and legal constraints to achieve maximum effectiveness.",
      "All operations shall be conducted with proper coordination among different units and agencies.",
      "Strategic guidelines emphasize the importance of community-oriented policing and public safety."
    ],
    page: 1
  },

  // CHAPTER 1 - GENERAL GUIDELINES
  "chapter-1-general-guidelines": {
    id: "chapter-1-general-guidelines",
    title: "General Guidelines",
    chapter: "CHAPTER 1",
    content: [
      "Chapter 1 establishes the fundamental guidelines for police operations, covering uniform requirements, equipment standards, and operational categories.",
      "This chapter provides the baseline standards that all police personnel must follow in their daily duties and operations.",
      "Compliance with these guidelines ensures professionalism, safety, and effectiveness in all police activities.",
      "The guidelines emphasize the importance of proper appearance, conduct, and equipment maintenance.",
      "All personnel must be familiar with and strictly adhere to these general guidelines."
    ],
    page: 2
  },
  "section-1-1-police-uniform-and-accessories": {
    id: "section-1-1-police-uniform-and-accessories",
    title: "Police Uniform and Accessories",
    chapter: "Section 1-1",
    content: [
      "Police uniform and accessories are essential components of professional law enforcement appearance and functionality.",
      "Proper uniform standards ensure public recognition, authority, and professional image of police personnel.",
      "All uniform items must be properly maintained and worn according to established protocols.",
      "The uniform serves as a symbol of authority and must be worn with pride and dignity.",
      "Accessories must be properly positioned and maintained for optimal functionality during operations."
    ],
    page: 2
  },
  "1-1-agency-prescribed-uniform": {
    id: "1-1-agency-prescribed-uniform",
    title: "Agency Prescribed Uniform",
    chapter: "1.1",
    content: [
      "All police officers must wear the officially prescribed uniform as designated by the Philippine National Police.",
      "The uniform must be clean, properly fitted, and worn with appropriate accessories and insignia.",
      "Uniform standards include proper grooming, footwear, and equipment placement for optimal functionality.",
      "The prescribed uniform includes the standard PNP uniform with proper insignia and rank indicators.",
      "All personnel must ensure their uniform is in good condition and properly pressed before duty."
    ],
    page: 2
  },
  "1-2-appearing-before-the-public": {
    id: "1-2-appearing-before-the-public",
    title: "Appearing Before the Public",
    chapter: "1.2",
    content: [
      "Police officers must maintain professional appearance and conduct when interacting with the public.",
      "Proper demeanor, respectful communication, and appropriate behavior are essential for public trust.",
      "Officers must represent the PNP with dignity and uphold the organization's values in all public interactions.",
      "Professional appearance includes proper grooming, clean uniform, and appropriate accessories.",
      "All interactions with the public must be conducted with courtesy, respect, and professionalism."
    ],
    page: 2
  },
  "1-3-carrying-of-basic-police-equipment": {
    id: "1-3-carrying-of-basic-police-equipment",
    title: "Carrying of Basic Police Equipment",
    chapter: "1.3",
    content: [
      "All police officers must carry prescribed basic equipment necessary for the performance of their duties and personal protection.",
      "Basic equipment includes service weapons, handcuffs, radio communication devices, identification, and other items as specified by policy.",
      "Proper maintenance and inspection of equipment ensures operational readiness and officer safety during field operations.",
      "Equipment must be properly secured and accessible when needed during operations.",
      "Regular inspection and maintenance of equipment is mandatory for all personnel."
    ],
    page: 2
  },

  // Categories of Police Operations
  "section-1-2-categories-of-police-operations": {
    id: "section-1-2-categories-of-police-operations",
    title: "Categories of Police Operations",
    chapter: "Section 1-2",
    content: [
      "Police operations are categorized into distinct types based on their purpose, scope, and required resources.",
      "Understanding these categories helps ensure appropriate planning, resource allocation, and execution of law enforcement activities.",
      "Each category has specific procedures, requirements, and protocols that must be followed for effective implementation.",
      "Proper categorization ensures appropriate response and resource allocation for different types of situations.",
      "All personnel must be familiar with the different categories and their specific requirements."
    ],
    page: 2
  },
  "1-4-patrol-operations": {
    id: "1-4-patrol-operations",
    title: "Patrol Operations",
    chapter: "1.4",
    content: [
      "Patrol operations form the backbone of community policing and crime prevention efforts.",
      "These operations involve regular monitoring of assigned areas, responding to calls for service, and maintaining visible police presence.",
      "Effective patrol operations require strategic deployment, proper equipment, and continuous communication with command centers.",
      "Patrol officers must maintain high visibility and be responsive to community needs.",
      "Regular patrol routes and schedules must be established and followed consistently."
    ],
    page: 2
  },
  "1-5-law-enforcement-operations": {
    id: "1-5-law-enforcement-operations",
    title: "Law Enforcement Operations",
    chapter: "1.5",
    content: [
      "Law enforcement operations focus on the detection, investigation, and prevention of criminal activities.",
      "These operations include arrest procedures, search and seizure activities, and evidence collection.",
      "All law enforcement operations must comply with legal requirements and constitutional protections.",
      "Proper documentation and chain of custody procedures are essential for successful prosecutions.",
      "Officers must be well-trained in legal procedures and constitutional rights."
    ],
    page: 2
  },
  "1-6-internal-security-operations": {
    id: "1-6-internal-security-operations",
    title: "Internal Security Operations",
    chapter: "1.6",
    content: [
      "Internal security operations address threats to national security and public order.",
      "These operations require coordination with other government agencies and specialized units.",
      "Proper protocols must be followed to ensure effective response while protecting civil liberties.",
      "Operations must be conducted with proper intelligence gathering and threat assessment.",
      "All personnel must be trained in security protocols and emergency response procedures."
    ],
    page: 3
  },
  "1-7-public-safety-operations": {
    id: "1-7-public-safety-operations",
    title: "Public Safety Operations",
    chapter: "1.7",
    content: [
      "Public safety operations focus on protecting the public from various hazards and emergencies.",
      "These operations include disaster response, crowd control, and emergency management activities.",
      "Coordination with emergency services and community organizations is essential for effective response.",
      "Public safety operations require rapid response and effective communication systems.",
      "All personnel must be trained in emergency response and disaster management procedures."
    ],
    page: 3
  },
  "1-8-special-police-operations": {
    id: "1-8-special-police-operations",
    title: "Special Police Operations",
    chapter: "1.8",
    content: [
      "Special police operations involve specialized tactics and equipment for unique situations.",
      "These operations may include hostage rescue, counter-terrorism, and high-risk interventions.",
      "Specialized training and equipment are required for personnel involved in these operations.",
      "Special operations require careful planning and coordination with multiple units.",
      "All special operations must be conducted with proper authorization and oversight."
    ],
    page: 3
  },
  "1-9-investigation-operations": {
    id: "1-9-investigation-operations",
    title: "Investigation Operations",
    chapter: "1.9",
    content: [
      "Investigation operations focus on gathering evidence and information to solve crimes.",
      "These operations require specialized skills in evidence collection, witness interviews, and case management.",
      "Proper documentation and chain of custody procedures are essential for successful prosecutions.",
      "Investigators must be trained in forensic techniques and legal procedures.",
      "All investigations must be conducted thoroughly and impartially."
    ],
    page: 3
  },
  "1-10-police-community-relations": {
    id: "1-10-police-community-relations",
    title: "Police Community Relations",
    chapter: "1.10",
    content: [
      "Police community relations focus on building trust and cooperation between law enforcement and the community.",
      "These activities include community outreach, educational programs, and partnership initiatives.",
      "Strong community relations enhance public safety and support for law enforcement efforts.",
      "Community engagement programs help build trust and understanding between police and citizens.",
      "All personnel must be trained in community relations and cultural sensitivity."
    ],
    page: 3
  },

  // CHAPTER 2 - OPERATIONAL GUIDELINES
  "chapter-2-operational-guidelines": {
    id: "chapter-2-operational-guidelines",
    title: "Operational Guidelines",
    chapter: "CHAPTER 2",
    content: [
      "Chapter 2 provides comprehensive operational guidelines for police activities and procedures.",
      "These guidelines ensure standardized practices across all police operations and units.",
      "Compliance with operational guidelines promotes safety, effectiveness, and legal compliance.",
      "All personnel must be familiar with and strictly follow these operational guidelines.",
      "The guidelines provide a framework for safe and effective police operations."
    ],
    page: 4
  },
  "section-2-1-pre-operational-clearance": {
    id: "section-2-1-pre-operational-clearance",
    title: "Pre-Operational Clearance",
    chapter: "Section 2-1",
    content: [
      "Pre-operational clearance is required before conducting any police operation.",
      "This process ensures proper authorization and coordination for all operations.",
      "Clearance procedures help prevent conflicts and ensure proper resource allocation.",
      "All operations must be properly documented and authorized before commencement.",
      "Pre-operational clearance includes proper briefing and equipment checks."
    ],
    page: 4
  },
  "section-2-2-coordination": {
    id: "section-2-2-coordination",
    title: "Coordination",
    chapter: "Section 2-2",
    content: [
      "Coordination is essential for effective police operations and resource management.",
      "Proper coordination ensures efficient use of resources and prevents conflicts.",
      "All operations require coordination with relevant units and agencies.",
      "Coordination procedures must be followed to ensure operational effectiveness.",
      "Regular coordination meetings help maintain operational efficiency."
    ],
    page: 4
  },
  "2-1-inter-office-coordination": {
    id: "2-1-inter-office-coordination",
    title: "Inter-Office Coordination",
    chapter: "2.1",
    content: [
      "Inter-office coordination ensures effective communication between different police units.",
      "This coordination helps prevent conflicts and ensures proper resource allocation.",
      "All units must coordinate their activities to avoid duplication of efforts.",
      "Proper coordination procedures must be followed for all joint operations.",
      "Regular coordination meetings help maintain operational efficiency."
    ],
    page: 4
  },
  "2-2-coordination-by-filing-coordination-form": {
    id: "2-2-coordination-by-filing-coordination-form",
    title: "Coordination by Filing Coordination Form",
    chapter: "2.2",
    content: [
      "Coordination forms must be properly filed for all operations requiring coordination.",
      "These forms ensure proper documentation and authorization of operations.",
      "All coordination forms must be completed accurately and submitted on time.",
      "Proper filing procedures help maintain operational records and accountability.",
      "Coordination forms serve as official documentation of operational planning."
    ],
    page: 4
  },
  "2-3-coordination-by-practical-available-means-of-communication": {
    id: "2-3-coordination-by-practical-available-means-of-communication",
    title: "Coordination by Practical/Available Means of Communication",
    chapter: "2.3",
    content: [
      "Coordination may be conducted through various available means of communication.",
      "This includes radio communication, phone calls, and other practical methods.",
      "All coordination must be properly documented regardless of the method used.",
      "Available communication means must be utilized effectively for coordination.",
      "Practical coordination methods ensure timely communication during operations."
    ],
    page: 5
  },

  // Section 2-3 Requirements of Police Operations
  "section-2-3-requirements-of-police-operations": {
    id: "section-2-3-requirements-of-police-operations",
    title: "Requirements of Police Operations",
    chapter: "Section 2-3",
    content: [
      "Police operations have specific requirements that must be met for successful execution.",
      "These requirements ensure proper planning, resource allocation, and operational effectiveness.",
      "All personnel must be familiar with and comply with these operational requirements.",
      "Requirements include proper equipment, training, and authorization for operations.",
      "Compliance with requirements helps ensure operational safety and success."
    ],
    page: 5
  },
  "2-4-basic-requirements": {
    id: "2-4-basic-requirements",
    title: "Basic Requirements",
    chapter: "2.4",
    content: [
      "Basic requirements must be met before conducting any police operation.",
      "These include proper authorization, equipment, and personnel preparation.",
      "All operations require adequate planning and resource allocation.",
      "Basic requirements ensure operational safety and effectiveness.",
      "Compliance with basic requirements is mandatory for all operations."
    ],
    page: 5
  },
  "2-5-use-of-megaphones-and-similar-instruments-devices": {
    id: "2-5-use-of-megaphones-and-similar-instruments-devices",
    title: "Use of Megaphones and Similar Instruments/Devices",
    chapter: "2.5",
    content: [
      "Megaphones and similar devices may be used during police operations for communication.",
      "These devices must be used appropriately and in accordance with established protocols.",
      "Proper use of communication devices enhances operational effectiveness.",
      "All personnel must be trained in the proper use of communication equipment.",
      "Communication devices must be properly maintained and tested before use."
    ],
    page: 5
  },
  "2-6-accessories": {
    id: "2-6-accessories",
    title: "Accessories",
    chapter: "2.6",
    content: [
      "Proper accessories are essential for effective police operations.",
      "Accessories include equipment, tools, and devices necessary for operations.",
      "All accessories must be properly maintained and in good working condition.",
      "Personnel must be trained in the proper use of all accessories.",
      "Accessories must be properly secured and accessible when needed."
    ],
    page: 5
  },
  "2-7-use-of-body-worn-camera": {
    id: "2-7-use-of-body-worn-camera",
    title: "Use of Body Worn Camera",
    chapter: "2.7",
    content: [
      "Body worn cameras are essential tools for documenting police operations.",
      "These cameras provide transparency and accountability in police activities.",
      "All personnel must be trained in the proper use of body worn cameras.",
      "Cameras must be properly maintained and tested before each operation.",
      "Proper documentation and storage of camera footage is mandatory."
    ],
    page: 6
  },

  // Section 2-4 Use of Force Policy
  "section-2-4-use-of-force-policy": {
    id: "section-2-4-use-of-force-policy",
    title: "Use of Force Policy",
    chapter: "Section 2-4",
    content: [
      "The use of force policy provides guidelines for when and how force may be used.",
      "All use of force must be reasonable, necessary, and proportional to the situation.",
      "Personnel must be trained in the proper application of force policies.",
      "All use of force incidents must be properly documented and reported.",
      "The policy emphasizes de-escalation and minimal force when possible."
    ],
    page: 7
  },
  "2-8-application-of-necessary-and-reasonable-force": {
    id: "2-8-application-of-necessary-and-reasonable-force",
    title: "Application of Necessary and Reasonable Force",
    chapter: "2.8",
    content: [
      "Force may only be used when necessary and reasonable under the circumstances.",
      "All use of force must be proportional to the threat or resistance encountered.",
      "Personnel must attempt de-escalation before using force when possible.",
      "Force must be discontinued when the threat or resistance ceases.",
      "All use of force incidents must be properly documented and reviewed."
    ],
    page: 7
  },
  "2-9-the-force-continuum": {
    id: "2-9-the-force-continuum",
    title: "The Force Continuum",
    chapter: "2.9",
    content: [
      "The force continuum provides a framework for escalating and de-escalating force.",
      "Personnel must be trained in the proper application of the force continuum.",
      "Force should be escalated only when necessary and reasonable.",
      "De-escalation should be attempted when safe and appropriate.",
      "All force applications must be properly documented and justified."
    ],
    page: 8
  },
  "2-10-responsibility-of-the-police-officer-in-charge-of-the-operations": {
    id: "2-10-responsibility-of-the-police-officer-in-charge-of-the-operations",
    title: "Responsibility of the Police Officer in Charge of the Operations",
    chapter: "2.10",
    content: [
      "The officer in charge has primary responsibility for the conduct of operations.",
      "This includes ensuring proper planning, coordination, and execution of operations.",
      "The officer in charge must ensure compliance with all policies and procedures.",
      "Proper supervision and oversight of personnel is essential for operational success.",
      "The officer in charge must ensure proper documentation and reporting of operations."
    ],
    page: 12
  },

  // Section 2-5 Use of Firearm During Police Operations
  "section-2-5-use-of-firearm-during-police-operations": {
    id: "section-2-5-use-of-firearm-during-police-operations",
    title: "Use of Firearm During Police Operations",
    chapter: "Section 2-5",
    content: [
      "The use of firearms during police operations is strictly regulated.",
      "Firearms may only be used when justified and in accordance with established policies.",
      "All personnel must be trained in the proper use and handling of firearms.",
      "Firearms must be properly maintained and tested regularly.",
      "All firearm discharges must be properly documented and investigated."
    ],
    page: 13
  },
  "2-11-use-of-firearm-when-justified": {
    id: "2-11-use-of-firearm-when-justified",
    title: "Use of Firearm When Justified",
    chapter: "2.11",
    content: [
      "Firearms may only be used when justified under specific circumstances.",
      "Justification includes self-defense, defense of others, and prevention of serious crimes.",
      "All firearm use must be reasonable and necessary under the circumstances.",
      "Personnel must be trained in the legal and policy requirements for firearm use.",
      "All firearm discharges must be properly documented and reviewed."
    ],
    page: 13
  },
  "2-12-firing-at-moving-vehicles-is-prohibited": {
    id: "2-12-firing-at-moving-vehicles-is-prohibited",
    title: "Firing at Moving Vehicles is Prohibited",
    chapter: "2.12",
    content: [
      "Firing at moving vehicles is generally prohibited except in specific circumstances.",
      "This prohibition helps prevent unnecessary risks to public safety.",
      "Exceptions may apply in cases of immediate threat to life.",
      "All personnel must be trained in the restrictions on firing at vehicles.",
      "Any violation of this policy must be properly investigated and documented."
    ],
    page: 13
  },
  "2-13-filing-of-an-incident-report-after-the-use-of-firearm": {
    id: "2-13-filing-of-an-incident-report-after-the-use-of-firearm",
    title: "Filing of an Incident Report After the Use of Firearm",
    chapter: "2.13",
    content: [
      "All firearm discharges must be properly documented and reported.",
      "Incident reports must be filed immediately after any firearm discharge.",
      "Reports must include detailed information about the circumstances and justification.",
      "All reports must be reviewed by supervisors and investigators.",
      "Proper documentation is essential for accountability and legal compliance."
    ],
    page: 13
  },
  "2-14-procedures-after-an-armed-confrontation": {
    id: "2-14-procedures-after-an-armed-confrontation",
    title: "Procedures After an Armed Confrontation",
    chapter: "2.14",
    content: [
      "Specific procedures must be followed after any armed confrontation.",
      "These procedures ensure proper investigation and documentation of incidents.",
      "All personnel must be trained in post-confrontation procedures.",
      "Proper procedures help ensure accountability and legal compliance.",
      "All incidents must be properly documented and reviewed."
    ],
    page: 14
  },

  // Continue with more comprehensive content...
  // This provides detailed information for the first major sections
};
