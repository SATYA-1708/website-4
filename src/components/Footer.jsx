import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Globe, ExternalLink, CheckCircle } from 'lucide-react';
import LegalModal from './LegalModal';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          {/* Newsletter / CTA Strip */}
          <div className="footer__newsletter">
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>Stay in the loop</h3>
              <p className="body-sm">Get insights on web development, automation, and digital growth — delivered monthly.</p>
            </div>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)' }}>
                <CheckCircle size={20} />
                <span className="body-sm" style={{ fontWeight: 600 }}>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer__newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="footer__newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
              </form>
            )}
          </div>

          <div className="footer__top">
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img src="/logo-v3.png" alt="Trion Logo" style={{ height: '24px', width: 'auto' }} />
              </Link>
              <p className="footer__tagline">
                Software, websites, automation, and digital solutions engineered for growing businesses. Office in Gachibowli, Hyderabad. Serving clients PAN India.
              </p>
              <div className="footer__social">
                <a href="mailto:info@trionsolutions.in" aria-label="Email Us" title="Email us"><Mail size={16} /></a>
                <a href="https://wa.me/916305468284" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="Chat on WhatsApp"><MessageCircle size={16} /></a>
                <Link to="/work" aria-label="Case Studies" title="View our work"><Globe size={16} /></Link>
                <a href="https://linkedin.com/company/trion-solutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><ExternalLink size={16} /></a>
              </div>
            </div>

            <div className="footer__col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services#websites">Business Websites</Link></li>
                <li><Link to="/services#automation">Workflow Automation</Link></li>
                <li><Link to="/services#software">Custom Software</Link></li>
                <li><Link to="/services#infrastructure">Cloud Infrastructure</Link></li>
                <li><Link to="/services#design">UI/UX Design</Link></li>
                <li><Link to="/services#seo">SEO Optimization</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/work">Case Studies</Link></li>
                <li><Link to="/about#process">Our Process</Link></li>
                <li><Link to="/about#tech-stack">Tech Stack</Link></li>
                <li><Link to="/verify">Verify Certificate</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/contact">Free Consultation</Link></li>
                <li><Link to="/services#comparison">Service Comparison</Link></li>
                <li><button type="button" onClick={() => setModalType('privacy')} className="footer__modal-btn">Privacy Policy</button></li>
                <li><button type="button" onClick={() => setModalType('terms')} className="footer__modal-btn">Terms of Service</button></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p>&copy; {new Date().getFullYear()} Trion Solutions. All rights reserved.</p>
            <div className="footer__bottom-links">
              <button type="button" onClick={() => setModalType('privacy')} className="footer__modal-btn">Privacy</button>
              <button type="button" onClick={() => setModalType('terms')} className="footer__modal-btn">Terms</button>
              <button type="button" onClick={() => setModalType('sitemap')} className="footer__modal-btn">Sitemap</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <LegalModal
        type={modalType}
        isOpen={Boolean(modalType)}
        onClose={() => setModalType(null)}
      />
    </>
  );
};

export default Footer;
