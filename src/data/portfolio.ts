export type ProjectCategory = "GenAI & RAG" | "CV & Agents" | "Full-Stack";

export type ProjectStatus =
  | "Completed"
  | "In development"
  | "Active · Planned AI matching";

export interface ArchitectureNode {
  id: string;
  label: string;
  detail: string;
  stage: "input" | "process" | "model" | "output";
}

export interface ProjectCaseStudy {
  slug: string;
  index: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  shortDescription: string;
  problem: string;
  approach: string;
  architecture: {
    caption: string;
    nodes: ArchitectureNode[];
  };
  stack: string[];
  outcome: string;
  links: {
    githubLabel: string;
    githubUrl: string;
    githubPlaceholder: boolean;
    demoLabel: string;
    demoUrl: string | null;
    demoPlaceholder: boolean;
  };
  featuredSpan?: "wide" | "standard";
}

export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  type: string;
  period: string;
  bullets: string[];
  focusAreas: string[];
}

export interface HackathonActivity {
  title: string;
  category: "Hackathon" | "Organization";
  detail: string;
}

export interface PipelineStage {
  id: string;
  step: string;
  label: string;
  subtitle: string;
  module: string;
  description: string;
  artifacts: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    headline: string;
    subline: string;
    valueStatement: string;
    availabilityBadge: string;
    email: string;
    githubHandle: string;
    githubUrl: string;
    linkedinHandle: string;
    linkedinUrl: string;
    resumePath: string;
    location: string;
  };
  navigation: {
    id: string;
    label: string;
  }[];
  pipelineStages: PipelineStage[];
  about: {
    lead: string;
    paragraphs: string[];
    pillars: {
      title: string;
      detail: string;
    }[];
  };
  skills: SkillGroup[];
  projects: ProjectCaseStudy[];
  experience: ExperienceItem[];
  education: {
    degree: string;
    institution: string;
    location: string;
    graduationYear: string;
    coursework: string[];
    activities: HackathonActivity[];
  };
  interests: string[];
}

/**
 * Single typed source of truth for Mohamed Shahiskan's portfolio.
 * Edit this file to update copy, projects, metrics ([ADD METRIC]), or links.
 */
export const portfolioData: PortfolioData = {
  profile: {
    name: "Mohamed Shahiskan",
    headline:
      "AI / Machine Learning Engineer, building production-oriented GenAI, RAG and CV systems.",
    subline:
      "B.Tech AI & Data Science (2028), Adithya Institute of Technology, Coimbatore.",
    valueStatement:
      "Designing grounded retrieval pipelines, computer vision preprocessing workflows, and reliable full-stack APIs from experimentation to deployment.",
    availabilityBadge: "Open to AI/ML internships",
    email: "shahiskhan26@gmail.com",
    githubHandle: "github.com/Shahisking",
    githubUrl: "https://github.com/Shahisking",
    linkedinHandle: "linkedin.com/in/mohamed-shahiskhan-5018b532a",
    linkedinUrl: "https://www.linkedin.com/in/mohamed-shahiskhan-5018b532a",
    resumePath: "/resume/Mohamed_Shahiskan_Resume.pdf",
    location: "Coimbatore, India",
  },

  navigation: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ],

  pipelineStages: [
    {
      id: "data",
      step: "01",
      label: "Data",
      subtitle: "Ingest & Preprocess",
      module: "Chunking · OpenCV · Validation",
      description:
        "Normalize raw technical documents, noisy prescription captures, or relational schemas into clean, structured inputs.",
      artifacts: ["SDLC text chunking", "OpenCV denoise & deskew", "ACID schema validation"],
    },
    {
      id: "embeddings",
      step: "02",
      label: "Embeddings",
      subtitle: "Encode & Index",
      module: "Dense Vectors · FAISS · Graphs",
      description:
        "Transform text chunks, medicine entities, and code dependencies into dense vector representations and graph indexes.",
      artifacts: ["FAISS vector index", "TF-IDF & BM25 baselines", "Code dependency graph"],
    },
    {
      id: "retrieval",
      step: "03",
      label: "Retrieval",
      subtitle: "Rank & Match",
      module: "Semantic · Fuzzy · Multi-hop",
      description:
        "Retrieve high-signal context via vector similarity, lexical ranking, fuzzy matching, and dependency traversal.",
      artifacts: ["TF-IDF vs BM25 vs Vector", "Fuzzy + semantic match", "Agent graph traversal"],
    },
    {
      id: "llm",
      step: "04",
      label: "LLM",
      subtitle: "Reason & Score",
      module: "Grounded Output · Confidence",
      description:
        "Synthesize cited answers, change-impact explanations, and calibrated confidence scores behind typed APIs.",
      artifacts: ["Grounded citations", "Confidence scoring", "Impact recommendations"],
    },
  ],

  about: {
    lead: "Engineering complete AI systems—connecting data preparation, model evaluation, backend APIs, and product interfaces.",
    paragraphs: [
      "I focus on building production-oriented AI systems where model quality depends directly on strong data engineering and software architecture. Rather than stopping at isolated notebooks, I design workflows that span preprocessing, vector or graph indexing, retrieval benchmarking, and validated API delivery.",
      "Currently pursuing a B.Tech in AI & Data Science (2028) at Adithya Institute of Technology, Coimbatore, I have built retrieval-augmented assistants, OpenCV-backed prescription recognition pipelines, transactional PostgreSQL applications, and agentic code analysis tooling.",
      "Across my internship at Zaalima Development, national-level hackathons, and independent engineering builds, I prioritize grounded outputs, interpretable confidence scoring, and clean full-stack execution.",
    ],
    pillars: [
      {
        title: "Models & Retrieval",
        detail:
          "Benchmarking lexical and dense retrieval (TF-IDF, BM25, FAISS) alongside confidence-scored CV/OCR pipelines.",
      },
      {
        title: "APIs & Data Integrity",
        detail:
          "Designing normalized ACID PostgreSQL schemas, input validation, pagination, and auditable REST services.",
      },
      {
        title: "Software Delivery",
        detail:
          "Shipping responsive React and TypeScript interfaces with clear system architecture and maintainable code.",
      },
    ],
  },

  skills: [
    {
      category: "AI / ML",
      description: "Core modeling, evaluation, and scoring pipelines",
      items: [
        "Supervised Learning",
        "Feature Engineering",
        "Model Evaluation",
        "Confidence Scoring",
        "Fuzzy Matching",
      ],
    },
    {
      category: "Generative AI",
      description: "Grounded generation and reasoning workflows",
      items: [
        "Retrieval-Augmented Generation (RAG)",
        "LLM Reasoning",
        "AI Agents",
        "Grounded Synthesis",
        "Prompt Design",
      ],
    },
    {
      category: "NLP / CV",
      description: "Text retrieval and visual document preprocessing",
      items: [
        "OpenCV (Denoise, Binarize, Rotation Fix)",
        "Optical Character Recognition (OCR)",
        "Dense Embeddings",
        "Semantic Similarity",
        "TF-IDF & BM25",
      ],
    },
    {
      category: "Programming",
      description: "Languages for ML pipelines and web systems",
      items: ["Python", "TypeScript", "JavaScript", "SQL"],
    },
    {
      category: "Frameworks",
      description: "Application and interface engineering",
      items: ["React", "Node.js", "Express", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend & Dev",
      description: "Service architecture and developer tooling",
      items: [
        "REST APIs",
        "Request Validation & Pagination",
        "Authentication & Audit Logs",
        "Dependency Graph Analysis",
        "VS Code Extensions (Planned)",
      ],
    },
    {
      category: "Databases & Tools",
      description: "Vector indexes, relational storage, and cloud apps",
      items: ["FAISS", "PostgreSQL (ACID Schema)", "Firebase", "Git & GitHub", "Vite"],
    },
  ],

  projects: [
    {
      slug: "sdlc-rag-assistant",
      index: "01",
      title: "SDLC RAG Assistant",
      category: "GenAI & RAG",
      status: "Completed",
      featuredSpan: "wide",
      shortDescription:
        "Grounded technical Q&A across software lifecycle artifacts using chunking, FAISS indexing, retrieval benchmarking (TF-IDF vs BM25 vs vector search), and confidence scoring.",
      problem:
        "Engineering teams work across fragmented SDLC documentation where keyword search misses semantic intent and ungrounded LLM responses risk fabricating architectural or requirement details.",
      approach:
        "Implemented a structured document chunking and FAISS vector indexing pipeline, then systematically compared TF-IDF, BM25, and dense vector retrieval to evaluate recall behavior. Wired retrieved context to an LLM synthesis step with explicit confidence scoring and source grounding.",
      architecture: {
        caption: "Document ingestion, multi-strategy retrieval benchmark, and confidence-scored generation",
        nodes: [
          {
            id: "n1",
            label: "SDLC Corpus",
            detail: "Specs, design docs & lifecycle artifacts",
            stage: "input",
          },
          {
            id: "n2",
            label: "Chunking & Embeddings",
            detail: "Segmented text + dense vector encoding",
            stage: "process",
          },
          {
            id: "n3",
            label: "FAISS + Retrieval Eval",
            detail: "TF-IDF vs BM25 vs vector similarity",
            stage: "model",
          },
          {
            id: "n4",
            label: "Grounded LLM Answer",
            detail: "Cited response + confidence score",
            stage: "output",
          },
        ],
      },
      stack: ["RAG", "FAISS", "Embeddings", "LLM", "TF-IDF", "BM25", "Python"],
      outcome:
        "Produces grounded, source-attributed SDLC answers with calibrated confidence scores; retrieval precision and latency benchmark: [ADD METRIC].",
      links: {
        githubLabel: "GitHub (Add repo link)",
        githubUrl: "https://github.com/Shahisking",
        githubPlaceholder: true,
        demoLabel: "Live Demo (Placeholder)",
        demoUrl: null,
        demoPlaceholder: true,
      },
    },
    {
      slug: "prescription-medicine-recognition",
      index: "02",
      title: "Prescription Medicine Recognition",
      category: "CV & Agents",
      status: "Completed",
      featuredSpan: "standard",
      shortDescription:
        "Computer vision and NLP pipeline pairing OpenCV preprocessing (denoise, binarize, rotation fix) and OCR with fuzzy matching, semantic similarity, and confidence-scored medicine metadata.",
      problem:
        "Scanned and photographed medical prescriptions frequently exhibit uneven lighting, skew, and background noise that degrade raw OCR accuracy on critical medication names.",
      approach:
        "Built an OpenCV image conditioning stage performing denoising, adaptive binarization, and rotation correction prior to OCR extraction. Normalized noisy OCR strings through hybrid fuzzy matching and semantic similarity against a medicine catalog, attaching confidence scores and structured metadata.",
      architecture: {
        caption: "Image conditioning, OCR extraction, and hybrid lexical-semantic catalog resolution",
        nodes: [
          {
            id: "n1",
            label: "Prescription Image",
            detail: "Raw scan or mobile capture",
            stage: "input",
          },
          {
            id: "n2",
            label: "OpenCV Pipeline",
            detail: "Denoise · Binarize · Rotation fix",
            stage: "process",
          },
          {
            id: "n3",
            label: "OCR + Hybrid Match",
            detail: "Fuzzy string + semantic similarity",
            stage: "model",
          },
          {
            id: "n4",
            label: "Medicine Metadata",
            detail: "Matched entity + confidence score",
            stage: "output",
          },
        ],
      },
      stack: ["Computer Vision", "OpenCV", "OCR", "NLP", "Fuzzy Matching", "Semantic Similarity"],
      outcome:
        "Converts noisy prescription captures into structured medicine entries with confidence indicators; OCR character accuracy and top-k match rate: [ADD METRIC].",
      links: {
        githubLabel: "GitHub (Add repo link)",
        githubUrl: "https://github.com/Shahisking",
        githubPlaceholder: true,
        demoLabel: "Live Demo (Placeholder)",
        demoUrl: null,
        demoPlaceholder: true,
      },
    },
    {
      slug: "ai-engineering-change-impact-analyzer",
      index: "03",
      title: "AI Engineering Change Impact Analyzer",
      category: "CV & Agents",
      status: "In development",
      featuredSpan: "standard",
      shortDescription:
        "Agentic code intelligence workflow combining dependency graphs and LLM reasoning for impact explanations, risk detection, and recommendations—with a planned VS Code extension.",
      problem:
        "Code reviews on interconnected repositories often miss indirect ripple effects because reviewers cannot easily trace transitive call and module dependencies under time pressure.",
      approach:
        "Constructing a dependency graph representation paired with AI agent traversal and LLM reasoning to explain downstream impact, flag elevated risks, and surface actionable recommendations. A VS Code extension integration is planned for in-editor feedback.",
      architecture: {
        caption: "Dependency graph traversal paired with agentic LLM risk reasoning",
        nodes: [
          {
            id: "n1",
            label: "Code Diff / Files",
            detail: "Modified symbols & imports",
            stage: "input",
          },
          {
            id: "n2",
            label: "Dependency Graph",
            detail: "Structural module & call mapping",
            stage: "process",
          },
          {
            id: "n3",
            label: "AI Agent + LLM",
            detail: "Multi-hop impact & risk reasoning",
            stage: "model",
          },
          {
            id: "n4",
            label: "Impact Report",
            detail: "Explanations · Risk · VS Code Ext. (Planned)",
            stage: "output",
          },
        ],
      },
      stack: ["AI Agents", "Dependency Graph", "LLM Reasoning", "TypeScript", "VS Code Extension (Planned)"],
      outcome:
        "Currently in development; designed to surface pre-merge architectural risk and impact summaries, with precision evaluation pending: [ADD METRIC].",
      links: {
        githubLabel: "GitHub (Add repo link)",
        githubUrl: "https://github.com/Shahisking",
        githubPlaceholder: true,
        demoLabel: "Extension Preview (Planned)",
        demoUrl: null,
        demoPlaceholder: true,
      },
    },
    {
      slug: "college-asset-management-system",
      index: "04",
      title: "College Asset Management System",
      category: "Full-Stack",
      status: "Completed",
      featuredSpan: "standard",
      shortDescription:
        "Full-stack campus inventory platform built on React, Node.js, and an ACID PostgreSQL schema supporting auth, allocations, maintenance, notifications, and audit history.",
      problem:
        "Tracking laboratory equipment and institutional assets across manual spreadsheets causes allocation conflicts, untracked maintenance schedules, and missing accountability records.",
      approach:
        "Engineered a relational PostgreSQL schema enforcing ACID transactions and immutable audit trails. Built validated, paginated REST APIs in Node.js powering role-based authentication, asset tracking, allocations, maintenance workflows, and status notifications in React.",
      architecture: {
        caption: "Transactional REST API and normalized ACID relational store for campus asset lifecycle",
        nodes: [
          {
            id: "n1",
            label: "React Web Client",
            detail: "Auth, inventory & allocation views",
            stage: "input",
          },
          {
            id: "n2",
            label: "Node.js REST API",
            detail: "Input validation & cursor/page queries",
            stage: "process",
          },
          {
            id: "n3",
            label: "PostgreSQL ACID",
            detail: "Normalized tables & audit history",
            stage: "model",
          },
          {
            id: "n4",
            label: "Lifecycle Events",
            detail: "Allocations, maintenance & notifications",
            stage: "output",
          },
        ],
      },
      stack: ["React", "Node.js", "PostgreSQL", "REST APIs", "ACID Schema", "Auth & Audit History"],
      outcome:
        "Unifies asset allocation, maintenance tracking, and auditability under transactional guarantees; records managed and response time benchmark: [ADD METRIC].",
      links: {
        githubLabel: "GitHub (Add repo link)",
        githubUrl: "https://github.com/Shahisking",
        githubPlaceholder: true,
        demoLabel: "Live Demo (Placeholder)",
        demoUrl: null,
        demoPlaceholder: true,
      },
    },
    {
      slug: "foundergrid",
      index: "05",
      title: "FounderGrid",
      category: "Full-Stack",
      status: "Active · Planned AI matching",
      featuredSpan: "standard",
      shortDescription:
        "Student startup ecosystem platform built with React and Firebase featuring team formation workflows, investor dashboards, and planned AI skill matching.",
      problem:
        "Early-stage student builders lack a dedicated workspace to form balanced founding teams and present structured startup milestones to campus mentors and investors.",
      approach:
        "Developing a collaborative React and Firebase application with team formation workflows and investor-facing dashboards. An AI skill-matching layer is planned to recommend co-founders based on complementary technical and domain strengths.",
      architecture: {
        caption: "Student startup workspace with planned AI co-founder skill matching",
        nodes: [
          {
            id: "n1",
            label: "Builder & Investor Profiles",
            detail: "Skills, roles & venture briefs",
            stage: "input",
          },
          {
            id: "n2",
            label: "Firebase Backend",
            detail: "Auth & realtime state sync",
            stage: "process",
          },
          {
            id: "n3",
            label: "AI Skill Matching",
            detail: "Planned compatibility scoring",
            stage: "model",
          },
          {
            id: "n4",
            label: "React Dashboards",
            detail: "Team formation & investor views",
            stage: "output",
          },
        ],
      },
      stack: ["React", "Firebase", "AI Skill Matching (Planned)", "Team Formation", "Investor Dashboards"],
      outcome:
        "Team formation and investor dashboard foundations implemented; AI skill matching in planned roadmap, active cohort adoption: [ADD METRIC].",
      links: {
        githubLabel: "GitHub (Add repo link)",
        githubUrl: "https://github.com/Shahisking",
        githubPlaceholder: true,
        demoLabel: "Live Demo (Placeholder)",
        demoUrl: null,
        demoPlaceholder: true,
      },
    },
  ],

  experience: [
    {
      role: "Data Science & ML Intern",
      organization: "Zaalima Development",
      type: "Internship",
      period: "Internship",
      bullets: [
        "Cleaned, preprocessed, and transformed structured datasets into reproducible feature pipelines for supervised machine learning tasks.",
        "Trained and evaluated baseline and tuned ML models using cross-validation and error analysis, improving validation performance by [ADD METRIC].",
        "Automated Python data-checking and model-evaluation scripts to shorten experimentation cycles by [ADD METRIC].",
        "Documented dataset assumptions, evaluation metrics, and pipeline outputs for collaboration with engineering peers.",
      ],
      focusAreas: ["Data Preprocessing", "Feature Engineering", "Model Evaluation", "Python Pipelines"],
    },
  ],

  education: {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Adithya Institute of Technology",
    location: "Coimbatore",
    graduationYear: "2028",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Database Management Systems",
      "Computer Vision",
      "Natural Language Processing",
      "Software Engineering",
    ],
    activities: [
      {
        title: "Smart India Hackathon (Internal)",
        category: "Hackathon",
        detail:
          "Participated in rapid problem framing, technical architecture design, and prototype pitching during internal selection sprints.",
      },
      {
        title: "KPR College National-Level Hackathon",
        category: "Hackathon",
        detail:
          "Collaborated on an end-to-end engineering build and live technical demonstration at a national-level intercollegiate hackathon.",
      },
      {
        title: "Society of Knowledge",
        category: "Organization",
        detail:
          "Engaged in peer knowledge-sharing sessions covering emerging AI research, systems engineering, and applied problem-solving.",
      },
      {
        title: "Coding Club",
        category: "Organization",
        detail:
          "Active contributor in algorithmic practice, collaborative development, and peer code discussions on campus.",
      },
    ],
  },

  interests: [
    "Production RAG & Hybrid Retrieval",
    "AI Agents & Code Intelligence",
    "Document OCR & Computer Vision",
    "Grounded LLM Evaluation",
    "Full-Stack ML Systems",
    "ACID Data Engineering",
    "Developer Tooling",
  ],
};
