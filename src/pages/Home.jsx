import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, Monitor, Workflow, Cpu, TrendingUp, X as XIcon, CheckCircle, Search, Code2, Rocket, Users, ShieldCheck, Quote, Zap, BarChart3 } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeIn from '../components/FadeIn';
import GlowCard from '../components/GlowCard';
import ServiceModal from '../components/ServiceModal';
import { servicesData } from '../data/servicesData';
import './Home.css';

/* ── Icon Mapping ──────────────────── */
const iconMap = {
  websites: <Monitor size={20} />,
  automation: <Workflow size={20} />,
  software: <Cpu size={20} />,
  infrastructure: <TrendingUp size={20} />,
  design: <Sparkles size={20} />,
  strategy: <BarChart3 size={20} />,
  seo: <TrendingUp size={20} />,
  security: <ShieldCheck size={20} />,
};

/* ── Data ──────────────────────────── */

const problems = [
  { pain: "Outdated website", cost: "Losing customers to competitors daily" },
  { pain: "Manual processes", cost: "20+ hours/week wasted on automatable tasks" },
  { pain: "No online visibility", cost: "Your audience can't find you on Google" },
  { pain: "Can't scale", cost: "Current tech is a ceiling, not a foundation" },
  { pain: "Fragmented data", cost: "Decision making is slow and inaccurate" },
  { pain: "Slow page load times", cost: "53% of visitors leave if page takes > 3 seconds" },
];

const caseStudies = [
  { client: "E-Commerce Retailer", title: "Scaling from Local to National", result: "45% increase in mobile conversions", tags: ["E-Commerce", "Next.js"] },
  { client: "Logistics Company", title: "Automating Dispatch Operations", result: "Saved 40 hours/week in admin time", tags: ["Automation", "Dashboard"] },
  { client: "Educational Platform", title: "Building a Modern LMS", result: "Student engagement up 65%", tags: ["EdTech", "React"] },
];

const testimonials = [
  { quote: "Trion didn't just build what we asked for — they challenged our assumptions and delivered a product that doubled our conversion rate. The ROI was evident within the first month.", author: "Sarah Jenkins", role: "CEO, TechFlow Commerce", initials: "SJ" },
  { quote: "The fastest, most professional execution I've seen from any external team. They feel like an in-house engineering department. We've renewed our engagement three times.", author: "Marcus Thorne", role: "CTO, Elevate Logistics", initials: "MT" },
  { quote: "Our legacy systems were holding us back for years. Trion modernized our entire stack without a single minute of downtime. That alone was worth every rupee.", author: "Elena Rodriguez", role: "VP Operations, Nexus Health", initials: "ER" },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "x", label: "Average ROI" },
  { value: 24, suffix: "hr", label: "Response Time" },
];

const whyTrion = [
  { icon: <Users size={20} />, title: "Dedicated Team", desc: "You get a dedicated squad — not freelancers juggling 10 clients. We're fully invested in your project from day one." },
  { icon: <Zap size={20} />, title: "Ship in Weeks, Not Months", desc: "Our agile process delivers working software every sprint. You see tangible progress every single week." },
  { icon: <ShieldCheck size={20} />, title: "Production-Grade Code", desc: "Enterprise-quality architecture with automated testing, CI/CD pipelines, and code reviews on every commit." },
  { icon: <BarChart3 size={20} />, title: "Measurable Results", desc: "Every engagement comes with clear KPIs. We track conversion rates, load times, and business metrics — not just tasks." },
];

/* ── Animated Counter Hook ─────────── */

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatItem({ value, suffix, label }) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-item__value">{count}{suffix}</span>
      <span className="stat-item__label">{label}</span>
    </div>
  );
}

/* ── Component ─────────────────────── */

const Home = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="hero">
        <div className="hero__ambient">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__grid" />
        </div>

        <div className="container hero__container">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/services" style={{ textDecoration: 'none' }}>
              <motion.div
                className="hero__pill"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{ cursor: 'pointer' }}
              >
                <Sparkles size={13} />
                <span>Digital solutions for growing businesses</span>
                <ArrowRight size={12} />
              </motion.div>
            </Link>

            <AnimatedText as="h1" className="heading-xl" delay={0.3}>
              Your Business Needs More Than a Website.
            </AnimatedText>

            <motion.span
              className="heading-xl text-gradient-shimmer hero__accent-line"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              It Needs Growth.
            </motion.span>

            <motion.p
              className="body-lg hero__subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              We build software, websites, automation systems, and digital
              solutions that help businesses operate smarter, convert more
              customers, and grow faster — all with enterprise-grade quality.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link to="/work" className="btn btn-ghost btn-lg">
                See Our Work
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <div className="hero__proof-item">
              <span className="hero__proof-value">50+ Projects</span>
              <span className="hero__proof-label">Delivered on time, on budget</span>
            </div>
            <div className="hero__proof-sep" />
            <div className="hero__proof-item">
              <span className="hero__proof-value">Modern Stacks</span>
              <span className="hero__proof-label">React, Node.js, AWS, Next.js</span>
            </div>
            <div className="hero__proof-sep" />
            <div className="hero__proof-item">
              <span className="hero__proof-value">98% Satisfaction</span>
              <span className="hero__proof-label">From clients who trust us repeatedly</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ STATS COUNTER ════════════ */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, idx) => (
              <StatItem key={idx} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PROBLEMS ════════════ */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="section-label">The Reality</span>
          </FadeIn>
          <AnimatedText className="heading-lg" delay={0.1}>
            Your tech should accelerate growth — not hold it back.
          </AnimatedText>
          <FadeIn delay={0.2}>
            <p className="body-lg" style={{ maxWidth: '640px', marginTop: '16px' }}>
              Most businesses are held back by one or more of these problems. If any sound familiar, you're in the right place.
            </p>
          </FadeIn>

          <div className="problems-list">
            {problems.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="problem-row">
                  <div className="problem-row__left">
                    <XIcon size={14} className="problem-row__x" />
                    <span className="problem-row__pain">{item.pain}</span>
                  </div>
                  <span className="problem-row__cost">{item.cost}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="problems-cta">
            <p className="body-md">Sound familiar? We fix exactly these problems.</p>
            <Link to="/services" className="btn btn-ghost btn-md">
              See Our Solutions <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ WHY TRION ════════════ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <FadeIn><span className="section-label">Why Trion</span></FadeIn>
            <AnimatedText className="heading-lg">
              What makes us different from every other agency.
            </AnimatedText>
            <FadeIn delay={0.3}>
              <p className="body-lg mx-auto" style={{ maxWidth: '560px', marginTop: '16px' }}>
                We're not a factory. We don't outsource. We're a focused team of engineers and designers who care deeply about craft.
              </p>
            </FadeIn>
          </div>

          <div className="why-grid">
            {whyTrion.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <GlowCard className="why-card">
                  <div className="why-card__inner">
                    <div className="why-card__icon">{item.icon}</div>
                    <h3 className="heading-sm" style={{ margin: '16px 0 8px' }}>{item.title}</h3>
                    <p className="body-md">{item.desc}</p>
                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES PREVIEW ════════════ */}
      <section className="section">
        <div className="container">
          <div className="services-header">
            <div>
              <FadeIn><span className="section-label">What We Build</span></FadeIn>
              <AnimatedText className="heading-lg">
                Solutions designed for business outcomes.
              </AnimatedText>
            </div>
            <FadeIn delay={0.3}>
              <Link to="/services" className="btn btn-ghost btn-md">
                All Services & Pricing <ArrowRight size={14} />
              </Link>
            </FadeIn>
          </div>

          <div className="services-bento">
            {servicesData.slice(0, 6).map((s, idx) => {
              const icon = iconMap[s.id] || <Monitor size={20} />;
              const fullService = { ...s, icon };

              return (
                <FadeIn key={s.id || idx} delay={idx * 0.1}>
                  <div
                    onClick={() => setActiveService(fullService)}
                    style={{ cursor: 'pointer', height: '100%' }}
                  >
                    <GlowCard className="service-card">
                      <div className="service-card__inner">
                        <div className="service-card__top">
                          <div className="service-card__icon">{icon}</div>
                          <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                            Starts at {s.pricing.startingPrice} <ArrowUpRight size={14} />
                          </span>
                        </div>
                        <h3 className="heading-sm">{s.title}</h3>
                        <p className="body-md">{s.shortDesc}</p>
                        <div className="service-card__tags">
                          {s.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
                        </div>
                      </div>
                    </GlowCard>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ WORK PREVIEW ════════════ */}
      <section className="section">
        <div className="container">
          <div className="services-header">
            <div>
              <FadeIn><span className="section-label">Selected Work</span></FadeIn>
              <AnimatedText className="heading-lg">
                Real problems. Real results.
              </AnimatedText>
            </div>
            <FadeIn delay={0.3}>
              <Link to="/work" className="btn btn-ghost btn-md">
                All Projects <ArrowRight size={14} />
              </Link>
            </FadeIn>
          </div>

          <div className="work-grid">
            {caseStudies.map((cs, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <Link to="/work">
                  <GlowCard className="work-card">
                    <div className="work-card__inner">
                      <span className="body-sm" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                        {cs.client}
                      </span>
                      <h3 className="heading-sm" style={{ margin: '12px 0' }}>{cs.title}</h3>
                      <div className="work-card__result">
                        <CheckCircle size={14} style={{ color: 'var(--success)', flexShrink: 0 }} />
                        <span>{cs.result}</span>
                      </div>
                      <div className="work-card__tags">
                        {cs.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
                      </div>
                    </div>
                  </GlowCard>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PROCESS ════════════ */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <FadeIn><span className="section-label">How We Work</span></FadeIn>
            <AnimatedText className="heading-lg">
              A process built for predictable results.
            </AnimatedText>
            <FadeIn delay={0.2}>
              <p className="body-lg mx-auto" style={{ maxWidth: '520px', marginTop: '16px' }}>
                No surprises. No scope creep. Just a clear, battle-tested path from idea to launch.
              </p>
            </FadeIn>
          </div>

          <div className="process-track">
            {[
              { icon: <Search size={18} />, num: "01", title: "Discovery & Strategy", desc: "Deep-dive into your business model, competitive landscape, and growth goals to define the right solution." },
              { icon: <Code2 size={18} />, num: "02", title: "Design & Build", desc: "Agile sprints with weekly demos. You see real progress every week and can course-correct instantly." },
              { icon: <Rocket size={18} />, num: "03", title: "Launch & Optimize", desc: "Zero-downtime deployment with monitoring, analytics, and ongoing optimization to maximize results." },
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} direction="left">
                <div className="process-step">
                  <div className="process-step__num">{step.num}</div>
                  <div className="process-step__icon">{step.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px' }}>{step.title}</h4>
                    <p className="body-sm">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/about" className="btn btn-ghost btn-md">
              See Full Process <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <FadeIn><span className="section-label">Client Stories</span></FadeIn>
            <AnimatedText className="heading-lg">
              Don't just take our word for it.
            </AnimatedText>
            <FadeIn delay={0.2}>
              <p className="body-lg mx-auto" style={{ maxWidth: '520px', marginTop: '16px' }}>
                Here is what founders and leaders say about partnering with Trion Solutions.
              </p>
            </FadeIn>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <GlowCard className="testimonial-card">
                  <div className="testimonial-card__inner">
                    <Quote size={24} style={{ color: 'var(--accent)', opacity: 0.6 }} />
                    <p className="testimonial-card__quote">"{item.quote}"</p>
                    <div className="testimonial-card__author">
                      <div className="testimonial-card__avatar">{item.initials}</div>
                      <div>
                        <div className="testimonial-card__name">{item.author}</div>
                        <div className="testimonial-card__role">{item.role}</div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FINAL CTA ════════════ */}
      <section className="section cta-section">
        <div className="container">
          <FadeIn>
            <div className="cta-card">
              <div className="cta-card__glow" />
              <AnimatedText as="h2" className="heading-lg" delay={0.1}>
                Let's build something that moves your business forward.
              </AnimatedText>
              <FadeIn delay={0.4}>
                <p className="body-lg" style={{ maxWidth: '540px', margin: '24px auto 40px', textAlign: 'center' }}>
                  Stop losing customers to outdated technology. Book a free, no-obligation consultation and let's talk about your goals.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    Schedule a Free Consultation
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/services" className="btn btn-ghost btn-lg">
                    Explore Services
                  </Link>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service Detail & Pricing Modal */}
      <ServiceModal
        service={activeService}
        isOpen={Boolean(activeService)}
        onClose={() => setActiveService(null)}
      />
    </>
  );
};

export default Home;
