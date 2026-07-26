import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Clock, Send, CheckCircle, Phone, Calendar, MapPin } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeIn from '../components/FadeIn';
import GlowCard from '../components/GlowCard';
import './ContactPage.css';

const PROJECT_TYPES = ["Website", "Custom Software", "Automation", "Mobile App", "UI/UX Design", "Other"];

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState(() =>
    serviceParam
      ? `Hi Trion team, I am interested in getting started with "${serviceParam}". Please provide an initial assessment, timeline, and quote for my project.`
      : ''
  );

  const [selectedServices, setSelectedServices] = useState(() =>
    serviceParam ? [serviceParam] : []
  );

  const handleChipChange = (type) => {
    setSelectedServices(prev =>
      prev.includes(type) ? prev.filter(item => item !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("_captcha", "false");
    formData.append("_subject", `New Contact Request: ${serviceParam || 'General Inquiry'}`);

    try {
      await fetch("https://formsubmit.co/ajax/info@trionsolutions.in", {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: formData,
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again or email us directly at info@trionsolutions.in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">

      {/* ── Hero ──────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <FadeIn>
            <span className="section-label">Contact</span>
          </FadeIn>
          <AnimatedText as="h1" className="heading-xl" delay={0.1}>
            {serviceParam ? `Request Quote — ${serviceParam}` : "Let's start building."}
          </AnimatedText>
          <FadeIn delay={0.5}>
            <p className="body-lg page-hero__sub">
              {serviceParam
                ? `You've selected ${serviceParam}. Fill in your details and our team will respond within 24 hours with an assessment, timeline, and clear next steps.`
                : "Tell us about your project. We'll respond within 24 hours with an initial assessment, timeline, and clear next steps."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Main Content ──────────────── */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="contact-grid">

            {/* ── Left: Form ────────────── */}
            <FadeIn delay={0.1}>
              <GlowCard className="contact-form-card">
                <div className="contact-form-inner">
                  {submitted ? (
                    <motion.div
                      className="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <CheckCircle size={52} style={{ color: 'var(--success)' }} />
                      <h3 className="heading-sm" style={{ marginTop: '20px' }}>Message sent!</h3>
                      <p className="body-md" style={{ marginTop: '8px', maxWidth: '380px' }}>
                        Thank you for reaching out. We'll review your details and get back to you within 24 hours with a full assessment and proposed next steps.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn btn-ghost btn-md"
                        style={{ marginTop: '28px' }}
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>Tell us about your project</h3>
                      <p className="body-sm" style={{ marginBottom: '28px', color: 'var(--text-3)' }}>
                        Fill out the form and we'll get back to you within one business day.
                      </p>

                      {/* Name + Email */}
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Full Name *</label>
                          <input type="text" name="name" className="form-input" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Email Address *</label>
                          <input type="email" name="email" className="form-input" placeholder="john@company.com" required />
                        </div>
                      </div>

                      {/* Company + Budget */}
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Company</label>
                          <input type="text" name="company" className="form-input" placeholder="Your company name" />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Budget Range</label>
                          <select name="budget" className="form-input">
                            <option value="">Select a range</option>
                            <option value="< ₹10,000">&lt; ₹10,000</option>
                            <option value="₹10,000 - ₹25,000">₹10,000 — ₹25,000</option>
                            <option value="₹25,000 - ₹50,000">₹25,000 — ₹50,000</option>
                            <option value="₹50,000+">₹50,000+</option>
                          </select>
                        </div>
                      </div>

                      {/* Project Type Chips */}
                      <div className="form-group">
                        <label className="form-label">Project Type</label>
                        <div className="form-chips">
                          {PROJECT_TYPES.concat(
                            serviceParam && !PROJECT_TYPES.includes(serviceParam) ? [serviceParam] : []
                          ).map((type, i) => (
                            <label key={i} className="form-chip">
                              <input
                                type="checkbox"
                                name="services[]"
                                value={type}
                                checked={selectedServices.includes(type)}
                                onChange={() => handleChipChange(type)}
                              />
                              <span>{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="form-group">
                        <label className="form-label">Project Details *</label>
                        <textarea
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="form-input form-textarea"
                          placeholder="Tell us about your project goals, timeline, key features, or any questions you have..."
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ width: '100%', marginTop: '4px' }}
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                        <Send size={16} />
                      </button>
                    </form>
                  )}
                </div>
              </GlowCard>
            </FadeIn>

            {/* ── Right: Info Sidebar ────── */}
            <div className="contact-info">

              {/* Contact Details Card */}
              <FadeIn delay={0.2}>
                <GlowCard className="contact-info-card">
                  <div className="contact-info-inner">
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>Contact Information</h3>
                    <div className="info-list">

                      <div className="info-item">
                        <div className="info-icon"><Mail size={17} /></div>
                        <div>
                          <span className="info-label">Email Us</span>
                          <a href="mailto:info@trionsolutions.in" className="info-value">
                            info@trionsolutions.in
                          </a>
                        </div>
                      </div>

                      <div className="info-item">
                        <div className="info-icon"><Phone size={17} /></div>
                        <div>
                          <span className="info-label">Call / WhatsApp</span>
                          <a href="tel:+916305468284" className="info-value">
                            +91 63054 68284
                          </a>
                        </div>
                      </div>

                      <div className="info-item">
                        <div className="info-icon"><MapPin size={17} /></div>
                        <div>
                          <span className="info-label">Location</span>
                          <span className="info-value">Gachibowli, Hyderabad, Telangana, India</span>
                        </div>
                      </div>

                      <div className="info-item">
                        <div className="info-icon"><Clock size={17} /></div>
                        <div>
                          <span className="info-label">Response Time</span>
                          <span className="info-value">Within 24 hours (Mon — Fri)</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </GlowCard>
              </FadeIn>

              {/* Schedule Call Card */}
              <FadeIn delay={0.3}>
                <GlowCard className="contact-info-card">
                  <div className="schedule-card-inner">
                    <Calendar size={22} style={{ color: 'var(--accent)' }} />
                    <h3>Prefer to schedule a call?</h3>
                    <p>
                      Pick a time that works for you and your team. We'll have a no-pressure conversation about your goals and how we can help.
                    </p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&to=info@trionsolutions.in&su=Schedule%20a%20Consultation%20Call&body=Hi%20Trion%20team%2C%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-md schedule-btn"
                    >
                      <Calendar size={15} />
                      Book via Email
                    </a>
                    <a
                      href="https://wa.me/916305468284?text=Hi%20Trion%20team%2C%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-md schedule-btn"
                    >
                      <Phone size={15} />
                      WhatsApp Us Now
                    </a>
                  </div>
                </GlowCard>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
