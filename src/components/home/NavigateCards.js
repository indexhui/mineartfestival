import { useEffect, useState } from 'react';
import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@chakra-ui/react';

import view01 from 'assets/images/homePage/nav01.jpg';
import view02 from 'assets/images/homePage/nav02.jpg';
import view03 from 'assets/images/homePage/nav03.jpg';
import view04 from 'assets/images/homePage/nav04.jpg';

const MotionFlex = motion(Flex);

const navigateList = [
  {
    title: '礦山事務所',
    subTitle: '地景藝術',
    image: view01,
    link: '/jinguashi-mining-bureau',
  },
  {
    title: '小山舞台',
    subTitle: '表演藝術',
    image: view02,
    link: '/stages',
  },
  {
    title: '山人旅行社',
    subTitle: '文化行旅',
    image: view03,
    link: '/traveler',
  },
  {
    title: '周邊夥伴',
    subTitle: '',
    image: view04,
    link: '/partner',
  },
];

const NavigateCard = props => {
  const { title, subTitle, image, link } = props;
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  const variants = {
    hover: {
      scale: 1.2,
    },
  };

  const textVariants = {
    hover: {
      y: 0,
      scale: 1.2,
    },
    normal: {
      y: -80,
    },
  };

  const maskVariants = {
    hover: {
      opacity: 0.5,
    },
  };

  return (
    <MotionFlex
      whileHover="hover"
      as={Link}
      to={link}
      initial="normal"
      overflow="hidden"
      w="100%"
      h={{ base: '150px', lg: '400px' }}
      _hover={{ cursor: 'pointer' }}
      position="relative"
      align="center"
      justify="center"
    >
      {isLargerThan1280 && (
        <MotionFlex
          variants={textVariants}
          transition={{ duration: 0.5 }}
          color="white"
          direction="column"
          zIndex="2"
          align="center"
        >
          <Text fontSize="18px" fontWeight="700" letterSpacing="0.05em">
            {title}
          </Text>
          <Text fontSize="16px" letterSpacing="0.05em">
            {subTitle}
          </Text>
        </MotionFlex>
      )}
      {!isLargerThan1280 && (
        <Flex
          variants={textVariants}
          transition={{ duration: 0.5 }}
          color="white"
          direction="column"
          zIndex="2"
          align="center"
        >
          <Text fontSize="18px" fontWeight="700" letterSpacing="0.05em">
            {title}
          </Text>
          <Text fontSize="16px" letterSpacing="0.05em">
            {subTitle}
          </Text>
        </Flex>
      )}

      <MotionFlex
        variants={maskVariants}
        zIndex="1"
        w="100%"
        h="100%"
        opacity="0"
        position="absolute"
        bgColor="blue.600"
        top="0"
      ></MotionFlex>
      <MotionFlex
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        variants={variants}
        transition={{ duration: 0.5 }}
        bgImage={`url('${image}')`}
        bgSize="cover"
      />
    </MotionFlex>
  );
};

const NavigateCards = () => {
  return (
    <Grid
      templateColumns={{ sm: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
      mt="100px"
    >
      {navigateList.map(navigate => (
        <GridItem
          key={navigate.title}
          colSpan={1}
          px={{ base: '30px', lg: '0' }}
          py={{ base: '5px', lg: '0' }}
        >
          <NavigateCard {...navigate} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default NavigateCards;
