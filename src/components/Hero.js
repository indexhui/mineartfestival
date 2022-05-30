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
import stars from 'assets/images/homePage/stars.png';

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
  }, [scrollY, elementBoundary.top, elementBoundary.height]);

  return (
    <MotionFlex
      // mt="60px"
      ref={ref}
      h={window.innerHeight * 2.25}
      position="relative"
      mb={{ base: '-10px', md: '50px' }}
    >
      <MotionFlex
        position="absolute"
        top="0"
        w="100%"
        h="100%"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPercentage * 2.5 }}
        bg="linear-gradient(180deg, #0B2C3F 10.65%, #123F57 55.47%, #557D93 100%)"
      ></MotionFlex>
      <Box position="sticky" w="100%" h="100vh" top="100px">
        <Box
          position="absolute"
          zIndex="-5"
          w="100%"
          h="100%"
          bgSize="cover"
          opacity={scrollPercentage < 0.5 ? scrollPercentage * 1.5 : 1}
          bgImage={`url(${stars})`}
        />
        {/* logo center */}
        <MotionFlex
          position="absolute"
          margin="0 auto"
          left="0"
          right="0"
          bottom={{ base: 'unset', lg: '450px' }}
          top={{ base: '10vh', lg: 'unset' }}
          color="#3551A2"
          animate={{
            color: isDark ? '#fff' : '#3551A2',
          }}
          transition={{
            duration: 2,
          }}
          w={{ base: '155px', lg: '300px' }}
          h={{ base: '155px', lg: '300px' }}
        >
          <HeroLogoIcon
            w={{ base: '155px', lg: '300px' }}
            h={{ base: '155px', lg: '300px' }}
          />
        </MotionFlex>
        <Box position="absolute" w="100%" h="100%" overflowX="hidden">
          {/* firework left */}
          <Flex
            position="absolute"
            left={{ base: '-45px', lg: '15%' }}
            top={{ base: '4%', lg: '15%' }}
            w={{ base: '90px', lg: '150px' }}
            h={{ base: '90px', lg: '150px' }}
          >
            <MotionImage
              animate={{ opacity: isDark ? 0 : 1 }}
              transition={{
                duration: 0.6,
              }}
              w={{ base: '90px', lg: '150px' }}
              h={{ base: '90px', lg: '150px' }}
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
          <Flex
            position="absolute"
            right={{ base: '-20px', lg: '15%' }}
            top={{ base: '15%', lg: '22%' }}
            w={{ base: '90px', lg: '225px' }}
            h={{ base: '90px', lg: '225px' }}
          >
            <MotionImage
              animate={{ opacity: isDark ? 0 : 1 }}
              transition={{
                duration: 0.6,
              }}
              w={{ base: '90px', lg: '225px' }}
              h={{ base: '90px', lg: '225px' }}
              position="absolute"
              top="0"
              src={fireworkLgBlue}
            />
            <MotionImage
              animate={{ opacity: isDark ? 1 : 0 }}
              transition={{
                duration: 0.6,
              }}
              w={{ base: '90px', lg: '225px' }}
              h={{ base: '90px', lg: '225px' }}
              position="absolute"
              top="0"
              src={fireworkLgWhite}
            />
          </Flex>
        </Box>
        <MotionFlex
          initial={{ opacity: 1 }}
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          bottom={{ base: '-20px', lg: '-100px' }}
          position="absolute"
          // src={mt2}
          bgImage={`url(${mt2})`}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="top center"
          w="100%"
          h={{ base: '400px', lg: '450px' }}
        />
        <MotionFlex
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          bottom={{ base: '-20px', lg: '-100px' }}
          position="absolute"
          // src={mt1}
          bgImage={`url(${mt1})`}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="top center"
          w="100%"
          h={{ base: '400px', lg: '450px' }}
        />
        <Box
          position="absolute"
          bottom={{ base: '-20px', lg: '-100px' }}
          w="100%"
          h="240px"
          bg="linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(226, 226, 226, 0.5) 32.97%,#FFFFFF 90%, #FFFFFF 100%)"
        ></Box>
      </Box>
    </MotionFlex>
  );
};

export default Hero;
