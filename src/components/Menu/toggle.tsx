/* eslint-disable react/no-multi-comp */
import {motion} from 'framer-motion';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    stroke={props?.isDarkMode ? 'hsl(240, 100%, 94%)' : 'hsl(0, 0%, 7%)'}
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

export const MenuToggle = ({toggle, isDarkMode = false}: {toggle(): void; isDarkMode?: boolean}) => (
  <button
    onClick={toggle}
    style={{
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <svg height="23" viewBox="0 0 23 18" width="23">
      <Path
        isDarkMode={isDarkMode}
        variants={{
          closed: {d: 'M 2 2.5 L 20 2.5'},
          open: {d: 'M 3 16.5 L 17 2.5'},
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        isDarkMode={isDarkMode}
        transition={{duration: 0.1}}
        variants={{
          closed: {opacity: 1},
          open: {opacity: 0},
        }}
      />
      <Path
        isDarkMode={isDarkMode}
        variants={{
          closed: {d: 'M 2 16.346 L 20 16.346'},
          open: {d: 'M 3 2.5 L 17 16.346'},
        }}
      />
    </svg>
  </button>
);

const MobileMenu = ({isOpen, toggle, isDarkMode = false}: {isOpen: boolean; isDarkMode: boolean; toggle(): void}) => (
  <motion.nav
    animate={isOpen ? 'open' : 'closed'}
    initial={false}
    style={{
      display: 'flex',
      alignItems: 'center',
    }}>
   
    <MenuToggle isDarkMode={isDarkMode} toggle={() => toggle()} />
  </motion.nav>
);

export default MobileMenu;
