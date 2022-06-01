import { Flex, Image, Text, Box, VStack, Skeleton } from '@chakra-ui/react';
import PageMotion from 'components/PageMotion';
import Badge from 'components/Badge';
import RevealFlex from 'components/RevealFlex';

import aboutBg from 'assets/images/aboutPage/aboutBg.jpg';

import about from 'assets/images/aboutPage/about.svg';
import HeroLogoIcon from 'components/icons/HeroLogoIcon';

export function AboutPage() {
  return (
    <PageMotion>
      <Flex
        w="100%"
        h={{ base: '340px', lg: '520px' }}
        bgColor="gray.400"
        bgImage={`url('${aboutBg}')`}
        bgPosition="top center"
        bgSize="cover"
        justify="center"
        borderBottom={{ base: '5px solid #FFDC60', lg: '10px solid #FFDC60' }}
      >
        <Flex
          zIndex="2"
          color="white"
          direction="column"
          justify="center"
          align="center"
          mt="-100px"
        >
          <Image src={about} w={{ base: '70px', lg: '120px' }} mb="20px" />
          <HeroLogoIcon
            w={{ base: '125px', lg: '250px' }}
            h={{ base: '125px', lg: '250px' }}
          />
        </Flex>
      </Flex>

      <RevealFlex mt="-10vh" w="100%" px={{ base: '30px', lg: '80px' }}>
        <Flex
          bg="#3551A2DD"
          color="white"
          borderRadius={{ base: '0 55px', lg: '0 100px' }}
          p="30px 45px"
          direction="column"
        >
          <Text whiteSpace="pre-wrap" fontSize={{ base: '14px', lg: '16px' }}>
            {'M【Mountain】\nI 【Invites】\nN【Neighborhood】\nE【Enjoy】'}
          </Text>
          <Text fontSize={{ base: '14px', lg: '16px' }}>
            the Mountain Invites our Neighborhood to Enjoy the Art Festival
          </Text>
        </Flex>
      </RevealFlex>

      <RevealFlex w="100%" my="30px" direction={{ base: 'column', lg: 'row' }}>
        <Flex
          flex="1"
          align="center"
          position="relative"
          mt={{ base: '28px', lg: '0' }}
          mb={{ base: '50px', lg: '0' }}
        >
          <VStack
            position="absolute"
            top="50%"
            w={{ base: '360px', lg: 'unset' }}
            // left="40%"
            left={{ base: '50%', lg: '40%' }}
            transform="translate(-50%, -50%)"
            bgColor="white"
            align={{ base: 'center', lg: 'flex-start' }}
            px={{ base: '25px', lg: '50px' }}
            fontSize={{ base: '18px', lg: '24px' }}
            color="grey.700"
            fontWeight="700"
          >
            <Text fontSize={{ base: '18px', lg: '24px' }}>
              礦山藝術季│ MINE art festival
            </Text>
            <Text fontSize={{ base: '18px', lg: '24px' }}>
              由礦山邀請地方共同的藝術節慶。
            </Text>
          </VStack>
          <Box h="2px" w="100%" bgColor="grey.900"></Box>
        </Flex>
        <Flex>
          <Text
            whiteSpace="pre-wrap"
            px={{ base: '30px', lg: '80px' }}
            color="grey.700"
            fontSize="16px"
            lineHeight="24px"
            letterSpacing="0.1em"
          >
            曾經我們走向礦山擷取所需。 現在我們望向礦山遙想繁華。
            <br />
            因為我們借用了礦山，開闢了道路，群起了聚落。
            <br />
            因為我們借用了礦山，開墾了礦山，富足了生活。
            <br />
            每當我們前進了一步，礦山卻離我們越遠。
            <br />
            但是，山從不曾離開，只是我們忘記了擁抱。
            <br />
            豐饒之山、豐饒之城、豐饒之海。 讓藝術找回豐饒的笑容。
            <br />
            而豐饒的人才更懂得擁抱。
          </Text>
        </Flex>
      </RevealFlex>
      <Flex w="100%" justify="center">
        <Badge h="195px">礦山結晶</Badge>
      </Flex>
      <Flex
        justify="center"
        py="48px"
        color="grey.900"
        px={{ base: '30px', lg: '0' }}
      >
        <VStack spacing="16px" maxW="840px" textAlign="left" align="flex-start">
          <RevealFlex order="0">
            <Text>策展人/朱泊華</Text>
          </RevealFlex>
          <RevealFlex order="1">
            <Text>
              礦山藝術季與其他藝術季有著截然不同的文化個性，它是一張與居民共創的藍圖，以地景為畫布，以歷史底蘊為顏料，以居民念想為繪畫動機。
            </Text>
          </RevealFlex>
          <RevealFlex order="2">
            <Text>
              礦山的記憶、故事、文化及地景，像是這座山城淬煉出的結晶體，隨著時光一層層堆疊、共構組成這座礦山的樣貌。2022年以「礦山結晶」為想像，與居民、藝術家共同淬煉礦山的美麗。
              <br />
              以小旅行展開對山城的探訪，聆聽在地居民對於淬煉出的山城記憶；以在地學校的表演藝術，看見學生們透過演出展現青春的美麗樣貌；以可食地景，品嚐居民用心投入的在地滋味。以跨界藝術融入歷史資產，將礦山層疊的美麗畫作時尚服飾。
              <br />
              居民們與藝術家共同努力耕耘的心血結晶，構築了這座山城獨一無二的韻味，成就以「礦山結晶」為題的礦山藝術季。
            </Text>
          </RevealFlex>
        </VStack>
      </Flex>
    </PageMotion>
  );
}

export default AboutPage;
