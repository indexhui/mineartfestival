import { Flex, Image, Stack, VStack, Text, Heading } from '@chakra-ui/react';
import RevealFlex from 'components/RevealFlex';
import Badge from 'components/Badge';

import view01 from 'assets/images/homePage/view01.jpg';
import view02 from 'assets/images/homePage/view02.jpg';
import view03 from 'assets/images/homePage/view03.jpg';

import introBg from 'assets/images/homePage/introBg.jpg';

const viewsList = [
  {
    id: 'view01',
    name: '金瓜石',
    img: view01,
  },
  { id: 'view02', name: '水湳洞', img: view02 },
  { id: 'view03', name: '猴硐', img: view03 },
];

const Views = () => {
  return (
    <Stack
      direction={{ sm: 'column', lg: 'row' }}
      spacing="60px"
      mt="35px"
      zIndex="1"
    >
      {viewsList.map((view, index) => (
        <RevealFlex key={view.id} order={index}>
          <VStack spacing="16px">
            <Image
              w="240px"
              h="240px"
              rounded="full"
              src={view.img}
              shadow="xl"
            />
            <Heading fontSize="24px" color="grey.700">
              {view.name}
            </Heading>
          </VStack>
        </RevealFlex>
      ))}
    </Stack>
  );
};

const Intro = () => {
  return (
    <Flex w="100%" direction="column" align="center">
      <Badge h="255px">青 春 山 海 線</Badge>
      <RevealFlex>
        <Text
          whiteSpace="pre-wrap"
          textAlign="center"
          fontSize="24px"
          lineHeight="35px"
          letterSpacing=".15em"
          color="grey.700"
          mt="35px"
        >
          {`走進礦山\n看見 金銅煤的璀璨美麗`}
        </Text>
      </RevealFlex>
      <Views />
      <Flex
        mt="-100px"
        w="100%"
        h="400px"
        bgImage={`url('${introBg}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        borderBottom="10px"
        borderColor="yellow.500"
      ></Flex>
    </Flex>
  );
};

export default Intro;
