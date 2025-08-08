import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const abbreviations = [
  { abbreviation: "ABA", definition: "Alcohol Breath Analyzer" },
  { abbreviation: "ACG", definition: "Anti-Cybercrime Group" },
  { abbreviation: "ACP", definition: "Advanced Command Post" },
  { abbreviation: "AFIS", definition: "Automated Fingerprint Identification System" },
  { abbreviation: "AFP", definition: "Armed Forces of the Philippines" },
  { abbreviation: "AHJAG", definition: "Ad Hoc Joint Action Group" },
  { abbreviation: "AKAT", definition: "Anti-Kidnapping Action Team" },
  { abbreviation: "AKG", definition: "Anti-Kidnapping Group" },
  { abbreviation: "AO", definition: "Arresting Officer" },
  { abbreviation: "APEC", definition: "Asia-Pacific Economic Cooperation" },
  { abbreviation: "ARDs", definition: "Alternative Recording Devices" },
  { abbreviation: "ARO", definition: "Agrarian Reform Officer" },
  { abbreviation: "ASEAN", definition: "Association of Southeast Asian Nations" },
  { abbreviation: "ATC", definition: "Anti-Terrorism Council" },
  { abbreviation: "ATOF", definition: "Authority to Operate Form" },
  { abbreviation: "AVR", definition: "Audio and Video Recorder" },
  { abbreviation: "AVSEGROUP", definition: "Aviation Security Group" },
  { abbreviation: "BAC", definition: "Blood Alcohol Concentration" },
  { abbreviation: "BCPC", definition: "Barangay Council for the Protection of Children" },
  { abbreviation: "BFAR", definition: "Bureau of Fisheries and Aquatic Resources" },
  { abbreviation: "BFP", definition: "Bureau of Fire Protection" },
  { abbreviation: "BI", definition: "Bureau of Immigration" },
  { abbreviation: "BPSO", definition: "Barangay Public Safety Officer" },
  { abbreviation: "BWC", definition: "Body-Worn Camera" },
  { abbreviation: "BWCs", definition: "Body Worn Cameras" },
  { abbreviation: "CAR", definition: "Children at Risk" },
  { abbreviation: "CARP", definition: "Comprehensive Agrarian Reform Program" },
  { abbreviation: "CBRN", definition: "Chemical, Biological, Radiological or Nuclear" },
  { abbreviation: "CBRNE", definition: "Chemical, Biological, Radiological, Nuclear and Explosives" },
  { abbreviation: "CCAT", definition: "Crisis Communication Action Team" },
  { abbreviation: "CD", definition: "City Director" },
  { abbreviation: "CDM", definition: "Civil Disturbance Management" },
  { abbreviation: "CG", definition: "Criminal Group" },
  { abbreviation: "CHR", definition: "Commission on Human Rights" },
  { abbreviation: "CIAC", definition: "Children Involved in Armed Conflict" },
  { abbreviation: "CICL", definition: "Child in Conflict with the Law" },
  { abbreviation: "CIDMS", definition: "Case Information and Database Management System" },
  { abbreviation: "CIMC", definition: "Critical Incident Management Committee" },
  { abbreviation: "CIMOP", definition: "Critical Incident Management Operational Procedures" },
  { abbreviation: "CIMTG", definition: "Crisis Incident Management Task Group" },
  { abbreviation: "CIRAS", definition: "Crime Information Reporting Analysis System" },
  { abbreviation: "CIRF", definition: "Critical Incident Response Force" },
  { abbreviation: "CL", definition: "Crime Laboratory" },
  { abbreviation: "CPO", definition: "City Police Office" },
  { abbreviation: "CLOA", definition: "Certificate of Land Ownership Award" },
  { abbreviation: "CMC", definition: "Crisis Management Committee" },
  { abbreviation: "COC", definition: "Certificate of Coordination" },
  { abbreviation: "COMELEC", definition: "Commission on Elections" },
  { abbreviation: "COP", definition: "Chief of Police" },
  { abbreviation: "CPEC", definition: "Controlled Precursor and Essential Chemical" },
  { abbreviation: "CPNP", definition: "Chief, Philippine National Police" },
  { abbreviation: "CSI", definition: "Crime Scene Investigation" },
  { abbreviation: "DA", definition: "Department of Agriculture" },
  { abbreviation: "DAR", definition: "Department of Agrarian Reform" },
  { abbreviation: "DDB", definition: "Dangerous Drugs Board" },
  { abbreviation: "DENR", definition: "Department of Environment and National Resources" },
  { abbreviation: "DEU", definition: "Drug Enforcement Units" },
  { abbreviation: "DI", definition: "Duty Investigator as used in Rule 2.6 Booking of arrested suspect" },
  { abbreviation: "DI", definition: "Directorate for Intelligence" },
  { abbreviation: "DILG", definition: "Department of Interior and Local Government" },
  { abbreviation: "DIPO", definition: "Directorate for Integrated Police Operations" },
  { abbreviation: "DO", definition: "Desk Officer" },
  { abbreviation: "DOJ", definition: "Department of Justice" },
  { abbreviation: "DOLE", definition: "Department of Labor and Employment" },
  { abbreviation: "DVR", definition: "Digital Video Recording" },
  { abbreviation: "EO", definition: "Election Officer" },
  { abbreviation: "EO", definition: "Executive Order" },
  { abbreviation: "EOD/K9", definition: "Explosive Ordnance Disposal/K9" },
  { abbreviation: "ERI", definition: "Election Related Incident (as used in Rule 6)" },
  { abbreviation: "ERI", definition: "Explosives and Related Incidents" },
  { abbreviation: "FED", definition: "Firearms and Explosive Division" },
  { abbreviation: "FLD", definition: "Foreign Liaison Division" },
  { abbreviation: "FR", definition: "First Responder" },
  { abbreviation: "GAD", definition: "Gender and Development" },
  { abbreviation: "GCMS", definition: "Gas Chromatography-Mass Spectroscopy" },
  { abbreviation: "GBV", definition: "Gender-Based Violence" },
  { abbreviation: "HHQ", definition: "Higher Headquarters" },
  { abbreviation: "HNT", definition: "Hostage Negotiation Team" },
  { abbreviation: "IATA", definition: "International Air Transport Association" },
  { abbreviation: "IC", definition: "Incident Commander" },
  { abbreviation: "ICAO", definition: "International Civil Aviation Organization" },
  { abbreviation: "ICP", definition: "Incident Command Post" },
  { abbreviation: "ICPO", definition: "International Criminal Police Organization" },
  { abbreviation: "ICS", definition: "Incident Command System" },
  { abbreviation: "ICT", definition: "Information and Communication Technology" },
  { abbreviation: "IDM", definition: "Investigation and Detection Management" },
  { abbreviation: "IDO", definition: "Information Development Operations" },
  { abbreviation: "IDVITG", definition: "Interim Disaster Victim Identification Task Group" },
  { abbreviation: "IED", definition: "Improvised Explosive Device" },
  { abbreviation: "INTERPOL", definition: "International Police" },
  { abbreviation: "IOC", definition: "Investigator-on-case" },
  { abbreviation: "IRF", definition: "Incident Record Form" },
  { abbreviation: "ISO", definition: "Internal Security Operation" },
  { abbreviation: "KFR", definition: "Kidnap-for-Ransom" },
  { abbreviation: "LCE", definition: "Local Chief Executives" },
  { abbreviation: "LEA", definition: "Law Enforcement Agency" },
  { abbreviation: "LESTF", definition: "Local Event Security Task Force" },
  { abbreviation: "LGU", definition: "Local Government Units" },
  { abbreviation: "LPS", definition: "Local Police Stations" },
  { abbreviation: "LSWDO", definition: "Local Social Welfare and Development Office" },
  { abbreviation: "LTO", definition: "Land Transportation Office" },
  { abbreviation: "MACC", definition: "Multi-Agency Coordination Center" },
  { abbreviation: "MG", definition: "Maritime Group" },
  { abbreviation: "MPS", definition: "Municipal Police Station" },
  { abbreviation: "MRF", definition: "Medical Reserve Force" },
  { abbreviation: "MTC", definition: "Municipal Trial Court" },
  { abbreviation: "NBI", definition: "National Bureau of Investigation" },
  { abbreviation: "NDRRMC", definition: "National and Local Disaster Risk Reduction and Management Council" },
  { abbreviation: "NGIS", definition: "Next Generation Investigation Solution" },
  { abbreviation: "NGO", definition: "Non-Governmental Organizations" },
  { abbreviation: "NOC", definition: "National Organizing Committee (as used in Rule 5)" },
  { abbreviation: "NOC", definition: "Negotiation Operation Center" },
  { abbreviation: "NPOC", definition: "National and Local Peace and Order Council" },
  { abbreviation: "NPS", definition: "National Prosecution Service" },
  { abbreviation: "NSU", definition: "National Support Unit" },
  { abbreviation: "PA", definition: "Public Address" },
  { abbreviation: "PBDC", definition: "Philippine Bomb Data Center" },
  { abbreviation: "PBI", definition: "Post-Blast Investigation" },
  { abbreviation: "PCAD", definition: "Police Community Affairs and Development" },
  { abbreviation: "PCG", definition: "Philippine Coast Guard" },
  { abbreviation: "PCO", definition: "Police Commissioned Officer" },
  { abbreviation: "PCP", definition: "Police Community Precinct" },
  { abbreviation: "PD", definition: "Provincial Director" },
  { abbreviation: "PDEA", definition: "Philippine Drug Enforcement Agency" },
  { abbreviation: "PDEG", definition: "PNP Drug Enforcement Group" },
  { abbreviation: "PIO", definition: "Public Information Officer" },
  { abbreviation: "PN", definition: "Philippine Navy" },
  { abbreviation: "PNP", definition: "Philippine National Police" },
  { abbreviation: "POP", definition: "Police Operational Procedures" },
  { abbreviation: "PPO", definition: "Police Provincial Office" },
  { abbreviation: "POC", definition: "Peace and Order Councils" },
  { abbreviation: "PPE", definition: "Personal Protective Gear" },
  { abbreviation: "PRO", definition: "Police Regional Office" },
  { abbreviation: "PSG", definition: "Presidential Security Group" },
  { abbreviation: "PUPC", definition: "Persons under Police Custody" },
  { abbreviation: "RA", definition: "Republic Act" },
  { abbreviation: "PNCO", definition: "Police Non-Commissioned Officer" },
  { abbreviation: "RD", definition: "Regional Director" },
  { abbreviation: "ROC", definition: "Regional Operation Center" },
  { abbreviation: "RPC", definition: "Revised Penal Code" },
  { abbreviation: "RSSF", definition: "Reactionary Support and Standby Force" },
  { abbreviation: "RTC", definition: "Regional Trial Court" },
  { abbreviation: "SCDM", definition: "Sub-Committee on Disaster Management" },
  { abbreviation: "SMS", definition: "Short Messaging System" },
  { abbreviation: "SOCO", definition: "Scene of the Crime Operations" },
  { abbreviation: "SONA", definition: "State of the Nation Address" },
  { abbreviation: "SOUs", definition: "Special Operation Units" },
  { abbreviation: "SITG", definition: "Special Investigation Task Group" },
  { abbreviation: "SPC", definition: "Salaam Police Center" },
  { abbreviation: "STF", definition: "Special Task Force" },
  { abbreviation: "Stratcom", definition: "Strategic Communication" },
  { abbreviation: "TA", definition: "Target Audience" },
  { abbreviation: "TAIA", definition: "Target Audience and Issue Analysis" },
  { abbreviation: "TDCO", definition: "The Deputy Chief PNP for Operations" },
  { abbreviation: "TDIDM", definition: "The Director for Investigation and Detective Management" },
  { abbreviation: "TDO", definition: "The Director for Operations" },
  { abbreviation: "TF", definition: "Task Force" },
  { abbreviation: "TG", definition: "Task Groups (as used in Rule 5)" },
  { abbreviation: "TG", definition: "Terrorists Groups" },
  { abbreviation: "TIIR", definition: "Technical Inspection and Inventory Receipt" },
  { abbreviation: "TL", definition: "Team leader" },
  { abbreviation: "TOC", definition: "Tactical Operations Center" },
  { abbreviation: "TOP", definition: "Temporary Operator's Permit" },
  { abbreviation: "TRIMP", definition: "TV, radio, internet, messaging and print media" },
  { abbreviation: "TU", definition: "Task Units" },
  { abbreviation: "TVR", definition: "Traffic Violation Receipt" },
  { abbreviation: "VAWC", definition: "Violence against Women and Children" },
  { abbreviation: "VSA", definition: "Vehicle Screening Area" },
  { abbreviation: "VVIPS", definition: "Very Very Important Persons" },
  { abbreviation: "WCPD", definition: "Women's and Children's Protection Desks" },
];

export const AbbreviationsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-foreground">LIST OF ABBREVIATIONS</h1>
              <Button 
                onClick={() => navigate("/")}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Home
              </Button>
            </div>
            
            <div className="grid gap-4">
              {abbreviations.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <span className="font-bold text-primary min-w-[80px]">{item.abbreviation}</span>
                  <span className="text-foreground flex-1">{item.definition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
