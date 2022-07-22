import { useRef } from 'react';
import { Flex, Box, Icon, AspectRatio, Image } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import 'swiper/css';

import stars from 'assets/images/homePage/stars.png';

const ShowSwiper = props => {
  const swiperRef = useRef();
  return (
    <>
      {/* lg */}
      <Flex
        bg="#152128"
        bgImage={stars}
        w="100%"
        py="80px"
        px={{ base: '0', lg: '80px' }}
        position="relative"
      >
        <Flex
          display={{ base: 'none', lg: 'flex' }}
          zIndex="10"
          cursor="pointer"
          top="50%"
          transform={`translateY(-50%)`}
          right="31%"
          position="absolute"
          onClick={() => swiperRef.current.slideNext()}
          rounded="full"
          w="40px"
          h="40px"
          bg="grey.500"
          justify="center"
          align="center"
        >
          <ChevronRightIcon w="24px" h="24px" />
        </Flex>
        <Flex
          display={{ base: 'none', lg: 'flex' }}
          top="50%"
          transform={`translateY(-50%)`}
          zIndex="5"
          left="31%"
          position="absolute"
          onClick={() => swiperRef.current.slidePrev()}
          rounded="full"
          w="40px"
          h="40px"
          bg="grey.500"
          justify="center"
          align="center"
          cursor="pointer"
        >
          <ChevronLeftIcon w="24px" h="24px" />
        </Flex>
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
          {Array(...new Array(16)).map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <Box w="100%" zIndex={isActive ? '5' : '0'}>
                  <Image
                    w="650px"
                    h="400px"
                    objectFit="cover"
                    transform={{
                      base: '',
                      lg: isActive ? 'scale(1.2)' : 'scale(0.7)',
                    }}
                    src={`/images/show/show${index + 1}.jpg`}
                  />
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </>
  );
};

export default ShowSwiper;
