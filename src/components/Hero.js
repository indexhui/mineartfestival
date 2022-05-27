import { useState, useRef, useEffect, useLayoutEffect } from 'react';
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
import fireworkSmIcon from 'assets/images/homePage/fireworkSmIcon.svg';
import fireworkSmWhiteIcon from 'assets/images/homePage/fireworkSmWhiteIcon.svg';
import fireworkLgWhite from 'assets/images/homePage/fireworkLgWhite.svg';
import fireworkLgBlue from 'assets/images/homePage/fireworkLgBlue.svg';

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const Hero = () => {
  const ref = useRef(null);
  const [elementBoundary, setElementBoundary] = useState({});
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const scrollY = useScrollPosition(60 /*fps*/);
  const isDark = scrollY > window.innerHeight * 0.5;

  useLayoutEffect(() => {
    const element = ref.current;
    setElementBoundary({
      top: element.offsetTop,
      height: element.offsetHeight,
    });
  }, [ref]);

  useEffect(() => {
    setScrollPercentage(scrollY / elementBoundary.height);
    console.log(scrollY, elementBoundary.height);
  }, [scrollY, elementBoundary.top, elementBoundary.height]);

  return (
    <MotionFlex
      // mt="60px"
      ref={ref}
      h={window.innerHeight * 2.25}
      position="relative"
      mb="100px"
    >
      <MotionFlex
        position="absolute"
        top="0"
        w="100%"
        h="100%"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPercentage * 2.5 }}
        bg="#0A3B51"
      ></MotionFlex>
      <Box position="sticky" w="100%" h="100vh" top="100px">
        {/* logo center */}
        <MotionFlex
          position="absolute"
          margin="0 auto"
          left="0"
          right="0"
          top="170px"
          color="#3551A2"
          animate={{
            color: isDark ? '#fff' : '#3551A2',
          }}
          transition={{
            duration: 2,
          }}
          w="350px"
          h="350px"
        >
          <HeroLogoIcon w="350px" h="350px" />
        </MotionFlex>
        {/* firework left */}
        <Flex position="absolute" left="20%" top="15%" w="150px" h="150px">
          <MotionImage
            animate={{ opacity: isDark ? 0 : 1 }}
            transition={{
              duration: 0.6,
            }}
            w="150px"
            h="150px"
            position="absolute"
            top="0"
            src={fireworkSmIcon}
          />
          <MotionImage
            animate={{ opacity: isDark ? 1 : 0 }}
            transition={{
              duration: 0.6,
            }}
            w="150px"
            h="150px"
            position="absolute"
            top="0"
            src={fireworkSmWhiteIcon}
          />
        </Flex>
        {/* firework right */}
        <Flex position="absolute" right="18%" top="22%" w="225px" h="225px">
          <MotionImage
            animate={{ opacity: isDark ? 0 : 1 }}
            transition={{
              duration: 0.6,
            }}
            w="225px"
            h="225px"
            position="absolute"
            top="0"
            src={fireworkLgBlue}
          />
          <MotionImage
            animate={{ opacity: isDark ? 1 : 0 }}
            transition={{
              duration: 0.6,
            }}
            w="225px"
            h="225px"
            position="absolute"
            top="0"
            src={fireworkLgWhite}
          />
        </Flex>
        <MotionImage
          initial={{ opacity: 1 }}
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          bottom="-200px"
          position="absolute"
          src={mt2}
          w="100%"
        />
        <MotionImage
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          bottom="-200px"
          position="absolute"
          src={mt1}
          w="100%"
          // h="200px"
        />
      </Box>
    </MotionFlex>
  );
};

export default Hero;
