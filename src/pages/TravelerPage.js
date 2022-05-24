import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Flex, Image, Text, HStack, Button, Box, Link } from '@chakra-ui/react';

import useCsv from 'hooks/useCsv';
import travelerCsv from 'assets/csv/traveler.csv';

import Banner from 'components/Banner';
import travelBg from 'assets/images/travelerPage/travelBg.jpg';
import travelerBanner from 'assets/images/travelerPage/travelerBanner.jpg';
import travelLogo from 'assets/images/travelerPage/travelLogo.png';
import travelRight from 'assets/images/travelerPage/travelRight.png';
import travelLeft from 'assets/images/travelerPage/travelLeft.png';

import cloud from 'assets/images/travelerPage/cloud.svg';
import titleImage from 'assets/images/travelerPage/titleImage.png';
import footprint from 'assets/images/travelerPage/footprint.svg';

const MotionFlex = motion(Flex);

const Traveler01 = () => {
  const { data: travelerData } = useCsv(travelerCsv);
  const [isVisible, setIsVisible] = useState(false);

  const handleSlideToggle = () => {
    console.log('hi');
    setIsVisible(!isVisible);
  };

  return (
    <Flex w="100%" zIndex="1" align="flex-end" overflow="hidden">
      <Flex
        w="55%"
        pl={{ base: '0', lg: '8%', xl: '10%' }}
        justify="center"
        h="600px"
        align="flex-end"
        position="relative"
      >
        <Image
          src={footprint}
          position="absolute"
          right="0"
          top="40px"
          w="200px"
        />
        <Flex w="530px" h="450px" bgImage={`url('${cloud}')`}>
          <Flex
            pt="100px"
            flex="1"
            direction="column"
            pl="110px"
            position="relative"
          >
            <Box
              h="1.5px"
              w="22px"
              bg="black"
              transform="rotate(-45deg)"
              transformOrigin="(0,0)"
            ></Box>
            <Text
              my="20px"
              style={{ writingMode: 'vertical-lr' }}
              fontSize="24px"
              fontWeight="700"
            >
              猴 硐
            </Text>
            <Box
              h="1.5px"
              w="22px"
              bg="black"
              transform="rotate(-45deg)"
              transformOrigin="(0,0)"
            ></Box>
          </Flex>
          <Flex w="310px" direction="column" pt="75px">
            <Flex bgImage={`url('${titleImage}')`} w="262px" h="80px">
              <Text
                pt="22px"
                pl="15px"
                color="white"
                fontSize="32px"
                fontWeight="700"
              >
                {travelerData[0]?.title}
              </Text>
            </Flex>
            <Text whiteSpace="pre-wrap" pt="15px">
              {travelerData[0]?.time}
            </Text>
            <HStack spacing="25px" pt="75px">
              <Button
                rounded="full"
                py="8px"
                h="auto"
                px="16px"
                onClick={handleSlideToggle}
                _hover={{ bg: isVisible ? '#7C8DC6' : '#7C8DC6' }}
                color={isVisible ? 'white' : 'blue.600'}
                bg={
                  isVisible
                    ? 'linear-gradient(90deg, #7C8DC6 0%, #7487C3 28%, #5D78BA 72.01%, #4B6CB3 100.01%)'
                    : 'yellow.500'
                }
              >
                簡介
              </Button>
              <Link href={travelerData[0]?.link} isExternal>
                報名連結
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="45%" align="flex-end" position="relative">
        <AnimatePresence>
          {isVisible && (
            <MotionFlex
              top="-50px"
              left="50px"
              position="absolute"
              w="505px"
              px="40px"
              py="30px"
              color="white"
              bg="blue.500"
              initial={{ x: '150%', opacity: 1 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, bounce: 0.25, type: 'spring' },
              }}
              exit={{
                x: '150%',
                opacity: 0,
                transition: { duration: 0.55 },
              }}
            >
              {travelerData[0]?.content}
            </MotionFlex>
          )}
        </AnimatePresence>
        <Image
          shadow="md"
          src={travelerData[0]?.image}
          w="100%"
          h="360px"
          objectFit="cover"
        />
      </Flex>
    </Flex>
  );
};

export function TravelerPage() {
  const { data: travelerData } = useCsv(travelerCsv);
  return (
    <Flex direction="column" align="center">
      <Banner
        backgroundImage={travelerBanner}
        title="山人旅行社"
        subtitle="文化行旅"
        titleColor="white"
      />
      <Flex
        mt="-80px"
        pt="60px"
        w="100%"
        h="650px"
        bg={`url('${travelBg}')`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center bottom"
        position="relative"
        justify="center"
        align="center"
        boxShadow="xl"
      >
        <Image src={travelLogo} w="600px" />
        <Image
          position="absolute"
          left="0"
          bottom="80px"
          src={travelLeft}
          w="600px"
        />
        <Image
          position="absolute"
          right="0"
          bottom="0"
          src={travelRight}
          w="700px"
        />
      </Flex>
      <Flex position="relative" w="100%" pb="80px">
        <Flex w="100%" zIndex="1" direction="column">
          <Traveler01 />
        </Flex>
        <Flex
          position="absolute"
          left="0"
          right="0"
          margin="0 auto"
          px={{ base: '30px', lg: '0px' }}
          w={{ base: '100%', xl: '80%' }}
          h="100%"
          justify="center"
        >
          <Flex bg="yellow.500" h="100%" w="100%"></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
