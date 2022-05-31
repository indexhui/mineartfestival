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
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { polyfill, scrollIntoView } from 'seamless-scroll-polyfill';

import Banner from 'components/Banner';
import PageMotion from 'components/PageMotion';
import ArtCenter from 'components/art/ArtCenter';
import useCsv from 'hooks/useCsv';
import artCsv from 'assets/csv/art.csv';
import ArtListItem from 'components/art/ArtListItem';

import bureauBanner from 'assets/images/bureauPage/bureauBanner.jpg';
import map from 'assets/images/bureauPage/map.jpg';
import artFestivalLogo from 'assets/images/bureauPage/artFestivalLogo.svg';

const ArtMarker = props => {
  const { number, artId, to, ...rest } = props;

  const handleScroll = id => {
    const element = document.getElementById(id);
    polyfill();
    scrollIntoView(element, {
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <Flex
      onClick={() => handleScroll(artId)}
      cursor="pointer"
      w={{ base: '16px', lg: '45px' }}
      h={{ base: '16px', lg: '45px' }}
      rounded="full"
      align="center"
      justify="center"
      position="absolute"
      border="1px solid white"
      bgColor="yellow.600"
      {...rest}
    >
      <Text
        color="blue.500"
        fontFamily="Roboto,Ariel, sans-serif"
        fontWeight="700"
        fontSize={{ base: '10px', lg: '32px' }}
        lineHeight={{ base: '10px', lg: '32px' }}
        letterSpacing="0"
      >
        {number}
      </Text>
    </Flex>
  );
};

export function BureauPage() {
  const { data: artData } = useCsv(artCsv);
  const artList = artData.slice(1);

  const handleScroll = id => {
    const element = document.getElementById(id);
    polyfill();
    scrollIntoView(element, {
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <PageMotion align="center" style={{ scrollBehavior: 'smooth' }}>
      <Banner
        backgroundImage={bureauBanner}
        title="礦山事務所"
        subtitle="地景藝術"
      />
      <Image
        w={{ base: '220px', lg: '495px' }}
        mt={{ base: '16px', lg: '60px' }}
        mb={{ base: '16px', lg: '36px' }}
        src={artFestivalLogo}
      />
      <Flex
        px={{ base: '30px', lg: '0' }}
        w={{ base: '100%', lg: '90%', xl: '1060px' }}
      >
        <AspectRatio w="100%" ratio={1060 / 680}>
          <Flex bgImage={`url('${map}')`} bgSize="cover">
            <ArtMarker number={1} artId="art01" left="6%" top="36%" />
            <ArtMarker number={2} artId="art02" right="36%" bottom="17%" />
            <ArtMarker number={3} artId="art03" right="10%" top="28%" />
            <ArtMarker number={4} artId="art04" right="34%" top="34%" />
            <ArtMarker number={5} artId="art05" right="37%" top="45%" />
            <ArtMarker number={6} artId="art06" left="34%" top="51%" />
          </Flex>
        </AspectRatio>
      </Flex>
      <Flex
        justify={{ base: 'flex-start', lg: 'flex-end' }}
        px={{ base: '30px', lg: '0' }}
        w={{ base: '100%', lg: '90%', xl: '1060px' }}
      >
        <HStack pt="12px" color="grey.900">
          <ExternalLinkIcon />
          <Text fontSize={{ base: '14px', lg: '16px' }}>
            點選這裡，進入礦山藝術季Google地圖
          </Text>
        </HStack>
      </Flex>
      <Flex
        mt="20px"
        px={{ base: '30px', lg: '0' }}
        w={{ base: '100%', lg: '90%', xl: '1060px' }}
      >
        <Grid
          w="100%"
          gap={{ base: '10px', lg: '20px' }}
          templateRows="repeat(3, 1fr)"
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        >
          {artData.map((art, i) => (
            <GridItem
              key={art.id}
              cursor="pointer"
              onClick={() => handleScroll(art.id)}
              area={{
                lg: `${(i + 1) % 3} / ${i <= 2 ? 1 : 2} / ${
                  ((i + 1) % 3) + 1
                } /${i <= 2 ? 2 : 4}`,
              }}
            >
              <HStack spacing="15px">
                <Flex
                  w={{ base: '30px', lg: '45px' }}
                  h={{ base: '30px', lg: '45px' }}
                  bg="yellow.600"
                  color="blue.500"
                  rounded="full"
                  align="center"
                  justify="center"
                >
                  <Text
                    fontSize={{ base: '20px', lg: '32px' }}
                    letterSpacing="0"
                    fontFamily="Roboto,Ariel, sans-serif"
                  >
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

      <ArtCenter {...artData[0]} />
      {artList.map((art, i) => (
        <ArtListItem key={art.id} {...art} reverse={i % 2 !== 0} />
      ))}
    </PageMotion>
  );
}
