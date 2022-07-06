import { Flex, Text, AspectRatio, Image, Box } from '@chakra-ui/react';
import ArtTeam from 'components/stages/ArtTeam';
import ShowInfo from 'components/stages/ShowInfo';
import StagesGrid from 'components/stages/StagesGrid';

const ShowDetailMenu = () => {
  return (
    <Flex
      px="4px"
      minH="24px"
      position="sticky"
      top="10px"
      pt="60px"
      w="30px"
      justify="center"
    >
      <Flex bg="yellow.600" w="40px">
        hi
      </Flex>
    </Flex>
  );
};

const ShowDetail = () => {
  return (
    <Flex direction="column" position="relative">
      <Box
        display={{ base: 'block', lg: 'none' }}
        position="absolute"
        left="0"
        top="0"
        h="100%"
      >
        <ShowDetailMenu />
      </Box>
      {/* <ShowDetailMenu /> */}
      <ArtTeam />
      <ShowInfo />
      <StagesGrid />
    </Flex>
  );
};

export default ShowDetail;
