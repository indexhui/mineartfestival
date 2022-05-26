import {
  Flex,
  Text,
  Image,
  HStack,
  VStack,
  Box,
  Icon,
  propNames,
} from '@chakra-ui/react';
import { FaMapMarker } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ArtListItem = props => {
  return (
    <Flex w="100%" wrap="wrap">
      <Flex w={{ base: '100%', lg: '50%' }} pl="10%">
        <Flex w="100%" bg="red" h="20px"></Flex>
      </Flex>
      <VStack w={{ base: '100%', lg: '50%' }} spacing="15px" align="flex-start">
        <Text px="30px">{props.name} </Text>
        <Text px="30px" whiteSpace="pre-wrap" textAlign="left">
          {props.artist}
        </Text>
        <Flex w="100%" px="30px" justify="space-between">
          <HStack py={{ base: '10px', lg: '0' }}>
            <Icon as={FaMapMarker} size="24px" color="yellow.700" />
            <Text color="grey.900">{props.location}</Text>
          </HStack>
          <HStack pl="25px" spacing="25px">
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
        <Flex w="100%" pl="30px">
          <Box h="2px" w="100%" bgColor="blue.500"></Box>
        </Flex>
        <Text px="30px">{props.location}</Text>

        <Text px="30px" maxW="500px" textAlign="left">
          {props.content}
        </Text>
      </VStack>
    </Flex>
  );
};

export default ArtListItem;
