import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);

const RevealFlex = props => {
  const { children, once, ...rest } = props;
  const variants = {
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (custom.order || 0) * 0.2,
        duration: custom.duration || 0.5,
        type: 'tween',
      },
    }),
    hidden: custom => ({ opacity: 0, y: custom.y || 25 }),
  };

  const transition = { duration: 0.5, type: 'tween' };

  return (
    <MotionFlex
      custom={{
        order: props.order || 0,
        duration: props.duration || 0.5,
        y: props.y || 25,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: props.once || false, amount: 1 }}
      variants={variants}
      transition={transition}
      {...rest}
    >
      {props.children}
    </MotionFlex>
  );
};

export default RevealFlex;
