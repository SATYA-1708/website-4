import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShieldCheck, AlertCircle, Award, Calendar, User, Briefcase, Code } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeIn from '../components/FadeIn';
import GlowCard from '../components/GlowCard';
import internDB from '../data/internDB.json';
import './VerifyPage.css';

const VerifyPage = () => {
  const [certId, setCertId] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setLoading(true);
    setHasSearched(true);
    
    // Simulate network request for realistic feel
    setTimeout(() => {
      const found = internDB.find(
        intern => intern.certificateId.toUpperCase() === certId.trim().toUpperCase()
      );
      setResult(found || null);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="page-wrapper verify-page">
      <section className="verify-hero">
        <div className="verify-hero__glow" />
        <div className="container verify-container">
          
          <div className="verify-header">
            <FadeIn>
              <div className="verify-badge">
                <ShieldCheck size={18} />
                <span>Verification Portal</span>
              </div>
            </FadeIn>
            <AnimatedText as="h1" className="heading-xl" delay={0.1}>
              Verify Credentials
            </AnimatedText>
            <FadeIn delay={0.2}>
              <p className="body-lg verify-subtitle">
                Enter the certificate ID below to verify the authenticity of an internship at Trion Solutions.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="verify-form-wrapper">
            <GlowCard className="verify-card">
              <form onSubmit={handleVerify} className="verify-form">
                <div className="verify-input-group">
                  <Search className="verify-input-icon" size={20} />
                  <input
                    type="text"
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                    placeholder="Enter Certificate ID (e.g. TRN-INT-2024-001)"
                    className="verify-input"
                    required
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary verify-submit"
                    disabled={loading || !certId.trim()}
                  >
                    {loading ? <span className="spinner"></span> : "Verify"}
                  </button>
                </div>
              </form>

              <AnimatePresence mode="wait">
                {hasSearched && !loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="verify-results"
                  >
                    {result ? (
                      <div className="result-success">
                        <div className="result-header">
                          <div className="success-icon-wrap">
                            <ShieldCheck size={32} />
                          </div>
                          <div>
                            <h3 className="heading-sm" style={{ color: 'var(--success)' }}>Certificate Verified</h3>
                            <p className="body-sm">This is a valid Trion Solutions credential.</p>
                          </div>
                        </div>

                        <div className="result-grid">
                          <div className="result-item">
                            <span className="result-label"><User size={14} /> Name</span>
                            <span className="result-value">{result.name}</span>
                          </div>
                          <div className="result-item">
                            <span className="result-label"><Award size={14} /> Certificate ID</span>
                            <span className="result-value" style={{ fontFamily: 'monospace' }}>{result.certificateId}</span>
                          </div>
                          <div className="result-item">
                            <span className="result-label"><Briefcase size={14} /> Role</span>
                            <span className="result-value">{result.role}</span>
                          </div>
                          <div className="result-item">
                            <span className="result-label"><Calendar size={14} /> Duration</span>
                            <span className="result-value">{result.duration} ({result.startDate} — {result.endDate})</span>
                          </div>
                          <div className="result-item" style={{ gridColumn: '1 / -1' }}>
                            <span className="result-label"><Code size={14} /> Core Skills</span>
                            <div className="result-skills">
                              {result.skills.map((skill, i) => (
                                <span key={i} className="skill-badge">{skill}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="result-error">
                        <AlertCircle size={32} style={{ color: 'var(--danger)' }} />
                        <h3 className="heading-sm">Record Not Found</h3>
                        <p className="body-sm">
                          We could not find any internship records matching the ID <strong>"{certId}"</strong>. Please check the ID and try again.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </GlowCard>
          </FadeIn>

        </div>
      </section>
    </div>
  );
};

export default VerifyPage;
