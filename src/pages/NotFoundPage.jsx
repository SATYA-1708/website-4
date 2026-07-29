import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home as HomeIcon, ShieldCheck, ArrowLeft } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeIn from '../components/FadeIn';
import GlowCard from '../components/GlowCard';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="page-wrapper not-found-page">
      <section className="not-found-hero">
        <div className="not-found-glow" />
        <div className="container not-found-container">
          <GlowCard className="not-found-card">
            <FadeIn>
              <div className="not-found-code">404</div>
            </FadeIn>
            
            <AnimatedText as="h1" className="heading-xl not-found-title" delay={0.1}>
              Page Not Found
            </AnimatedText>
            
            <FadeIn delay={0.2}>
              <p className="body-lg not-found-subtitle">
                The page you are looking for doesn't exist, has been removed, or the link may be broken.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="not-found-actions">
              <Link to="/" className="btn btn-primary">
                <HomeIcon size={18} />
                <span>Return to Home</span>
              </Link>
              <Link to="/verify" className="btn btn-secondary">
                <ShieldCheck size={18} />
                <span>Verify Credentials</span>
              </Link>
            </FadeIn>
          </GlowCard>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
