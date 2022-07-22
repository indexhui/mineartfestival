import {
  Flex,
  Link,
  Image,
  HStack,
  StackDivider,
  useDisclosure,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';

import show from 'assets/images/show.jpg';
import stars from 'assets/images/homePage/stars.png';
import showSlogan from 'assets/images/showSlogan.svg';
import showDirector from 'assets/images/showDirector.jpg';
import showDecoration from 'assets/images/showDecoration.svg';
import showDecorationSm from 'assets/images/showDecorationSm.svg';

const Show = ({ bgColor }) => {
  return (
    <>
      <Flex
        justify="center"
        bgImage={stars}
        // bgColor="#14324C"
        bgColor={bgColor || '#14324C'}
        direction="column"
        align="center"
        pt="45px"
        pb={{ base: '0', lg: '95px' }}
      >
        <Image src={showSlogan} w="170px" alt="show" mb="45px" />
        <Image w="100%" maxW="1060px" src={show} />
      </Flex>
      <Flex
        h={{ base: 'auto', lg: '360px' }}
        w="100%"
        bg="linear-gradient(90deg, #7C8DC6 0%, #7487C3 28%, #5D78BA 72.01%, #4B6CB3 100.01%)"
        justify="center"
      >
        <Flex
          w="75%"
          justify="space-between"
          align="center"
          direction={{ base: 'column-reverse', lg: 'row' }}
          position="relative"
          pt={{ base: '130px', lg: '0px' }}
        >
          <Flex
            w={{ base: '300px', lg: '530px' }}
            h="132px"
            position="absolute"
            top="0"
            justify="center"
            pt={{ base: '8px', lg: '12px' }}
            pr="20px"
            pl={{ base: '20px', lg: '0' }}
            bgImage={{
              base: `url(${showDecorationSm})`,
              lg: `url(${showDecoration})`,
            }}
            bgSize="contain"
            bgRepeat="no-repeat"
          >
            <Text
              color="grey.900"
              fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
              fontWeight="900"
              ml={{ base: '0', lg: '-10px' }}
              fontSize={{ base: '16px', lg: '23px' }}
            >
              潘怡良設計師領軍，
              <br />
              攜手新銳設計師郭瑋＆吳日云聯合展演
            </Text>
          </Flex>
          <Flex
            w={{ base: '100%', lg: '55%' }}
            position="relative"
            justify="center"
            pb="38px"
          >
            <Text color="white" pt={{ base: '24px', lg: '190px' }}>
              透過時尚界新生代、次生代、初生代跨時代的時尚展演，呼應時間所刻畫的每一道文化故事，同時將傳承每一道交織的痕跡，延續至未來，透過古今交錯及融合，焠煉出時尚光華並由設計師從歷史文化、藝術創作登場，重現十三層遺址昔日熱鬧繁華景象
            </Text>
          </Flex>
          <Flex
            w={{ base: '205px', lg: '360px' }}
            h={{ base: '205px', lg: '360px' }}
            bgPosition="center"
            bgSize="cover"
            bgImage={showDirector}
            align="flex-end"
            justify="center"
            pb="15px"
          >
            <Text
              color="white"
              fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
              fontWeight="700"
              fontSize="16px"
            >
              藝術總監 潘怡良
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Show;
