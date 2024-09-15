import {Grid, GridItem, Heading, Stack, Text, useBreakpointValue} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {memo} from 'react';

import {fadeInUpSlower, galleryStagger} from '../../../config/animations';
import {mobileBreakpointsMap} from '../../../config/theme';
import FeaturedCard from './FeaturedCard';
const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);


const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap);
  return (
    <Stack height="100%" spacing={{base: 6, xl: 8}} width={{base: '99%', lg: '60%', xl: '75%'}}>
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}>
        Some of my works.
      </Heading>
      <Text variant="description" color="#FFFF">
        Check out some of the works I made at freelancing, company projects and even case studies.
      </Text>

      <MotionGrid
        gap={{base: 5, md: 6}}
        templateColumns="repeat(6, 1fr)"
        templateRows="repeat(1, 1fr)"
        variants={galleryStagger}>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            ctaUrl="https://tobira-app-test.netlify.app/"
            description="• Optimized application performance and ensured cross-browser compatibility.
            • Working with the NX platform and the latest version of Next js 14, as well as the concepts of 
             Docker and DevOps
             Skills:React js – Next js 14 – NxPlatform – Tailwind Css
                "
            height={{base: '130px', md: '225px', '2xl': '300px'}}
            idx={1}
            isMobile={isMobile}
            objectPosition="right 20%"
            src="/logoshad.png"
            title="Shaadbin"
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            ctaUrl="https://solution.rsv.ltd/jp"
            description="• Learning Design Pattern 
• Participated in user acceptance testing (UAT) and addressed feedback to refine features.
• Working with Next js 13 and Matiral Ui 
Skills:React js – Next js 13 – NxPlatform – MUI – Solid "
            height={{base: '130px', md: '225px', '2xl': '300px'}}
            idx={2}
            isMobile={isMobile}
            src="/works/rsv.webp"
            title="Zarebin"
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            ctaUrl="https://dev.agora-school.com"
            description="• Designed and built efficient front-end architectures using modern JavaScript frameworks.
• Integrated third-party libraries and APIs to enhance application functionality.
• Worked in an Agile Scrum environment, contributing to sprint planning and daily stand-ups.
Skills:React js – MUI"
            height={{base: '130px', md: '225px', '2xl': '300px'}}
            idx={3}
            isMobile={isMobile}
            objectPosition="right 20%"
            src="/works/agora.webp"
            title="Gardeshgari"
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            ctaUrl="https://www.layla-ec.com/"
            description="A Japanese Semi-conductor e-commerce made at my old place at IVP. I was working with backend using ASP.NET MVC"
            height={{base: '130px', md: '225px', '2xl': '300px'}}
            idx={4}
            isMobile={isMobile}
            src="/works/tmh.webp"
            title="Parsa"
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  );
};

export default memo(FeaturedWorksSection);
