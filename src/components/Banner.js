import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
const Banner = props => {
  const { backgroundImage, title, subtitle } = props;
  return (
    <Flex w="100%" justify="center">
      <Flex
        w="85%"
        padding="80px"
        h="480px"
        bgImage={`url('${backgroundImage}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <VStack align="flex-start">
          <Text color="grey.700" fontSize="24px" fontWeight="700">
            {subtitle}
          </Text>
          <Heading color="blue.700" fontSize="72px" fontWeight="700">
            {title}
          </Heading>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Banner;
