import { Flex, Text, Image, HStack, Box, Icon } from '@chakra-ui/react';
import { FaMapMarker } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ArtCenter = props => {
  return (
    <Flex
      id={props.id}
      w="100%"
      my="20px"
      mt={{ base: '24px', lg: '120px' }}
      direction="column"
      align="center"
    >
      <Flex w="100%">
        <Flex w="10%" bg="blue.500">
          <Flex
            w="100%"
            bg="white"
            borderRadius={{ base: '0 0 5px 0', lg: '0 0 15px 0px' }}
          ></Flex>
        </Flex>
        <Text
          pt={{ base: '12px', lg: '20px' }}
          pb={{ base: '2px', lg: '10px' }}
          px={{ base: '20px', lg: '50px' }}
          bg="blue.500"
          fontSize={{ base: '16px', lg: '36px' }}
          lineHeight="1"
          fontWeight="700"
          color="white"
          borderRadius={{ base: '22px 22px 0px 0px', lg: '42px 42px 0px 0px' }}
        >
          {props.name}
        </Text>
        <Flex flex="1" bg="blue.500">
          <Flex
            w="100%"
            bg="white"
            borderRadius={{ base: '0 0 0px 5px', lg: '0 0 0px 15px' }}
          >
            <HStack
              pl={{ base: '12px', lg: '25px' }}
              spacing={{ base: '12px', lg: '25px' }}
            >
              {Array(...new Array(3)).map((_, i) => (
                <Box
                  key={'dot' + i}
                  w={{ base: '12px', lg: '25px' }}
                  h={{ base: '12px', lg: '25px' }}
                  rounded="full"
                  bg="blue.500"
                ></Box>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" bg="blue.500" py="20px">
        {props.imageNumber > 0 && (
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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
            {Array(...new Array(+props.imageNumber)).map((_, i) => (
              <SwiperSlide key={'art01' + i}>
                <Image
                  objectFit="cover"
                  w="100%"
                  h="400px"
                  key={'text' + i}
                  src={`/images/art/art01/art01-0${i + 1}.jpg`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Flex>
      <Flex
        w="100%"
        py={{ base: '20px', lg: '60px' }}
        bgColor="grey.100"
        justify="center"
        borderBottom="10px solid #ffdc60"
      >
        <Flex
          wrap="wrap"
          color="grey.900"
          bgColor="grey.100"
          w={{ base: '100%', lg: '90%', xl: '1280px' }}
          px={{ base: '30px', lg: '0' }}
        >
          <Flex
            w={{ base: '100%', lg: '50%' }}
            direction="column"
            justify="space-between"
            align="flex-start"
          >
            <Text fontSize="16px" fontWeight="700">
              {props.artist}
            </Text>
            <HStack py={{ base: '10px', lg: '0' }}>
              <Icon as={FaMapMarker} size="24px" color="yellow.700" />
              <Text color="grey.900">{props.location}</Text>
            </HStack>
          </Flex>
          <Flex
            w={{ base: '100%', lg: '50%' }}
            textAlign="left"
            color="grey.900"
          >
            {props.content}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ArtCenter;
