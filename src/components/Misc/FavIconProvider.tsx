import {useColorMode} from '@chakra-ui/react';
import Head from 'next/head';

const FavIconProvider = ({children}: {children: JSX.Element}) => {
  const {colorMode} = useColorMode();
  return (
    <>
      <Head>
        <link href={colorMode === 'dark' ? '/logo_light.png' : '/logo_light.png'} rel="icon" />
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {children}
    </>
  );
};

export default FavIconProvider;
