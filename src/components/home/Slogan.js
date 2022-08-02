import { Flex, Button, Text } from '@chakra-ui/react';
import { polyfill, scrollIntoView } from 'seamless-scroll-polyfill';

import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

import MainButton from 'components/MainButton';
import slogan from 'assets/images/homePage/slogan.svg';
import sloganBg from 'assets/images/homePage/sloganBg.jpg';

const Slogan = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleScroll = () => {
    const element = document.getElementById('transportationInfo');
    polyfill();
    scrollIntoView(element, {
      behavior: 'smooth',
      inline: 'center',
    });
  };
  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      handleScroll();
    } else {
      navigate('/stages#t', { replace: true });
    }
  };
  return (
    <Flex
      h={{ base: '300px', lg: '700px' }}
      bgImage={`url(${sloganBg})`}
      bgSize="cover"
      bgPosition="top center"
      justify="center"
      align="center"
      direction="column"
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
      <MainButton mt="80px" onClick={() => handleHomeClick()}>
        交通資訊
      </MainButton>
    </Flex>
  );
};

export default Slogan;
