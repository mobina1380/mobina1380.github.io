import {Heading, Stack, Text} from '@chakra-ui/react';
import {memo} from 'react';

import ExperienceTab from './ExperienceTab';
const DetailSection = () => (
  <Stack height="100%" spacing={{base: 6, xl: 8}} width={{base: '99%', lg: '60%', xl: '75%'}}>
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}>
      Places i’ve worked.
    </Heading>
    <Text variant="description" color="#FFFF">
      For several years, I have worked in different places, I have experienced face-to-face, remote, hybrid, and
      freelance work.
    </Text>

    <ExperienceTab />
  </Stack>
);

export default memo(DetailSection);
