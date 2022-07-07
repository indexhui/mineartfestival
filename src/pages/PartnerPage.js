import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  Skeleton,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useCsv from 'hooks/useCsv';
import PartnerGrid from 'components/partner/PartnerGrid';
import RevealFlex from 'components/RevealFlex';
import PartnerLabel from 'components/partner/PartnerLabel';
import hotelCsv from 'assets/csv/hotel.csv';
import storeCsv from 'assets/csv/store.csv';

import partnerBg from 'assets/images/partnerPage/partnerBg.svg';
import partnersBanner from 'assets/images/partnerPage/partnersBanner.jpg';

import hostelLg from 'assets/images/partnerPage/hostelLg.jpg';
import hostelSm from 'assets/images/partnerPage/hostelSm.jpg';

import shopLg from 'assets/images/partnerPage/shopLg.jpg';
import shopSm from 'assets/images/partnerPage/shopSm.jpg';

import promotion from 'assets/images/partnerPage/promotion.jpg';

import mt1 from 'assets/images/homePage/mt1.png';

const MotionBox = motion(Box);

export function PartnerPage() {
  const { data: hotelData } = useCsv(hotelCsv);
  const { data: storeData } = useCsv(storeCsv);

  return (
    <>
      <Flex
        w="100%"
        justify="center"
        zIndex="2"
        position="relative"
        h={{ base: '260px', lg: '480px' }}
      >
        <Skeleton
          position="absolute"
          zIndex="-1"
          w={{ base: '100%', md: '85%' }}
          h={{ base: '260px', lg: '480px' }}
        ></Skeleton>
        <Flex
          w={{ base: '100%', md: '85%' }}
          padding={{ base: '40px', lg: '80px' }}
          h={{ base: '260px', lg: '480px' }}
          bgImage={`url('${partnersBanner}')`}
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <Flex align="flex-start" w="100%">
            <Heading
              w="100%"
              textAlign="center"
              color="blue.700"
              fontSize={{ base: '40px ', lg: '70px' }}
              fontWeight="700"
            >
              周邊好康
            </Heading>
          </Flex>
        </Flex>
      </Flex>

      {/* 民宿title */}
      <Flex
        my="60px"
        display={{ base: 'none', lg: 'flex' }}
        bgImage={`url('${hostelLg}')`}
        w="100%"
        h="280px"
        bgRepeat="no-repeat"
        bgSize="cover"
        justify="center"
        align="center"
      >
        <VStack w="75%" align="flex-start" spacing="20px">
          <Text color="grey.900" fontSize="24px" fontWeight="700">
            ｜民宿夥伴｜
          </Text>
          <Text
            p="20px"
            w="504px"
            borderRadius="30px"
            bg="yellow.500"
            fontSize="16px"
          >
            新北市民宿協會響應礦山藝術季，精選14家在地民宿夥伴，於111年6月11日至8月14日止，與以下民宿預定住宿，可享9折優惠＋黃金博物館免費門票。
            預訂方式請洽以下民宿夥伴：
          </Text>
        </VStack>
      </Flex>

      <Flex
        mt="60px"
        display={{ base: 'flex', lg: 'none' }}
        bgImage={`url('${hostelSm}')`}
        w="100%"
        h="375px"
        bgRepeat="no-repeat"
        bgSize="cover"
        justify="center"
        align="center"
      >
        <VStack w="75%" align="center" spacing="20px">
          <Text color="grey.900" fontSize="24px" fontWeight="700">
            ｜民宿夥伴｜
          </Text>
        </VStack>
      </Flex>

      <Text
        mt="-100px"
        mx="30px"
        p="20px"
        fontSize="14px"
        borderRadius="30px"
        bg="yellow.500"
        display={{ base: 'flex', lg: 'none' }}
      >
        新北市民宿協會響應礦山藝術季，精選14家在地民宿夥伴，於111年6月11日至8月14日止，與以下民宿預定住宿，可享9折優惠＋黃金博物館免費門票。
        預訂方式請洽以下民宿夥伴：
      </Text>

      <Flex direction="column" align="center" pb="20px">
        {/* <Heading
          my="50px"
          fontWeight="900"
          fontSize={{ base: '40px', lg: '72px' }}
          color="blue.600"
          letterSpacing="0.02em"
          px={{ base: '15px', lg: '30px' }}
          pb={{ base: '12px', lg: '24px' }}
          borderBottom={{ base: '3px solid #3E5EBD', lg: '5px solid #3E5EBD' }}
        >
          周邊夥伴
        </Heading> */}

        <Flex
          direction="column"
          align="center"
          w="100%"
          // bg={`url('${partnerBg}')`}
          bgSize="cover"
          bgRepeat="no-repeat"
        >
          {/* <PartnerLabel label="民宿夥伴" /> */}
          {/* <Flex
            px="30px"
            w={{ base: '100%', lg: '1280px' }}
            justify="flex-start"
            mt="35px"
          >
            <RevealFlex maxW="500px" p="20px" rounded="xl" bg="yellow.500">
              新北市民宿協會響應礦山藝術季，精選14家在地民宿夥伴，於111年6月11日至8月14日止，與以下民宿預定住宿，可享9折優惠＋黃金博物館免費門票。
              預訂方式請洽以下民宿夥伴：
            </RevealFlex>
          </Flex> */}
          <PartnerGrid partnerData={hotelData} />

          <Flex
            my="60px"
            display={{ base: 'none', lg: 'flex' }}
            bgImage={`url('${shopLg}')`}
            w="100%"
            h="280px"
            bgRepeat="no-repeat"
            bgSize="cover"
            justify="center"
            align="center"
          >
            <VStack w="75%" align="flex-start" spacing="20px">
              <Text color="grey.900" fontSize="24px" fontWeight="700">
                ｜民宿夥伴｜
              </Text>
            </VStack>
          </Flex>

          <Flex
            mt="60px"
            display={{ base: 'flex', lg: 'none' }}
            bgImage={`url('${shopSm}')`}
            w="100%"
            h="375px"
            bgRepeat="no-repeat"
            bgSize="cover"
            justify="center"
            align="center"
          >
            <VStack w="75%" align="center" spacing="20px">
              <Text color="grey.900" fontSize="24px" fontWeight="700">
                ｜店家夥伴｜
              </Text>
            </VStack>
          </Flex>

          <PartnerGrid partnerData={storeData} />

          <VStack align="center" py="80px">
            <Text
              color="grey.900"
              fontSize={{ base: '20px', lg: '24px ' }}
              fontWeight="700"
            >
              ｜悠遊國旅 個別旅客住宿優惠活動｜
            </Text>
            <Image src={promotion} w="100%" maxW="860px" />
          </VStack>
          <Box
            h="300px"
            bg={`url(${mt1})`}
            w="100%"
            bgPosition="top center"
            bgRepeat="no-repeat"
            bgSize="cover"
          ></Box>
        </Flex>
      </Flex>
    </>
  );
}
