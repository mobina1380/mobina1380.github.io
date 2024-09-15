/* eslint-disable react/no-multi-comp */
// @ts-nocheck

import {
  Box,
  Button,
  Container,
  Divider,
  Image,
  ResponsiveValue,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {motion} from 'framer-motion';

import {DURATIONS, easing} from '../../../config/animations';
import styles from './styles.module.css';

export type FeaturedCardProps = {
  // Still can't find what's correct value for responsive value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  height: string | ResponsiveValue<any>;
  src: string;
  idx: number;
  title: string;
  description: string;
  objectPosition?: string;
  ctaUrl: string;
  isMobile?: boolean;
};

const variants = {
  normal: {
    opacity: 0.85,
  },
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: 'backOut',
    },
  },
  tap: {
    scale: 0.85,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
};

const MotionImage = motion(Image);

const ProjectDescription = ({
  idx,
  title,
  description,
  ctaUrl,
  isLeft,
}: {
  idx?: number;
  title: string;
  description: string;
  ctaUrl: string;
  isLeft: boolean;
}) => (
  <Container
    alignItems="center"
    display="flex"
    flexDirection="column"
    justifyContent="space-around"
    width={'100%'}
    maxWidth={'100%'}
    paddingY={1}>
    <Stack spacing={1} width="100%">
      <Text
        as="span"
        fontSize={{base: 'md', md: 'large', '2xl': 'xx-large'}}
        letterSpacing={2}
        // width="90%"
        // alignSelf={isLeft ? 'flex-end' : 'flex-start'}
        fontWeight="bold"
        textTransform="uppercase">
        {title}
      </Text>
      <Divider
        borderColor="#A6A6A6"
        // width="90%"
        // marginLeft={0}
        // alignSelf={isLeft ? 'flex-end' : 'flex-start'}
      />
    </Stack>
    <Text
      fontSize="smaller"
      variant="accentAlternative"
      // width="90%"
      // alignSelf={isLeft ? 'flex-end' : 'flex-start'}
      paddingY={{base: 3, md: 3}}
      wordBreak="break-word">
      {description}
    </Text>
    <Button
      as="a"
      fontSize={{base: 'sm', '2xl': 'md'}}
      fontWeight="light"
      href={ctaUrl}
      marginY={{base: 3, md: 0}}
      rel="noreferrer"
      size="sm"
      target="_blank"
      variant="outlineAlternative">
      View Project
    </Button>
  </Container>
);

const FeaturedCard = ({idx, height, src, title, description, objectPosition, ctaUrl, isMobile}: FeaturedCardProps) => {
  const isLeftImage = isMobile ? false : idx % 2 === 0;
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.200');
  const CoverImage = () => (
    <MotionImage
      alt={title}
      fallback={<Skeleton height={height} width="100%" />}
      height={height}
      loading="lazy"
      objectFit="cover"
      objectPosition={objectPosition}
      opacity={0.75}
      src={src}
      whileHover={variants.hover}
      whileTap={variants.tap}
      width="100%"
    />
  );

  return (
    <Box bg={bg} borderColor={bg} borderRadius="1em" borderWidth="1px" className={styles.featureCard} height="auto">
      <SimpleGrid
        // columns={{ base: 1, md: 2 }}
        // spacing={{ base: 3, md: 0 }}
        display={{base: 'flex', md: 'grid'}}
        flexDirection={{base: 'column-reverse', md: 'initial'}}>
        {/* {isLeftImage && <CoverImage />} */}
        <ProjectDescription ctaUrl={ctaUrl} description={description} idx={idx} isLeft={isLeftImage} title={title} />
        {/* {!isLeftImage && <CoverImage />} */}
      </SimpleGrid>
    </Box>
  );
};
export default FeaturedCard;
