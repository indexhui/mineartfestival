import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
const Banner = props => {
  const { backgroundImage, title, subtitle, titleColor } = props;
  return (
    <Flex w="100%" justify="center" zIndex="1">
      <Flex
        w={{ base: '100%', md: '85%' }}
        padding="80px"
        h={{ base: '260px', lg: '480px' }}
        bgImage={`url('${backgroundImage}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <VStack align="flex-start">
          <Text
            color={titleColor || 'grey.700'}
            fontSize={{ base: '14px', lg: '24px' }}
            fontWeight="700"
          >
            {subtitle}
          </Text>
          <Heading
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
