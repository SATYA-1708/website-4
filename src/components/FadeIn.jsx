import { motion } from 'framer-motion';

/*
  FadeIn — universal fade-in wrapper with direction.
*/
const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  distance = 30,
  ...props
}) => {
  const directions = {
    up:    { y: distance, x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none:  { x: 0, y: 0 },
  };

  const dir = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...dir }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
