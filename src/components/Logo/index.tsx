// @ts-nocheck

import {Image, useBreakpointValue, useColorMode} from '@chakra-ui/react';
import {AnimatePresence, motion} from 'framer-motion';
import Link from 'next/link';
import {memo, useState} from 'react';

import {simpleOpacity} from '../../config/animations';
import {mobileBreakpointsMap, ThemeMode} from '../../config/theme';
import styles from './styles.module.css';

const Logo = () => {
  const {colorMode} = useColorMode();
  const [isLogoLoaded, setLogoLoaded] = useState(false);
  const MotionImage = motion(Image);
  const isMobile = useBreakpointValue(mobileBreakpointsMap);
  return (
    // @ts-ignore
    <AnimatePresence>
      <Link href="/" passHref>
        {colorMode === ThemeMode.Dark ? (
          <MotionImage
            alt="KL Lawingco Logo"
            animate={isLogoLoaded && 'animate'}
            boxSize={isMobile ? '30px' : '50px'}
            className={!isMobile ? styles.logo : ''}
            fallbackSrc="./logo.png"
            initial="initial"
            objectFit="cover"
            onLoad={() => setLogoLoaded(true)}
            src="./logo.png"
            variants={simpleOpacity}
            zIndex={2}
          />
        ) : (
          <MotionImage
            alt="KL Lawingco Logo"
            animate={isLogoLoaded && 'animate'}
            boxSize={isMobile ? '50px' : '200px'}
            className={!isMobile ? styles.logo : ''}
            fallbackSrc="./logo_light.png"
            initial="initial"
            objectFit="cover"
            onLoad={() => setLogoLoaded(true)}
            src="./logo_light.png"
            variants={simpleOpacity}
            zIndex={2}
            style={{top:'0%'}}
          />
        )}
      </Link>
    </AnimatePresence>
  );
};

export default memo(Logo);
