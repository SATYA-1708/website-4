import { useState, useEffect, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ShieldCheck, AlertCircle, Award, Calendar, User, 
  Briefcase, Code, Copy, Check, UserCheck, MapPin, DollarSign, 
  Printer, Building2, CheckCircle2, Globe, Mail
} from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeIn from '../components/FadeIn';
import GlowCard from '../components/GlowCard';
import internDB from '../data/internDB.json';
import './VerifyPage.css';

const VerifyPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [certId, setCertId] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [copied, setCopied] = useState(false);

  const runVerification = useCallback((idToVerify) => {
    if (!idToVerify) return;
    const cleanId = idToVerify.trim();
    setCertId(cleanId);
    setLoading(true);
    setHasSearched(true);
    
    // Smooth simulation for premium verification feel
    setTimeout(() => {
      const found = internDB.find(
        intern => intern.certificateId.toUpperCase() === cleanId.toUpperCase()
      );
      setResult(found || null);
      setLoading(false);
    }, 450);
  }, []);

  // Sync with URL params on load or change
  useEffect(() => {
    const urlId = params.id || searchParams.get('id') || searchParams.get('certId') || searchParams.get('code') || searchParams.get('q') || searchParams.get('search');
    if (urlId) {
      runVerification(urlId);
    }
  }, [params.id, searchParams, runVerification]);

  const handleVerify = (e) => {
    e?.preventDefault();
    if (!certId.trim()) return;

    const cleanId = certId.trim();
    setSearchParams({ id: cleanId });
    runVerification(cleanId);
  };

  const handleCopyLink = () => {
    const urlToCopy = `${window.location.origin}/verify?id=${encodeURIComponent(certId.trim())}`;
    navigator.clipboard.writeText(urlToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }).catch(() => setCopied(false));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page-wrapper verify-page">
      <section className="verify-hero">
        <div className="verify-hero__glow" />
        <div className="container verify-container">
          
          {/* Page Header */}
          <div className="verify-header">
            <FadeIn>
              <div className="verify-badge">
                <ShieldCheck size={16} className="badge-shield-icon" />
                <span>Trion Official Verification Portal</span>
              </div>
            </FadeIn>
            <AnimatedText as="h1" className="heading-xl verify-title" delay={0.1}>
              Credential Verification
            </AnimatedText>
            <FadeIn delay={0.2}>
              <p className="body-lg verify-subtitle">
                Instantly verify the authenticity of official internship certificates, roles, and supervisor records issued by Trion Solutions.
              </p>
            </FadeIn>
          </div>

          {/* Search Box */}
          <FadeIn delay={0.3} className="verify-form-wrapper">
            <GlowCard className="verify-card">
              <form onSubmit={handleVerify} className="verify-form">
                <div className="verify-input-group">
                  <div className="verify-input-wrapper">
                    <Search className="verify-input-icon" size={20} />
                    <input
                      type="text"
                      value={certId}
                      onChange={(e) => setCertId(e.target.value)}
                      placeholder="Enter Certificate ID (e.g. TSI-INT-2026-1701)"
                      className="verify-input"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-accent verify-submit"
                    disabled={loading || !certId.trim()}
                  >
                    {loading ? <span className="spinner"></span> : "Verify Credential"}
                  </button>
                </div>
              </form>

              {/* Verification Results */}
              <AnimatePresence mode="wait">
                {hasSearched && !loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="verify-results"
                  >
                    {result ? (
                      <div className="certificate-document" id="printable-certificate">
                        
                        {/* 1. Top Centered Logo */}
                        <div className="cert-top-logo-wrap">
                          <img src="/logo-v3.png" alt="Trion Solutions Logo" className="cert-top-logo" />
                        </div>

                        {/* 2. Verification Centered Tag & Title */}
                        <div className="cert-status-header">
                          <div className="cert-status-title-wrap">
                            <div className="cert-authentic-tag">
                              <CheckCircle2 size={14} /> Official Verified Record
                            </div>
                            <h2 className="cert-doc-title">Internship Credential Statement</h2>
                          </div>

                          <div className="cert-header-actions no-print">
                            <button 
                              type="button" 
                              onClick={handleCopyLink} 
                              className="btn btn-ghost btn-sm copy-link-btn"
                              title="Copy direct verification link"
                            >
                              {copied ? <Check size={15} color="var(--success)" /> : <Copy size={15} />}
                              <span>{copied ? "Link Copied!" : "Share Link"}</span>
                            </button>
                            <button 
                              type="button" 
                              onClick={handlePrint} 
                              className="btn btn-ghost btn-sm print-btn"
                              title="Print statement"
                            >
                              <Printer size={15} />
                              <span>Print / PDF</span>
                            </button>
                          </div>
                        </div>

                        {/* 3. Company Metadata Strip */}
                        <div className="cert-company-banner">
                          <div className="company-info-item">
                            <Building2 size={14} className="company-info-icon" />
                            <span><strong>Organization:</strong> Trion Solutions Pvt. Ltd.</span>
                          </div>
                          <div className="company-info-item">
                            <MapPin size={14} className="company-info-icon" />
                            <span><strong>Office Location:</strong> Gachibowli, Hyderabad, Telangana, India</span>
                          </div>
                          <div className="company-info-item">
                            <Globe size={14} className="company-info-icon" />
                            <span><strong>Website:</strong> <a href="https://trionsolutions.in" target="_blank" rel="noreferrer" className="company-link">www.trionsolutions.in</a></span>
                          </div>
                          <div className="company-info-item">
                            <Mail size={14} className="company-info-icon" />
                            <span><strong>Email:</strong> info@trionsolutions.in</span>
                          </div>
                        </div>

                        {/* 4. Primary Candidate Profile Header */}
                        <div className="cert-profile-hero">
                          <div className="cert-profile-main">
                            <span className="cert-meta-label">Intern Candidate</span>
                            <h3 className="cert-student-name">{result.name}</h3>
                            <div className="cert-role-badge">
                              <Briefcase size={14} />
                              <span>{result.role}</span>
                            </div>
                          </div>
                          <div className="cert-id-box">
                            <span className="cert-meta-label">Certificate ID</span>
                            <code className="cert-id-code">{result.certificateId}</code>
                            <span className="cert-active-status">{result.status || 'Verified & Active'}</span>
                          </div>
                        </div>

                        {/* 5. Detailed Grid Modules */}
                        <div className="cert-details-grid">
                          
                          {/* Duration & Period */}
                          <div className="cert-detail-card">
                            <div className="cert-detail-icon">
                              <Calendar size={18} />
                            </div>
                            <div className="cert-detail-content">
                              <span className="cert-detail-label">Internship Tenure</span>
                              <span className="cert-detail-value">{result.duration}</span>
                              <span className="cert-detail-subtext">{result.startDate} — {result.endDate}</span>
                            </div>
                          </div>

                          {/* Mode & Category */}
                          <div className="cert-detail-card">
                            <div className="cert-detail-icon">
                              <MapPin size={18} />
                            </div>
                            <div className="cert-detail-content">
                              <span className="cert-detail-label">Location & Category</span>
                              <span className="cert-detail-value">{result.locationMode || 'On-Site (Gachibowli, Hyderabad)'}</span>
                              <span className="cert-detail-subtext">{result.internshipType || 'Paid Internship'}</span>
                            </div>
                          </div>

                          {/* Supervisor */}
                          <div className="cert-detail-card">
                            <div className="cert-detail-icon">
                              <UserCheck size={18} />
                            </div>
                            <div className="cert-detail-content">
                              <span className="cert-detail-label">Internship Supervisor</span>
                              <span className="cert-detail-value">{result.supervisor || 'Durga Prasad'}</span>
                              <span className="cert-detail-subtext">Technical Mentor</span>
                            </div>
                          </div>

                          {/* HR Manager */}
                          <div className="cert-detail-card">
                            <div className="cert-detail-icon">
                              <Building2 size={18} />
                            </div>
                            <div className="cert-detail-content">
                              <span className="cert-detail-label">HR Manager</span>
                              <span className="cert-detail-value">{result.hrManager || 'Rajeswari'}</span>
                              <span className="cert-detail-subtext">People & Culture</span>
                            </div>
                          </div>

                        </div>

                        {/* 6. Basic Core Skills Covered */}
                        {result.skills && result.skills.length > 0 && (
                          <div className="cert-skills-section">
                            <div className="cert-skills-header">
                              <Code size={16} />
                              <span>Foundational Skills & Learning Modules</span>
                            </div>
                            <div className="cert-skills-list">
                              {result.skills.map((skill, i) => (
                                <span key={i} className="cert-skill-pill">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 7. Clean Bottom Footer */}
                        <div className="cert-footer">
                          <div className="cert-footer-issuer">
                            <div className="issuer-logo-mark">TS</div>
                            <div>
                              <strong className="issuer-name">Trion Solutions Pvt. Ltd.</strong>
                              <p className="issuer-desc">Authorized Digital Verification System • www.trionsolutions.in</p>
                            </div>
                          </div>
                          <div className="cert-footer-seal">
                            <ShieldCheck size={20} color="var(--success)" />
                            <span>Digital Security Verified</span>
                          </div>
                        </div>

                      </div>
                    ) : (
                      <div className="result-error-card">
                        <div className="error-icon-circle">
                          <AlertCircle size={32} />
                        </div>
                        <h3 className="heading-sm error-title">Certificate Record Not Found</h3>
                        <p className="body-sm error-desc">
                          We could not find any active internship record for <strong>"{certId}"</strong>.
                        </p>
                        <div className="error-suggestions">
                          <p className="suggestion-title">Troubleshooting steps:</p>
                          <ul>
                            <li>Double check the Certificate ID format (e.g. <code>TSI-INT-2026-1701</code>).</li>
                            <li>Ensure there are no leading or trailing space characters.</li>
                            <li>Contact HR support at <code>info@trionsolutions.in</code> if you need assistance.</li>
                          </ul>
                        </div>
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
