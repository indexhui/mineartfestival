import { useRef } from 'react';
import { Flex, Box, Icon } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { MdArrowRight, MdArrowLeft } from 'react-icons/md';
import 'swiper/css';

const VideoSwipe = () => {
  const swiperRef = useRef();
  return (
    <Flex
      bg="#193851"
      w="100%"
      py="20px"
      px="80px"
      border="1px solid red"
      position="relative"
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
        slidesPerView={1.2}
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
        <SwiperSlide>
          {({ isActive }) => (
            <Box
              // w={isActive ? '650px' : '250px'}
              // transform="scale(0.3)"
              zIndex={isActive ? '5' : '0'}
              transform={isActive ? 'scale(1.2)' : 'scale(0.7)'}
              h={{ base: '200px', lg: '400px' }}
              bg={isActive ? 'blue.500' : 'red.500'}
            ></Box>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Box
              transform={isActive ? 'scale(1.2)' : 'scale(0.7)'}
              h={{ base: '200px', lg: '400px' }}
              bg={isActive ? 'blue.500' : 'red.500'}
            >
              2
            </Box>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Box
              transform={isActive ? 'scale(1.2)' : 'scale(0.7)'}
              h={{ base: '200px', lg: '400px' }}
              bg={isActive ? 'blue.500' : 'red.500'}
            >
              3
            </Box>
          )}
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default VideoSwipe;
