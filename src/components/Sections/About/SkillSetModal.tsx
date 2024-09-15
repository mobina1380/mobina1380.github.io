/* eslint-disable react/no-multi-comp */
// @ts-nocheck

import {
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import {Skill, Skills, splitSkills} from '../../../config/skills';
import styles from './styles.module.css';

type ISkillSetModal = {
  isOpen: boolean;
  onClose(): void;
};

const SkillList = ({title, columns}: {title: string; columns: Skill[][]}) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200');
  const [colOne, colTwo = []] = columns;
  return (
    <>
      <Heading as="div" paddingBottom={1} size="sm" variant="description">
        {title}
      </Heading>
      <Divider marginBottom={4} />
      <SimpleGrid columns={2} paddingBottom={6} spacing={4}>
        <List spacing={3}>
          {colOne.map(item => (
            <ListItem alignItems="center" display="flex" fontSize="small" key={item.name}>
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map(item => (
            <ListItem alignItems="center" display="flex" fontSize="small" key={item.name}>
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  );
};
const SkillSetModal = ({isOpen, onClose}: ISkillSetModal) => {
  const backendCols = splitSkills(Skills.backend);
  const frontendCols = splitSkills(Skills.frontend);
  const cicdCols = splitSkills(Skills.cicd);
  const dataBaseCols = splitSkills(Skills.database);
  const uiFrameWorkCols = splitSkills(Skills['ui frameworks']);
  const productivityCols = splitSkills(Skills['productivity boost']);
  const mobileCols = splitSkills(Skills.mobile);
  const gameCols = splitSkills(Skills.games);
  const desktopCols = splitSkills(Skills.desktop);
  return (
    <Modal isOpen={isOpen} motionPreset="slideInBottom" onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Full Skill Set List</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal}>
          <SkillList columns={backendCols} title="Backend Centric" />
          <SkillList columns={frontendCols} title="Frontend Centric" />
          <SkillList columns={cicdCols} title="CICD centric" />
          <SkillList columns={dataBaseCols} title="Database and Streams" />
          <SkillList columns={uiFrameWorkCols} title="Ui Frameworks" />
          <SkillList columns={mobileCols} title="Mobile Development" />
          <SkillList columns={gameCols} title="Game Development" />
          <SkillList columns={desktopCols} title="Desktop App" />
          <SkillList columns={productivityCols} title="Productivity boosts" />
        </ModalBody>
        <ModalFooter>
          <Text fontSize="x-small">*Some micro frameworks not included </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SkillSetModal;
