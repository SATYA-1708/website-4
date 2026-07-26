import { motion } from 'framer-motion';

/*
  AnimatedText — splits heading into words, each word slides up
  from behind a mask with stagger. Used for all major headings.
*/
const AnimatedText = ({ children, className = '', delay = 0, as = 'h2' }) => {
  const Tag = as;
  const words = children.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordAnim = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Tag className={`reveal-text ${className}`}>
      <motion.span
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.3em' }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {words.map((word, i) => (
          <span key={i} className="reveal-word">
            <motion.span className="reveal-word-inner" variants={wordAnim}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default AnimatedText;
