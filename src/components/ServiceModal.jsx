import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import './ServiceModal.css';

const ServiceModal = ({ service, isOpen, onClose }) => {
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleContactClick = () => {
    onClose();
    navigate(`/contact?service=${encodeURIComponent(service.title)}`);
  };

  return (
    <AnimatePresence>
      {isOpen && service && (
        <motion.div
          className="service-modal-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="service-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Header */}
            <div className="service-modal__header">
              <div className="service-modal__title-group">
                <div className="service-modal__icon">
                  {service.icon}
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <div className="service-modal__tags">
                    {service.tags.map((t, idx) => (
                      <span key={idx} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <button className="service-modal__close" onClick={onClose} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="service-modal__body">
              {/* Extended Description */}
              <div>
                <span className="service-modal__section-title">Overview</span>
                <p className="service-modal__desc">{service.fullDesc}</p>
              </div>

              {/* Ideal For Box */}
              <div className="service-modal__ideal">
                <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Target Audience:</strong>
                {service.idealFor}
              </div>

              {/* Pricing & Guarantee Box */}
              <div>
                <span className="service-modal__section-title">Investment & Pricing</span>
                <div className="service-modal__pricing-card">
                  <div className="service-modal__price-item">
                    <span className="service-modal__price-label">Starting Price</span>
                    <span className="service-modal__price-val">{service.pricing.startingPrice}</span>
                    <span className="service-modal__price-sub">{service.pricing.billingType}</span>
                  </div>

                  <div className="service-modal__price-item">
                    <span className="service-modal__price-label"><Clock size={12} style={{ display: 'inline', marginRight: '4px' }} /> Delivery Timeline</span>
                    <span className="service-modal__price-sub" style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginTop: '6px' }}>
                      {service.pricing.timeline}
                    </span>
                  </div>

                  <div className="service-modal__price-item">
                    <span className="service-modal__price-label"><ShieldCheck size={12} style={{ display: 'inline', marginRight: '4px' }} /> Quality Guarantee</span>
                    <span className="service-modal__price-sub" style={{ fontSize: '13px', color: '#93c5fd', marginTop: '6px' }}>
                      {service.pricing.guarantee}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <span className="service-modal__section-title">Included Scope & Deliverables</span>
                <div className="service-modal__deliverables-grid">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="service-modal__deliverable-item">
                      <CheckCircle className="service-modal__deliverable-icon" size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="service-modal__footer">
              <div>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>Ready to discuss your project?</span>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>
                  Starting at {service.pricing.startingPrice}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={onClose} className="btn btn-ghost btn-sm">
                  Close
                </button>
                <button onClick={handleContactClick} className="btn btn-primary btn-md">
                  Get Started / Request Quote
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
