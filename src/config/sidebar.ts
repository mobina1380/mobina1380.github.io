// @ts-nocheck

import {IconType} from 'react-icons';
import {FaDev, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow, FaTwitter, FaYoutube} from 'react-icons/fa';

type SocialMedia = {
  label: string;
  href: string;
  icon: IconType;
};

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mobina__esmaeili80/',
    icon: FaInstagram,
  },
  // {
  //   label: 'LinkedIn',
  //   // href: 'https://www.linkedin.com/in/mobina-esmaeili-28b7aa233/',
  //   href: '#',
  //   icon: FaLinkedin,
  // },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/16718015/mobina-esmaeili',
    icon: FaStackOverflow,
  },
  {
    label: 'Github',
    href: 'https://github.com/mobina1380/mobina1380',
    icon: FaGithub,
  },
];
