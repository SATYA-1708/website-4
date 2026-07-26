import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './LegalModal.css';

const LegalModal = ({ type, isOpen, onClose }) => {
  if (!isOpen) return null;

  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    sitemap: 'Sitemap',
  };

  return (
    <AnimatePresence>
      <div className="legal-modal-backdrop" onClick={onClose}>
        <motion.div
          className="legal-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
        >
          <div className="legal-modal__header">
            <h3>{titles[type] || 'Information'}</h3>
            <button className="legal-modal__close" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>

          <div className="legal-modal__body">
            {type === 'privacy' && (
              <>
                <p>Last updated: January 2025</p>
                <p>
                  At <strong>Trion Solutions</strong>, we value your privacy and are committed to protecting your personal information.
                </p>
                <h4>1. Information We Collect</h4>
                <p>
                  We collect information you provide directly to us when contacting us via our website forms, subscribing to newsletters, or requesting consultations (such as name, email address, phone number, and project details).
                </p>
                <h4>2. How We Use Information</h4>
                <p>
                  We use your information exclusively to provide services, communicate regarding project inquiries, process service requests, and send periodic technical insights if opted in.
                </p>
                <h4>3. Data Protection</h4>
                <p>
                  We implement industry-standard encryption and security measures to keep your data safe. We never sell, rent, or trade your personal details to third parties.
                </p>
                <h4>4. Contact Us</h4>
                <p>
                  If you have questions about this privacy policy, please contact us at <strong>info@trionsolutions.in</strong>.
                </p>
              </>
            )}

            {type === 'terms' && (
              <>
                <p>Last updated: January 2025</p>
                <p>
                  Welcome to <strong>Trion Solutions</strong>. By using our website and services, you agree to comply with and be bound by the following terms.
                </p>
                <h4>1. Services Overview</h4>
                <p>
                  Trion Solutions provides web engineering, custom software development, workflow automation, and digital consulting services.
                </p>
                <h4>2. Intellectual Property</h4>
                <p>
                  All custom software and code deliverables created for clients are transferred upon complete payment, as outlined in individual engagement contracts.
                </p>
                <h4>3. Limitation of Liability</h4>
                <p>
                  Trion Solutions is not liable for indirect, consequential, or incidental damages arising from website use or reliance on unverified information.
                </p>
                <h4>4. Governing Law</h4>
                <p>
                  These terms are governed by the laws of India, with jurisdiction in Hyderabad, Telangana.
                </p>
              </>
            )}

            {type === 'sitemap' && (
              <div>
                <p>Explore all key pages and service sections across our portal:</p>
                <div className="sitemap-grid">
                  <div className="sitemap-section">
                    <h5>Main Pages</h5>
                    <ul>
                      <li><Link to="/" onClick={onClose}>Home</Link></li>
                      <li><Link to="/services" onClick={onClose}>Services</Link></li>
                      <li><Link to="/work" onClick={onClose}>Work / Case Studies</Link></li>
                      <li><Link to="/about" onClick={onClose}>About Us</Link></li>
                      <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
                      <li><Link to="/verify" onClick={onClose}>Verify Credential</Link></li>
                    </ul>
                  </div>
                  <div className="sitemap-section">
                    <h5>Services</h5>
                    <ul>
                      <li><Link to="/services#websites" onClick={onClose}>Business Websites</Link></li>
                      <li><Link to="/services#automation" onClick={onClose}>Workflow Automation</Link></li>
                      <li><Link to="/services#software" onClick={onClose}>Custom Software</Link></li>
                      <li><Link to="/services#infrastructure" onClick={onClose}>Cloud Infrastructure</Link></li>
                      <li><Link to="/services#design" onClick={onClose}>UI/UX Design</Link></li>
                      <li><Link to="/services#seo" onClick={onClose}>SEO Optimization</Link></li>
                      <li><Link to="/services#comparison" onClick={onClose}>Service Comparison</Link></li>
                    </ul>
                  </div>
                  <div className="sitemap-section">
                    <h5>Company</h5>
                    <ul>
                      <li><Link to="/about#story" onClick={onClose}>Our Story</Link></li>
                      <li><Link to="/about#process" onClick={onClose}>Our Process</Link></li>
                      <li><Link to="/about#tech-stack" onClick={onClose}>Tech Stack</Link></li>
                      <li><Link to="/about#values" onClick={onClose}>Our Values</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LegalModal;
