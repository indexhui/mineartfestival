import { Flex, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const PartnerLabel = props => {
  const { isReverse, label } = props;
  return (
    <Flex w="100%" direction={isReverse ? 'row-reverse' : 'row'}>
      <MotionBox
        h="25px"
        w="10%"
        bg="blue.600"
        initial={{ width: 0 }}
        whileInView={{ width: '20%', transition: { duration: 1 } }}
      ></MotionBox>
      <Box ml="10px" h="25px" w="25px" bg="blue.600"></Box>
      <Text fontSize="24px" color="blue.600">
        ｜{label}｜
      </Text>
    </Flex>
  );
};

export default PartnerLabel;
