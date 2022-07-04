import {
  Flex,
  Link,
  Image,
  HStack,
  StackDivider,
  useDisclosure,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import logo from 'assets/images/logo.svg';
import menu from 'assets/images/menu.svg';
import close from 'assets/images/close.svg';

const MotionFlex = motion(Flex);

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
  const { name, link, isExternal, location } = props;

  if (isExternal) {
    return (
      <Link
        color="blue.600"
        py="8px"
        fontSize={{ lg: '14px', xl: '16px' }}
        href={link}
        isExternal
      >
        {name}
      </Link>
    );
  }

  return (
    <RouterLink to={link}>
      <Text
        fontWeight={location.pathname === link ? 'bold' : 'normal'}
        py="8px"
        outline="none"
        color="blue.600"
        _hover={{ fontWeight: 'bold' }}
        fontSize={{ lg: '14px', xl: '16px' }}
      >
        {name}
      </Text>
    </RouterLink>
  );
};

const HeaderNav = props => {
  const { location } = props;
  return (
    <HStack
      align="center"
      display={{ base: 'none', lg: 'flex' }}
      spacing={{ lg: '12px', xl: '20px', '2xl': '32px' }}
      divider={
        <StackDivider
          style={{ marginTop: '8px', marginBottom: '8px' }}
          borderColor="blue.600"
        />
      }
    >
      {navList.map(item => (
        <HeaderLink key={item.link} location={location} {...item} />
      ))}
    </HStack>
  );
};

const MobileMenuLink = props => {
  const { name, link, isExternal, onClose } = props;

  if (isExternal) {
    return (
      <Link
        color="blue.600"
        fontSize={{ lg: '14px', xl: '16px' }}
        isExternal
        href={link}
      >
        {name}
      </Link>
    );
  }

  return (
    <Link
      onClick={onClose}
      color="blue.600"
      fontSize={{ lg: '14px', xl: '16px' }}
      as={RouterLink}
      to={link}
      _activeLink={{ fontWeight: 'bold' }}
    >
      {name}
    </Link>
  );
};
const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        onClick={onOpen}
        src={menu}
        display={{ base: 'block', lg: 'none' }}
        w="26px"
      />
      <AnimatePresence>
        {isOpen && (
          <MotionFlex
            initial={{ x: '150%', opacity: 1 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5 },
            }}
            exit={{
              x: '150%',
              opacity: 0,
              transition: { duration: 0.55 },
            }}
            top="0"
            right="0"
            display={{ base: 'flex', lg: 'none' }}
            position="fixed"
            w="180px"
            h="100%"
            bg="#F5F7FF"
            pt="50px"
            px="20px"
          >
            <Image
              onClick={onClose}
              src={close}
              w="27px"
              position="absolute"
              right="16px"
              top="16px"
            />
            <VStack align="flex-start" w="100%" spacing="15px">
              <Box onClick={onClose}>
                <MobileMenuLink onClose={onClose} name="首頁" link="/" />
              </Box>
              <Box w="100%" h="1px" bg="grey.900"></Box>
              {navList.map(item => (
                <Box key={item.link} onClick={onClose}>
                  <MobileMenuLink {...item} />
                </Box>
              ))}
            </VStack>
          </MotionFlex>
        )}
      </AnimatePresence>
    </>
  );
};

const Header = () => {
  const location = useLocation();
  const handleClickHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Flex
      position="sticky"
      top="0"
      h={{ base: '60px', lg: '80px' }}
      w="100%"
      bg="white"
      zIndex="20"
      align="center"
      px={{ base: '20px', lg: '80px' }}
      shadow="md"
      justifyContent="space-between"
    >
      <RouterLink to="/" onClick={() => handleClickHome()}>
        <Image
          onClick={handleClickHome}
          src={logo}
          h={{ base: '32px', lg: '50px' }}
        />
      </RouterLink>
      <HeaderNav location={location} />
      <MobileMenu />
    </Flex>
  );
};

export default Header;
