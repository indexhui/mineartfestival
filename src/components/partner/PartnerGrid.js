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
        gap="30px"
      >
        {partnerData.map(partner => (
          <GridItem as={Link} href={partner.link} isExternal key={partner.id}>
            <RevealFlex
              position="relative"
              w="100%"
              justify="flex-end"
              pb="6%"
              once={true}
            >
              <AspectRatio w="92%" ratio={1}>
                <MotionImage
                  w="100%"
                  src={partner.image}
                  whileHover={{ rotate: -4, transition: { duration: 0.25 } }}
                  shadow="lg"
                  border="20px solid white"
                />
              </AspectRatio>
              <Text
                position="absolute"
                left="0"
                bottom="0"
                color="white"
                textAlign="center"
                fontSize="18px"
                px="20px"
                py="10px"
                fontWeight="700"
                bg="blue.600"
              >
                {partner.name}
              </Text>
            </RevealFlex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
export default PartnerGrid;
