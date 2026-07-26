import { useRef, useCallback } from 'react';

/*
  GlowCard — a card with a mouse-tracking radial gradient glow.
  Wrap any content with this component for premium hover effects.
*/
const GlowCard = ({ children, className = '', style = {} }) => {
  const cardRef = useRef(null);

  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    
    frameRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glow-card ${className}`}
      onMouseMove={handleMouseMove}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlowCard;
