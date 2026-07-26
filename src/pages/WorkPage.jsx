import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeIn from '../components/FadeIn';
import GlowCard from '../components/GlowCard';
import './WorkPage.css';

const projects = [
  {
    index: "01",
    client: "ShopEase India",
    industry: "E-Commerce",
    title: "Scaling a Local Retailer to a National Brand",
    duration: "8 weeks",
    year: "2024",
    stats: [
      { value: "45%", label: "Increase in mobile conversions" },
      { value: "0.8s", label: "Avg. page load time (was 6.4s)" },
      { value: "35%", label: "Cart abandonment rate (was 70%)" },
      { value: "60%", label: "Revenue growth in Q1 post-launch" },
    ],
    challenge: "ShopEase's Shopify storefront was taking 6+ seconds to load on mobile networks. Their checkout had 7 steps — a 70% abandonment rate was bleeding revenue every single day. Competing brands were visibly faster and cleaner.",
    solution: "We migrated them to a headless Next.js + Shopify Storefront API architecture deployed on Vercel Edge. Rebuilt checkout to 3 steps, implemented predictive prefetching, and overhauled mobile UX with thumb-friendly interaction patterns.",
    outcomes: [
      "45% surge in mobile conversions",
      "Sub-second page loads on 4G",
      "Cart abandonment halved in 30 days",
      "₹1.2 Cr additional revenue in first quarter",
    ],
    quote: {
      text: "Trion didn't just rebuild our website — they rebuilt our business engine. The numbers speak for themselves. Within 6 weeks of launch, we saw more online revenue than the previous 3 months combined.",
      author: "Rohan Mehta",
      role: "Founder & CEO, ShopEase India",
    },
    tags: ["Next.js", "Shopify API", "Edge CDN", "Performance"],
  },
  {
    index: "02",
    client: "QuickMove Logistics",
    industry: "Logistics & Supply Chain",
    title: "Eliminating 40 Hours of Manual Admin Every Week",
    duration: "6 weeks",
    year: "2024",
    stats: [
      { value: "40h", label: "Admin hours saved per week" },
      { value: "30%", label: "Fewer delivery delays" },
      { value: "2.5×", label: "Daily delivery capacity scale" },
      { value: "₹0", label: "Additional headcount required" },
    ],
    challenge: "QuickMove managed 200+ daily deliveries across 3 cities using WhatsApp messages, spreadsheets, and phone calls. Drivers had no visibility on routes. Customers had no tracking. Dispatchers were working 12-hour days just to keep up.",
    solution: "We built a real-time dispatch SaaS platform — a React-based operations dashboard for admins with live driver location tracking, automated route assignment using a greedy algorithm, and a PWA for drivers with turn-by-turn updates.",
    outcomes: [
      "40 hours/week saved in manual dispatch work",
      "Delivery errors reduced by 30%",
      "Scaled from 200 to 500 daily deliveries without new hires",
      "Customer tracking portal launched with 80% adoption",
    ],
    quote: {
      text: "Before Trion, our ops team was exhausted every single day. Now our dispatch runs almost on autopilot. The ROI on this project was visible in the very first week.",
      author: "Priya Subramaniam",
      role: "Operations Director, QuickMove Logistics",
    },
    tags: ["React", "Node.js", "WebSockets", "PWA", "Automation"],
  },
  {
    index: "03",
    client: "SkillBridge Academy",
    industry: "EdTech",
    title: "Building a Unified LMS That Scaled to 5,000 Students",
    duration: "10 weeks",
    year: "2023",
    stats: [
      { value: "65%", label: "Student engagement increase" },
      { value: "50%", label: "Reduction in instructor admin time" },
      { value: "5,000+", label: "Active students on launch month" },
      { value: "4.8★", label: "Average student satisfaction rating" },
    ],
    challenge: "SkillBridge was running its online academy across Google Classroom, Zoom, WhatsApp groups, and Google Sheets. Students missed classes because links were scattered. Instructors spent 3+ hours a day on administrative tasks instead of teaching.",
    solution: "We designed and developed a full custom Learning Management System (LMS) — built on Next.js and Node.js with PostgreSQL. Features included course management, live class scheduling with automated Zoom link injection, AI-assisted quiz grading, student progress dashboards, and a mobile-first interface.",
    outcomes: [
      "Student engagement up 65% within 60 days",
      "Instructors save 15+ hours/week on admin tasks",
      "Platform scaled to 5,000+ active students within first month",
      "Completion rates improved from 34% to 71%",
    ],
    quote: {
      text: "We went from total chaos to a product that feels like it was built by a Silicon Valley team. Our students actually enjoy using the platform now, and our instructors finally have time to focus on teaching.",
      author: "Ananya Iyer",
      role: "Co-Founder, SkillBridge Academy",
    },
    tags: ["Next.js", "Node.js", "PostgreSQL", "LMS", "EdTech"],
  },
  {
    index: "04",
    client: "VaultPe FinTech",
    industry: "Financial Technology",
    title: "MVP to Series A in 6 Weeks Flat",
    duration: "6 weeks",
    year: "2024",
    stats: [
      { value: "6 wks", label: "From kickoff to live beta" },
      { value: "500+", label: "Beta users onboarded at launch" },
      { value: "₹2 Cr", label: "Series A raised post-launch" },
      { value: "0", label: "Security incidents reported" },
    ],
    challenge: "VaultPe had a concept, a founding team, and fresh seed funding — but no product. They needed a fully functional FinTech MVP with real-money transactions and bank integrations, delivered in 6 weeks to meet investor demo commitments.",
    solution: "We assembled a 4-person rapid-delivery team: 2 full-stack engineers, 1 UI/UX designer, and 1 QA specialist. Built a React + TypeScript frontend, Node.js backend with PostgreSQL, integrated Razorpay for payments and Finvu for account aggregation. End-to-end encryption and OWASP compliance baked in from day one.",
    outcomes: [
      "Live beta in exactly 42 days from kickoff",
      "500 users onboarded in launch week",
      "₹2 Crore Series A successfully raised post-demo",
      "Zero security vulnerabilities in third-party audit",
    ],
    quote: {
      text: "Trion moved at a speed I had never seen from any development team. They treated our deadline like it was their own — and delivered a product that impressed serious VCs. We simply couldn't have raised without it.",
      author: "Vikram Nair",
      role: "CEO & Co-Founder, VaultPe",
    },
    tags: ["React", "TypeScript", "Razorpay", "Node.js", "FinTech"],
  },
  {
    index: "05",
    client: "CareSync Healthcare",
    industry: "Healthcare",
    title: "Modernizing a Patient Portal — 150% More Bookings",
    duration: "7 weeks",
    year: "2024",
    stats: [
      { value: "150%", label: "Increase in online appointment bookings" },
      { value: "40%", label: "Reduction in support call volume" },
      { value: "30%", label: "Improvement in patient satisfaction score" },
      { value: "HIPAA", label: "Compliant data architecture" },
    ],
    challenge: "CareSync's legacy patient portal had a broken appointment scheduler, a confusing results view, and no mobile support. Staff received 200+ daily support calls from confused patients. The system was HIPAA non-compliant and a legal liability.",
    solution: "We rebuilt the entire portal in Next.js with a HIPAA-compliant AWS infrastructure. Redesigned the appointment flow from 8 screens down to 3. Built a test results viewer with clear visual indicators, automated reminder emails via SendGrid, and integrated with their existing EHR system via HL7 FHIR APIs.",
    outcomes: [
      "Online bookings up 150% in first month",
      "Support calls reduced by 40%",
      "Patient satisfaction NPS improved from 31 to 67",
      "Full HIPAA compliance achieved — zero outstanding violations",
    ],
    quote: {
      text: "Our old portal was a patient experience disaster. Trion not only made it beautiful and functional — they made it safe and compliant. Staff morale improved, patients stopped complaining, and we're booking more appointments online than ever before.",
      author: "Dr. Smitha Reddy",
      role: "Chief Digital Officer, CareSync Healthcare",
    },
    tags: ["Next.js", "AWS", "HIPAA", "HL7 FHIR", "UX Design"],
  },
];

const allTags = ["All", "E-Commerce", "Logistics & Supply Chain", "EdTech", "Financial Technology", "Healthcare"];

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.industry === activeFilter);

  return (
    <div className="page-wrapper">
      {/* ── Hero ──────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <FadeIn>
            <span className="section-label">Case Studies</span>
          </FadeIn>
          <AnimatedText as="h1" className="heading-xl" delay={0.1}>
            Real problems. Measurable results.
          </AnimatedText>
          <FadeIn delay={0.5}>
            <p className="body-lg page-hero__sub">
              Every engagement starts with a business problem — not a technology choice. Here is a detailed look at 5 of our most impactful projects, with real numbers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">

          {/* ── Summary Stats ─────────── */}
          <FadeIn>
            <div className="work-summary-stats">
              <div className="work-summary-stat">
                <span className="work-summary-stat__val">50+</span>
                <span className="work-summary-stat__label">Projects delivered across India & globally</span>
              </div>
              <div className="work-summary-stat">
                <span className="work-summary-stat__val">98%</span>
                <span className="work-summary-stat__label">Client satisfaction rate maintained</span>
              </div>
              <div className="work-summary-stat">
                <span className="work-summary-stat__val">3×</span>
                <span className="work-summary-stat__label">Average ROI reported by clients</span>
              </div>
              <div className="work-summary-stat">
                <span className="work-summary-stat__val">6 wks</span>
                <span className="work-summary-stat__label">Average time from kickoff to live product</span>
              </div>
            </div>
          </FadeIn>

          {/* ── Filters ───────────────── */}
          <FadeIn delay={0.1}>
            <div className="work-filters">
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`work-filter-btn ${activeFilter === tag ? 'work-filter-btn--active' : ''}`}
                  onClick={() => setActiveFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* ── Case Studies ──────────── */}
          <div className="case-study-list">
            {filtered.map((project, idx) => (
              <FadeIn key={project.index} delay={idx * 0.08}>
                <GlowCard className="case-study">
                  <div className="case-study__inner">

                    {/* Header */}
                    <div className="case-study__header">
                      <div className="case-study__header-left">
                        <span className="case-study__index">Case Study {project.index} — {project.client}</span>
                        <h2 className="case-study__title">{project.title}</h2>
                        <div className="case-study__meta-row">
                          <span className="case-study__industry">{project.industry}</span>
                          <div className="case-study__tags">
                            {project.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
                          </div>
                        </div>
                      </div>
                      <div className="case-study__header-right">
                        <span className="case-study__duration">⏱ {project.duration}</span>
                        <span className="case-study__year">Completed {project.year}</span>
                      </div>
                    </div>

                    {/* Key Stats Strip */}
                    <div className="case-study__stats">
                      {project.stats.map((s, i) => (
                        <div key={i} className="case-study__stat">
                          <span className="case-study__stat-value">{s.value}</span>
                          <span className="case-study__stat-label">{s.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Challenge + Solution */}
                    <div className="case-study__body">
                      <div className="case-study__stage">
                        <span className="case-study__stage-label case-study__stage-label--challenge">
                          <AlertTriangle size={12} /> The Challenge
                        </span>
                        <p>{project.challenge}</p>
                      </div>
                      <div className="case-study__stage">
                        <span className="case-study__stage-label case-study__stage-label--solution">
                          <Lightbulb size={12} /> Our Solution
                        </span>
                        <p>{project.solution}</p>
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="case-study__outcomes">
                      <span className="case-study__outcomes-label">✦ Outcomes</span>
                      <div className="case-study__outcome-items">
                        {project.outcomes.map((o, i) => (
                          <div key={i} className="case-study__outcome-item">
                            <CheckCircle size={13} style={{ color: 'var(--success)', flexShrink: 0 }} />
                            <span>{o}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client Quote */}
                    <div className="case-study__quote">
                      <span className="case-study__quote-mark">"</span>
                      <div>
                        <p className="case-study__quote-text">{project.quote.text}</p>
                        <div className="case-study__quote-author">{project.quote.author}</div>
                        <div className="case-study__quote-role">{project.quote.role}</div>
                      </div>
                    </div>

                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-4)' }}>
              <p className="body-lg">No case studies in this category yet. <Link to="/contact" style={{ color: 'var(--accent)' }}>Start a project with us.</Link></p>
            </div>
          )}

        </div>
      </section>

      {/* ── CTA ───────────────────────── */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="cta-card">
              <div className="cta-card__glow" />
              <AnimatedText as="h2" className="heading-md" delay={0.1}>
                Your project could be the next one on this page.
              </AnimatedText>
              <FadeIn delay={0.3}>
                <p className="body-md" style={{ maxWidth: '500px', margin: '20px auto 32px', textAlign: 'center' }}>
                  Every business has a bottleneck. Let's find yours and build a solution that delivers numbers worth talking about.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    Start a Conversation <ArrowRight size={16} />
                  </Link>
                  <Link to="/services" className="btn btn-ghost btn-lg">
                    View All Services
                  </Link>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
