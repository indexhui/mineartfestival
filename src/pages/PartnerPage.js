import { Flex, Heading, Text, Image, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useCsv from 'hooks/useCsv';
import PartnerGrid from 'components/partner/PartnerGrid';
import RevealFlex from 'components/RevealFlex';
import PartnerLabel from 'components/partner/PartnerLabel';
import hotelCsv from 'assets/csv/hotel.csv';
import storeCsv from 'assets/csv/store.csv';

import partnerBg from 'assets/images/partnerPage/partnerBg.svg';

const MotionBox = motion(Box);

export function PartnerPage() {
  const { data: hotelData } = useCsv(hotelCsv);
  const { data: storeData } = useCsv(storeCsv);

  return (
    <Flex direction="column" align="center" py="20px">
      <Heading
        my="50px"
        fontWeight="900"
        fontSize="72px"
        color="blue.600"
        letterSpacing="0.02em"
        px="40px"
        pb="24px"
        borderBottom="5px solid #3E5EBD"
      >
        周邊夥伴
      </Heading>
      <Flex
        direction="column"
        align="center"
        w="100%"
        bg={`url('${partnerBg}')`}
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <PartnerLabel label="民宿夥伴" />
        <Flex px="30px" w="1280px" justify="flex-start" mt="35px">
          <RevealFlex maxW="500px" p="20px" rounded="xl" bg="yellow.500">
            新北市民宿協會響應礦山藝術季，精選14家在地民宿夥伴，於111年6月11日至8月31日止，與以下民宿預定住宿，可享9折優惠＋黃金博物館免費門票。
            預訂方式請洽以下民宿夥伴：
          </RevealFlex>
        </Flex>
        <PartnerGrid partnerData={hotelData} />
        <PartnerLabel label="店家夥伴" isReverse={true} />
        <PartnerGrid partnerData={storeData} />
      </Flex>
    </Flex>
  );
}
