import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Skeleton,
  Image,
} from '@chakra-ui/react';

import fireworkLgWhite from 'assets/images/homePage/fireworkLgWhite.svg';
import colorGreen from 'assets/images/stagesPage/color_green.svg';
import colorGold from 'assets/images/stagesPage/color_gold.svg';
import colorSliver from 'assets/images/stagesPage/color_silver.svg';
import routeLogoGold from 'assets/images/routeLogoGold.png';

const chromaticList = [
  {
    title: '墨綠自然',
    image: colorGreen,
  },
  {
    title: '金色礦業',
    image: colorGold,
  },
  {
    title: '銀色時光',
    image: colorSliver,
  },
];

const ColorLabel = props => {
  const { title, image } = props;
  return (
    <VStack justify="center" spacing="8px">
      <Image src={image} />
      <Text color="grey.100" fontSize={{ base: '14px', lg: '16px' }}>
        {title}
      </Text>
    </VStack>
  );
};

const Chromatic = () => {
  return (
    <Flex
      px="30px"
      bg="#070A0C"
      w="100%"
      position="relative"
      py="50px"
      direction="column"
      align="center"
      overflow="hidden"
    >
      <Image
        src={fireworkLgWhite}
        position="absolute"
        right="-125px"
        top="-125px"
      />
      <Image
        src={fireworkLgWhite}
        position="absolute"
        left="-125px"
        top="120px"
      />
      <Image w={{ base: '250px', lg: '270px' }} py="30px" src={routeLogoGold} />
      <Text
        color="white"
        fontSize={{ base: '20px', lg: '24px' }}
        textAlign="center"
      >
        讓礦脈變得柔軟
        <br />
        國際知名設計師潘怡良團隊首次以礦山為繆思
      </Text>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        pt="64px"
        w={{ base: '100%', lg: '90%' }}
        maxW="900px"
        justify="space-around"
      >
        <Flex
          fontWeight="500"
          direction="column"
          justify="space-around"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Text
            color="yellow.600"
            fontSize={{ base: '20px', lg: '24px' }}
            pb="18px"
          >
            山城色彩學
          </Text>
          <Text color="white" fontSize={{ base: '16px', lg: '18px' }}>
            是斑駁，更是斑斕，層層疊疊的豐沛文化
            <br />
            以礦業文化為底蘊，金工再現精緻山城
          </Text>
        </Flex>
        <Flex py={{ base: '36px', lg: '0' }}>
          <HStack spacing="40px">
            {chromaticList.map(item => (
              <ColorLabel key={item.title} {...item} />
            ))}
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Chromatic;
