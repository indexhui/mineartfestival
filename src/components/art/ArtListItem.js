import { useRef } from 'react';

import {
  Flex,
  Text,
  Image,
  HStack,
  VStack,
  Box,
  Icon,
  Button,
} from '@chakra-ui/react';
import { FaMapMarker } from 'react-icons/fa';
import { MdArrowRight, MdArrowLeft } from 'react-icons/md';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const ArtListItem = props => {
  console.log(props.imageNumber);

  const swiperRef = useRef();
  return (
    <Flex
      w="100%"
      wrap="wrap"
      align="center"
      my="80px"
      direction={{ base: 'row', lg: props.reverse ? 'row-reverse' : 'row' }}
    >
      <Flex
        w={{ base: '100%', lg: '50%' }}
        px="30px"
        pl={{ base: '30px', lg: props.reverse ? '0%' : '10%' }}
        justify="center"
      >
        <Flex
          w={{ base: '100%', lg: '450px' }}
          justify="center"
          position="relative"
        >
          <Flex
            top="50%"
            transform={`translateY(-50%)`}
            zIndex="5"
            right="-20px"
            position="absolute"
            onClick={() => swiperRef.current.slideNext()}
            rounded="none"
            w="28px"
            h="45px"
            bg="grey.300"
            justify="center"
            align="center"
            cursor="pointer"
          >
            <Icon as={MdArrowRight} w="32px" h="32px" />
          </Flex>
          <Flex
            top="50%"
            transform={`translateY(-50%)`}
            zIndex="5"
            left="-20px"
            position="absolute"
            onClick={() => swiperRef.current.slidePrev()}
            rounded="none"
            w="28px"
            h="45px"
            bg="grey.300"
            justify="center"
            align="center"
            cursor="pointer"
          >
            <Icon as={MdArrowLeft} w="32px" h="32px" />
          </Flex>
          {props.imageNumber > 0 && (
            <Swiper
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              loop={true}
              slidesPerView={1}
            >
              {Array(...new Array(+props.imageNumber)).map((_, i) => (
                <SwiperSlide key={props.id + i}>
                  <Image
                    w="100%"
                    h="300px"
                    objectFit="cover"
                    src={`/images/art/${props.id}/${props.id}-0${i + 1}.jpeg`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Flex>
      </Flex>
      <VStack
        w={{ base: '100%', lg: '50%' }}
        spacing="15px"
        // align="flex-start"
        align={props.reverse ? 'flex-end' : 'flex-start'}
      >
        <Text px="30px">{props.name} </Text>
        <Text
          px="30px"
          whiteSpace="pre-wrap"
          textAlign={props.reverse ? 'right' : 'left'}
        >
          {props.artist}
        </Text>
        <Flex
          w="100%"
          px="30px"
          justify="space-between"
          direction={{
            base: 'row',
            lg: props.reverse ? 'row-reverse' : 'row',
          }}
        >
          <HStack py={{ base: '10px', lg: '0' }}>
            <Icon as={FaMapMarker} size="24px" color="yellow.700" />
            <Text color="grey.900">{props.location}</Text>
          </HStack>
          <HStack pl={props.reverse ? '25px' : '0px'} spacing="25px">
            {Array(...new Array(3)).map((_, i) => (
              <Box
                key={'dot' + i}
                w="25px"
                h="25px"
                rounded="full"
                bg="blue.500"
              ></Box>
            ))}
          </HStack>
        </Flex>
        <Flex
          w="100%"
          pl={props.reverse ? '0px' : '30px'}
          pr={props.reverse ? '30px' : '0px'}
        >
          <Box h="2px" w="100%" bgColor="blue.500"></Box>
        </Flex>

        <Box px="30px" maxW="550px" w="100%">
          <SimpleBar style={{ maxHeight: 168, width: '100%' }}>
            <Text
              textAlign="left"
              color="grey.900"
              fontSize={{ base: '14px', lg: '16px' }}
            >
              {props.content}
            </Text>
          </SimpleBar>
        </Box>
        {/* <Box
          px="30px"
          maxW="550px"
          textAlign="left"
          maxH="300px"
          // overflowY="scroll"
        >
          <SimpleBar style={{ maxHeight: 300 }}>{props.content}</SimpleBar>
        </Box> */}
      </VStack>
    </Flex>
  );
};

export default ArtListItem;
