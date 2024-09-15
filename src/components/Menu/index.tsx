// @ts-nocheck

import {Container, useBreakpointValue, useColorModeValue} from '@chakra-ui/react';
import {motion, useAnimation, Variants} from 'framer-motion';
import {useEffect} from 'react';

import {mobileBreakpointsMap} from '../../config/theme';
import useScrollDirection, {ScrollDirection} from '../../hooks/useScrollDirection';
import Logo from '../Logo';
import Navigation from './Navigation';
import styles from './styles.module.css';

const mobileMenuVariants: Variants = {
  hidden: {
    opacity: [1, 0.85, 0],
    y: -80,
    transition: {
      ease: 'easeInOut',
      duration: 0.35,
    },
  },
  show: {
    opacity: [0, 0.85, 1],
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.28,
    },
  },
};

const Menu = () => {
  const bg = useColorModeValue('gray.100', 'black');
  const controls = useAnimation();
  const isMobile = useBreakpointValue(mobileBreakpointsMap);
  const scrollDirection = useScrollDirection(true, isMobile);
  useEffect(() => {
    if (scrollDirection === ScrollDirection.Down && isMobile) {
      controls.start('hidden');
    } else {
      controls.start('show');
    }
  }, [isMobile, controls, scrollDirection]);
  return (
    <motion.div
      animate={controls}
      className={isMobile ? styles.mobileMenuContainer : ''}
      initial={isMobile ? 'hidden' : false}
      variants={mobileMenuVariants}>
      <Container
        alignItems="center"
        backgroundColor={isMobile ? bg : 'transparent'}
        display="flex"
        justifyContent="space-between"
        margin={0}
        maxWidth="100vw"
        padding={{base: 5, lg: 0}}
        paddingY={{base: 5, lg: 0}}
        width="100vw">
        <Logo />
        <Navigation />
      </Container>
    </motion.div>
  );
};

export default Menu;
