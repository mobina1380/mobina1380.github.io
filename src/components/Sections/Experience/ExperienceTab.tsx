/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck

import {
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Skeleton,
  SlideFade,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import {BiRightArrow} from 'react-icons/bi';

import {ExperiencesList} from '../../../config/experience';
import {mobileBreakpointsMap} from '../../../config/theme';
import styles from './styles.module.css';

const ExperienceTab = () => {
  const {colorMode} = useColorMode();
  const emphasis = useColorModeValue('teal.500', 'cyan.200');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const activeBordercolor = useColorModeValue('teal.500', '#97DFFC');
  const isMobile = useBreakpointValue(mobileBreakpointsMap);

  const tabOrientation =
    useBreakpointValue({
      base: 'horizontal',
      sm: 'horizontal',
      md: 'vertical',
      lg: 'vertical',
      xl: 'vertical',
    }) ?? ('vertical' as any);

  const tabMinWidth = useBreakpointValue({
    base: '160px',
    sm: '160px',
    md: 'auto',
    lg: 'auto',
    xl: 'auto',
  });
  return (
    <Tabs id="experienceTabs" isLazy orientation={tabOrientation}>
      
      <TabList
        borderColor="transparent"
        className={styles.experienceTabs}
        overflowX={isMobile ? 'scroll' : 'auto'}
        overflowY="hidden"
        width={!isMobile ? '30%' : 'auto'}>
        {ExperiencesList.map(company => (
          <Tab
            _selected={{
              borderColor: activeBordercolor,
              boxShadow: 'none',
              borderLeftWidth: tabOrientation === 'vertical' ? '4px' : '0',
              borderBottomWidth: tabOrientation === 'horizontal' ? '4px' : '0',
              // background: 'whiteAlpha.100',
            }}
            borderBottomWidth={tabOrientation === 'horizontal' ? '4px' : '0'}
            borderColor={borderColor}
            borderLeftWidth={tabOrientation === 'vertical' ? '4px' : '0'}
            boxShadow="none"
            fontSize="smaller"
            h="120px"
            key={`Tab-${company.name}`}
            minWidth={tabMinWidth}>
            <Image
              alt={company.longName}
              fallback={<Skeleton height="100%" width="100%" />}
              maxWidth="88px"
              src={colorMode === 'dark' ? company.logo.dark : company.logo.light}></Image>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {ExperiencesList.map(company => (
          <TabPanel key={`TabPanel-${company.name}`}>
            <SlideFade in={true} offsetY="20px">
              <Stack spacing={0}>
                <Text as="span" fontSize="lg" fontWeight="bold" variant="description" color="#FFFF">
                  {company.position}
                </Text>
                <Text as="span">
                  <Link
                    aria-label="scentregroup"
                    fontSize="lg"
                    fontWeight="bold"
                    href={company.url}
                    rel="noreferrer"
                    target="_blank">
                    {company.name}
                  </Link>
                  <Text as="span" fontSize="x-small" textTransform="none" variant="description">
                    {' '}
                    {company.subDetail}
                  </Text>
                </Text>
                <Text fontSize="smaller">{company.duration}</Text>
              </Stack>
              <List pt={5} spacing={3}>
                {company.roles?.map((roleDesc, idx) => (
                  <ListItem
                    alignItems="center"
                    display="flex"
                    fontSize="smaller"
                    justifyContent="flex-start"
                    key={`${company.name}-desc-${idx}`}>
                    <ListIcon as={BiRightArrow} color={emphasis} display="block" />
                    <Text as="span" display="block" variant="description" color="#FFFF">
                      {roleDesc}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </SlideFade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ExperienceTab;
