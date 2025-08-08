export type TocNode = {
  title: string
  page?: number
  href?: string
  children?: TocNode[]
}

export const tocData: TocNode[] = [
  {
    title: "GENERAL PRINCIPLES",
    page: 1,
    children: [{ title: "Strategic Guidelines", page: 1 }],
  },
  {
    title: "CHAPTER 1 GENERAL GUIDELINES",
    page: 2,
    children: [
      {
        title: "Section 1-1 Police Uniform and Accessories",
        page: 2,
        children: [
          { title: "1.1 Agency Prescribed Uniform", page: 2 },
          { title: "1.2 Appearing Before the Public", page: 2 },
          { title: "1.3 Carrying of Basic Police Equipment", page: 2 },
        ],
      },
      {
        title: "Section 1-2 Categories of Police Operations",
        page: 2,
        children: [
          { title: "1.4 Patrol Operations", page: 2 },
          { title: "1.5 Law Enforcement Operations", page: 2 },
          { title: "1.6 Internal Security Operations", page: 3 },
          { title: "1.7 Public Safety Operations", page: 3 },
          { title: "1.8 Special Police Operations", page: 3 },
          { title: "1.9 Investigation Operations", page: 3 },
          { title: "1.10 Police Community Relations", page: 3 },
        ],
      },
    ],
  },
  {
    title: "CHAPTER 2 OPERATIONAL GUIDELINES",
    page: 4,
    children: [
      { title: "Section 2-1 Pre-Operational Clearance", page: 4 },
      {
        title: "Section 2-2 Coordination",
        page: 4,
        children: [
          { title: "2.1 Inter-Office Coordination", page: 4 },
          { title: "2.2 Coordination by Filing Coordination Form", page: 4 },
          {
            title:
              "2.3 Coordination by Practical/Available Means of Communication",
            page: 5,
          },
        ],
      },
      {
        title: "Section 2-3 Requirements of Police Operations",
        page: 5,
        children: [
          { title: "2.4 Basic Requirements", page: 5 },
          {
            title:
              "2.5 Use of Megaphones and Similar Instruments/devices",
            page: 5,
          },
          { title: "2.6 Accessories", page: 5 },
          { title: "2.7 Use of Body Worn Camera", page: 6 },
        ],
      },
      {
        title: "Section 2-4 Use of Force Policy",
        page: 7,
        children: [
          {
            title: "2.8 Application of Necessary and Reasonable Force",
            page: 7,
          },
          { title: "2.9 The Force Continuum", page: 8 },
          {
            title:
              "2.10 Responsibility of the Police Officer in Charge of the Operations",
            page: 12,
          },
        ],
      },
      {
        title: "Section 2-5 Use of Firearm During Police Operations",
        page: 13,
        children: [
          { title: "2.11 Use of Firearm When Justified", page: 13 },
          { title: "2.12 Firing at Moving Vehicles is prohibited", page: 13 },
          {
            title:
              "2.13 Filing of an Incident Report After the Use of Firearm",
            page: 13,
          },
          { title: "2.14 Procedures After an Armed Confrontation", page: 14 },
        ],
      },
    ],
  },
  {
    title: "CHAPTER 3 POLICE OPERATIONS",
    page: 15,
    children: [
      {
        title: "RULE 1 PATROL OPERATIONS",
        page: 15,
        children: [
          { title: "1.1 Patrol Guidelines", page: 15 },
          {
            title: "1.2 Patrol Duties",
            page: 16,
            children: [
              { title: "a. Patrol Supervisors", page: 16 },
              { title: "b. Patrol Officers", page: 17 },
              {
                title:
                  "c. Guidelines and Procedures when Responding to Calls for Police Assistance",
                page: 18,
              },
            ],
          },
        ],
      },
      {
        title: "RULE 2 LAW ENFORCEMENT OPERATIONS",
        page: 20,
        children: [
          {
            title: "2.1 Stopping and Frisking (Pat-Down Search)",
            page: 20,
            children: [
              {
                title: "a. When to Stop and Frisk (Pat-Down Search)",
                page: 20,
                children: [
                  { title: "1) Stopping", page: 20 },
                  { title: "2) Body Frisking (Pat-Down Search)", page: 20 },
                ],
              },
              {
                title: "b. Procedures and Guidelines",
                page: 21,
                children: [
                  { title: "1) Stopping", page: 21 },
                  { title: "2) Body Frisking (Pat-Down Search)", page: 21 },
                ],
              },
              { title: "c. Reporting After Stopping or Body Frisking", page: 22 },
            ],
          },
          {
            title: "2.2 Checkpoints",
            page: 22,
            children: [
              { title: "a. Authority to Establish Checkpoints", page: 22 },
              { title: "b. Composition", page: 23 },
              { title: "c. Guidelines", page: 23 },
              {
                title: "d. Procedures in the Conduct of PNP Checkpoint",
                page: 26,
              },
              {
                title:
                  "e. Procedures in the Conduct of On-the-Spot (Hasty) Checkpoints",
                page: 28,
              },
              {
                title: "f. Procedures in the Conduct of Joint Checkpoints",
                page: 29,
                children: [
                  {
                    title:
                      "1) Commission on Elections (COMELEC) Checkpoints",
                    page: 29,
                  },
                  {
                    title:
                      "2) Inter-Agency Checkpoints (DENR, DA, BFAR, etc)",
                    page: 29,
                  },
                  { title: "3) Joint PNP-AFP Checkpoints", page: 30 },
                ],
              },
              {
                title:
                  "g. General Procedures to be Followed When Checkpoint is Ignored",
                page: 30,
              },
            ],
          },
          {
            title: "2.3 Flagging Down Vehicles",
            page: 30,
            children: [
              {
                title:
                  "a. Procedures in Flagging Down Vehicles for Possible Involvement in the Commission of a Crime.",
                page: 30,
              },
              {
                title:
                  "b. Procedures in Flagging Down Vehicles for Violation of Traffic Laws, Rules and Regulations",
                page: 33,
              },
              {
                title:
                  "c. Procedures in Flagging Down Motorists Who are Under the Influence of Alcohol, and/or Dangerous Drugs and Similar Substances",
                page: 33,
              },
            ],
          },
          {
            title: "2.4 High-Risk Stop and High-Risk Arrest",
            page: 36,
            children: [
              { title: "a. General Setting", page: 36 },
              { title: "b. Maritime Setting", page: 37 },
              {
                title: "c. Airport Setting",
                page: 39,
                children: [
                  { title: "1) Landside Area", page: 39 },
                  { title: "2) Airside Area", page: 40 },
                ],
              },
            ],
          },
          {
            title: "2.5 Police Defensive Roadblock",
            page: 40,
            children: [
              { title: "a. Pre-Conditions in Establishing Police Defensive Roadblock", page: 40 },
              { title: "b. Procedures in Establishing Roadblock", page: 41 },
            ],
          },
          {
            title: "2.6 Arrest",
            page: 43,
            children: [
              { title: "a. General Guidelines", page: 43 },
              { title: "b. Authority of the Arresting Officer when Making an Arrest", page: 44 },
              { title: "c. Duties of the Arresting Officer", page: 45 },
              { title: "d. Arrest with Warrant", page: 47 },
              { title: "e. Arrests without a Warrant", page: 49 },
              { title: "f. Physical/Medical Examination of Arrested Person/Suspect", page: 50 },
              { title: "g. Booking of Arrested Suspect", page: 50 },
            ],
          },
          {
            title: "2.7 Search and Seizure",
            page: 55,
            children: [
              { title: "a. Requisites for the Issuance of Search Warrant", page: 55 },
              { title: "b. Validity of Search Warrant", page: 56 },
              { title: "c. Time of Search", page: 56 },
              { title: "d. Applications for Search Warrant", page: 57 },
              { title: "e. Authority of Police Officers when Conducting Search", page: 57 },
              { title: "f. Use of BWC During the Search", page: 58 },
              { title: "g. Notification During the Search", page: 58 },
              { title: "h. Prohibited Acts in the Conduct of Search by Virtue of a Search Warrant", page: 58 },
              { title: "i. Inventory and Delivery of Property Seized", page: 58 },
              { title: "j. Downloading of Data from the BWC/ARD:", page: 59 },
              { title: "k. Affidavit of Search and Submission of Recordings to Court", page: 60 },
              { title: "l. Valid Search and Seizures Without Search Warrant", page: 62 },
            ],
          },
          {
            title: "2.8 Rules on Anti-Illegal Drugs Operations",
            page: 63,
            children: [
              { title: "a. General Policy and Guidelines:", page: 63 },
              { title: "b. Coordination Requirements", page: 64 },
              { title: "c. Handling, Custody and Disposition of Drug and Non-Drug Evidence", page: 65 },
            ],
          },
          {
            title: "2.9 Rules on Anti-Kidnapping Operations",
            page: 70,
            children: [
              { title: "a. Types of Kidnapping", page: 70 },
              {
                title: "b. Concept of Operation",
                page: 71,
                children: [
                  { title: "1) Kidnapping by Organized Crime Group/ Criminal Group", page: 71 },
                  { title: "2) Kidnapping by Terrorists Groups", page: 71 },
                  { title: "3) Kidnapping by Other Individuals", page: 72 },
                ],
              },
            ],
          },
          {
            title: "2.10 Cybercrime and Cyber-Related Incident Response Operations",
            page: 73,
            children: [
              { title: "a. Cybercrime Response", page: 73 },
              { title: "b. Guidelines in Responding to Cybercrime and Cyber-Related Incidents", page: 73 },
              { title: "c. Preservation of Seized Computer", page: 74 },
              { title: "d. Guidelines in the Treatment of Other Electronic Data Storage Devices", page: 76 },
              { title: "e. Preservation of Seized Mobile Communication Devices", page: 76 },
              { title: "f. Preservation of Seized Facsimile or Fax Machine or Similar Devices", page: 76 },
              { title: "g. Preservation of Seized Caller ID Devices and Other Similar Devices", page: 76 },
              { title: "h. Guidelines in the Treatment of Seized Digital Video Recording (DVR) Devices", page: 77 },
              { title: "i. Acquiring the DVR Devices and/or their Footages/ Recording", page: 77 },
            ],
          },
        ],
      },
      {
        title: "RULE 3 INTERNAL SECURITY OPERATIONS",
        page: 77,
        children: [
          { title: "3.1 The PNP in an Active Support Role", page: 78 },
          { title: "3.2 Law Enforcement Operations Against Terrorist Groups and other Threats to National Security", page: 78 },
          { title: "3.3 Target Hardening", page: 78 },
        ],
      },
      {
        title: "RULE 4 PUBLIC SAFETY OPERATIONS",
        page: 80,
        children: [
          {
            title: "4.1 PNP Critical Incident Management Operational Procedures (CIMOP)",
            page: 80,
            children: [
              {
                title: "a. Types of Critical Incidents",
                page: 80,
                children: [
                  { title: "1) Natural Calamity and Disaster", page: 81 },
                  { title: "2) Human Induced Incident", page: 81 },
                ],
              },
              {
                title: "b. Stages in Disaster Management",
                page: 81,
                children: [
                  { title: "1) Pre- Disaster Stage", page: 81 },
                  {
                    title: "2) Disaster Response Stage",
                    page: 82,
                    children: [
                      { title: "a) Natural Calamity", page: 82 },
                      { title: "b) Human Induced Incident", page: 83 },
                    ],
                  },
                  { title: "3) Post-Disaster Stage", page: 83 },
                ],
              },
              { title: "c. Alert Levels During Human-Induced Critical Incident", page: 84 },
              { title: "d. Incident Command System (ICS)", page: 84 },
              { title: "e. Organization and Structure of CIMC/CIMTG/ DIMTG", page: 85 },
              { title: "f. The Escalation Protocols", page: 89 },
            ],
          },
          {
            title: "4.2 Hostage Situation",
            page: 91,
            children: [
              { title: "a. First Responders", page: 91 },
              { title: "b. Incident Commander (IC)", page: 92 },
              { title: "c. Hostage Negotiation Team", page: 94 },
              { title: "d. Assault Team", page: 95 },
              { title: "e. Crowd Control", page: 95 },
              { title: "f. Support Personnel", page: 95 },
              { title: "g. After the neutralization of the hostage-taker/s and rescue of the hostage/s, the following processing and debriefing procedures shall be under taken:", page: 95 },
            ],
          },
          {
            title: "4.3 Bomb Threat and Bomb Incident Emergency Response",
            page: 96,
            children: [
              { title: "a. Procedures for FR Upon Receipt of Any Bomb Threat", page: 96 },
              { title: "b. Procedures for FR if a suspected item is found and the EOD/K9 recommended an evacuation from the affected area", page: 96 },
              { title: "c. Procedures for FR if the EOD/K9 confirmed the presence of an explosive component or Improvised Explosive Device (IED)", page: 97 },
              { title: "d. Procedures for FR in Case of Bomb Explosion", page: 97 },
            ],
          },
          {
            title: "4.4 Civil Disturbance Management (CDM) Operations",
            page: 98,
            children: [
              { title: "a. General Guidelines", page: 98 },
              { title: "b. Specific Guidelines", page: 99 },
              { title: "c. CDM Operational Tasks", page: 99 },
              { title: "d. CDM Operational Approaches", page: 100 },
            ],
          },
          {
            title: "4.5 Public Assembly",
            page: 101,
            children: [
              { title: "a. Policies", page: 101 },
              {
                title: "b. Police Response",
                page: 102,
                children: [
                  { title: "1) During Planning Stage", page: 102 },
                  { title: "2) During Initial and Peaceful Stage", page: 102 },
                  { title: "3) During Breach of Peace/Confrontational Stage (With or without permit)", page: 103 },
                  { title: "4) During Violent Stage", page: 104 },
                  { title: "5) Post-Operation Stage:", page: 105 },
                ],
              },
              { title: "c. Dispersal of Public Assembly with Permit", page: 105 },
              { title: "d. Dispersal of Public Assembly Without Permit", page: 105 },
              { title: "e. Prohibited Acts", page: 106 },
              { title: "f. Guidelines in dealing with Assemblies, Rallies, Demonstrations and Marches", page: 107 },
            ],
          },
          {
            title:
              "4.6 Procedures for Responding PNP Personnel in Enforcing Quarantine Measures to Manage Health Hazards",
            page: 108,
            children: [
              { title: "a. Initial Response Upon the Impact of Health Hazard", page: 108 },
              { title: "b. When the Health Hazard Becomes Widespread and has Affected Many Communities", page: 109 },
              { title: "c. Other Activities Relative to Public Safety and Security", page: 110 },
              { title: "d. Arrest of Violators in Relation to Health Hazard Laws, Guidelines and Protocols", page: 110 },
            ],
          },
        ],
      },
      {
        title: "RULE 5 SPECIAL POLICE OPERATIONS",
        page: 111,
        children: [
          {
            title: "5.1 Major Events Security Management",
            page: 111,
            children: [
              { title: "a. Classification of Major Events", page: 111 },
              { title: "b. Creation of Joint Security Task Forces (STF)", page: 113 },
              { title: "c. Procedures in the Establishment and Operationalization of Multi-Agency Coordinating Center", page: 114 },
              { title: "d. Procedures to be undertaken by the Commander, TG Security", page: 115 },
              { title: "e. Procedures to be undertaken by the Commander, TG peace and order", page: 117 },
              { title: "f. Procedures to be Undertaken by the Commander, TG Emergency Preparedness and Response", page: 118 },
            ],
          },
          {
            title:
              "5.2 Police Assistance During the Implementation of Orders or Decisions from Courts, Quasi-Judicial or Administrative Bodies",
            page: 120,
            children: [
              {
                title: "a. During Labor Disputes",
                page: 121,
                children: [
                  { title: "1) General Policy and Guidelines", page: 121 },
                  { title: "2) Applicable Legal Parameters", page: 122 },
                  { title: "3) Service of Lawful Orders or Writ", page: 123 },
                  { title: "4) Prohibited Labor Activities", page: 123 },
                  { title: "5) Obstruction During Pickets and Lock Downs", page: 123 },
                ],
              },
              {
                title: "b. During Enforcement of Demolition and Ejectment Orders",
                page: 123,
                children: [
                  { title: "1) Role of the PNP in the Enforcement of a Demolition and/or Ejectment Order", page: 123 },
                  { title: "2) Procedures in the Enforcement of a Demolition and/or Ejectment Order", page: 124 },
                ],
              },
              {
                title:
                  "c. During Implementation of Final Decisions or Orders of the Courts in Civil Cases, of Quasi-judicial Bodies and of Administrative Bodies within their Jurisdiction",
                page: 125,
                children: [
                  { title: "1) Police Assistance in the Implementation of Final Decisions or Orders or Resolutions of the Courts in Civil Cases, of Quasi-Judicial Bodies and of Administrative Bodies, (Except Cases with Issued Temporary Restraining Order or Injunction)", page: 125 },
                ],
              },
              {
                title:
                  "d. During the Implementation of Final Decisions/Orders of the COMELEC or DILG or Local Government Unit Exercising Disciplinary Powers in Administrative Cases of Elected Officials",
                page: 127,
                children: [
                  { title: "1) Requirements for the Request for Police Assistance", page: 127 },
                  { title: "2) Period to Render Police Assistance", page: 127 },
                  { title: "3) Extent of Police Assistance", page: 128 },
                  { title: "4) Role of PNP Personnel Rendering Police Assistance", page: 128 },
                ],
              },
              {
                title: "e. During the Implementation of Comprehensive Agrarian Reform Program (CARP)",
                page: 128,
                children: [
                  { title: "1) Coverage of Police Assistance", page: 128 },
                  { title: "2) Requirements in the Granting of Police Assistance", page: 129 },
                  { title: "3) Extent of Police Assistance", page: 129 },
                  { title: "4) Role of PNP Personnel Rendering Police Assistance", page: 130 },
                  { title: "5) When Entry to the Property is Refused by the Landowner", page: 130 },
                ],
              },
              {
                title:
                  "f. During the Implementation of Decisions/Orders of the Court, Quasi-judicial or Administrative Bodies that are Immediately Executory",
                page: 130,
              },
            ],
          },
        ],
      },
      {
        title: "RULE 6. INVESTIGATION OPERATIONS",
        page: 132,
        children: [
          {
            title: "6.1 Conduct of Crime Scene Investigation",
            page: 132,
            children: [
              {
                title: "a. Specific Functions, Responsibilities and Procedures",
                page: 132,
                children: [
                  { title: "1) First Responders", page: 132 },
                  { title: "2) Investigator-On-Case (IOC)", page: 133 },
                  { title: "3) SOCO", page: 134 },
                  { title: "4) Legal Officer", page: 134 },
                ],
              },
              { title: "b. Special SOCO Procedures", page: 135 },
              { title: "c. Policy Guidelines on Processing of Persons Present at the Crime Scene during Post-Incident Situations", page: 135 },
              { title: "1) Processing, Debriefing and Documentation:", page: 136 },
              { title: "2) Venue of Processing, Debriefing and Documentation", page: 136 },
              { title: "d. Release of the Crime Scene", page: 136 },
            ],
          },
          {
            title: "6.2 Maintenance of Police Blotter",
            page: 137,
            children: [
              { title: "a. Police Blotter", page: 137 },
              { title: "b. Blotter Procedure", page: 137 },
            ],
          },
          {
            title: "6.3 Judicial Affidavit Rule",
            page: 137,
            children: [
              { title: "a. Application of Rule to Criminal Actions", page: 138 },
              { title: "b. Contents of Judicial Affidavit", page: 138 },
              { title: "c. Sworn Attestation of the Lawyer", page: 139 },
            ],
          },
          {
            title: "6.4 Custodial Investigation",
            page: 139,
            children: [
              { title: "a. Duties of the Police during Custodial Investigation", page: 139 },
              {
                title: "b. Persons Under Police Custody (PUPC)",
                page: 141,
                children: [
                  { title: "1) Admission", page: 141 },
                  { title: "2) Requirements for Admission", page: 142 },
                  { title: "3) Segregation of PUPC", page: 142 },
                  { title: "4) Visitation", page: 142 },
                  { title: "5) Transfer of Custody", page: 143 },
                  { title: "6) Release", page: 143 },
                ],
              },
              { title: "c. Transporting of PUPC", page: 144 },
            ],
          },
          {
            title: "6.5 Instituting Criminal Actions",
            page: 144,
            children: [
              { title: "a. Inquest Procedures", page: 144 },
              { title: "b. Waiver of Rights", page: 145 },
              { title: "c. Preliminary Investigation and Direct Filing", page: 146 },
              { title: "d. Attendance to Court Duties", page: 146 },
              { title: "e. Monitoring of Cases by the Investigators", page: 147 },
            ],
          },
          {
            title: "6.6 Investigation by the Local Police Unit After an Armed Confrontation",
            page: 147,
            children: [
              { title: "a. Responsibility of the Local Police Unit", page: 147 },
              { title: "b. Processing of the Crime Scene", page: 147 },
              { title: "c. Disposition of Firearms, Cartridges and Bullets Used, Seized, or Recovered in the absence of SOCO Team", page: 147 },
              { title: "d. Disposition of Other Evidence Used, Seized or Recovered", page: 148 },
              { title: "e. Procedures to be Followed in Case Persons Died", page: 148 },
            ],
          },
          { title: "6.7 Procedures in the Investigation of Heinous and Sensational Crimes", page: 148 },
          {
            title: "6.8 Investigation of Violence Against Women and Children (VAW/C) and other Gender-Based Violence (GBV)",
            page: 149,
            children: [
              { title: "a. Investigation of Complaints and Reports Involving All Forms of VAW/C and other GBV", page: 149 },
              { title: "b. Rescue, Temporary Shelter and Protective Custody of Child Victim-Survivor", page: 150 },
              { title: "c. Procedure in the Rescue of a Child", page: 151 },
              { title: "d. Procedure to be Observed in the Handling of Children at Risk (CAR), Children in Conflict with the Law (CICL) and Children Involved in Armed Conflict (CIAC)", page: 152 },
            ],
          },
        ],
      },
      {
        title: "RULE 7. POLICE COMMUNITY RELATIONS (PCR)",
        page: 153,
        children: [
          { title: "7.1 Essence of PCR", page: 153 },
          { title: "7.2 General Guidelines", page: 153 },
          {
            title: "7.3 Public Information",
            page: 154,
            children: [
              { title: "a. Protocols in Releasing Information", page: 154 },
              { title: "b. Media Relations Protocols", page: 155 },
              { title: "c. Media Relations During Crisis", page: 155 },
              { title: "d. Social Media Protocols", page: 156 },
            ],
          },
          {
            title: "7.4 Information Development Operations (IDO)",
            page: 156,
            children: [
              { title: "a. Three Classifications of IDO", page: 156 },
              { title: "b. Strategic Communication", page: 157 },
            ],
          },
          {
            title: "7.5 Police Community Affairs and Development",
            page: 157,
            children: [
              { title: "a. PCAD programs and activities shall be guided by the following", page: 158 },
              { title: "b. Community Engagement and Awareness Procedures", page: 158 },
              { title: "c. Community Organizing Procedures", page: 159 },
              { title: "d. Community Mobilization Procedures", page: 159 },
            ],
          },
          {
            title: "7.6 Gender and Development (GAD)",
            page: 160,
            children: [
              { title: "a. The Role of Police Officers as Advocates of GAD", page: 160 },
              { title: "1) Deployment of Female Police During Operations", page: 160 },
              { title: "2) Deployment Of WCPD Officers in Evacuation Areas", page: 160 },
              { title: "3) Decent Custodial Facilities for Both Male and Female PUPCs", page: 161 },
              { title: "4) Promotion of Gender Equality and Development", page: 161 },
            ],
          },
          {
            title: "7.7 Salaam Police",
            page: 161,
            children: [
              { title: "a. Islamic Cultural and Religious Sensitivities", page: 162 },
              { title: "b. Engagement with Muslim Communities:", page: 162 },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "CHAPTER 4 LIST OF ABBREVIATIONS",
    href: "/abbreviations",
  },
]


