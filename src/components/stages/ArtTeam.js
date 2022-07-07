import { Flex, Heading, Text, VStack, Skeleton, Image } from '@chakra-ui/react';

import useCsv from 'hooks/useCsv';
import memberCsv from 'assets/csv/artMember.csv';

import Title from 'components/Title';

const ArtMember = props => {
  const { order, avatar, title, sign, content } = props;
  let space = '60%';
  if (order % 3 === 1) {
    space = '55%';
  }
  if (order % 3 === 2) {
    space = '65%';
  }
  return (
    <Flex w="100%" bg="black" justify="center">
      <Flex
        w={{ base: '250px', lg: '100%' }}
        mb="80px"
        direction={{ base: 'column', lg: 'row' }}
        justify={{ base: 'center', lg: 'flex-end' }}
        align={{ base: 'center', lg: 'flex-start' }}
      >
        <Flex
          px={{ base: '0px', lg: '14px' }}
          pb={{ base: '0px', lg: '60px' }}
          bg="linear-gradient(90deg, #7C8DC6 0%, #7487C3 28%, #5D78BA 72.01%, #4B6CB3 100.01%)"
        >
          <Image w={{ base: '205px', lg: '250px' }} src={avatar} />
        </Flex>
        <Flex
          w={{ base: '100%', lg: space }}
          borderBottom="1px solid white"
          direction="column"
          ml={{ base: '0', lg: '45px' }}
        >
          <Text
            fontWeight="900"
            display={{ base: 'none', lg: 'block' }}
            fontSize={{ base: '18px', lg: '24px' }}
            fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
          >
            {title}
          </Text>
          <Image mt="30px" w="360px" src={sign} />
          <Text
            display={{ base: 'block', lg: 'none' }}
            textAlign="center"
            fontSize={{ base: '18px', lg: '24px' }}
            fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
          >
            {title}
          </Text>
          <Text
            w={{ base: '100%', lg: '60%' }}
            pt="30px"
            pb="30px"
            whiteSpace="pre-wrap"
          >
            {content}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

const ArtTeam = () => {
  const { data: memberData } = useCsv(memberCsv);
  return (
    <Flex
      id="artTeam"
      direction="column"
      bg="black"
      color="white"
      py={{ base: '40px', lg: '80px' }}
      align="center"
    >
      <Title mb={{ base: '16px', lg: '90px' }}>藝術團隊</Title>
      {memberData.map((member, index) => (
        <ArtMember key={'member' + index} order={index} {...member} />
      ))}
    </Flex>
  );
};

export default ArtTeam;
