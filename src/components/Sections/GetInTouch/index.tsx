// @ts-nocheck

import {Box, Heading, Link, Stack, Text} from '@chakra-ui/react';
import {motion, Variants} from 'framer-motion';
import {memo} from 'react';
import {useInView} from 'react-intersection-observer';

const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
};

const GetInTouch = () => {
  const [ref, inView] = useInView();
  return (
    <Stack as="footer" height="100%" spacing={{base: 6, xl: 8}} width={{base: '99%', lg: '60%', xl: '75%'}}>
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}>
        Say hi!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            animate={inView ? ['shake', 'jump'] : false}
            ref={ref}
            style={{display: 'inline-block'}}
            variants={rimuruVariant}>
            (⁀ᗢ⁀)
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        Though, I am fairly introverted myself. I do reply to messages as long as my human interaction battery lasts.
        Coding, work, movies or even weeb stuff, anything is cool. So feel free to message me on any of my social media
        or shoot me an{' '}
        <Link href="esmaeilimobina98@gmail.com" rel="noreferrer" target="_blank">
          email
        </Link>
        .
      </Text>

      <Box
        fontFamily="monospace"
        paddingBottom={{base: 5, lg: 18}}
        paddingTop={{base: 10, lg: 20, xl: 20}}
        spacing={0.5}
        textAlign="center"></Box>
    </Stack>
  );
};

export default memo(GetInTouch);
