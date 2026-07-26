import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo" onClick={closeMobile}>
            <img src="/logo-v3.png" alt="Trion Logo" className="navbar__logo-img" style={{ height: '24px', width: 'auto' }} />
          </Link>

          <nav className="navbar__nav hidden-mobile">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`navbar__link ${location.pathname === item.path ? 'navbar__link--active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="navbar__actions">
            <Link to="/contact" className="btn btn-primary btn-sm navbar__cta hidden-mobile">
              Get Started
              <ArrowRight size={14} />
            </Link>
            <button
              className="navbar__toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mobile-menu__nav">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Link
                    to={item.path}
                    onClick={closeMobile}
                    className={`mobile-menu__link ${location.pathname === item.path ? 'mobile-menu__link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
              >
                <Link to="/contact" onClick={closeMobile} className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '16px' }}>
                  Get Started
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
