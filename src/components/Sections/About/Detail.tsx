// @ts-nocheck

import {
  Box,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import {memo} from 'react';
import {IoMdOpen} from 'react-icons/io';
import {
  SiDocker,
  SiGraphql,
  SiJavascript,
  SiMysql,
  SiNextDotJs,
  SiPython,
  SiPytorch,
  SiReact,
  SiTensorflow,
  SiTypescript,
  SiNumpy,
  SiApacheairflow,
  
  
} from 'react-icons/si';



type ISkillSetModal = {
  onOpen(): void;
};

const Detail = ({onOpen}: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200');
  const currentYear = new Date().getFullYear();
  const professionalYears = currentYear - 2016;

  return (
    <Stack as="section" spacing={{base: 6, xl: 8}} width={{base: '100%', lg: '70%'}}>
      <Heading
        as="h4"
        letterSpacing={1.8}
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}>
        What i do.
      </Heading>
      <Text variant="description" color="#FFFF">
        I have been programming professionally for 4 years now, and I am currently working as a <b>data scientist</b>,
        mastering <b>algorithms</b>, <b>machine learning</b>, and <b>deep learning</b>. I also have experience in the
        field of{' '}
        <Tooltip aria-label="Tech Debt?" hasArrow label="Working with React and next js ">
          <Text as="span" variant="emphasis">
            <b>FrontEnd</b>
          </Text>
        </Tooltip>
        <br /> <br />
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem alignItems="center" display="flex" fontSize="small">
            <ListIcon as={SiPython} color={emphasis} fontSize="2em" />
            Python
          </ListItem>

          <ListItem alignItems="center" display="flex" fontSize="small">
            <ListIcon as={SiTensorflow} color={emphasis} fontSize="2em" />
            Tensorflow
          </ListItem>
          <ListItem alignItems="center" display="flex" fontSize="small">
            <ListIcon as={SiPytorch} color={emphasis} fontSize="2em" />
            PyTorch
          </ListItem>

          <ListItem alignItems="center" display="flex" fontSize="small">
          <ListIcon as={SiNumpy} color={emphasis} fontSize="2em" />
          Numpy
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem alignItems="center" display="flex" fontSize="small">
            
            <ListIcon as={SiMysql} color={emphasis} fontSize="2em" />
            Mysql
          </ListItem>
          

          <ListItem alignItems="center" display="flex" fontSize="small">
            <ListIcon as={SiApacheairflow} color={emphasis} fontSize="2em" />
            Apacheairflow
          </ListItem>
          <ListItem alignItems="center" display="flex" fontSize="small">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>
          <ListItem alignItems="center" display="flex" fontSize="small">
            <ListIcon as={SiDocker} color={emphasis} fontSize="2em" />
            Docker
          </ListItem>
        </List>
        {/* <Box>
          <Text as="button" fontSize="smaller" onClick={onOpen} textAlign="left" variant="emphasis">
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box> */}
      </SimpleGrid>
    </Stack>
  );
};

export default memo(Detail);
