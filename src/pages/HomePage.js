import { motion } from 'framer-motion';
import { Flex, Text } from '@chakra-ui/react';
import Hero from 'components/Hero';
import Intro from 'components/home/Intro';
import NavigateCards from 'components/home/NavigateCards';

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
      justify="center"
    >
      <Hero />
      <Intro />
      <NavigateCards />
    </MotionFlex>
  );
}
