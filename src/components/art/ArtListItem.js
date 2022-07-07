import { useRef } from 'react';

import {
  Flex,
  Text,
  Image,
  HStack,
  VStack,
  Box,
  Icon,
  Link,
  Skeleton,
} from '@chakra-ui/react';
import { FaMapMarker } from 'react-icons/fa';
import { MdArrowRight, MdArrowLeft } from 'react-icons/md';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import RevealFlex from 'components/RevealFlex';
import fireworkLgBlue from 'assets/images/homePage/fireworkLgBlue.svg';
import fireworkSmIcon from 'assets/images/homePage/fireworkSmIcon.svg';

const ArtListItem = props => {
  const swiperRef = useRef();
  return (
    <>
      <RevealFlex
        id={props.id}
        w="100%"
        wrap="wrap"
        align="center"
        mt="100px"
        direction={{ base: 'row', lg: props.reverse ? 'row-reverse' : 'row' }}
      >
        <Flex
          w={{ base: '100%', lg: '50%' }}
          px={{ base: '30px', lg: props.reverse ? '10%' : '0%' }}
          pl={{ base: '30px', lg: props.reverse ? '0%' : '10%' }}
          justify="center"
        >
          <Flex
            w={{ base: '100%', lg: '450px' }}
            justify="center"
            position="relative"
          >
            {props.reverse ? (
              <Image
                position="absolute"
                src={fireworkLgBlue}
                w={{ base: '60px', lg: '150px' }}
                top={{ base: '-20px', lg: '-75px' }}
                right={{ base: '-20px', lg: '-75px' }}
              />
            ) : (
              <Image
                position="absolute"
                src={fireworkSmIcon}
                w={{ base: '60px', lg: '150px' }}
                top={{ base: '-20px', lg: '-75px' }}
                left={{ base: '-20px', lg: '-75px' }}
              />
            )}
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
                speed={1000}
                modules={[Autoplay]}
                spaceBetween={20}
                loop={true}
                slidesPerView={1}
              >
                {Array(...new Array(+props.imageNumber)).map((_, i) => (
                  <SwiperSlide key={props.id + i}>
                    <Image
                      w="100%"
                      h={{ base: '210px', lg: '300px' }}
                      objectFit="cover"
                      src={`/images/art/${props.id}/${props.id}-${i + 1}.jpg`}
                      fallback={
                        <Skeleton w="100%" h={{ base: '210px', lg: '300px' }} />
                      }
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Flex>
        </Flex>
        <VStack
          mt={{ base: '15px', lg: '0px' }}
          w={{ base: '100%', lg: '50%' }}
          spacing={{ base: '8px', lg: '15px' }}
          textAlign={{ base: props.reverse ? 'left' : 'right', lg: 'left' }}
          align={props.reverse ? 'flex-end' : 'flex-start'}
        >
          <Text
            px="30px"
            w={{ lg: props.reverse && '480px', xl: props.reverse && '550px' }}
            fontSize={{ base: '22px', lg: '36px' }}
            fontWeight="900"
            color="blue.600"
          >
            {props.name}
          </Text>
          <Text
            w={{ md: props.reverse && '480px', xl: props.reverse && '550px' }}
            px="30px"
            whiteSpace="pre-wrap"
            color="grey.900"
            fontSize={{ base: '14px', lg: '16px' }}
            fontWeight="700"
            textAlign={{ base: props.reverse ? 'right' : 'left', lg: 'left' }}
          >
            {props.artist}
          </Text>
          <Flex
            w="100%"
            px="30px"
            position="relative"
            justify={{
              base: props.reverse && 'flex-end',
              lg: props.reverse ? 'flex-end' : 'flex-start',
            }}
          >
            <HStack
              as={Link}
              href={props.map}
              isExternal
              pl={props.reverse && '60px'}
              py={{ base: '5px', lg: '0' }}
              w={{
                base: 'auto',
                lg: props.reverse && '480px',
                xl: props.reverse && '550px',
              }}
            >
              <Icon as={FaMapMarker} size="24px" color="yellow.700" />
              <Text color="grey.900">{props.location}</Text>
            </HStack>
            <HStack
              position="absolute"
              bottom={{ base: '10px', lg: '8px' }}
              left={{
                base: props.reverse ? '20px' : 'unset',
                lg: props.reverse ? '20px' : 'unset',
              }}
              right={{
                base: props.reverse ? 'unset' : '20px',
                lg: props.reverse ? 'unset' : '20px',
              }}
              pl={props.reverse ? '5px' : '0px'}
              spacing="10px"
            >
              {Array(...new Array(3)).map((_, i) => (
                <Box
                  key={'dot' + i}
                  w="12px"
                  h="12px"
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

          <Box px="30px" maxW={{ lg: '480px', xl: '550px' }} w="100%">
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
      </RevealFlex>
      <RevealFlex
        mt="20px"
        w="100%"
        wrap="wrap"
        align="center"
        direction={{ base: 'row', lg: props.reverse ? 'row-reverse' : 'row' }}
      >
        <Flex
          w={{ base: '100%', lg: '50%' }}
          px={{ base: '30px', lg: props.reverse ? '10%' : '0%' }}
          pl={{ base: '30px', lg: props.reverse ? '0%' : '10%' }}
          justify="center"
        >
          <Image w={{ base: '100%', lg: '450px' }} src={props.avatar} />
        </Flex>
        <Flex maxW={{ lg: '480px', xl: '550px' }} w="100%">
          <Text
            color="grey.900"
            textAlign="left"
            px="30px"
            pt="12px"
            w={{ lg: props.reverse && '480px', xl: props.reverse && '550px' }}
          >
            {props.intro}
          </Text>
        </Flex>
      </RevealFlex>
    </>
  );
};

export default ArtListItem;
