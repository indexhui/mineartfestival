import {
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  Link,
  Box,
  AspectRatio,
} from '@chakra-ui/react';

import RevealFlex from 'components/RevealFlex';

import { motion } from 'framer-motion';

const MotionImage = motion(Image);

const PartnerGrid = ({ partnerData }) => {
  if (partnerData.length === 0) return null;
  return (
    <Flex w="100%" justify="center">
      <Grid
        py="45px"
        px="30px"
        w="1280px"
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={{ base: '20px', lg: '30px' }}
      >
        {partnerData.map(partner => (
          <GridItem as={Link} href={partner.link} isExternal key={partner.id}>
            <RevealFlex
              position="relative"
              w="100%
              "
              justify={{ base: 'center', lg: 'flex-end' }}
              pb="6%"
              once={true}
            >
              <AspectRatio w={{ base: '100%', lg: '92%' }} ratio={1}>
                <MotionImage
                  w="100%"
                  src={partner.image}
                  whileHover={{ rotate: -4, transition: { duration: 0.6 } }}
                  shadow="lg"
                  border={{ base: '5px solid white', lg: '20px solid white' }}
                />
              </AspectRatio>
              <Flex
                justify={{ base: 'center', lg: 'flex-start' }}
                position="absolute"
                bottom="0"
                w="100%"
              >
                <Text
                  color="white"
                  textAlign="center"
                  fontSize={{ base: '13px', lg: '18px' }}
                  px={{ base: '8px', lg: '20px' }}
                  py={{ base: '5px', lg: '10px' }}
                  fontWeight="700"
                  bg="blue.600"
                >
                  {partner.name}
                </Text>
              </Flex>
            </RevealFlex>
            <RevealFlex>
              <Text
                w="100%"
                px="5px"
                fontSize={{ base: '14px', lg: '18px' }}
                fontWeight="700"
                color="grey.900"
                pt={{ base: '20px', lg: '10px' }}
                textAlign="center"
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
