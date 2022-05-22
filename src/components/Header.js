import { Flex, Link, Image, HStack, StackDivider } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import logo from 'assets/images/logo.svg';

const navList = [
  {
    name: '關於礦山藝術季',
    link: '/about',
  },
  {
    name: '礦山事務所',
    link: '/jinguashi-mining-bureau',
  },
  {
    name: '小山舞台',
    link: '/stages',
  },
  {
    name: '山人旅行社',
    link: '/traveler',
  },
  {
    name: '周邊夥伴',
    link: '/partner',
  },
  {
    name: '黃金博物館官網',
    link: 'https://www.gep.ntpc.gov.tw/',
    isExternal: true,
  },
];

const HeaderLink = props => {
  const { name, link, isExternal } = props;

  if (isExternal) {
    <Link>{name}</Link>;
  }

  return (
    <Link
      color="blue.600"
      fontSize={{ lg: '14px', xl: '16px' }}
      as={NavLink}
      end
      to={link}
      _activeLink={{ fontWeight: 'bold' }}
    >
      {name}
    </Link>
  );
};

const HeaderNav = () => {
  return (
    <HStack
      display={{ base: 'none', lg: 'flex' }}
      spacing={{ lg: '12px', xl: '32px' }}
      divider={<StackDivider borderColor="blue.600" />}
    >
      {navList.map(item => (
        <HeaderLink key={item.link} {...item} />
      ))}
    </HStack>
  );
};

const Header = () => {
  return (
    <Flex
      position="sticky"
      top="0"
      h="100px"
      w="100%"
      bg="white"
      zIndex="20"
      align="center"
      px="80px"
      shadow="md"
      justifyContent="space-between"
    >
      <NavLink to="/">
        <Image src={logo} h="65px" />
      </NavLink>
      <HeaderNav />
    </Flex>
  );
};

export default Header;
