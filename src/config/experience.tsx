// @ts-nocheck

import {Link} from '@chakra-ui/react';

export type Company = 'Deloitte' | 'SCG' | 'Blotocol';

export type CompanyDetail = {
  name: string;
  longName: string;
  subDetail?: string;
  url: string;
  position: string;
  duration: string;
  logo: {
    light: string;
    dark?: string;
  };
  roles?: JSX.Element[];
};

export const Experiences: {
  [key in Company]: CompanyDetail;
} = {
  Alzahra: {
    name: 'Alzahra Laboratory',
   // longName: 'Scentregroup Limited AU',
   // subDetail: 'via Prosource BPO',
   // url: 'https://www.scentregroup.com/',
   position: 'Data Scientist | AI Engineer',
   duration: 'June, 2024- September, 2024',
   logo: {
     light: '/worked_at_logos/logoa.png',
     dark: '/worked_at_logos/logoa.png',
   },
   roles: [
     <>
       •	Research and Study in the Field of Speech Emotion Recognition
     </>,
     <>•	Improving the Whisper Model for Fine-Tuning on an Internal Dataset</>,
     <>
       •	Speaker Recognition in Speech.
     </>,
     <>
     •	Speech-to-Text and Text-to-Speech Conversion
     </>,
     
   ],
 },
  Deloitte: {
    name: ' HamrahAvval (MCINEXT) ',
    // longName: 'Deloitte Consulthing Phils. Delivery Center',
    // subDetail: 'Consulthing Phils. Delivery Center',
    url: 'https://www2.deloitte.com/',
    position: 'Software Engineer',
    duration: 'April, 2023 - May, 2024',
    logo: {
      light: '/worked_at_logos/logoh.png',
      dark: '/worked_at_logos/logoh.png',
    },
    roles: [
      <>
        •	Improved speech processing in the search engine.(Voice assistant)
      </>,
      <>
        •	Working with audio-to-text and text-to-audio conversion tools
    
      </>,
      <>
        •	Implemented Restful Api and ensured seamless integration with back-end services
     
      </>,
      <>
      •	Redesigned the architecture of the search engine, transitioning from a client-side to a server-side model, significantly improving performance, scalability, and reducing latency for end users during high-traffic conditions.
      </>,
      <>•	Worked in an Agile Scrum environment, contributing to sprint planning and daily stand-ups.</>
    ],
  },
  SCG: {
     name: 'National Elite Foundation ',
    // longName: 'Scentregroup Limited AU',
    // subDetail: 'via Prosource BPO',
    // url: 'https://www.scentregroup.com/',
    position: 'Data Scientist | AI Engineer',
    duration: 'September, 2021 - July, 2022',
    logo: {
      light: '/worked_at_logos/logob.png',
      dark: '/worked_at_logos/logob.png',
    },
    roles: [
      <>
       •	Spell Correction
      </>,
      <>•	Summarization</>,
      <>
       •	Backend Developer
      </>,
     
    ],
  },
 
};

export const ExperiencesList = [Experiences.Alzahra,Experiences.Deloitte, Experiences.SCG];
