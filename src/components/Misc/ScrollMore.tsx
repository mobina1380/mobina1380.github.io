// @ts-nocheck

import {Box, Icon, Text, useBreakpointValue, useColorModeValue} from '@chakra-ui/react';
import {AnimatePresence, motion, Variants} from 'framer-motion';
import {RiMouseLine} from 'react-icons/ri';

import {mobileBreakpointsMap} from '../../config/theme';
import useScrollDirection, {ScrollDirection} from '../../hooks/useScrollDirection';

const scrollMoreVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  hidden: {
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      delay: 1,
      ease: 'easeIn',
    },
  },
  bounce: {
    y: [0, -18, 0],
    transition: {
      duration: 1.6,
      ease: 'easeInOut',
      loop: Infinity,
    },
  },
};

const emailVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 250,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: [1, 0],
    y: [0, 250],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ScrollMore = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap);
  const scrollDirection = useScrollDirection(false, isMobile);
  const emailColor = useColorModeValue('gray.800', 'gray.400');
  const emailLine = useColorModeValue('teal.500', 'cyan.200');

  return (
    <Box bottom="1em" display={isMobile ? 'none' : 'block'} position="fixed" right="3%">
      <AnimatePresence>
        {[ScrollDirection.Initial, ScrollDirection.Up].includes(scrollDirection) && (
          <motion.div animate={['hidden', 'bounce']} initial="initial" variants={scrollMoreVariants}>
            <Icon as={RiMouseLine} color="currentColor" h={6} opacity="0.75" w={6} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {scrollDirection === ScrollDirection.Down && (
          <motion.div
            animate="show"
            exit="exit"
            initial="hidden"
            style={{
              writingMode: 'vertical-rl',
              position: 'fixed',
              right: '8%',
              bottom: '-8%',
            }}
            variants={emailVariants}
            whileHover={{y: -50}}>
            <Text
              _after={{
                backgroundColor: emailLine,
                width: '2px',
                opacity: 0.5,
                content: '""',
                flex: 1,
                height: {base: '5em', xl: '8em'},
                margin: 'auto',
                marginTop: '10px',
              }}
              _hover={{
                color: emailLine,
                _after: {
                  backgroundColor: emailLine,
                  opacity: 1,
                },
              }}
              alignItems="center"
              as="a"
              color={emailColor}
              display="flex"
              fontFamily="monospace"
              href="esmaeilimobina98@gmail.com"
              justifyContent="center"
              letterSpacing={3}
              paddingY={3}
              position="relative"
              rel="noreferrer"
              target="_blank">
              esmaeilimobina98@gmail.com{' '}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ScrollMore;
