import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionFlex = motion(Box);

const PageMotion = props => {
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
      // justify="center"
      {...props}
    >
      {props.children}
    </MotionFlex>
  );
};

export default PageMotion;
