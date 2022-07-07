import {
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  Link,
  AspectRatio,
} from '@chakra-ui/react';

import RevealFlex from 'components/RevealFlex';

import { motion } from 'framer-motion';
import loadingBg from 'assets/images/loadingBg.svg';

const MotionImage = motion(Image);

const PartnerGrid = ({ partnerData }) => {
  if (partnerData.length === 0) return <Flex w="100%" minH="800px"></Flex>;
  return (
    <Flex w="100%" minH="800px" justify="center">
      <Grid
        py="45px"
        px="30px"
        w="1280px"
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={{ base: '20px', lg: '20px' }}
      >
        {partnerData.map(partner => (
          <GridItem as={Link} href={partner.link} isExternal key={partner.id}>
            <RevealFlex
              position="relative"
              w="100%
              "
              justify={{ base: 'center', lg: 'flex-end' }}
              // pb="6%"
              once={true}
              direction="column"
              whileHover={{ rotate: -4, transition: { duration: 0.6 } }}
            >
              <AspectRatio w={{ base: '100%', lg: '92%' }} ratio={300 / 240}>
                <MotionImage
                  fallbackSrc={loadingBg}
                  w="100%"
                  bg="gray.300"
                  src={partner.image}
                  // whileHover={{ rotate: -4, transition: { duration: 0.6 } }}
                  // shadow="lg"
                  // border={{ base: '5px solid white', lg: '20px solid white' }}
                />
              </AspectRatio>
              <Flex
                justify={{ base: 'flex-star', lg: 'flex-start' }}
                // position="absolute"
                bottom="0"
                w="100%"
              >
                <Text
                  color="grey.900"
                  textAlign="center"
                  fontSize={{ base: '16px', lg: '18px' }}
                  // px={{ base: '8px', lg: '20px' }}
                  py={{ base: '5px', lg: '8px' }}
                  fontWeight="700"
                  // bg="blue.600"
                >
                  {partner.name}
                </Text>
              </Flex>
            </RevealFlex>
            <RevealFlex>
              <Text
                w="100%"
                fontSize={{ base: '14px', lg: '16px' }}
                fontWeight="400"
                color="blue.500"
                pt={{ base: '20px', lg: '18px' }}
                textAlign="left"
              >
                {partner.content}
              </Text>
            </RevealFlex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
export default PartnerGrid;
