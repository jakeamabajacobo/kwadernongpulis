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
      "STRATEGIC GUIDELINES",
      "Regardless of the type of function to be performed and/or police operations to be conducted, all PNP personnel must know by heart and shall comply with and apply the following principles and procedures:",
      "",
      "To Serve and Protect",
      "The responsibility of every police officer is to serve the public and protect life and property.",
      "",
      "To Respect Human Rights and Dignity of Person",
      "All PNP personnel shall respect and uphold the human rights and dignity of all persons at all times.",
      "",
      "General Principles",
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
      "Strategic guidelines emphasize the importance of community-oriented policing and public safety.",
      "",
      "Key Strategic Principles:",
      "• All PNP personnel must know by heart and shall comply with and apply the established principles and procedures",
      "• Operations must be conducted with respect for human rights and dignity",
      "• Service to the public and protection of life and property is the primary responsibility",
      "• Professional conduct and ethical behavior must be maintained at all times",
      "• Continuous training and development of personnel is essential for operational effectiveness"
    ],
    page: 1
  },

  // CHAPTER 1 - GENERAL GUIDELINES
  "chapter-1-general-guidelines": {
    id: "chapter-1-general-guidelines",
    title: "General Guidelines",
    chapter: "CHAPTER 1",
    content: [
      "CHAPTER 1 GENERAL GUIDELINES",
      "Chapter 1 establishes the fundamental guidelines for police operations, covering uniform requirements, equipment standards, and operational categories.",
      "This chapter provides the baseline standards that all police personnel must follow in their daily duties and operations.",
      "Compliance with these guidelines ensures professionalism, safety, and effectiveness in all police activities.",
      "The guidelines emphasize the importance of proper appearance, conduct, and equipment maintenance.",
      "All personnel must be familiar with and strictly adhere to these general guidelines.",
      "",
      "Core Principles:",
      "• All PNP personnel shall respect and uphold the human rights and dignity of all persons at all times",
      "• Professional appearance and conduct must be maintained while on duty",
      "• Proper equipment and accessories must be carried and used appropriately",
      "• Operations must be conducted in accordance with established procedures and protocols",
      "• Continuous training and adherence to standards is mandatory for all personnel"
    ],
    page: 2
  },
  "section-1-1-police-uniform-and-accessories": {
    id: "section-1-1-police-uniform-and-accessories",
    title: "Section 1-1 Police Uniform and Accessories",
    chapter: "Section 1-1",
    content: [
      "Section 1-1 Police Uniform and Accessories",
      "",
      "1.1 Agency Prescribed Uniform. A police officer shall always wear the prescribed uniform for the kind of police operation to be undertaken (Annex \"A\").",
      "",
      "1.2 Appearing Before the Public. When wearing the police uniform, a police officer shall, at all times, appear to look presentable, respectable, smart, and well-groomed. A police officer shall refrain from doing unnecessary activities and/or actions while on duty.",
      "",
      "1.3 Carrying of Basic Police Equipment. Every police officer on patrol, whether on board a vehicle or on foot patrol, shall always carry with him/her his/her issued firearm, and other equipment such as but not limited to restraint device, impact device and personal protective equipment. He/she shall also use other accessories required for the specific police operation being conducted.",
      "",
      "Uniform Standards:",
      "• Prescribed uniform must be worn for the specific type of police operation",
      "• Uniform must be clean, pressed, and in good condition",
      "• All insignias, badges, and nameplates must be properly displayed",
      "• Uniform must be worn with appropriate accessories and equipment",
      "• Professional appearance must be maintained at all times while on duty"
    ],
    page: 2
  },
  "1-1-agency-prescribed-uniform": {
    id: "1-1-agency-prescribed-uniform",
    title: "1.1 Agency Prescribed Uniform:",
    chapter: "1.1",
    content: [
      "A police officer shall always wear the prescribed uniform for the kind of police operation to be undertaken (Annex \"A\")."
    ],
    page: 2
  },
  "1-2-appearing-before-the-public": {
    id: "1-2-appearing-before-the-public",
    title: "1.2 Appearing Before the Public",
    chapter: "1.2",
    content: [
      "When wearing the police uniform, a police officer shall, at all times, appear to look presentable, respectable, smart, and well-groomed. A police officer shall refrain from doing unnecessary activities and/or actions while on duty."
    ],
    page: 2
  },
  "1-3-carrying-of-basic-police-equipment": {
    id: "1-3-carrying-of-basic-police-equipment",
    title: "1.3 Carrying of Basic Police Equipment",
    chapter: "1.3",
    content: [
      "Every police officer on patrol, whether on board a vehicle or on foot patrol, shall always carry with him/her his/her issued firearm, and other equipment such as but not limited to restraint device, impact device and personal protective equipment. He/she shall also use other accessories required for the specific police operation being conducted."
    ],
    page: 2
  },

  // Categories of Police Operations
  "section-1-2-categories-of-police-operations": {
    id: "section-1-2-categories-of-police-operations",
    title: "Categories of Police Operations",
    chapter: "Section 1-2",
    content: [
      "Section 1-2 Categories of Police Operations",
      "",
      "Police operations are categorized into distinct types based on their purpose, scope, and required resources.",
      "Understanding these categories helps ensure appropriate planning, resource allocation, and execution of law enforcement activities.",
      "Each category has specific procedures, requirements, and protocols that must be followed for effective implementation.",
      "Proper categorization ensures appropriate response and resource allocation for different types of situations.",
      "All personnel must be familiar with the different categories and their specific requirements.",
      "",
      "Operational Categories:",
      "• Patrol Operations: The most basic police function and known as the backbone of policing",
      "• Law Enforcement Operations: Include service of warrant of arrest, implementation of search warrant, enforcement of visitorial powers of the Chiefs of Police, and other anti-criminality operations",
      "• Internal Security Operations: Include counterterrorism operations and similar operations against other threat groups that are conducted to ensure internal security",
      "• Public Safety Operations: Include critical incident management procedures, search, rescue and retrieval operations, hostage situation, civil disturbance management operation, management of health hazards and other operations that promote public safety",
      "• Special Police Operations: Include high-risk checkpoint and roadblock operation, police assistance in the implementation of order from the court and other quasi-judicial bodies, security to major and special events, aircraft hijacking operations, visit, board, search and seizure of marine vessels, and similar police operations that are conducted by police units with specialized training on the peculiarity of the mission or purpose",
      "• Investigation Operations: Include investigation of crime or incident, Scene of the Crime Operations (SOCO), administrative investigation and other investigative work necessary to determine facts and circumstances for filing cases criminally or administratively",
      "• Police Community Relations: Include three interrelated dimensions to accomplish its mission namely: community affairs and development, public information, and information development operations to forge partnership and strengthen collaboration and linkages with the community"
    ],
    page: 2
  },
  "1-4-patrol-operations": {
    id: "1-4-patrol-operations",
    title: "Patrol Operations",
    chapter: "1.4",
    content: [
      "1.4 Patrol Operations",
      "The most basic police function and known as the backbone of policing.",
      "",
      "Patrol Guidelines:",
      "a. Conduct briefing before and debriefing after patrol operations",
      "b. Perform firearm and equipment check prior to dispatch.",
      "c. Observe precautionary measures and personal safety while on patrol;",
      "d. Plan out patrol routes based on prevailing crime trends and patterns;",
      "e. Observe defensive driving and follow traffic rules and regulations;",
      "f. Establish good rapport with people on your beat and be familiar with all the people in the community;",
      "g. Patrol members must be always on the look-out for indications of vices and other illegal activities on their beat;",
      "h. Patrol members must be knowledgeable of all conditions, events and details of places on their beat;",
      "i. Be observant of people, places, situations or conditions and develop an inquisitive attitude especially if the subject appears to be slightly out of the ordinary;",
      "j. Keep under close observation actions of juveniles, troublemakers/agitators and the mentally ill/retarded persons and report information to the concerned agency for appropriate action;",
      "k. When requiring proof of identification from any person, let him/her hand it over to you;",
      "l. Patrol members must inform tactical operations center before responding to any incident.",
      "",
      "Patrol Duties:",
      "Patrol Supervisors:",
      "1) Make a patrol plan with the following details:",
      "   a) Area Coverage: safe haven, ambush areas and crime-prone areas;",
      "   b) Organizational detail of personnel;",
      "   c) Duration;",
      "   d) Stand-by points; and",
      "   e) Route plan.",
      "2) Designate members of the patrol team/s;",
      "3) Conduct personnel and equipment check;",
      "4) Conduct briefing prior to dispatch by disseminating any orders, directives or instructions from the Chief of Police (COP) or higher authorities and new policy or guidelines being implemented by the PNP Organization;",
      "5) Render hourly report of personnel location and situation through radio/telephone/cellphone to Police Community Precinct (PCP)/Station Headquarters Tactical Operation Center (TOC);",
      "6) Render after-patrol report duly signed by duty supervisor. PCP Commanders shall collate and submit significant details to the Station Patrol Supervisor, who in turn, will submit the same to the Provincial/District Patrol Supervisor; and",
      "7) Conduct debriefing immediately after the completion of patrol duties.",
      "",
      "Patrol Officers:",
      "1) Attend the roll call formation before his/her Tour of Duty for briefing and likewise attend the after Tour of Duty formation for debriefing;",
      "2) Patrol the assigned beats, observe and check suspicious people, structures/buildings, compounds and vehicles;",
      "3) Observe and monitor public gatherings, prevent disorders and disperse unlawful assemblies;",
      "4) Inspect and/or conduct surveillance in various business establishments and other installations and remove hazards to public safety;",
      "5) Check suspicious vehicles (private, public, or commercial/delivery vehicles) in the course of their patrol;",
      "6) Report occurrences and conditions which relate to crime, public peace, order and safety;",
      "7) Prevent crimes and arrest criminal offenders;",
      "8) Conduct regular visitations, dialogues/consultations with the residents and other stakeholders;",
      "9) Assist personnel of responsible agencies/unit in facilitating the flow of traffic at busy intersections/roads within his/her Area of Responsibility (AOR), assist and provide pedestrian information such as directions and street locations;",
      "10) Respond to calls, entertain complaints, initiate the investigation and protection of the crime scene and minimize the after-effects of accidents, fires and other catastrophes;",
      "11) Wear the prescribed patrol uniform;",
      "12) Have the necessary equipment; and",
      "13) Strictly observe \"Buddy System\" during the patrol operations."
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
      "CHAPTER 2 OPERATIONAL GUIDELINES",
      "All PNP personnel shall respect and uphold the human rights and dignity of all persons at all times.",
      "",
      "Chapter 2 provides comprehensive operational guidelines for police activities and procedures.",
      "These guidelines ensure standardized practices across all police operations and units.",
      "Compliance with operational guidelines promotes safety, effectiveness, and legal compliance.",
      "All personnel must be familiar with and strictly follow these operational guidelines.",
      "The guidelines provide a framework for safe and effective police operations.",
      "",
      "Key Operational Areas:",
      "• Pre-Operational Clearance and Planning",
      "• Inter-Unit Coordination Procedures",
      "• Basic Requirements for Police Operations",
      "• Use of Force Policy and Force Continuum",
      "• Firearm Use During Operations",
      "• Post-Operation Procedures and Documentation"
    ],
    page: 4
  },
  "section-2-1-pre-operational-clearance": {
    id: "section-2-1-pre-operational-clearance",
    title: "Pre-Operational Clearance",
    chapter: "Section 2-1",
    content: [
      "Section 2-1 Pre-Operational Clearance",
      "",
      "In all planned police operations, the team leader of the operating team/s shall secure a Pre-Operation Clearance prior to the conduct of operation. This clearance must be approved by their Chief/Commander/Head of Office/Unit and must be submitted at the Operations Section/Division of the concerned operating police units for record purposes.",
      "",
      "Pre-operational clearance is required before conducting any police operation.",
      "This process ensures proper authorization and coordination for all operations.",
      "Clearance procedures help prevent conflicts and ensure proper resource allocation.",
      "All operations must be properly documented and authorized before commencement.",
      "Pre-operational clearance includes proper briefing and equipment checks.",
      "",
      "Clearance Requirements:",
      "• Must be approved by Chief/Commander/Head of Office/Unit",
      "• Must be submitted to Operations Section/Division for record purposes",
      "• Must include detailed operational plan and resource requirements",
      "• Must specify personnel assignments and responsibilities",
      "• Must include risk assessment and safety considerations",
      "• Must be obtained before any operational deployment"
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
      "All force applications must be properly documented and justified.",
      "",
      "1) Physical Control-Soft Hand Technique:",
      "Suspect Threats or Resistance: Passive Resistance",
      "Police Response/Equipment: Unarmed",
      "Non-compliant, uncooperative and verbally abusive.",
      "Ensure the employment of reasonable force that will cause no harm or minimal chance of injury to the suspect or law offender.",
      "Includes but not limited to:",
      "• Use of bare hands to guide, escort, hold and/or apply restraining equipment (handcuffs or flex cuffs/plastic strap).",
      "• Application of body joint manipulation, immobilization and/or touch pressure point stimulation to ensure cooperation, compliance or surrender.",
      "",
      "2) Physical Control-Hard Hand Technique:",
      "Suspect Threats or Resistance: Active Resistance",
      "Police Response/Equipment: Unarmed",
      "Non-compliant, uncooperative and verbally abusive.",
      "As much as possible, the employment of reasonable force will not result to serious injury.",
      "Employ reasonable physical control and/or pain-compliant techniques, such as: punches, kicks and other striking techniques to ensure cooperation, compliance or surrender.",
      "May orally summon as many persons as he/she deems necessary to assist him/her in effecting the arrest.",
      "",
      "2) Less Lethal Approach:",
      "Suspect Threats or Resistance: Aggressive Resistance",
      "Police Response/Equipment: Less Lethal Equipment",
      "Non-compliant, uncooperative and verbally abusive.",
      "As much as possible, the employment of reasonable force will not result to serious injury.",
      "Employ reasonable physical control and/or pain-compliant techniques, such as: punches, kicks and other striking techniques to ensure cooperation, compliance or surrender.",
      "May orally summon as many persons as he/she deems necessary to assist him/her in effecting the arrest.",
      "",
      "3) Lethal Approach:",
      "This involves the employment of lethal force when there is an immediate threat of death or serious bodily injury.",
      "",
      "Suspect Threats or Resistance: Deadly Force",
      "Police Response/Equipment: Firearm",
      "Non-compliant, uncooperative and verbally abusive.",
      "As much as possible, the employment of reasonable force will not result to serious injury.",
      "Employ reasonable physical control and/or pain-compliant techniques, such as: punches, kicks and other striking techniques to ensure cooperation, compliance or surrender.",
      "May orally summon as many persons as he/she deems necessary to assist him/her in effecting the arrest.",
      "",
      "b. Guidelines on the De-Escalation of Response:",
      "De-escalation techniques should be employed whenever possible to reduce the need for force.",
      "Personnel must be trained in verbal de-escalation and conflict resolution strategies.",
      "The goal is to resolve situations peacefully while maintaining officer and public safety.",
      "De-escalation should be attempted before escalating to higher levels of force.",
      "All de-escalation attempts must be properly documented and evaluated."
    ],
    page: 8
  },
  "2-10-responsibility-of-the-police-officer-in-charge-of-the-operations": {
    id: "2-10-responsibility-of-the-police-officer-in-charge-of-the-operations",
    title: "Responsibility of the Police Officer in Charge of the Operations",
    chapter: "2.10",
    content: [
      "2.10 Responsibility of the Police Officer in Charge of the Operations: The police officer in charge of the operations has the primary responsibility for the conduct and outcome of police operations. This includes ensuring proper planning, coordination, execution, and post-operation evaluation.",
      "",
      "Key Responsibilities:",
      "• Ensuring all personnel are properly briefed and equipped for the operation",
      "• Coordinating with other units and agencies as required",
      "• Monitoring the progress of the operation and making necessary adjustments",
      "• Ensuring compliance with all policies, procedures, and legal requirements",
      "• Providing proper supervision and oversight of all personnel",
      "• Ensuring proper documentation and reporting of all activities",
      "• Conducting post-operation debriefings and evaluations",
      "• Implementing lessons learned for future operations",
      "",
      "Accountability: The officer in charge is ultimately accountable for the success or failure of the operation and must ensure that all actions are conducted within the bounds of law and policy."
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
