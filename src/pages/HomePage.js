import { motion } from 'framer-motion';
import { Flex, Text } from '@chakra-ui/react';
import Hero from 'components/Hero';
const MotionFlex = motion(Flex);

export function HomePage() {
  const pageMotion = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 0.2 } },
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
    >
      <Hero />
      <Flex>其他內容</Flex>
    </MotionFlex>
  );
}
