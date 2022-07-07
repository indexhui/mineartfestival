import { useRef } from 'react';
import { Flex, Box, Icon, AspectRatio, Text } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { MdArrowRight, MdArrowLeft } from 'react-icons/md';
import 'swiper/css';

const videoList = [
  '8AM0ds5_h1c',
  'KCXenxAYI6I',
  'fk3Z-dyUwSI',
  'UnwCh6iSIk4',
  'DsThR-OXkQ4',
  'kgkWyMmfZTA',
  '-ZiZW3TS450',
  'ZM3mUMuzRhY',
  'NBpojtM3tdc',
  'qIWldm1L09A',
  'ECC5107nFXI',
];

const VideoSwipe = props => {
  const swiperRef = useRef();
  return (
    <>
      {/* lg */}
      <Flex
        bg="#193851"
        w="100%"
        py="20px"
        px="80px"
        position="relative"
        display={{ base: 'none', lg: 'flex' }}
      >
        <Flex
          zIndex="10"
          cursor="pointer"
          top="50%"
          transform={`translateY(-50%)`}
          right="31.5%"
          position="absolute"
          onClick={() => swiperRef.current.slideNext()}
          rounded="none"
          w="28px"
          h="45px"
          bg="grey.300"
          justify="center"
          align="center"
        >
          <Icon as={MdArrowRight} w="32px" h="32px" />
        </Flex>
        <Flex
          top="50%"
          transform={`translateY(-50%)`}
          zIndex="5"
          left="31.5%"
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
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          speed={1000}
          // modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          slidesPerView={3}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {videoList.map((item, index) => (
            <SwiperSlide key={item}>
              {({ isActive }) => (
                <Box
                  w="100%"
                  // h={{ base: '200px', lg: '380px' }}
                  // w={isActive ? '650px' : '250px'}
                  // transform="scale(0.3)"
                  zIndex={isActive ? '5' : '0'}
                  // transform={isActive ? 'scale(1)' : 'scale(0.7)'}
                  // bg={isActive ? 'grey.500' : 'grey.800'}
                >
                  <AspectRatio
                    border="1px solid #193851"
                    w="100%"
                    ratio={16 / 9}
                    transform={isActive ? 'scale(1)' : 'scale(0.7)'}
                  >
                    <iframe
                      title={item}
                      src={'https://www.youtube.com/embed/' + item}
                      allowFullScreen
                    />
                  </AspectRatio>
                  <Text fontSize="10px" color="#193851"></Text>
                </Box>
              )}
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
          {({ isActive }) => (
            <Box
              w="100%"
              h={{ base: '200px', lg: '380px' }}
              // w={isActive ? '650px' : '250px'}
              // transform="scale(0.3)"
              zIndex={isActive ? '5' : '0'}
              transform={isActive ? 'scale(1)' : 'scale(0.7)'}
              bg={isActive ? 'blue.500' : 'red.500'}
            >
              w
            </Box>
          )}
        </SwiperSlide> */}
        </Swiper>
      </Flex>
      {/* sm */}
      <Flex
        display={{ base: 'flex', lg: 'none' }}
        bg="#193851"
        w="100%"
        py="20px"
        position="relative"
      >
        <Swiper
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          speed={1000}
          // modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          slidesPerView={1.2}
          centeredSlides={true}
        >
          {videoList.map((item, index) => (
            <SwiperSlide key={item}>
              <Box w="100%" minH="200px">
                <AspectRatio
                  border="1px solid #193851"
                  w="100%"
                  bg="grey.900"
                  ratio={16 / 9}
                >
                  <iframe
                    title={item}
                    src={'https://www.youtube.com/embed/' + item}
                  />
                </AspectRatio>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </>
  );
};

export default VideoSwipe;
