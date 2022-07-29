import { Flex, Link, Image, useMediaQuery, Text } from '@chakra-ui/react';

import streamButton from 'assets/images/streamButton.png';
import stream from 'assets/images/stream.jpg';

const Stream = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  if (isLargerThan768)
    return (
      <Link position="fixed" bottom="50px" right="50px" zIndex="100">
        <Image w="200px" src={streamButton} />
      </Link>
    );
  if (!isLargerThan768) {
    return (
      <Flex
        zIndex="100"
        position="fixed"
        top="60px"
        left="0px"
        h="48px"
        w="100%"
        bgImage={`url(${stream})`}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        align="center"
        justifyContent="center"
      >
        <Text color="white" fontWeight="700">
          鎏金時尚夜直播中 19:00-21:00
        </Text>
        <Link
          bg="yellow.600"
          rounded="full"
          px="12px"
          py="4px"
          ml="20px"
          fontWeight="700"
        >
          立即前往
        </Link>
      </Flex>
    );
  }
};

export default Stream;
