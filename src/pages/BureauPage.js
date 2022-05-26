import {
  Flex,
  Link,
  Image,
  AspectRatio,
  Text,
  Grid,
  GridItem,
  HStack,
} from '@chakra-ui/react';

import Banner from 'components/Banner';
import PageMotion from 'components/PageMotion';
import ArtCenter from 'components/art/ArtCenter';
import useCsv from 'hooks/useCsv';
import artCsv from 'assets/csv/art.csv';
import ArtListItem from 'components/art/ArtListItem';

import bureauBanner from 'assets/images/bureauPage/bureauBanner.jpg';
import map from 'assets/images/bureauPage/map.jpg';
import artFestivalLogo from 'assets/images/bureauPage/artFestivalLogo.svg';

export function BureauPage() {
  const { data: artData } = useCsv(artCsv);
  const artList = artData.slice(1);
  return (
    <PageMotion align="center">
      <Banner
        backgroundImage={bureauBanner}
        title="礦山事務所"
        subtitle="地景藝術"
      />
      <Image
        mt={{ base: '16px', lg: '60px' }}
        mb={{ base: '16px', lg: '36px' }}
        src={artFestivalLogo}
      />
      <Flex px={{ base: '30px', lg: '0' }} w={{ base: '100%', lg: '1060px' }}>
        <AspectRatio w="100%" ratio={1060 / 680}>
          <Flex bgImage={`url('${map}')`} bgSize="cover">
            <Flex
              w={{ base: '16px', lg: '45px' }}
              h={{ base: '16px', lg: '45px' }}
              rounded="full"
              align="center"
              justify="center"
              position="absolute"
              border="1px solid white"
              bgColor="yellow.500"
              left="6%"
              top="36%"
            >
              <Text
                color="blue.500"
                mt="-1px"
                fontFamily="Roboto"
                fontWeight="700"
                fontSize={{ base: '10px', lg: '32px' }}
                lineHeight={{ base: '10px', lg: '32px' }}
                letterSpacing="0"
              >
                1
              </Text>
            </Flex>
          </Flex>
        </AspectRatio>
      </Flex>
      <Flex
        mt="20px"
        px={{ base: '30px', lg: '0' }}
        w={{ base: '100%', lg: '1060px' }}
      >
        <Grid
          w="100%"
          gap="20px"
          templateRows="repeat(3, 1fr)"
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        >
          {artData.map((art, i) => (
            <GridItem
              key={art.id}
              area={{
                lg: `${(i + 1) % 3} / ${i <= 2 ? 1 : 2} / ${
                  ((i + 1) % 3) + 1
                } /${i <= 2 ? 2 : 4}`,
              }}
            >
              <HStack as={Link} href={'#' + art.id}>
                <Flex
                  w="45px"
                  h="45px"
                  bg="yellow.500"
                  color="blue.500"
                  rounded="full"
                  align="center"
                  justify="center"
                >
                  <Text fontSize="32px" letterSpacing="0" fontFamily="Roboto">
                    {i + 1}
                  </Text>
                </Flex>
                <Text color="grey.900" fontSize="20px" fontWeight="700">
                  {art.name}
                </Text>
              </HStack>
            </GridItem>
          ))}
        </Grid>
      </Flex>

      {/* {Array(...new Array(+test[0]?.image || 0)).map((_, i) => (
        <Image key={'text' + i} src={`/images/store/store0${i}.jpg`} />
      ))} */}

      <ArtCenter {...artData[0]} />
      {artList.map((art, i) => (
        <ArtListItem key={art.id} {...art} reverse={i % 2 !== 0} />
      ))}
      {/* <ArtListItem {...artData[1]} /> */}
    </PageMotion>
  );
}
