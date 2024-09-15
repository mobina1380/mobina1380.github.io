// import {FC, memo} from 'react';

// import Header from '../components/Header';
// import About from '../components/About';
// import Experience from '../components/Experience';
// import Education from '../components/Education';
// import Skills from '../components/Skills';
// import Projects from '../components/Projects';
// import Certifications from '../components/Certifications';
// import Footer from '../components/Footer';

// const Home: FC = memo(() => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header />
//       <main className="container mx-auto px-4 py-8">
//         <About />

//         <Education />
//         <Experience />
//         <Skills />
//         <Projects />
//         <Certifications />
//       </main>
//       <Footer />
//     </div>
//   );
// });

// export default Home;
/* eslint-disable @typescript-eslint/no-explicit-any */
import {Box, Grid, GridItem, Stack, useBreakpointValue} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import Avatar from '../components/Avatar';
import FadeInLayout from '../components/Layout/FadeWhenVisible';
import Menu from '../components/Menu';
import OpenGraphHead from '../components/Misc/OpenGraphHead';
import ScrollMore from '../components/Misc/ScrollMore';
import About from '../components/Sections/About';
import Experience from '../components/Sections/Experience';
import FeaturedWorks from '../components/Sections/FeaturedWorks';
import Sidebar from '../components/Sidebar';

// These are on bottom sections so no need to render it instantly
const DevToArticles = dynamic(() => import('../components/Sections/DevToArticles'));
const GetInTouch = dynamic(() => import('../components/Sections/GetInTouch'));

const Portfolio = (): JSX.Element => {
  const sideBarPadding = useBreakpointValue({base: '5', md: '8', lg: '14'});
  const mainContent = useBreakpointValue({
    base: '5',
    md: '14',
    lg: '14',
    xl: 0,
  });
  const paddTop = useBreakpointValue({base: '20', sm: 20, md: 20});
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
      </Script>
      <OpenGraphHead />
      <Menu />
      <Grid
        gap={4}
        id="mainGrid"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        templateRows={{
          sm: 'repeat(1, 0)',
          lg: 'repeat(2, 1fr)',
        }}>
        <GridItem
          alignContent="center"
          as="div"
          colSpan={{base: 1, sm: 1, md: 1, lg: 1, xl: 2}}
          display="flex"
          flexDirection="row"
          marginTop={paddTop}
          padding={sideBarPadding}
          rowSpan={2}>
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          colSpan={{base: 1, sm: 2, md: 2, lg: 3, xl: 3}}
          overflow="hidden"
          padding={mainContent}
          rowSpan={2}>
          <Stack spacing={24} w="100" style={{width:'100%'}} >
            <FadeInLayout>
              <Box
                alignItems="center"
                className="contentRow"
                display="flex"
                flexDirection={{
                  base: 'column-reverse',
                  lg: 'row',
                }}
                id="aboutMe"
                minH={{lg: '100vh'}}
                paddingBottom={{base: 12, lg: 0}}
                paddingTop={{base: 0, lg: 20, xl: 0}}>
                <About />
                <Avatar />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                className="contentRow"
                flexDirection="row"
                id="jobs"
                paddingBottom={{base: 12, lg: 10}}
                paddingTop={{base: 0, lg: 20, xl: 0}}
                paddingX={0}>
                <Experience />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                className="contentRow"
                flexDirection="row"
                id="works"
                paddingBottom={{base: 12, lg: 10}}
                paddingTop={{base: 0, lg: 20, xl: 20}}
                paddingX={0}>
                <FeaturedWorks />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                className="contentRow"
                flexDirection="row"
                id="blog"
                paddingBottom={{base: 12, lg: 10}}
                paddingTop={{base: 0, lg: 20, xl: 20}}
                paddingX={0}>
                <DevToArticles />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                className="contentRow"
                flexDirection="row"
                id="contact"
                paddingTop={{base: 0, lg: 20, xl: 20}}
                paddingX={0}>
                <GetInTouch />
              </Box>
            </FadeInLayout>
          </Stack>
        </GridItem>
      </Grid>
      <ScrollMore />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=klawingco');
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
}

export default Portfolio;
