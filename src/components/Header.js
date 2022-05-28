import {
  Flex,
  Link,
  Image,
  HStack,
  StackDivider,
  useDisclosure,
  VStack,
  Divider,
  Box,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
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
  const { name, link, isExternal } = props;

  if (isExternal) {
    return (
      <Link color="blue.600" fontSize={{ lg: '14px', xl: '16px' }} href={link}>
        {name}
      </Link>
    );
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

const MobileMenuLink = props => {
  const { name, link, isExternal } = props;

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
              <MobileMenuLink name="首頁" link="/" />
              <Box w="100%" h="1px" bg="grey.900"></Box>
              {navList.map(item => (
                <MobileMenuLink key={item.link} {...item} />
              ))}
            </VStack>
          </MotionFlex>
        )}
      </AnimatePresence>
    </>
  );
};

const Header = () => {
  return (
    <Flex
      position="sticky"
      top="0"
      h={{ base: '60px', lg: '100px' }}
      w="100%"
      bg="white"
      zIndex="20"
      align="center"
      px={{ base: '20px', lg: '80px' }}
      shadow="md"
      justifyContent="space-between"
    >
      <NavLink to="/">
        <Image src={logo} h={{ base: '32px', lg: '65px' }} />
      </NavLink>
      <HeaderNav />
      <MobileMenu />
    </Flex>
  );
};

export default Header;
