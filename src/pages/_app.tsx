// import 'tailwindcss/tailwind.css';
// import '../globalStyles.scss';

// import type {AppProps} from 'next/app';
// import {memo} from 'react';

// const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
//   return (
//     <>
//       <Component {...pageProps} />
//     </>
//   );
// });

// export default MyApp;
// import './globals.css'
import {ChakraProvider} from '@chakra-ui/react';
import {AnimatePresence} from 'framer-motion';
import type {AppProps} from 'next/app';

import FavIconProvider from '../components/Misc/FavIconProvider';
import theme from '../config/theme';

function KLSite({Component, pageProps}: AppProps): JSX.Element {
  return (
    // @ts-ignore
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={theme}>
        <FavIconProvider>
          <Component {...pageProps} />
        </FavIconProvider>
      </ChakraProvider>
    </AnimatePresence>
  );
}
export default KLSite;
