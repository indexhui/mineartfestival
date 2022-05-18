import { motion } from 'framer-motion';
import { Flex, Text } from '@chakra-ui/react';

const MotionFlex = motion(Flex);

export function StagesPage() {
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
      bg="blue.600"
      w="100%"
      h="100vh"
    >
      <Text color="white">StagesPage</Text>
    </MotionFlex>
  );
}
