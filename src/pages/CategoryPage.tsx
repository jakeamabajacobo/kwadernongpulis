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
  },
  
  // Section 2-5 Use of Firearm During Police Operations
  "use-of-firearm-during-police-operations": {
    chapter: "Section 2-5",
    title: "Use of Firearm During Police Operations",
    content: [
      "This section establishes the comprehensive guidelines and procedures for the use of firearms during police operations.",
      "It covers when firearms may be used, restrictions on their use, and required procedures after firearm use.",
      "The section addresses critical aspects including justification requirements, prohibitions on firing at moving vehicles, mandatory incident reporting, and post-confrontation protocols.",
      "All personnel must be thoroughly trained in these guidelines and strictly adhere to established protocols.",
      "Firearm use is strictly regulated and may only be used when justified under specific circumstances with proper documentation and reporting required for all discharges."
    ]
  },
  "use-of-firearm-when-justified": {
    chapter: "2.11",
    title: "Use of Firearm When Justified",
    content: [
      "The use of firearm is justified if the offender poses an imminent danger of causing death or injury to the police officer or other persons.",
      "The use of firearm is also justified under the doctrines of self-defense, defense of a relative, and defense of a stranger.",
      "However, one who resorts to self-defense must face a real threat on his/her life, and the peril sought to be avoided must be actual, imminent and real.",
      "Unlawful aggression should be present for self-defense to be considered as a justifying circumstance.",
      "The police shall not use warning shots during police operation except when the police officer is outnumbered and overpowered, and his/her life and limb is in imminent danger."
    ]
  },
  "firing-at-moving-vehicles-is-prohibited": {
    chapter: "2.12",
    title: "Firing at Moving Vehicles is Prohibited",
    content: [
      "A moving vehicle and its occupants shall not be fired upon except when its occupants pose imminent danger of causing death or injury to the police officer or any other person, and that the use of firearm does not create any danger to the public and outweighs the likely benefits of its non-use.",
      "In firing at a moving vehicle, the following parameters should be considered:",
      "a. The intent of the suspect/s to harm the police officer or other persons;",
      "b. The capability of the suspect/s to harm with certainty the police officer or other persons; and",
      "c. Accessibility or the proximity of the suspect/s from the police officer and other persons."
    ]
  },
  "filing-of-an-incident-report-after-the-use-of-firearm": {
    chapter: "2.13",
    title: "Filing of an Incident Report After the Use of Firearm",
    content: [
      "A police officer who fires his/her service firearm or weapon during a confrontation with an offender or offenders must submit an incident report outlining the circumstances necessitating the use of his/her firearm.",
      "This requirement ensures proper documentation for legal purposes and provides accountability for all firearm discharges.",
      "The report must outline the circumstances that necessitated firearm use and be filed with the appropriate authority.",
      "All details must be accurately documented to allow for proper review and investigation.",
      "Proper documentation maintains transparency in police operations and ensures legal compliance."
    ]
  },
  "procedures-after-an-armed-confrontation": {
    chapter: "2.14",
    title: "Procedures After an Armed Confrontation",
    content: [
      "Immediately after an armed confrontation, the officer who is in charge of the operation, when applicable, shall:",
      "a. Secure the site of confrontation;",
      "b. Check whether the situation still poses imminent danger;",
      "c. Take photographs;",
      "d. Evacuate all wounded to the nearest hospital regardless of the extent of injury;",
      "e. Keep arrested suspects in isolation;",
      "f. Conduct debriefing on all involved PNP operatives;",
      "g. Submit After-Operations Report; and",
      "h. Ensure psychological stress counselling for all involved PNP Operatives."
    ]
  },
  
  // CHAPTER 3 POLICE OPERATIONS
  "police-operations-chapter": {
    chapter: "CHAPTER 3",
    title: "Police Operations",
    content: [
      "All PNP personnel shall respect and uphold the human rights and dignity of all persons at all times during the conduct of any police operations."
    ]
  },
  
  // Rule 1 Patrol Operations
  "patrol-operations-rule": {
    chapter: "Rule 1",
    title: "Patrol Operations",
    content: [
      "This rule establishes comprehensive guidelines for patrol operations, covering patrol guidelines, duties of patrol supervisors and officers, and procedures for responding to various types of calls for police assistance."
    ]
  },
  "patrol-guidelines": {
    chapter: "1.1",
    title: "Patrol Guidelines",
    content: [
      "All PNP personnel shall respect and uphold the human rights and dignity of all persons at all times during the conduct of any police operations.",
      "",
      "a. Conduct briefing before and debriefing after patrol operations",
      "b. Perform firearm and equipment check prior to dispatch.",
      "c. Observe precautionary measures and personal safety while on patrol;",
      "d. Plan out patrol routes based on prevailing crime trends and patterns;",
      "e. Observe defensive driving and follow traffic rules and regulations;",
      "f. Establish good rapport with people on your beat and be familiar with all the people in the community;",
      "g. Patrol members must be always on the look-out for indications of vices and other illegal activities on their beat;",
      "h. Patrol members must be knowledgeable of all conditions, events and details of places on their beat;",
      "i. Be observant of people, places, situations or conditions and develop an inquisitive attitude especially if the subject appears to be slightly out of the ordinary;",
      "j. Keep under close observation actions of juveniles, troublemakers / agitators and the mentally ill/retarded persons and report information to the concerned agency for appropriate action;",
      "k. When requiring proof of identification from any person, let him/her hand it over to you;",
      "l. Patrol members must inform tactical operations center before responding to any incident.",
      "",
      "1.2 Patrol Duties",
      "",
      "a. Patrol Supervisors",
      "1) Make a patrol plan with the following details:",
      "   a) Area Coverage: safe haven, ambush areas and crime-prone areas;",
      "   b) Organizational detail of personnel;",
      "   c) Duration;",
      "   d) Stand-by points; and",
      "   e) Route plan.",
      "2) Designate members of the patrol team/s;",
      "3) Conduct personnel and equipment check;",
      "4) Conduct briefing prior to dispatch by disseminating any orders, directives or instructions from the Chief of Police (COP) or higher authorities and new policy or guidelines being implemented by the PNP Organization;",
      "5) Render hourly report of personnel location and situation through radio/telephone/cellphone to Police Community Precinct (PCP)/ Station Headquarters Tactical Operation Center (TOC);",
      "6) Render after-patrol report duly signed by duty supervisor. PCP Commanders shall collate and submit significant details to the Station Patrol Supervisor, who in turn, will submit the same to the Provincial/District Patrol Supervisor; and",
      "7) Conduct debriefing immediately after the completion of patrol duties.",
      "",
      "b. Patrol Officers",
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
      "13) Strictly observe \"Buddy System\" during the patrol operations.",
      "",
      "c. Guidelines and Procedures when Responding to Calls for Police Assistance",
      "1) Gather and note down in the patrol officer's notebook all available data as to the nature of the calls, date, time and name of the caller. It may be regular, urgent or emergency in nature.",
      "2) Responding officers shall validate first before responding to calls for police assistance especially in areas with presence of threat groups.",
      "3) The manner of approach will be dependent on the nature of the call, either with haste/secrecy or with/without flashing lights and sirens.",
      "4) Consider the pertinent factors like the time, traffic conditions, the possibility of greater damage and the neighborhood characteristics.",
      "5) Whenever practicable and available, use and activate the BWC and comply with the guidelines and policies on the use thereof.",
      "6) Stop the patrol car some distance from the scene.",
      "7) Approach the scene on foot, in complete silence and exercising extreme caution.",
      "8) Immediately attend to the injured unless the other members of the patrol are in imminent danger.",
      "9) Focus all efforts to arrest criminals; however, priority shall be given to aiding the injured.",
      "10) Determine the crime committed, identify and question briefly the victim/complainant and possible witnesses at the scene.",
      "11) If the suspects or criminals have fled the scene before the arrival of the patrol team, interview witnesses and immediately relay any information gathered regarding the composition, appearance of the suspect, weapons used, mode and direction of escape and other information which may lead to the arrest of the suspects to the Operations Center for the conduct of dragnet operations",
      "12) When responding to street fights/brawls, the patrol member may call for back-up before intervening. If there are no injuries and insufficient corroborative statements obtained to identify who started the fight, bring both parties to the police station for appropriate action.",
      "13) Treat all calls for police assistance properly including complaints of nuisances caused by excessive sound, odor, smoke, blinding light among others",
      "14) When responding to calls for police assistance due to suspected explosive device, never attempt to handle, move or lift the object. Instead contact TOC and request for Explosive Ordinance Disposal Team/K9 (EODT/K9). Immediately isolate and cordon the area within a safe distance from the suspected device. Divert the flow of traffic if necessary.",
      "15) When responding to calls from beerhouses, KTV bars, or any other similar establishments, ensure that all the lights are switched on.",
      "16) When responding to request for police assistance involving domestic violence, dispute between neighbors and landlords/ tenants, as much as possible, seek the presence of barangay officials and DSWD personnel as the case may be.",
      "17) When responding to crime incidents involving a woman, either as victim or suspect, the presence of a female police officer is necessary.",
      "18) When responding to police assistance related to highly infectious diseases, immediately inform the barangay concerned and the Station TOC for the observance of the health standard protocol.",
      "19) When responding to cybercrime, secure and preserve the evidence and immediately seek assistance from cybercrime investigators.",
      "20) When responding to a hostage taking situation, secure the scene, establish perimeter security and inform tactical operations center."
    ]
  },
  "patrol-duties": {
    chapter: "1.2",
    title: "Patrol Duties",
    content: [
      "This section outlines the specific duties and responsibilities of patrol supervisors and patrol officers in the conduct of patrol operations."
    ]
  },
  "patrol-supervisors": {
    chapter: "1.2a",
    title: "Patrol Supervisors",
    content: [
      "1) Make a patrol plan with the following details:",
      "a) Area Coverage: safe haven, ambush areas and crime-prone areas;",
      "b) Organizational detail of personnel;",
      "c) Duration;",
      "d) Stand-by points; and",
      "e) Route plan.",
      "2) Designate members of the patrol team/s;",
      "3) Conduct personnel and equipment check;",
      "4) Conduct briefing prior to dispatch by disseminating any orders, directives or instructions from the Chief of Police (COP) or higher authorities and new policy or guidelines being implemented by the PNP Organization;",
      "5) Render hourly report of personnel location and situation through radio/telephone/cellphone to Police Community Precinct (PCP)/Station Headquarters Tactical Operation Center (TOC);",
      "6) Render after-patrol report duly signed by duty supervisor. PCP Commanders shall collate and submit significant details to the Station Patrol Supervisor, who in turn, will submit the same to the Provincial/District Patrol Supervisor; and",
      "7) Conduct debriefing immediately after the completion of patrol duties."
    ]
  },
  "patrol-officers": {
    chapter: "1.2b",
    title: "Patrol Officers",
    content: [
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
      "13) Strictly observe 'Buddy System' during the patrol operations."
    ]
  },
  "responding-to-calls": {
    chapter: "1.2c",
    title: "Guidelines and Procedures when Responding to Calls for Police Assistance",
    content: [
      "1) Gather and note down in the patrol officer's notebook all available data as to the nature of the calls, date, time and name of the caller. It may be regular, urgent or emergency in nature.",
      "2) Responding officers shall validate first before responding to calls for police assistance especially in areas with presence of threat groups.",
      "3) The manner of approach will be dependent on the nature of the call, either with haste/secrecy or with/without flashing lights and sirens.",
      "4) Consider the pertinent factors like the time, traffic conditions, the possibility of greater damage and the neighborhood characteristics.",
      "5) Whenever practicable and available, use and activate the BWC and comply with the guidelines and policies on the use thereof.",
      "6) Stop the patrol car some distance from the scene.",
      "7) Approach the scene on foot, in complete silence and exercising extreme caution.",
      "8) Immediately attend to the injured unless the other members of the patrol are in imminent danger.",
      "9) Focus all efforts to arrest criminals; however, priority shall be given to aiding the injured.",
      "10) Determine the crime committed, identify and question briefly the victim/complainant and possible witnesses at the scene.",
      "11) If the suspects or criminals have fled the scene before the arrival of the patrol team, interview witnesses and immediately relay any information gathered regarding the composition, appearance of the suspect, weapons used, mode and direction of escape and other information which may lead to the arrest of the suspects to the Operations Center for the conduct of dragnet operations",
      "12) When responding to street fights/brawls, the patrol member may call for back-up before intervening. If there are no injuries and insufficient corroborative statements obtained to identify who started the fight, bring both parties to the police station for appropriate action.",
      "13) Treat all calls for police assistance properly including complaints of nuisances caused by excessive sound, odor, smoke, blinding light among others",
      "14) When responding to calls for police assistance due to suspected explosive device, never attempt to handle, move or lift the object. Instead contact TOC and request for Explosive Ordinance Disposal Team/K9 (EODT/K9). Immediately isolate and cordon the area within a safe distance from the suspected device. Divert the flow of traffic if necessary.",
      "15) When responding to calls from beerhouses, KTV bars, or any other similar establishments, ensure that all the lights are switched on.",
      "16) When responding to request for police assistance involving domestic violence, dispute between neighbors and landlords/tenants, as much as possible, seek the presence of barangay officials and DSWD personnel as the case may be.",
      "17) When responding to crime incidents involving a woman, either as victim or suspect, the presence of a female police officer is necessary.",
      "18) When responding to police assistance related to highly infectious diseases, immediately inform the barangay concerned and the Station TOC for the observance of the health standard protocol.",
      "19) When responding to cybercrime, secure and preserve the evidence and immediately seek assistance from cybercrime investigators.",
      "20) When responding to a hostage taking situation, secure the scene, establish perimeter security and inform tactical operations center."
    ]
  },
  
  // Rule 2 Law Enforcement Operations
  "law-enforcement-operations-rule": {
    chapter: "Rule 2",
    title: "Law Enforcement Operations",
    content: [
      "This rule covers various law enforcement procedures including stopping and frisking, checkpoints, flagging down vehicles, high-risk stops and arrests, police defensive roadblocks, and arrest procedures."
    ]
  },
  "stopping-and-frisking": {
    chapter: "2.1",
    title: "Stopping and Frisking (Pat-Down Search)",
    content: [
      "This section establishes the legal basis and procedures for stopping and conducting pat-down searches of individuals based on reasonable suspicion."
    ]
  },
  "when-to-stop-and-frisk": {
    chapter: "2.1a",
    title: "When to Stop and Frisk (Pat-Down Search)",
    content: [
      "1) Stopping. The police officer may stop a person only when there is genuine reason to believe, based on experiences and the particular circumstances that a criminal activity may be afoot. The police officer must be able to point to specific facts that, when taken together with rational inferences, reasonably warrant the stop. Such facts include, but not limited to the following:",
      "a) The person is reported to be allegedly involved in a criminal activity;",
      "b) The actions or demeanor of the person suggest that he/she is engaged in a criminal activity;",
      "c) The person is carrying something illegal or when his/her clothing bulges in a manner that suggests he/she is carrying a weapon; and",
      "d) The person is seen at the time and place proximate to an alleged crime incident and/or flees at the sight of a police officer.",
      "2) Body Frisking (Pat-Down Search). A police officer has the right to perform body frisking if the person has been stopped with genuine reason to believe that he/she carries weapon/s and poses a threat to the police officer's or another person's safety. Circumstances which may justify body frisking (pat-down search) include but not limited to the following:",
      "a) Visual indication suggesting that the person is carrying a firearm or other deadly weapon;",
      "b) The type of crime believed to have been committed by the person, particularly crimes of violence where the threat of use or use of deadly weapon is involved; and",
      "c) The threatening demeanor of the person."
    ]
  },
  "stop-frisk-procedures": {
    chapter: "2.1b",
    title: "Procedures and Guidelines",
    content: [
      "1) Stopping",
      "a) When approaching the person, the police officer shall clearly identify himself/herself and present his/her identification card.",
      "b) Police officers shall be courteous at all times but remain cautious and vigilant.",
      "c) Before approaching more than one person, police officers should determine whether the circumstances warrant a request for back-up or whether the stopping should be delayed until such back-up arrives.",
      "d) Police officers shall confine their questions in relation to the grounds for stopping the person. In no instance shall a police officer stop a person longer than the period reasonably necessary.",
      "e) Police officers are not required to inform the person of his/her rights under the law (i.e. Miranda Warning, Anti-torture law, etc.) unless the person is placed under arrest.",
      "2) Body Frisking (Pat-Down Search). When genuine reason justifies body frisking (pat-down search), it shall be done with due caution, restraint, and sensitivity in the following manner:",
      "a) Whenever possible, body frisking shall be done by at least two police officers, one to do the search while the other provides security. it shall be done with the person in a standing position with hands raised. the police officers are permitted only to feel the outer clothing of the person. Police officers shall not place their hands inside the pockets of the clothing unless they feel an object that could probably be a weapon, such as a gun, knife, club, or the like.",
      "b) If the person is carrying an object such as a handbag, suitcase, briefcase, sack, or other similar items that may conceal a weapon, the police officer shall not open the item but instead put it in a place out of the person's reach.",
      "c) If the external patting of the person's clothing fails to disclose evidence of a weapon, no further search may be made. If a weapon is found and the possession of which constitutes a violation of the law, the police officer shall arrest the person and conduct a complete search."
    ]
  },
  "reporting-after-stopping": {
    chapter: "2.1c",
    title: "Reporting After Stopping or Body Frisking",
    content: [
      "If after stopping or body frisking and the police officer finds no basis for making an arrest, he/she should put it on record in his/her patrol notebook. If he/she finds a ground for a valid warrantless arrest, then an arrest shall be made."
    ]
  },
  "checkpoints": {
    chapter: "2.2",
    title: "Checkpoints",
    content: [
      "This section establishes the authority, composition, guidelines, and procedures for conducting various types of checkpoints including regular PNP checkpoints, hasty checkpoints, and joint checkpoints."
    ]
  },
  "checkpoint-authority": {
    chapter: "2.2a",
    title: "Authority to Establish Checkpoints",
    content: [
      "The establishment of checkpoints shall be authorized by the Head of Office of the territorial PNP unit and manned by uniformed PNP personnel. Other units may establish checkpoints in coordination with the Head of Office of the territorial PNP unit in the area. For this purpose, the Heads of Offices of territorial units are the following:",
      "1) Regional Director (RD);",
      "2) District Director;",
      "3) Provincial Director;",
      "4) City Director;",
      "5) Chief of City/Municipal Police Station;",
      "6) Station Commander;",
      "7) Sub-Station Commander; and",
      "8) Police Community Precinct Commander."
    ]
  },
  "checkpoint-composition": {
    chapter: "2.2b",
    title: "Composition",
    content: [
      "In the establishment of checkpoint, the checkpoint team shall be composed of, but not limited to, the following:",
      "1) Team Leader (TL) - shall lead and take responsibility in the conduct of checkpoint preferably a Police Commissioned Officer (PCO). In the absence of a PCO, the most Senior Police Non-Commissioned Officer (PNCO) will act as Team Leader;",
      "2) Spotter/Profiler – shall point/profile suspected vehicle subject for checkpoint;",
      "3) Verifiers – shall conduct document verification, search, seizure and arrest, if necessary, initial custody of seized evidence;",
      "4) Search/Arresting personnel – shall search, seize illegal items and arrest offenders;",
      "5) Forward/Rear Security– shall provide security in the checkpoint area and block/pursue fleeing suspects/vehicle;"
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