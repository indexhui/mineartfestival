import { useRef } from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';
import useScrollPosition from '@react-hook/window-scroll';
import {
  motion,
  useMotionValue,
  useTransform,
  useElementScroll,
} from 'framer-motion';

import mt1 from 'assets/images/homePage/mt1.png';
import mt2 from 'assets/images/homePage/mt2.png';
import HeroLogoIcon from 'components/icons/HeroLogoIcon';
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const Hero = () => {
  const scrollY = useScrollPosition(60 /*fps*/);
  const isDark = scrollY > 100;

  return (
    <MotionFlex h="1600px" position="relative">
      {/* <Box position={isDark ? 'absolute' : 'fixed'} top="200px">
        scroll pos: {scrollY}
      </Box> */}

      <MotionFlex
        position="absolute"
        top="0"
        w="100%"
        h="100%"
        initial={{ opacity: 0 }}
        animate={{ opacity: isDark ? 1 : 0 }}
        bg="#0A3B51"
      ></MotionFlex>
      <Box position="sticky" w="100%" h="100vh" top="0">
        <MotionFlex
          position="absolute"
          margin="0 auto"
          left="0"
          right="0"
          top="200px"
          animate={{
            backgroundColor: isDark ? '#fff' : '#0a3b51',
            color: isDark ? '#0a3b51' : '#fff',
          }}
          transition={{
            duration: 2,
          }}
          border="1px solid black"
          w="100px"
          h="100px"
        >
          <HeroLogoIcon />
        </MotionFlex>
        <MotionImage
          initial={{ opacity: 1 }}
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 1 }}
          bottom="0px"
          position="absolute"
          src={mt2}
          w="100%"
          h="200px"
        />
        <MotionImage
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={{ duration: 1 }}
          bottom="0px"
          position="absolute"
          src={mt1}
          w="100%"
          h="200px"
        />
      </Box>
    </MotionFlex>
  );
};

export default Hero;
