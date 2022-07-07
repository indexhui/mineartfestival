import { Flex, Image, Text } from '@chakra-ui/react';

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
      {/* <Image w={{ base: '160px', lg: '270px' }} src={slogan} /> */}
      <Text
        border="1px solid white"
        p={{ base: '16px', lg: '24px' }}
        fontWeight="900"
        color="white"
        fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
        fontSize={{ base: '30px', lg: '48px' }}
      >
        鎏金時尚夜
      </Text>
    </Flex>
  );
};

export default Slogan;
