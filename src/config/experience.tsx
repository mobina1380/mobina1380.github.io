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
  Deloitte: {
    // name: 'Deloitte',
    // longName: 'Deloitte Consulthing Phils. Delivery Center',
    // subDetail: 'Consulthing Phils. Delivery Center',
    url: 'https://www2.deloitte.com/',
    position: 'Software Engineer Consultant',
    duration: 'Sep 2021 - Present',
    logo: {
      light: '/worked_at_logos/logoh.png',
      dark: '/worked_at_logos/logoh.png',
    },
    roles: [
      <>
        Contributed to the design and development of a comprehensive .NET payment integration project for a client That
        covered credit card payments and subscription management. Introduced Stripe as a new payment provider within the
        system architecture. Participated in triaging, fixing and adding new functionalitiesto multiple Azure powered
        APIs of the same client.
      </>,
      <>
        Worked as a Sitecore Backend on new{' '}
        <Link
          aria-label="Deloitte Digital AU"
          href="https://www.deloittedigital.com.au/"
          rel="noreferrer"
          target="_blank">
          Deloitte Digital AU Site.
        </Link>
      </>,
      <>
        Udergone training for .NET Sitecore 10, Sitecore SXA and different topologies it provides. and Passed{' '}
        <Link
          aria-label="Sitecore 10 .NET Developer Certification"
          href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
          rel="noreferrer"
          target="_blank">
          Sitecore 10 .NET Developer Certification.
        </Link>
      </>,
    ],
  },
  SCG: {
    name: 'Scentregroup',
    longName: 'Scentregroup Limited AU',
    subDetail: 'via Prosource BPO',
    url: 'https://www.scentregroup.com/',
    position: 'Software Engineer',
    duration: 'Feb 2020 - Sep 2021',
    logo: {
      light: '/worked_at_logos/logob.png',
      dark: '/worked_at_logos/logob.png',
    },
    roles: [
      <>
        Revamping the legacy Partner Portal into a new{' '}
        <Link
          aria-label="Westfield Marketing Hub"
          href="https://partner.scentregroup.com/"
          rel="noreferrer"
          target="_blank">
          Westfield Marketing Hub
        </Link>{' '}
        using NextJS and Typescript. Restructuring the old express app into a newer architectural design approach.
      </>,
      <>Created multiple Contentful and Bynder extensions to improve BX process better.</>,
      <>
        Worked on maintaining{' '}
        <Link href="https://www.westfield.com.au/" rel="noreferrer" target="_blank" variant="primaryLink">
          Westfield
        </Link>{' '}
        main site and Graphql apis written in NodeJS.
      </>,
      <>
        Migrating of existing marketing email related tools and batch jobs from Responsys into new platform called
        Braze.
      </>,
      <>
        Hired at early 2020, first major task was helping with selecting a new marketing vendor that can scale and also
        enable us to have personalisation as well, selecting{' '}
        <Link aria-label="Braze" href="https://www.braze.com/" rel="noreferrer" target="_blank">
          Braze
        </Link>{' '}
        as a result.
      </>,
    ],
  },
  Alzahra: {
    name: 'Scentregroup',
    longName: 'Scentregroup Limited AU',
    subDetail: 'via Prosource BPO',
    url: 'https://www.scentregroup.com/',
    position: 'Software Engineer',
    duration: 'Feb 2020 - Sep 2021',
    logo: {
      light: '/worked_at_logos/logoa.png',
      dark: '/worked_at_logos/logoa.png',
    },
    roles: [
      <>
        Revamping the legacy Partner Portal into a new{' '}
        <Link
          aria-label="Westfield Marketing Hub"
          href="https://partner.scentregroup.com/"
          rel="noreferrer"
          target="_blank">
          Westfield Marketing Hub
        </Link>{' '}
        using NextJS and Typescript. Restructuring the old express app into a newer architectural design approach.
      </>,
      <>Created multiple Contentful and Bynder extensions to improve BX process better.</>,
      <>
        Worked on maintaining{' '}
        <Link href="https://www.westfield.com.au/" rel="noreferrer" target="_blank" variant="primaryLink">
          Westfield
        </Link>{' '}
        main site and Graphql apis written in NodeJS.
      </>,
      <>
        Migrating of existing marketing email related tools and batch jobs from Responsys into new platform called
        Braze.
      </>,
      <>
        Hired at early 2020, first major task was helping with selecting a new marketing vendor that can scale and also
        enable us to have personalisation as well, selecting{' '}
        <Link aria-label="Braze" href="https://www.braze.com/" rel="noreferrer" target="_blank">
          Braze
        </Link>{' '}
        as a result.
      </>,
    ],
  },
};

export const ExperiencesList = [Experiences.Deloitte, Experiences.SCG,Experiences.Alzahra];
