import {
  Flex,
  Text,
  Box,
  HStack,
  Link,
  Icon,
  Image,
  VStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import roadmap from 'assets/images/bureauPage/roadmap.jpg';

import road01 from 'assets/images/bureauPage/road01.svg';
import road02 from 'assets/images/bureauPage/road02.svg';
import road03 from 'assets/images/bureauPage/road03.svg';
import road04 from 'assets/images/bureauPage/road04.svg';

const RoadList = [
  {
    img: road01,
    title: '可食地景',
    content: '諮詢專業植作物家，挑選合適種植品並搭配造景呈現美觀之可食地景',
  },
  {
    img: road02,
    title: '雨水撲滿',
    content: '因應金瓜石潮濕多雨氣候，打造雨水撲滿作為灌溉源頭',
  },
  {
    img: road03,
    title: '整理區',
    content: '以現址廢棄磚瓦等重新回收利用，將舊有廢棄物與地景全新結合',
  },
  {
    img: road04,
    title: '路徑',
    content: '打造與自然環境相仿之碎石步道，不但美觀且耐久實用',
  },
];

const RoadCard = prosp => {
  const { img, title, content } = prosp;
  return (
    <GridItem colSpan={1} w="100%">
      <VStack w="100%" spacing="14px">
        <Image w="100%" maxW="220px" src={img} />
        <Text
          w="100%"
          fontSize={{ base: '16px', lg: '24px' }}
          fontWeight="700"
          color="blue.600"
        >
          {title}
        </Text>
        <Text
          maxW="220px"
          letterSpacing=".1em"
          fontSize={{ base: '14px', lg: '16px' }}
          color="grey.900"
          textAlign="left"
        >
          {content}
        </Text>
      </VStack>
    </GridItem>
  );
};

const Roadmap = () => {
  return (
    <Flex
      w="100%"
      bg="grey.100"
      direction="column"
      align="center"
      pt={{ base: '50px', lg: '65px' }}
    >
      <Text
        mb={{ base: '20px', lg: '30px' }}
        w="100%"
        textAlign="center"
        fontWeight="900"
        fontSize={{ base: '16px', lg: '36px' }}
        color="blue.600"
      >
        長程目標藍圖
      </Text>
      <Image w={{ base: '300px', lg: '840px' }} src={roadmap} />
      <Flex
        px="30px"
        w={{ base: '100%', lg: '75%' }}
        py={{ base: '30px', lg: '60px' }}
      >
        <Grid
          w="100%"
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4,1fr)' }}
          gap="60px"
        >
          {RoadList.map((item, index) => (
            <RoadCard key={item.title} {...item} />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Roadmap;
