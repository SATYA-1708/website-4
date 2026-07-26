import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Zap, Layers, Briefcase, ShieldCheck, Search, Map, Code2, TestTube, Rocket, HeartHandshake, Shield, Award, CheckCircle, Target } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeIn from '../components/FadeIn';
import GlowCard from '../components/GlowCard';
import './AboutPage.css';

const values = [
  { icon: <MessageSquare size={18} />, title: "Direct Communication", desc: "You talk directly to the engineers building your product. No middlemen, no project managers relaying messages." },
  { icon: <Zap size={18} />, title: "Fast Execution", desc: "Rapid iterations with transparent timelines. Weekly demos so you see real progress constantly." },
  { icon: <Layers size={18} />, title: "Modern Technology", desc: "We use the same stacks powering Vercel, Stripe, and Shopify — React, Next.js, Node.js, AWS." },
  { icon: <Briefcase size={18} />, title: "Business-First Thinking", desc: "Every technical decision is guided by ROI, not trend-chasing. We build what moves the needle." },
  { icon: <ShieldCheck size={18} />, title: "Long-Term Partnership", desc: "We don't disappear after launch. Ongoing support, optimization, and strategic iteration." },
  { icon: <HeartHandshake size={18} />, title: "Client First", desc: "Your success is our success. We measure our growth by yours, not by hours billed." },
  { icon: <Award size={18} />, title: "Uncompromising Quality", desc: "Every line of code is reviewed and tested. We don't cut corners — ever." },
];

const process = [
  { icon: <Search size={20} />, num: "01", title: "Discovery", desc: "We start by deeply understanding your business model, pain points, customers, and goals. No assumptions — just listening and analysis." },
  { icon: <Map size={20} />, num: "02", title: "Strategy", desc: "We map the right technical solution to your business objectives — with clear milestones, deliverables, and a realistic timeline." },
  { icon: <Code2 size={20} />, num: "03", title: "Development", desc: "Agile sprints with weekly demos. You see progress constantly and can course-correct in real time. No surprises at delivery." },
  { icon: <TestTube size={20} />, num: "04", title: "Testing", desc: "Rigorous QA across every device and edge case. Performance testing, security audits, and user acceptance testing." },
  { icon: <Rocket size={20} />, num: "05", title: "Launch", desc: "Zero-downtime deployment with monitoring from day one. We handle the technical complexity of going live." },
  { icon: <HeartHandshake size={20} />, num: "06", title: "Evolve", desc: "Post-launch optimization, feature additions, and strategic iteration. The relationship doesn't end at launch — it evolves." },
];

const techStack = ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "GraphQL", "TypeScript", "Figma", "Tailwind CSS", "MongoDB"];

const team = [
  { name: "Product Management", role: "Product Owners & Managers", initials: "PM", desc: "Dedicated product owners who translate your business requirements into clear, actionable technical specifications." },
  { name: "Design Team", role: "UI/UX & Visual Design", initials: "DT", desc: "Pixel-perfect interfaces informed by user research, accessibility standards, and conversion best practices." },
  { name: "Engineering Team", role: "Full-Stack Development", initials: "ET", desc: "Seasoned developers specializing in React, Node.js, cloud infrastructure, and performance optimization." },
  { name: "Strategy Team", role: "Digital Strategy & Growth", initials: "ST", desc: "Business strategists who bridge the gap between technology and growth objectives." },
];

const milestones = [
  { year: "2021", event: "Trion Solutions founded with a mission to help businesses grow through technology." },
  { year: "2022", event: "Delivered 20+ projects across e-commerce, logistics, and healthcare verticals." },
  { year: "2023", event: "Expanded team and adopted enterprise-grade development practices and CI/CD pipelines." },
  { year: "2024", event: "Launched dedicated automation and AI integration practice for modern businesses." },
  { year: "2025", event: "50+ successful projects delivered. 98% client satisfaction rate maintained." },
];

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <FadeIn>
            <span className="section-label">About Trion</span>
          </FadeIn>
          <AnimatedText as="h1" className="heading-xl" delay={0.1}>
            We're your tech team — not just another vendor.
          </AnimatedText>
          <FadeIn delay={0.5}>
            <p className="body-lg page-hero__sub">
              Trion Solutions is a digital agency that operates as an extension of your team. We're deeply invested in your success — not just delivering code, but delivering measurable business outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Our Story ────────────────────── */}
      <section className="section" id="story" style={{ paddingTop: '40px', scrollMarginTop: '100px' }}>
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-left">
              <FadeIn>
                <span className="section-label">Our Story</span>
              </FadeIn>
              <AnimatedText className="heading-lg">
                Born from frustration with broken promises.
              </AnimatedText>
              <FadeIn delay={0.3}>
                <div className="about-story-text">
                  <p className="body-lg">
                    Trion Solutions was founded because we saw too many businesses getting burned by agencies that over-promise and under-deliver.
                  </p>
                  <p className="body-md" style={{ marginTop: '16px' }}>
                    Missed deadlines. Bloated budgets. Code that falls apart the moment you try to scale. We've seen it all — and we built Trion to be the antidote.
                  </p>
                  <p className="body-md" style={{ marginTop: '16px' }}>
                    Every project we take on is treated like our own product. We obsess over code quality, performance, and business impact because our reputation depends on your results.
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="about-story-right">
              <FadeIn delay={0.2}>
                <div className="milestones-list">
                  {milestones.map((m, idx) => (
                    <div key={idx} className="milestone-item">
                      <span className="milestone-year">{m.year}</span>
                      <p className="body-sm">{m.event}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <FadeIn><span className="section-label">Our Team</span></FadeIn>
            <AnimatedText className="heading-lg">
              Small team. Big impact.
            </AnimatedText>
            <FadeIn delay={0.3}>
              <p className="body-lg mx-auto" style={{ maxWidth: '540px', marginTop: '16px' }}>
                We're a lean, focused team of engineers, designers, and strategists who care deeply about craft and delivering real value.
              </p>
            </FadeIn>
          </div>

          <div className="team-grid">
            {team.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <GlowCard className="team-card">
                  <div className="team-card__inner">
                    <div className="team-card__avatar">{member.initials}</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginTop: '16px', marginBottom: '4px' }}>{member.name}</h3>
                    <span style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>{member.role}</span>
                    <p className="body-sm" style={{ marginTop: '12px' }}>{member.desc}</p>
                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────── */}
      <section className="section" id="values" style={{ scrollMarginTop: '100px' }}>
        <div className="container">
          <div className="about-values-grid">
            <div className="about-values-left">
              <FadeIn>
                <span className="section-label">Our Principles</span>
              </FadeIn>
              <AnimatedText className="heading-lg">
                How we work changes everything.
              </AnimatedText>
              <FadeIn delay={0.3}>
                <p className="body-lg" style={{ marginTop: '16px' }}>
                  We believe the way you work with clients matters as much as the code you write. These principles guide every engagement.
                </p>
              </FadeIn>
            </div>

            <div className="about-values-list">
              {values.map((v, idx) => (
                <FadeIn key={idx} delay={idx * 0.08} direction="left">
                  <div className="about-value-item">
                    <div className="about-value-icon">{v.icon}</div>
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>{v.title}</h4>
                      <p className="body-sm">{v.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────── */}
      <section className="section" id="process" style={{ scrollMarginTop: '100px' }}>
        <div className="container">
          <div className="text-center">
            <FadeIn><span className="section-label">Our Process</span></FadeIn>
            <AnimatedText className="heading-lg">
              Six steps to predictable, high-quality results.
            </AnimatedText>
            <FadeIn delay={0.3}>
              <p className="body-lg mx-auto" style={{ maxWidth: '560px', marginTop: '16px' }}>
                No surprises. No scope creep. Just a clear path from idea to launch and beyond.
              </p>
            </FadeIn>
          </div>

          <div className="process-grid">
            {process.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <GlowCard className="process-card">
                  <div className="process-card__inner">
                    <div className="process-card__header">
                      <span className="process-card__num">{step.num}</span>
                      <div className="process-card__icon">{step.icon}</div>
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{step.title}</h3>
                    <p className="body-sm">{step.desc}</p>
                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust / Tech ────────────────── */}
      <section className="section" id="tech-stack" style={{ scrollMarginTop: '100px' }}>
        <div className="container">
          <FadeIn>
            <GlowCard className="trust-section">
              <div className="trust-section__inner">
                <div className="trust-section__left">
                  <span className="section-label">Standards</span>
                  <h2 className="heading-md">Enterprise-grade quality. Startup-speed delivery.</h2>
                  <p className="body-md" style={{ marginTop: '12px' }}>Every solution is built to the highest standards of security, performance, and maintainability — regardless of project size.</p>
                  <div className="trust-badges">
                    <div className="trust-badge"><Shield size={15} style={{ color: 'var(--accent)' }} /><span>Bank-Level Security</span></div>
                    <div className="trust-badge"><Award size={15} style={{ color: 'var(--accent)' }} /><span>Industry Best Practices</span></div>
                    <div className="trust-badge"><CheckCircle size={15} style={{ color: 'var(--accent)' }} /><span>99.9% Uptime Guarantee</span></div>
                    <div className="trust-badge"><Target size={15} style={{ color: 'var(--accent)' }} /><span>Performance Optimized</span></div>
                  </div>
                </div>
                <div className="trust-section__right">
                  <span className="trust-tech-label">Core Technologies</span>
                  <div className="trust-tech-grid">
                    {techStack.map((tech, i) => (
                      <div key={i} className="trust-tech-item">{tech}</div>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="cta-card">
              <div className="cta-card__glow" />
              <AnimatedText as="h2" className="heading-md" delay={0.1}>
                Ready to work with a team that actually cares about your results?
              </AnimatedText>
              <FadeIn delay={0.3}>
                <p className="body-md" style={{ maxWidth: '480px', margin: '20px auto 32px', textAlign: 'center' }}>
                  Let's start with a conversation — no pitch decks, no pressure. Just an honest discussion about your goals.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Let's Talk <ArrowRight size={16} />
                </Link>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
