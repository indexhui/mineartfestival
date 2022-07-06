import { Flex, Heading, Text, VStack, Skeleton } from '@chakra-ui/react';
const Banner = props => {
  const { backgroundImage, title, subtitle, titleColor, mb } = props;
  return (
    <Flex
      w="100%"
      justify="center"
      zIndex="2"
      position="relative"
      h={{ base: '260px', lg: '480px' }}
      mb={mb}
    >
      <Skeleton
        position="absolute"
        zIndex="-1"
        w={{ base: '100%', md: '85%' }}
        h={{ base: '260px', lg: '480px' }}
      ></Skeleton>
      <Flex
        w={{ base: '100%', md: '85%' }}
        padding={{ base: '40px', lg: '80px' }}
        h={{ base: '260px', lg: '480px' }}
        bgImage={`url('${backgroundImage}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <VStack align="flex-start" w="100%">
          <Text
            w="100%"
            textAlign="left"
            color={titleColor || 'grey.700'}
            fontSize={{ base: '14px', lg: '24px' }}
            fontWeight="700"
          >
            {subtitle}
          </Text>
          <Heading
            w="100%"
            textAlign="left"
            color={titleColor || 'blue.700'}
            fontSize={{ base: '40px ', lg: '70px' }}
            fontWeight="700"
          >
            {title}
          </Heading>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Banner;
