// @ts-nocheck
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import {motion} from 'framer-motion';

import {fadeInUp, letterSpace, scaleUp, simpleOpacity, stagger} from '../../config/animations';
import {SocialMedias} from '../../config/sidebar';
import styles from './styles.module.css';
const Sidebar = () => {
  const {colorMode} = useColorMode();
  const display = useBreakpointValue({base: 'none', lg: 'block'});
  const surNameSize = useBreakpointValue({base: '3xl', md: '4xl'});
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionStack = motion(Stack);
  const MotionButton = motion(Button);
  const MotionBox = motion(Box);

  return (
    <MotionBox animate="animate" initial="initial" maxWidth={{xl: '34%'}} position={{xl: 'fixed'}} top={{lg: 0}}>
      <motion.div
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
        className={`${styles.sidebar} ${colorMode === 'light' ? styles.dark : ''}`}
        id="sidebarCircle"
        style={{display: display}}
        variants={scaleUp}></motion.div>
      <Container alignItems={{xl: 'center'}} display={{xl: 'flex'}} height={{xl: '100vh'}} margin={0} padding={0}>
        <MotionStack spacing={6} variants={stagger} w="100">
          <MotionHeading as="h1" paddingRight={{lg: '20'}} size="2xl" textTransform="uppercase" variants={fadeInUp}>
            Mobina
          </MotionHeading>
          <MotionHeading
            as="h2"
            className={styles.marginTopForce}
            size={surNameSize}
            textTransform="uppercase"
            variant="emphasis"
            variants={letterSpace}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}>
            Esmaeili
          </MotionHeading>

          <MotionHeading as="h3" className={styles.marginTopSmall} size="md" variant="emphasis" variants={fadeInUp}>
            Data Scientist | Software Engineer
          </MotionHeading>

          <MotionText
            fontSize="small"
            maxWidth={{base: '100%', lg: '80%'}}
            paddingRight={{lg: '12'}}
            variant="description"
            variants={fadeInUp}>
            Hey! How nice of you to look at my personal site,
            <Text as="span" variant="emphasis">
              {' '}
              Thank you!
            </Text>
            <br />I am a data scientist who is very interested in new challenges. I enjoy working with algorithms.
          </MotionText>
          {/* <MotionButton
            size="lg"
            variant="outline"
            borderWidth="1px"
            borderRadius="0"
            fontWeight="normal"
            fontSize="sm"
            width="120px"
            variants={simpleOpacity}
            as={'a'}
            href="mailto:marcjhon18@gmail.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get in touch!
          </MotionButton> */}

          <MotionBox d="flex" variants={simpleOpacity}>
            {SocialMedias.map(socMedia => (
              <Link
                _focus={{boxShadow: 'none'}}
                aria-label={socMedia.label}
                href={socMedia.href}
                key={socMedia.label}
                rel="noreferrer"
                target="_blank"
                variant="description"
                width={8}>
                <Icon as={socMedia.icon} color="currentColor" h={6} w={6} />
              </Link>
            ))}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  );
};

export default Sidebar;
