import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Workflow, Cpu, TrendingUp, Palette, Globe, BarChart3, Shield, Check, Minus, Info } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeIn from '../components/FadeIn';
import GlowCard from '../components/GlowCard';
import ServiceModal from '../components/ServiceModal';
import { servicesData } from '../data/servicesData';
import './ServicesPage.css';

const iconMap = {
  websites: <Monitor size={24} />,
  automation: <Workflow size={24} />,
  software: <Cpu size={24} />,
  infrastructure: <TrendingUp size={24} />,
  design: <Palette size={24} />,
  strategy: <BarChart3 size={24} />,
  seo: <Globe size={24} />,
  security: <Shield size={24} />,
};

const comparisonData = [
  { feature: "Custom Architecture", trion: true, templateAgency: false, freelancer: "Varies" },
  { feature: "Dedicated Engineering Squad", trion: true, templateAgency: false, freelancer: false },
  { feature: "Performance & SEO Guarantee", trion: true, templateAgency: false, freelancer: false },
  { feature: "Direct Developer Access", trion: true, templateAgency: false, freelancer: true },
  { feature: "Post-Launch SLA & Support", trion: true, templateAgency: "Extra Fee", freelancer: false },
  { feature: "CI/CD & Automated Testing", trion: true, templateAgency: false, freelancer: false },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="page-wrapper">
      {/* ── Page Hero ──────────────────── */}
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <FadeIn>
            <span className="section-label">Services & Pricing</span>
          </FadeIn>
          <AnimatedText as="h1" className="heading-xl" delay={0.1}>
            Everything you need to compete — and win — online.
          </AnimatedText>
          <FadeIn delay={0.5}>
            <p className="body-lg page-hero__sub">
              Click on any service card below to view detailed scope, turnaround timelines, deliverables, and transparent pricing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Services List ──────────────── */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="services-detail-list">
            {servicesData.map((s, idx) => {
              const icon = iconMap[s.id] || <Monitor size={24} />;
              const fullService = { ...s, icon };

              return (
                <FadeIn key={s.id || idx} delay={0.1}>
                  <div id={s.id} style={{ scrollMarginTop: '100px' }}>
                    <div
                      onClick={() => setActiveService(fullService)}
                      style={{ cursor: 'pointer' }}
                    >
                      <GlowCard className="service-detail-card">
                        <div className="service-detail__inner">
                          <div className="service-detail__header">
                            <div className="service-detail__icon">{icon}</div>
                            <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                                <h2 className="heading-sm">{s.title}</h2>
                                <span className="tag" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', fontWeight: 700, padding: '4px 10px' }}>
                                  Starts at {s.pricing.startingPrice}
                                </span>
                              </div>
                              <p className="body-md" style={{ marginTop: '8px' }}>{s.shortDesc}</p>
                            </div>
                          </div>

                          <div className="service-detail__features">
                            {s.deliverables.slice(0, 4).map((f, i) => (
                              <div key={i} className="service-detail__feature">
                                <ArrowRight size={12} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>

                          <div className="service-detail__footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className="service-detail__tags">
                              {s.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
                            </div>
                            <span style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              View Full Details & Pricing <Info size={14} />
                            </span>
                          </div>
                        </div>
                      </GlowCard>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Service Comparison ─────────── */}
      <section className="section" id="comparison" style={{ scrollMarginTop: '100px' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '28px' }}>
            <FadeIn><span className="section-label">Service Comparison</span></FadeIn>
            <AnimatedText className="heading-lg">
              Why leading teams choose Trion Solutions.
            </AnimatedText>
            <FadeIn delay={0.2}>
              <p className="body-lg mx-auto" style={{ maxWidth: '540px', marginTop: '16px' }}>
                How our partner-driven engineering approach compares to generic template shops and isolated freelancers.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', background: 'var(--surface)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '14px', color: 'var(--text-2)' }}>Capabilities & Features</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', fontSize: '14px', color: 'var(--accent)', fontWeight: 700 }}>Trion Solutions</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', fontSize: '14px', color: 'var(--text-3)' }}>Template Agencies</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', fontSize: '14px', color: 'var(--text-3)' }}>Freelancers</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 500, color: 'var(--text-1)' }}>{row.feature}</td>
                      <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                        {row.trion === true ? <Check size={18} style={{ color: 'var(--success)', margin: '0 auto' }} /> : row.trion}
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'center', color: 'var(--text-4)', fontSize: '13px' }}>
                        {row.templateAgency === false ? <Minus size={16} style={{ color: 'var(--text-4)', margin: '0 auto' }} /> : row.templateAgency}
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'center', color: 'var(--text-4)', fontSize: '13px' }}>
                        {row.freelancer === false ? <Minus size={16} style={{ color: 'var(--text-4)', margin: '0 auto' }} /> : row.freelancer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ────────────────────────── */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="cta-card">
              <div className="cta-card__glow" />
              <AnimatedText as="h2" className="heading-md" delay={0.1}>
                Not sure which service you need? Let's figure it out together.
              </AnimatedText>
              <FadeIn delay={0.3}>
                <p className="body-md" style={{ maxWidth: '480px', margin: '20px auto 32px', textAlign: 'center' }}>
                  Every business is different. Book a free consultation and we'll recommend the right approach for your goals.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Book a Free Consultation <ArrowRight size={16} />
                </Link>
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
    </div>
  );
};

export default ServicesPage;
