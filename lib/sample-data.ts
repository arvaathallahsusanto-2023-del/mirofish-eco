export interface Stakeholder {
  id: number;
  name: string;
  cluster: string;
  institution: string;
  role: string;
  imageUrl?: string;
}

export interface ResearchWork {
  id: number;
  title: string;
  author: string;
  university: string;
  area: string;
  year: number;
  abstract?: string;
}

export const SAMPLE_STAKEHOLDERS: Stakeholder[] = [
  { 
    id: 1, 
    name: "Arva Athallah Susanto, M.SEI", 
    cluster: "Core Researcher", 
    institution: "CISF", 
    role: "Secretary"
  },
  { 
    id: 2, 
    name: "Prof. Dr. Imron Mawardi", 
    cluster: "Expert Professor", 
    institution: "Universitas Airlangga", 
    role: "Guru Besar Ekonomi Islam"
  },
  { 
    id: 3, 
    name: "Prof. Dr. Sri Herianingrum", 
    cluster: "Expert Professor", 
    institution: "Universitas Airlangga", 
    role: "Guru Besar Ekonomi Islam"
  },
  { 
    id: 4, 
    name: "Prof. Dr. Muhamad Nafik Hadi Ryandono", 
    cluster: "Expert Professor", 
    institution: "Universitas Airlangga", 
    role: "Guru Besar Ekonomi Islam"
  },
  { 
    id: 5, 
    name: "Prof. Dr. Tika Widiastuti", 
    cluster: "Expert Professor", 
    institution: "Universitas Airlangga", 
    role: "Guru Besar Ekonomi Islam"
  },
  { 
    id: 6, 
    name: "Prof. Dr. Raditya Sukmana", 
    cluster: "Expert Professor", 
    institution: "Universitas Airlangga", 
    role: "Guru Besar Ekonomi Islam"
  },
];

export const SAMPLE_RESEARCH: ResearchWork[] = [
  { 
    id: 1, 
    title: "How Islamic Leadership and Islamic Worldview Play a Role in Restoring a Country's Economic Glory: Bibliometrical Analysis", 
    author: "AA Susanto, et al.", 
    university: "Jurnal Transformatif", 
    area: "Islamic Leadership", 
    year: 2024,
    abstract: "This bibliometric review aims to analyze the role of Islamic leadership and the Islamic worldview in restoring the economic prosperity of nations. The methodology involved a bibliometric approach, utilizing data from various sources analyzed using R Biblioshiny. Key themes identified included Islamic leadership, worldview, and economic development, indicating significant academic interest in restoring prosperity via Sharia principles."
  },
  { 
    id: 2, 
    title: "Critical assessment of blockchain applications in zakat literature: Lessons for government and future directions", 
    author: "AA Susanto", 
    university: "International Journal of Zakat", 
    area: "Zakat & Blockchain", 
    year: 2025,
    abstract: "This study critically assesses blockchain’s potential to address zakat-related challenges such as transparency, accountability, and efficiency. Using PRISMA-based Systematic Literature Review (SLR), the study reviewed 22 documents to evaluate blockchain, AI, and IoT application in zakat management. Findings highlight new opportunities for collection and distribution despite infrastructure challenges."
  },
  { 
    id: 3, 
    title: "Navigating the future: The impact of AI on Islamic economic policy in the digital age", 
    author: "N Asya'bani, AA Susanto, et al.", 
    university: "Review of Islamic Economics & Finance", 
    area: "AI & Policy", 
    year: 2024,
    abstract: "Purpose–This study explores the transformative impact of artificial intelligence (AI) on Islamic economic policy. Methodology-The research employs a Systematic Literature Review (SLR), synthesizing findings from 24 studies to assess AI’s contributions to Islamic financial systems. Results highlight the need for ethical algorithmic design to uphold Sharia’s moral and legal standards."
  },
  { 
    id: 4, 
    title: "Digital Transformation in Zakat Management: A Bibliometric Review on the Application of Blockchain Technology", 
    author: "AA Susanto, et al.", 
    university: "iBAF e-Proceedings", 
    area: "Digital Zakat", 
    year: 2024,
    abstract: "This bibliometric review investigates the digital transformation of zakat management through blockchain technology. Based on 371 documents predominantly from Scopus, it identifies core themes like blockchain, zakat, and Islamic finance. Results underscore a strong scholarly foundation and consistent thematic evolution toward secure, decentralized redistribution systems."
  },
  { 
    id: 5, 
    title: "Toward the future of the halal industry: Exploring perceptions and halal awareness among poultry slaughterhouse business practitioners", 
    author: "L Hikmah, AA Susanto, et al.", 
    university: "Journal of Halal Product & Research", 
    area: "Halal Industry", 
    year: 2023,
    abstract: "This research employs a qualitative approach through observation and interviews to explore halal awareness in the poultry business. Findings indicate that operators' perceptions are still limited, posing barriers to obtaining halal certification. The study suggests increased socialization and cost-effective certification processes to foster a sustainable halal supply chain."
  },
];

export const SAMPLE_CONNECTIONS = [
  { source: 1, target: 2, label: "Advisor" },
  { source: 3, target: 1, label: "Collaborator" },
  { source: 2, target: 5, label: "Advisor" },
];
