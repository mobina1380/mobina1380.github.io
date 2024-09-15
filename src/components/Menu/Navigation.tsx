// @ts-nocheck

import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import {motion, useCycle} from 'framer-motion';
import {memo, useCallback} from 'react';

import {easing, menuAnim} from '../../config/animations';
import {mobileBreakpointsMap, ThemeMode} from '../../config/theme';
import useScrollDirection, {ScrollDirection} from '../../hooks/useScrollDirection';
import styles from './styles.module.css';
import MobileMenu from './toggle';


const Navigation = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  const MotionContainer = motion(Container);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const isMobile = useBreakpointValue(mobileBreakpointsMap);
  const menuButtonSize = useBreakpointValue({
    base: 'xl',
    md: 'sm',
  });

  const bg = useColorModeValue('rgba(237, 242, 247, 0.95)', 'rgba(18, 18, 18, 0.9)');

  const borderColor = useColorModeValue('teal.500', 'cyan.200');

  const IsDark = colorMode === ThemeMode.Dark;
  const btnClassName = `${styles.blogBtn} ${!IsDark && styles.dark}`;
  const Icon = IsDark ? SunIcon : MoonIcon;
  const onMenuItemClick = useCallback(
    e => {
      e.stopPropagation();
      if (isMobile) {
        toggleOpen();
      }
    },
    [isMobile, toggleOpen],
  );
  const scrollDirection = useScrollDirection();

  return (
    <>
      <Box
        alignItems="center"
        className={styles.menuBar}
        display={{base: 'flex', xl: 'none'}}
        paddingTop={1}
        top="3%"
        zIndex={100}>
        {/* <IconButton
          aria-label="Color Mode"
          boxShadow="none"
          icon={<Icon />}
          onClick={toggleColorMode}
          padding={0}
          variant="ghost"
        /> */}
        <MobileMenu isDarkMode={IsDark} isOpen={isOpen} toggle={toggleOpen} />
      </Box>

      <MotionContainer
        animate={(!isMobile || isOpen) && 'show'}
        as="nav"
        // backgroundColor={bg}
        borderBottomWidth={isOpen && isMobile && '1px'}
        borderColor={isOpen && isMobile && borderColor}
        className={styles.menu}
        ease={easing}
        initial="hide"
        marginTop={0}
        maxWidth={{base: '100%', sm: '100%', lg: '50%', xl: '60%'}}
        paddingBottom={isOpen && isMobile && '1px'}
        paddingTop={1}
        right={{
          lg: !isMobile && scrollDirection === ScrollDirection.Down ? '2%' : '3.5%',
        }}
        style={{
          width: !isMobile && scrollDirection === ScrollDirection.Down ? '12%' : '100%',
          top: !isOpen && isMobile && '-100vh',
          opacity: !isOpen && isMobile && '0',
          left: isOpen && isMobile && 0,
        }}
        variants={menuAnim}
        width="100%">
        <Flex
          direction={{
            base: 'column',
            lg: scrollDirection === ScrollDirection.Down ? 'column' : 'row',
          }}
          height={{base: '100vh', lg: 'auto'}}
          justifyContent={{base: 'center', lg: 'flex-end'}}
          onClick={() => isMobile && toggleOpen()}
          paddingBottom={isMobile ? 10 : '0'}
          paddingRight="0"
          paddingX={{base: '', sm: '10', lg: '0'}}
          paddingY={{
            base: '10',
            lg: scrollDirection === ScrollDirection.Down ? '10' : '3',
          }}>
          <Box textAlign={{base: 'center', lg: 'left'}} width={{base: '100%', lg: 'auto'}}>
            <Button
              as="a"
              className={btnClassName}
              fontSize={menuButtonSize}
              fontWeight="light"
              href={isMobile ? '#aboutMe' : '#'}
              letterSpacing={2}
              marginX={2}
              onClick={onMenuItemClick}
              padding={2}
              rel="noreferrer"
              variant="ghost">
              About
            </Button>
          </Box>
          <Box marginY={{base: 2, lg: 0}} textAlign={{base: 'center', lg: 'left'}} width={{base: '100%', lg: 'auto'}}>
            <Button
              as="a"
              className={btnClassName}
              fontSize={menuButtonSize}
              fontWeight="light"
              href="#jobs"
              letterSpacing={2}
              marginX={2}
              onClick={onMenuItemClick}
              padding={2}
              rel="noreferrer"
              variant="ghost">
              Experience
            </Button>
          </Box>
          <Box marginY={{base: 2, lg: 0}} textAlign={{base: 'center', lg: 'left'}} width={{base: '100%', lg: 'auto'}}>
            <Button
              as="a"
              className={btnClassName}
              fontSize={menuButtonSize}
              fontWeight="light"
              href="#works"
              letterSpacing={2}
              marginX={2}
              onClick={onMenuItemClick}
              padding={2}
              rel="noreferrer"
              variant="ghost">
              Works
            </Button>
          </Box>
          <Box marginY={{base: 2, lg: 0}} textAlign={{base: 'center', lg: 'left'}} width={{base: '100%', lg: 'auto'}}>
            <Button
              as="a"
              className={btnClassName}
              fontSize={menuButtonSize}
              fontWeight="light"
              href="#contact"
              letterSpacing={2}
              marginX={2}
              onClick={onMenuItemClick}
              padding={2}
              rel="noreferrer"
              variant="ghost">
              Contact
            </Button>
          </Box>
          {/* {!isMobile && (
            <Box>
              <IconButton
                aria-label="Color Mode"
                boxShadow="none"
                icon={<Icon />}
                marginX={1}
                onClick={toggleColorMode}
                variant="ghost"
              />
            </Box>
          )} */}
        </Flex>
      </MotionContainer>
    </>
  );
};

export default memo(Navigation);
