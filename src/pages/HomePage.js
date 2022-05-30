import { motion } from 'framer-motion';
import { Flex, Text, AspectRatio } from '@chakra-ui/react';
// import ReactPlayer from 'react-player';

import Hero from 'components/Hero';
import Intro from 'components/home/Intro';
import NavigateCards from 'components/home/NavigateCards';
import RevealFlex from 'components/RevealFlex';

const MotionFlex = motion(Flex);

export function HomePage() {
  const pageMotion = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, transition: { duration: 0.75 } },
    exit: { opacity: 0, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <MotionFlex
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageMotion}
      bg="white"
      w="100%"
      direction="column"
      // justify="center"
      // align="center"
    >
      <Hero />
      <Intro />
      <RevealFlex w="100%" justify="center" mt="-200px">
        <AspectRatio
          w={{ base: '90%', lg: '50%' }}
          maxW="800px"
          ratio={850 / 480}
        >
          <iframe
            title="mineartfestival"
            src="https://www.youtube.com/embed/7GybxtIbGzA"
            allowFullScreen
          />
        </AspectRatio>
      </RevealFlex>
      <NavigateCards />

      {/* <Flex>
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </Flex> */}
    </MotionFlex>
  );
}
