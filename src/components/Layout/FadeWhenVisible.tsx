import {motion, useAnimation} from 'framer-motion';
import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';

import {fadeInUpSlower} from '../../config/animations';
const FadeInWhenVisible = ({children}: {children: React.ReactNode}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.div animate={controls} initial="initial" ref={ref} style={{margin: 0}} variants={fadeInUpSlower}>
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
