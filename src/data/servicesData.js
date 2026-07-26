export const servicesData = [
  {
    id: "websites",
    title: "High-Converting Business Websites",
    shortDesc: "Designed to turn visitors into customers — not just look pretty. Every pixel is conversion-optimized.",
    fullDesc: "Your website is the single most critical asset in your digital sales funnel. We engineer modern, ultra-fast web experiences powered by Next.js and React that capture attention within seconds, convey high authority, and guide visitors seamlessly toward conversion.",
    pricing: {
      startingPrice: "₹9,999",
      billingType: "One-time project or milestone-based",
      timeline: "1 – 2 weeks",
      guarantee: "100% Core Web Vitals pass & SEO-ready"
    },
    deliverables: [
      "Custom React / Next.js architecture (No slow page builders)",
      "Sub-second page load times with edge CDN caching",
      "Mobile-first responsive UX across all screen sizes",
      "Conversion rate optimization (CRO) & lead capture forms",
      "Headless CMS integration (Sanity / Strapi / Contentful)",
      "Technical SEO foundation & schema markup",
      "30-day post-launch technical support & analytics setup"
    ],
    idealFor: "SMEs, tech startups, and local businesses looking to build a modern web presence and boost customer inquiries.",
    tags: ["React", "Next.js", "Headless CMS", "SEO"]
  },
  {
    id: "automation",
    title: "Workflow & Operations Automation",
    shortDesc: "Eliminate repetitive tasks. Save your team 20+ hours every single week with intelligent automation.",
    fullDesc: "Manual data entry, fragmented communication, and repetitive admin work silently kill company productivity. We build custom automation pipelines that connect your existing CRM, WhatsApp, email, accounting, and operational software into a unified, autonomous engine.",
    pricing: {
      startingPrice: "₹7,999",
      billingType: "Per workflow package",
      timeline: "1 – 2 weeks",
      guarantee: "Save 20+ hours/week or free optimization"
    },
    deliverables: [
      "Custom API integrations & Webhook pipelines",
      "CRM & WhatsApp Business automation",
      "Automated lead routing & instant SMS/Email notifications",
      "Multi-app data synchronization (Zapier, Make, n8n, Python)",
      "Document generation & automated invoicing flows",
      "Error logging, retry loops, and fail-safe alerts",
      "Comprehensive staff walkthrough & documentation"
    ],
    idealFor: "Growing teams drowning in repetitive administrative tasks, manual data transfers, or scattered customer records.",
    tags: ["APIs", "WhatsApp", "Make", "Python"]
  },
  {
    id: "software",
    title: "Custom Software & Web Platforms",
    shortDesc: "Tailored dashboards, CRMs, and web apps built for your exact workflow and operational needs.",
    fullDesc: "When off-the-shelf SaaS solutions constrain your growth or demand expensive per-user pricing, custom software is the ultimate force multiplier. We design and develop bespoke internal portals, customer platforms, and SaaS products tailored to your precise operational rules.",
    pricing: {
      startingPrice: "₹24,999",
      billingType: "Milestone sprint based",
      timeline: "3 – 6 weeks",
      guarantee: "Production-grade code with automated tests"
    },
    deliverables: [
      "Custom admin portals, internal tools & dashboards",
      "Role-based authorization (RBAC) & OAuth security",
      "Scalable SQL/NoSQL database architecture (PostgreSQL, MongoDB)",
      "RESTful & GraphQL API development (Node.js, Express, Python)",
      "Real-time websockets & live data synchronization",
      "Automated testing suite & zero-downtime deployment pipeline",
      "Full source code ownership with zero lock-in"
    ],
    idealFor: "Businesses needing tailored internal tools, custom client portals, or startups building their flagship SaaS MVP.",
    tags: ["Node.js", "PostgreSQL", "React", "Python"]
  },
  {
    id: "infrastructure",
    title: "Scalable Cloud Infrastructure & DevOps",
    shortDesc: "Cloud-native architecture that handles your next 10x without breaking a sweat.",
    fullDesc: "Downtime, slow response times, and unmanaged cloud costs can destroy customer trust. We architect, migrate, and optimize resilient cloud infrastructure on AWS, GCP, and DigitalOcean designed to automatically scale with traffic spikes while keeping operational expenses minimal.",
    pricing: {
      startingPrice: "₹14,999",
      billingType: "One-time setup & optimization",
      timeline: "1 – 2 weeks",
      guarantee: "99.9% uptime architecture & cost audit"
    },
    deliverables: [
      "AWS / GCP cloud infrastructure provisioning (Terraform / CloudFormation)",
      "Docker containerization & Kubernetes cluster orchestration",
      "CI/CD pipeline implementation (GitHub Actions, GitLab CI)",
      "Database replication, automated backups & disaster recovery",
      "24/7 server health monitoring & alert integrations",
      "Security audit, IAM policy hardening & SSL/TLS enforcement",
      "Cloud cost optimization report (typically saving 20–40% on cloud bills)"
    ],
    idealFor: "Companies experiencing high traffic, performance bottlenecks, or looking to migrate from legacy hosting to modern cloud.",
    tags: ["AWS", "Docker", "DevOps", "Security"]
  },
  {
    id: "design",
    title: "UI/UX & Product Design System",
    shortDesc: "Beautiful design isn't optional — it's a competitive advantage. Intuitive, accessible interfaces.",
    fullDesc: "Great product design makes complex software feel effortless. We create high-fidelity user interface (UI) designs and seamless user experience (UX) flows backed by user research, modern visual aesthetics, and comprehensive Figma design systems.",
    pricing: {
      startingPrice: "₹6,999",
      billingType: "Fixed project",
      timeline: "1 week",
      guarantee: "Pixel-perfect Figma file + developer handoff"
    },
    deliverables: [
      "User research, persona mapping & competitor UX analysis",
      "Wireframing & interactive high-fidelity Figma prototypes",
      "Design tokens, component library & typography scale",
      "Mobile app & desktop responsive layout designs",
      "Accessibility (WCAG 2.1 AAA) compliance check",
      "Micro-animations & interactive component specifications",
      "Complete developer handoff assets & design guidelines"
    ],
    idealFor: "Startups building new digital products or existing platforms needing a sleek, modern visual overhaul.",
    tags: ["Figma", "Design Systems", "UI/UX", "A11y"]
  },
  {
    id: "strategy",
    title: "Digital Strategy & Tech Consulting",
    shortDesc: "Technology decisions should be business decisions. Evaluate options and plan roadmaps.",
    fullDesc: "Avoid costly technical mistakes before writing code. Our senior engineering strategists evaluate your current technology stack, identify operational bottlenecks, and craft a clear, pragmatic technical roadmap aligned with your revenue goals.",
    pricing: {
      startingPrice: "₹4,999",
      billingType: "One-time session & strategy roadmap",
      timeline: "3 – 5 days",
      guarantee: "Actionable roadmap & vendor-neutral evaluation"
    },
    deliverables: [
      "Comprehensive codebase & technology stack audit",
      "Architecture evaluation & technical debt breakdown",
      "SaaS vendor selection & build vs. buy analysis",
      "Digital transformation roadmap with cost/time estimates",
      "Security & data compliance risk assessment",
      "Direct 1-on-1 executive advisory sessions",
      "Detailed technical specification document for future engineering teams"
    ],
    idealFor: "Founders and executives planning major digital initiatives who need unbiased, expert engineering guidance.",
    tags: ["Strategy", "Consulting", "Architecture"]
  },
  {
    id: "seo",
    title: "Technical SEO & Growth Engine",
    shortDesc: "A beautiful website is useless if nobody can find it. Deep technical SEO and performance.",
    fullDesc: "Rank at the top of search results for high-intent keywords that generate real revenue. We implement deep technical SEO audits, site speed optimization, structured data schemas, and content architecture that search engine crawlers reward.",
    pricing: {
      startingPrice: "₹5,999",
      billingType: "Audit & setup package",
      timeline: "1 – 2 weeks",
      guarantee: "Core Web Vitals green score boost"
    },
    deliverables: [
      "Complete technical SEO health audit & crawl error fixes",
      "Core Web Vitals speed tuning (LCP, CLS, INP optimization)",
      "Structured data / JSON-LD schema implementation",
      "Keyword gap analysis & high-intent search mapping",
      "On-page content optimization & semantic heading structure",
      "XML sitemap, robots.txt, and canonical URL audit",
      "Monthly keyword ranking & traffic performance reports"
    ],
    idealFor: "Businesses with low Google search visibility or slow page load times holding back organic customer acquisition.",
    tags: ["SEO", "Performance", "Growth"]
  },
  {
    id: "security",
    title: "Security, Penetration Testing & Compliance",
    shortDesc: "Protecting user data is critical. Best-in-class encryption, audits, and compliance.",
    fullDesc: "Cybersecurity threats and compliance breaches can destroy your company's reputation overnight. We perform comprehensive security audits, vulnerability scans, penetration testing, and compliance readiness reviews for web applications and cloud servers.",
    pricing: {
      startingPrice: "₹12,999",
      billingType: "One-time security audit",
      timeline: "1 – 2 weeks",
      guarantee: "Remediation report & re-testing included"
    },
    deliverables: [
      "Web application penetration testing (OWASP Top 10 vulnerabilities)",
      "Server configuration & SSL/TLS cipher suite security audit",
      "Source code static & dynamic security analysis (SAST/DAST)",
      "Data encryption in transit & at rest verification",
      "Compliance readiness evaluation (GDPR, HIPAA, SOC2 basics)",
      "Prioritized vulnerability remediation report with code fixes",
      "Post-fix re-audit and official Security Compliance Certificate"
    ],
    idealFor: "SaaS startups, healthcare providers, and FinTech applications storing sensitive user data or customer information.",
    tags: ["Security", "Compliance", "Pentest"]
  }
];
