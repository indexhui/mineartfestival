import { Flex, Box, Text, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const PartnerLabel = props => {
  const { isReverse, label } = props;
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  return (
    <Flex w="100%" direction={isReverse ? 'row-reverse' : 'row'} align="center">
      <MotionBox
        h={{ base: '10px', lg: '25px' }}
        w="10%"
        bg="blue.600"
        initial={{ width: 0 }}
        whileInView={{
          width: isLargerThan1280 ? '20%' : '25%',
          transition: { duration: 1 },
        }}
      ></MotionBox>
      <Box
        ml="10px"
        h={{ base: '10px', lg: '25px' }}
        w={{ base: '10px', lg: '25px' }}
        bg="blue.600"
      ></Box>
      <Text fontSize="24px" color="blue.600">
        ｜{label}｜
      </Text>
    </Flex>
  );
};

export default PartnerLabel;
