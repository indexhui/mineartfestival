import { Flex, Link, Icon, HStack, Text, Image, Stack } from '@chakra-ui/react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import logo from 'assets/images/logo.svg';

const Footer = () => {
  return (
    <Flex
      w="100%"
      align="center"
      direction="column"
      pt="50px"
      fontSize="14px"
      px="30px"
      textAlign="center"
    >
      <Image src={logo} w="155px" />
      <HStack color="blue.600" spacing="24px" py="20px">
        <Link href="https://www.facebook.com/goldmuseum" isExternal>
          <Icon as={FaFacebook} w="24px" h="24px" />
        </Link>
        <Link href="https://www.instagram.com/goldmuseum.tw/" isExternal>
          <Icon as={AiFillInstagram} w="30px" h="30px" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UC8fO8tlnSiZC-iZ4eVKbqUg"
          isExternal
        >
          <Icon as={FaYoutube} w="30px" h="30px" />
        </Link>
      </HStack>

      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '2px', lg: '15px' }}
          pr={{ base: '0', lg: '30px' }}
          pb={{ base: '20px', lg: '0' }}
        >
          <Text color="blue.500">主辦單位</Text>
          <Text color="grey.900" fontWeight="500">
            新北市政府
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '2px', lg: '15px' }}
        >
          <Text color="blue.500">承辦單位</Text>
          <Flex
            color="grey.900"
            letterSpacing=".1em"
            lineHeight="20px"
            wrap="wrap"
            justify="center"
          >
            <Text px="5px" fontWeight="500">
              新北市文化局
            </Text>
            <Text px="5px" fontWeight="500">
              新北市文化基金會
            </Text>
            <Text px="5px" fontWeight="500">
              新北市立黃金博物館
            </Text>
          </Flex>
        </Stack>
      </Flex>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '2px', lg: '15px' }}
        pt="20px"
      >
        <Text color="blue.500">特別感謝 </Text>
        <Flex
          color="grey.900"
          letterSpacing=".1em"
          lineHeight="20px"
          wrap="wrap"
          justify="center"
        >
          <Text px="5px" fontWeight="500">
            新北市猴硐礦工文史協會
          </Text>
          <Text px="5px" fontWeight="500">
            新平溪煤礦博物園區
          </Text>
          <Text px="5px" fontWeight="500">
            新北市民宿發展協會
          </Text>
        </Flex>
      </Stack>
      <Text py="20px" fontSize="12px" color="grey.900">
        © 2022 礦山藝術季 Mine Art Festival All Rights Reserved. Site by
        Shockdemo.
      </Text>
    </Flex>
  );
};

export default Footer;
