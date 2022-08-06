import { Flex, Link, Image, useMediaQuery, Text } from '@chakra-ui/react';

import streamButton from 'assets/images/streamButton.png';
import stream from 'assets/images/stream.jpg';

const Stream = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  if (isLargerThan768)
    return (
      <Link
        href="https://youtu.be/AhdmQQSW90Y"
        isExternal
        position="fixed"
        bottom="50px"
        right="50px"
        zIndex="100"
      >
        <Image w="200px" src={streamButton} />
      </Link>
    );
  if (!isLargerThan768) {
    return (
      <Flex
        zIndex="10"
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
        <Text color="white" fontWeight="700" fontSize="12px">
          鎏金時尚夜直播中 19:00-20:30
        </Text>
        <Link
          fontSize="14px"
          bg="yellow.600"
          rounded="full"
          px="12px"
          py="4px"
          ml="14px"
          href="https://youtu.be/AhdmQQSW90Y"
          isExternal
          fontWeight="700"
        >
          立即前往
        </Link>
      </Flex>
    );
  }
};

export default Stream;
