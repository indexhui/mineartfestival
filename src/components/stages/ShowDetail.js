import { Flex, Text, AspectRatio, Image, Box, VStack } from '@chakra-ui/react';
import { polyfill, scrollIntoView } from 'seamless-scroll-polyfill';

import Slogan from 'components/home/Slogan';
import Chromatic from 'components/stages/Chromatic';
import Show from 'components/Show';
import ShowSwipe from 'components/stages/ShowSwipe';
import TheAtre from 'components/TheAtre';
import ArtTeam from 'components/stages/ArtTeam';
import ShowInfo from 'components/stages/ShowInfo';
import StagesGrid from 'components/stages/StagesGrid';

const ShowDetailMenu = () => {
  const handleScroll = id => {
    const element = document.getElementById(id);
    polyfill();
    scrollIntoView(element, {
      behavior: 'smooth',
      // block: 'center',
      inline: 'center',
    });
  };
  return (
    <Flex
      px="4px"
      minH="24px"
      position="sticky"
      top={{ base: '100px', lg: '20px' }}
      pt="60px"
      w="30px"
      justify="center"
      cursor="pointer"
    >
      <VStack
        bg="yellow.600"
        w="40px"
        px="20px"
        borderRadius="0px 15px 15px 0px"
        py="20px"
        spacing="12px"
      >
        <Flex>
          <Text
            color="grey.900"
            fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
            onClick={() => handleScroll('transportationInfo')}
            fontWeight="900"
            style={{
              writingMode: 'vertical-lr',
            }}
            letterSpacing="5px"
          >
            交通資訊
          </Text>
        </Flex>

        <Box w="20px" h="1px" bg="grey.900"></Box>
        <Flex>
          <Text
            color="grey.900"
            fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
            onClick={() => handleScroll('artTeam')}
            fontWeight="900"
            style={{
              writingMode: 'vertical-lr',
            }}
            letterSpacing="5px"
          >
            藝術團隊
          </Text>
        </Flex>

        <Box w="20px" h="1px" bg="grey.900"></Box>
        <Flex>
          <Text
            color="grey.900"
            fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
            onClick={() => handleScroll('showInfo')}
            fontWeight="900"
            style={{
              writingMode: 'vertical-lr',
            }}
            letterSpacing="5px"
          >
            節目單
          </Text>
        </Flex>
        <Box w="20px" h="1px" bg="grey.900"></Box>
        <Flex>
          <Text
            color="grey.900"
            fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
            onClick={() => handleScroll('stagesGrid')}
            fontWeight="900"
            style={{
              writingMode: 'vertical-lr',
            }}
            letterSpacing="5px"
          >
            地方文化演出
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

const ShowDetail = ({ transportationInfoRef }) => {
  return (
    <Flex direction="column" position="relative">
      <Box
        // display={{ base: 'block', lg: 'none' }}
        position="absolute"
        left="0"
        top="0"
        h="100%"
        zIndex="10"
      >
        <ShowDetailMenu />
      </Box>
      <Slogan />
      <Chromatic />
      <Show bgColor="#070A0C" />
      <ShowSwipe />
      <TheAtre bgGradient="linear-gradient(180deg, #152128 0%, #1A2931 100%)" />
      <ArtTeam />
      <ShowInfo transportationInfoRef={transportationInfoRef} />
      <StagesGrid />
    </Flex>
  );
};

export default ShowDetail;
