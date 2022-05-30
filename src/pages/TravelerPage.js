import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Flex,
  Image,
  Text,
  HStack,
  Button,
  Box,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import useCsv from 'hooks/useCsv';
import travelerCsv from 'assets/csv/traveler.csv';
import PageMotion from 'components/PageMotion';

import Banner from 'components/Banner';
import travelBg from 'assets/images/travelerPage/travelBg.jpg';
import travelerBanner from 'assets/images/travelerPage/travelerBanner.jpg';
import travelLogo from 'assets/images/travelerPage/travelLogo.png';
import travelRight from 'assets/images/travelerPage/travelRight.png';
import travelLeft from 'assets/images/travelerPage/travelLeft.png';

import cloud from 'assets/images/travelerPage/cloud.svg';
import titleImage from 'assets/images/travelerPage/titleImage.png';
import footprint from 'assets/images/travelerPage/footprint.svg';
import gold from 'assets/images/travelerPage/gold.svg';
import flag from 'assets/images/travelerPage/flag.svg';

const MotionFlex = motion(Flex);

const TravelModal = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        display={{ base: 'block', lg: 'none' }}
        fontWeight="500"
        fontSize={{ base: '12px', lg: '14px' }}
        rounded="full"
        lineHeight="auto"
        py={{ base: '4px', lg: '8px' }}
        px={{ base: '10px', lg: '16px' }}
        h="auto"
        onClick={onOpen}
        _hover={{ bg: isOpen ? '#7C8DC6' : '#7C8DC6' }}
        color={isOpen ? 'white' : 'black'}
        bg={
          isOpen
            ? 'linear-gradient(90deg, #7C8DC6 0%, #7487C3 28%, #5D78BA 72.01%, #4B6CB3 100.01%)'
            : 'yellow.500'
        }
      >
        簡介
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
        <ModalOverlay />
        <ModalContent bg="blue.500" rounded="0">
          <ModalBody p="30px">
            <Flex w="100%" justify="flex-end" color="white" mb="10px">
              <CloseIcon cursor="pointer" onClick={onClose} />
            </Flex>
            <Text whiteSpace="pre-wrap" color="white">
              {props.content}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const Traveler01 = () => {
  const ref = useRef();
  const order = 0;
  const { data: travelerData } = useCsv(travelerCsv);
  const [isVisible, setIsVisible] = useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsVisible(false),
  });

  const handleSlideToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Flex
      w="100%"
      zIndex="1"
      direction={{ base: 'column', lg: 'row' }}
      align={{ base: 'center', lg: 'flex-end' }}
      overflow="hidden"
    >
      <Flex
        w={{ base: '100%', lg: '55%' }}
        pl={{ base: '0', lg: '8%', xl: '10%' }}
        justify="center"
        h={{ base: '270px', lg: '600px' }}
        align={{ base: 'flex-end', lg: 'flex-end' }}
        position="relative"
        mb={{ base: '-25px', lg: '0' }}
        zIndex="1"
      >
        {/* title mobile */}
        <Flex
          left="40px"
          top="50px"
          position="absolute"
          flex="1"
          direction="column"
          display={{ base: 'flex', lg: 'none' }}
        >
          <Box
            h="1.5px"
            w="22px"
            bg="black"
            transform="rotate(-45deg)"
            transformOrigin="(0,0)"
          ></Box>
          <Text
            my="15px"
            style={{ writingMode: 'vertical-lr' }}
            fontSize="20px"
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

        <Image
          src={footprint}
          position="absolute"
          right={{ base: '20px', lg: '0' }}
          top={{ base: '60px', lg: '40px' }}
          w={{ base: '80px', lg: '200px' }}
        />
        <Flex
          w={{ base: '250px', lg: '530px' }}
          h={{ base: '210px', lg: '450px' }}
          bgImage={`url('${cloud}')`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          {/* title */}
          <Flex
            display={{ base: 'none', lg: 'flex' }}
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
              {travelerData[order]?.location}
            </Text>
            <Box
              h="1.5px"
              w="22px"
              bg="black"
              transform="rotate(-45deg)"
              transformOrigin="(0,0)"
            ></Box>
          </Flex>
          <Flex
            w="310px"
            direction="column"
            align={{ base: 'center', lg: 'flex-start' }}
            pt={{ base: '20px', lg: '75px' }}
          >
            <Flex
              bgImage={`url('${titleImage}')`}
              bgSize="cover"
              bgRepeat="no-repeat"
              h={{ base: '40px', lg: '80px' }}
              w={{ base: '130px', lg: '262px' }}
            >
              <Text
                pt={{ base: '6px', lg: '22px' }}
                pl={{ base: '10px', lg: '20px' }}
                color="white"
                fontSize={{ base: '16px', lg: '32px' }}
                fontWeight="700"
                letterSpacing="0.05em"
              >
                {travelerData[order]?.title}
              </Text>
            </Flex>
            <Text
              whiteSpace="pre-wrap"
              pt={{ base: '5px', lg: '15px' }}
              fontSize={{ base: '14px', lg: '16px' }}
            >
              {travelerData[order]?.time}
            </Text>
            <HStack spacing="25px" pt={{ base: '10px', lg: '75px' }}>
              <Button
                display={{ base: 'none', lg: 'flex' }}
                fontWeight="500"
                fontSize={{ base: '12px', lg: '14px' }}
                rounded="full"
                lineHeight="auto"
                py={{ base: '4px', lg: '8px' }}
                px={{ base: '10px', lg: '16px' }}
                h="auto"
                onClick={handleSlideToggle}
                _hover={{ bg: isVisible ? '#7C8DC6' : '#7C8DC6' }}
                color={isVisible ? 'white' : 'black'}
                bg={
                  isVisible
                    ? 'linear-gradient(90deg, #7C8DC6 0%, #7487C3 28%, #5D78BA 72.01%, #4B6CB3 100.01%)'
                    : 'yellow.500'
                }
              >
                簡介
              </Button>
              <TravelModal content={travelerData[order]?.content} />
              <Link
                h="auto"
                fontSize={{ base: '12px', lg: '14px' }}
                fontWeight="500"
                py={{ base: '4px', lg: '8px' }}
                px={{ base: '10px', lg: '16px' }}
                _hover={{ bg: '#7C8DC6' }}
                href={travelerData[order]?.link}
                isExternal
                bg="yellow.500"
                rounded="full"
              >
                報名連結
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={{ base: '100%', lg: '45%' }}
        align="flex-end"
        position="relative"
      >
        <AnimatePresence>
          {isVisible && (
            <MotionFlex
              ref={ref}
              zIndex="25"
              top="-50px"
              left="50px"
              position="absolute"
              w="505px"
              px="40px"
              py="30px"
              color="white"
              bg="blue.500"
              whiteSpace="pre-wrap"
              textAlign="left"
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
              {travelerData[order]?.content}
            </MotionFlex>
          )}
        </AnimatePresence>
        {isVisible && (
          <Flex
            w="100vw"
            h="100vh"
            zIndex="20"
            position="fixed"
            cursor="pointer"
            top="0"
            left="0"
            bg="#00000055"
          ></Flex>
        )}
        <Image
          shadow="md"
          src={travelerData[order]?.image}
          w="100%"
          h={{ base: '250px', lg: '350px' }}
          objectFit="cover"
        />
      </Flex>
    </Flex>
  );
};

const Traveler02 = () => {
  const order = 1;
  const ref = useRef();
  const { data: travelerData } = useCsv(travelerCsv);
  const [isVisible, setIsVisible] = useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsVisible(false),
  });
  const handleSlideToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Flex
      w="100%"
      zIndex="1"
      direction={{ base: 'column', lg: 'row-reverse' }}
      align={{ base: 'center', lg: 'flex-end' }}
      overflow="hidden"
    >
      <Flex
        w={{ base: '100%', lg: '55%' }}
        pr={{ base: '0', lg: '8%', xl: '10%' }}
        justify="center"
        h={{ base: '270px', lg: '600px' }}
        align={{ base: 'flex-end', lg: 'flex-end' }}
        position="relative"
        mb={{ base: '-25px', lg: '0' }}
        zIndex="1"
      >
        {/* title mobile */}
        <Flex
          right="20px"
          top="50px"
          position="absolute"
          flex="1"
          direction="column"
          display={{ base: 'flex', lg: 'none' }}
        >
          <Box
            h="1.5px"
            w="22px"
            bg="black"
            transform="rotate(-45deg)"
            transformOrigin="(0,0)"
          ></Box>
          <Text
            my="15px"
            style={{ writingMode: 'vertical-lr' }}
            fontSize="20px"
            fontWeight="700"
          >
            金 瓜 石
          </Text>
          <Box
            h="1.5px"
            w="22px"
            bg="black"
            transform="rotate(-45deg)"
            transformOrigin="(0,0)"
          ></Box>
        </Flex>

        <Image
          src={gold}
          position="absolute"
          left={{ base: '20px', lg: '0' }}
          top={{ base: '60px', lg: '40px' }}
          w={{ base: '75px', lg: '135px' }}
        />
        <Flex
          w={{ base: '250px', lg: '530px' }}
          h={{ base: '210px', lg: '450px' }}
          bgImage={`url('${cloud}')`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          {/* title */}
          <Flex
            display={{ base: 'none', lg: 'flex' }}
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
              {travelerData[order]?.location}
            </Text>
            <Box
              h="1.5px"
              w="22px"
              bg="black"
              transform="rotate(-45deg)"
              transformOrigin="(0,0)"
            ></Box>
          </Flex>
          <Flex
            w="310px"
            direction="column"
            align={{ base: 'center', lg: 'flex-start' }}
            pt={{ base: '20px', lg: '75px' }}
          >
            <Flex
              bgImage={`url('${titleImage}')`}
              bgSize="cover"
              bgRepeat="no-repeat"
              h={{ base: '40px', lg: '80px' }}
              w={{ base: '130px', lg: '262px' }}
            >
              <Text
                pt={{ base: '6px', lg: '22px' }}
                pl={{ base: '10px', lg: '15px' }}
                color="white"
                fontSize={{ base: '16px', lg: '32px' }}
                fontWeight="700"
                letterSpacing="0.05em"
              >
                {travelerData[order]?.title}
              </Text>
            </Flex>
            <Text
              whiteSpace="pre-wrap"
              pt={{ base: '5px', lg: '15px' }}
              fontSize={{ base: '14px', lg: '16px' }}
            >
              {travelerData[order]?.time}
            </Text>
            <HStack spacing="25px" pt={{ base: '10px', lg: '75px' }}>
              <Button
                display={{ base: 'none', lg: 'flex' }}
                fontWeight="500"
                fontSize={{ base: '12px', lg: '14px' }}
                rounded="full"
                lineHeight="auto"
                py={{ base: '4px', lg: '8px' }}
                px={{ base: '10px', lg: '16px' }}
                h="auto"
                onClick={handleSlideToggle}
                _hover={{ bg: isVisible ? '#7C8DC6' : '#7C8DC6' }}
                color={isVisible ? 'white' : 'black'}
                bg={
                  isVisible
                    ? 'linear-gradient(90deg, #7C8DC6 0%, #7487C3 28%, #5D78BA 72.01%, #4B6CB3 100.01%)'
                    : 'yellow.500'
                }
              >
                簡介
              </Button>
              <TravelModal content={travelerData[order]?.content} />
              <Link
                h="auto"
                fontSize={{ base: '12px', lg: '14px' }}
                fontWeight="500"
                py={{ base: '4px', lg: '8px' }}
                px={{ base: '10px', lg: '16px' }}
                _hover={{ bg: '#7C8DC6' }}
                href={travelerData[order]?.link}
                isExternal
                bg="yellow.500"
                rounded="full"
              >
                報名連結
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={{ base: '100%', lg: '45%' }}
        align="flex-end"
        position="relative"
      >
        <AnimatePresence>
          {isVisible && (
            <MotionFlex
              zIndex="25"
              ref={ref}
              top="-50px"
              left="50px"
              position="absolute"
              w="505px"
              px="40px"
              py="30px"
              color="white"
              bg="blue.500"
              whiteSpace="pre-wrap"
              textAlign="left"
              initial={{ x: '-150%', opacity: 1 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, bounce: 0.25, type: 'spring' },
              }}
              exit={{
                x: '-150%',
                opacity: 0,
                transition: { duration: 0.55 },
              }}
            >
              {travelerData[order]?.content}
            </MotionFlex>
          )}
        </AnimatePresence>
        {isVisible && (
          <Flex
            w="100vw"
            h="100vh"
            zIndex="20"
            position="fixed"
            cursor="pointer"
            top="0"
            left="0"
            bg="#00000055"
          ></Flex>
        )}
        <Image
          shadow="md"
          src={travelerData[order]?.image}
          w="100%"
          h={{ base: '250px', lg: '350px' }}
          objectFit="cover"
        />
      </Flex>
    </Flex>
  );
};

const Traveler03 = () => {
  const order = 2;
  const ref = useRef();
  const { data: travelerData } = useCsv(travelerCsv);
  const [isVisible, setIsVisible] = useState(false);

  useOutsideClick({
    ref: ref,
    handler: () => setIsVisible(false),
  });

  const handleSlideToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Flex
      w="100%"
      zIndex="1"
      direction={{ base: 'column', lg: 'row' }}
      align={{ base: 'center', lg: 'flex-end' }}
      overflow="hidden"
    >
      <Flex
        w={{ base: '100%', lg: '55%' }}
        pl={{ base: '0', lg: '8%', xl: '10%' }}
        justify="center"
        h={{ base: '270px', lg: '600px' }}
        align={{ base: 'flex-end', lg: 'flex-end' }}
        position="relative"
        mb={{ base: '-25px', lg: '0' }}
        zIndex="1"
      >
        {/* title mobile */}
        <Flex
          left="40px"
          top="50px"
          position="absolute"
          flex="1"
          direction="column"
          display={{ base: 'flex', lg: 'none' }}
        >
          <Box
            h="1.5px"
            w="22px"
            bg="black"
            transform="rotate(-45deg)"
            transformOrigin="(0,0)"
          ></Box>
          <Text
            my="15px"
            style={{ writingMode: 'vertical-lr' }}
            fontSize="20px"
            fontWeight="700"
          >
            水 湳 洞
          </Text>
          <Box
            h="1.5px"
            w="22px"
            bg="black"
            transform="rotate(-45deg)"
            transformOrigin="(0,0)"
          ></Box>
        </Flex>

        <Image
          src={flag}
          zIndex="-10"
          position="absolute"
          right={{ base: '20px', lg: '0' }}
          top={{ base: '60px', lg: '40px' }}
          w={{ base: '80px', lg: '200px' }}
        />
        <Flex
          w={{ base: '250px', lg: '530px' }}
          h={{ base: '210px', lg: '450px' }}
          bgImage={`url('${cloud}')`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          {/* title */}
          <Flex
            display={{ base: 'none', lg: 'flex' }}
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
              {travelerData[order]?.location}
            </Text>
            <Box
              h="1.5px"
              w="22px"
              bg="black"
              transform="rotate(-45deg)"
              transformOrigin="(0,0)"
            ></Box>
          </Flex>
          <Flex
            w="310px"
            direction="column"
            align={{ base: 'center', lg: 'flex-start' }}
            pt={{ base: '20px', lg: '75px' }}
          >
            <Flex
              bgImage={`url('${titleImage}')`}
              bgSize="cover"
              bgRepeat="no-repeat"
              h={{ base: '40px', lg: '80px' }}
              w={{ base: '130px', lg: '262px' }}
            >
              <Text
                pt={{ base: '6px', lg: '22px' }}
                pl={{ base: '10px', lg: '15px' }}
                color="white"
                fontSize={{ base: '16px', lg: '32px' }}
                fontWeight="700"
                letterSpacing="0.05em"
              >
                {travelerData[order]?.title}
              </Text>
            </Flex>
            <Text
              whiteSpace="pre-wrap"
              pt={{ base: '5px', lg: '15px' }}
              fontSize={{ base: '14px', lg: '16px' }}
            >
              {travelerData[order]?.time}
            </Text>
            <HStack spacing="25px" pt={{ base: '10px', lg: '75px' }}>
              <Button
                display={{ base: 'none', lg: 'flex' }}
                fontWeight="500"
                fontSize={{ base: '12px', lg: '14px' }}
                rounded="full"
                lineHeight="auto"
                py={{ base: '4px', lg: '8px' }}
                px={{ base: '10px', lg: '16px' }}
                h="auto"
                onClick={handleSlideToggle}
                _hover={{ bg: isVisible ? '#7C8DC6' : '#7C8DC6' }}
                color={isVisible ? 'white' : 'black'}
                bg={
                  isVisible
                    ? 'linear-gradient(90deg, #7C8DC6 0%, #7487C3 28%, #5D78BA 72.01%, #4B6CB3 100.01%)'
                    : 'yellow.500'
                }
              >
                簡介
              </Button>
              <TravelModal content={travelerData[order]?.content} />
              <Link
                h="auto"
                fontSize={{ base: '12px', lg: '14px' }}
                fontWeight="500"
                py={{ base: '4px', lg: '8px' }}
                px={{ base: '10px', lg: '16px' }}
                _hover={{ bg: '#7C8DC6' }}
                href={travelerData[order]?.link}
                isExternal
                bg="yellow.500"
                rounded="full"
              >
                報名連結
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={{ base: '100%', lg: '45%' }}
        align="flex-end"
        position="relative"
      >
        <AnimatePresence>
          {isVisible && (
            <MotionFlex
              ref={ref}
              zIndex="25"
              top="-50px"
              left="50px"
              position="absolute"
              w="505px"
              px="40px"
              py="30px"
              color="white"
              bg="blue.500"
              whiteSpace="pre-wrap"
              textAlign="left"
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
              {travelerData[order]?.content}
            </MotionFlex>
          )}
        </AnimatePresence>
        {isVisible && (
          <Flex
            w="100vw"
            h="100vh"
            zIndex="20"
            position="fixed"
            cursor="pointer"
            top="0"
            left="0"
            bg="#00000055"
          ></Flex>
        )}
        <Image
          shadow="md"
          src={travelerData[order]?.image}
          w="100%"
          h={{ base: '250px', lg: '350px' }}
          objectFit="cover"
        />
      </Flex>
    </Flex>
  );
};

export function TravelerPage() {
  return (
    <PageMotion direction="column" align="center">
      <Banner
        backgroundImage={travelerBanner}
        title="山人旅行社"
        subtitle="文化行旅"
        titleColor="white"
      />
      <Flex
        zIndex="1"
        mt={{ base: '0', lg: '-80px' }}
        pt="60px"
        w="100%"
        h={{ base: '450px', lg: '650px' }}
        bg={`url('${travelBg}')`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center bottom"
        position="relative"
        justify="center"
        align={{ base: 'flex-start', lg: 'center' }}
        boxShadow="xl"
      >
        <Image src={travelLogo} w={{ base: '300px', lg: '600px' }} />
        <Image
          position="absolute"
          left="0"
          bottom="80px"
          src={travelLeft}
          w={{ base: '220px', lg: '600px' }}
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
          <Traveler02 />
          <Traveler03 />
        </Flex>
        <Flex
          position="absolute"
          left="0"
          right="0"
          margin="0 auto"
          px={{ base: '0px', lg: '0px' }}
          w={{ base: '100%', xl: '80%' }}
          h="100%"
          justify="center"
        >
          <Flex bg="yellow.500" h="100%" w="100%"></Flex>
        </Flex>
      </Flex>
    </PageMotion>
  );
}
