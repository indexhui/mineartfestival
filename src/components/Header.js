import { Flex, Link, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import logo from 'assets/images/logo.png';

const Header = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      h="100px"
      w="100%"
      bg="white"
      zIndex="10"
      align="center"
    >
      <Image src={logo} w="100px" />
      <Link as={NavLink} end to="/" _activeLink={{ fontWeight: 'bold' }}>
        home
      </Link>
      <Link as={NavLink} end to="/stages" _activeLink={{ fontWeight: 'bold' }}>
        舞台
      </Link>
    </Flex>
  );
};

export default Header;
