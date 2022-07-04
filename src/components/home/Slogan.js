import { Flex, Image } from '@chakra-ui/react';

import slogan from 'assets/images/homePage/slogan.svg';
import sloganBg from 'assets/images/homePage/sloganBg.jpg';

const Slogan = () => {
  return (
    <Flex
      h={{ base: '300px', lg: '700px' }}
      bgImage={`url(${sloganBg})`}
      bgSize="cover"
      bgPosition="top center"
      justify="center"
      align="center"
    >
      <Image w={{ base: '160px', lg: '270px' }} src={slogan} />
    </Flex>
  );
};

export default Slogan;
