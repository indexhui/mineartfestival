import {
  Flex,
  Link,
  Image,
  HStack,
  StackDivider,
  useDisclosure,
  VStack,
  Box,
  Button,
  Text,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import atre from 'assets/images/atre.png';
import mt2 from 'assets/images/homePage/mt2.png';

const TheAtre = props => {
  const { isHome } = props;
  return (
    <Flex
      pt={{ base: '30px', lg: '60px' }}
      bg="linear-gradient(180deg, #2E5169 0%, #3D637B 100%)"
      color="white"
      direction="column"
      align="center"
    >
      <VStack
        spacing="18px"
        fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
        fontWeight="700"
      >
        <Text
          fontSize={{ base: '20px', lg: '24px' }}
          pb="4px"
          borderBottom="3px solid white"
        >
          優人祈福・共鳴山城
        </Text>
        <Text fontSize={{ base: '16px', lg: '24px' }}>
          優人神鼓推出儀式行動新作「陽歌行」
        </Text>
      </VStack>
      <Image
        src={atre}
        w="100%"
        maxW="1060px"
        my={{ base: '30px', lg: '64px' }}
      />
      <VStack
        align="center"
        spacing="24px"
        px="30px"
        w="100%"
        maxW="640px"
        pb={{ base: '30px', lg: '64px' }}
      >
        <Text fontSize={{ base: '14px', lg: '18px' }} textAlign="center">
          從北海岸至十三層依山而行、傍水而演，表達優人始終合一，祈願光明海島守護家園，並以陽光燦爛的背鼓行腳鼓曲「陽歌行」表達鼓聲巡迴不已，為圓滿吉祥而行。
        </Text>
        <Text fontSize={{ base: '14px', lg: '18px' }}>
          演出:祭天 、太平鼓、陽歌行
        </Text>
      </VStack>
      {isHome && (
        <Button
          mb={{ base: '50px', lg: '100px' }}
          bg="yellow.600"
          color="grey.900"
          rounded="full"
          p="16px 24px"
          w="auto"
          as={RouterLink}
          to="/stages"
        >
          <HStack align="center">
            <Text>前往活動</Text>
            <ArrowForwardIcon w="20px" h="20px" />
          </HStack>
        </Button>
      )}
      <Box
        h="300px"
        bg={`url(${mt2})`}
        w="100%"
        bgPosition="top center"
        bgRepeat="no-repeat"
        bgSize="cover"
      ></Box>
    </Flex>
  );
};

export default TheAtre;
