import {Box} from '@chakra-ui/react';
import {AnimatePresence, motion} from 'framer-motion';

import {avatarAnimation} from '../../config/animations';

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[];
  }
}

const Avatar = () => {
  const MotionBox = motion(Box);

  // useEffect(() => {
  //   // Some nice preloading and caching
  //   const images = [AvatarImages.DarkMode, AvatarImages.LightMode]
  //   const preloadedImages = images.map((imageSrc) => {
  //     const img = new Image()
  //     img.src = imageSrc
  //     return img
  //   })
  //   window.preloadedPictures = preloadedImages
  // }, [])
  return (
    // @ts-ignore
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        // boxSize={{ base: 64, lg: 'sm' }}
        // padding={{ base: 8 }}
        animate="animate"
        exit={{opacity: 0}}
        initial="initial"
        marginBottom={{base: 10, md: 0, lg: 0}}
        variants={avatarAnimation}>
        {/* <Image
      src={imgAvatar}
      width={800}
      height={900}
      alt="Picture of the author"
    /> */}

        {/* <Text textAlign="center" fontSize="smaller" variant="description">
         Mobina Esmaeili
            
         
        </Text> */}
      </MotionBox>
    </AnimatePresence>
  );
};

export default Avatar;
