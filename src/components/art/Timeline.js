import { Flex, Image, Text, VStack, Box, AspectRatio } from '@chakra-ui/react';

import timeline from 'assets/images/bureauPage/timeline.png';
import time01 from 'assets/images/bureauPage/time/time01.jpg';
import time02 from 'assets/images/bureauPage/time/time02.jpg';
import time03 from 'assets/images/bureauPage/time/time03.jpg';
import time04 from 'assets/images/bureauPage/time/time04.jpg';
import time05 from 'assets/images/bureauPage/time/time05.jpg';
import time06 from 'assets/images/bureauPage/time/time06.jpg';
import land from 'assets/images/bureauPage/land.png';
import rock01 from 'assets/images/bureauPage/rock01.svg';
import rock02 from 'assets/images/bureauPage/rock02.svg';

const timeList = [
  {
    time: '四月',
    event: [
      {
        title: 'Apr.07 基地調查',
        img: time01,
      },
      {
        title: 'Apr.15 第一次居民工作會議',
        img: time02,
      },
    ],
  },
  {
    time: '五月',
    event: [
      {
        title: 'May.30 第二次居民工作會議',
        img: time03,
      },
    ],
  },
  {
    time: '六月',
    event: [
      {
        title: 'Jun.01 里民協助清理空間',
        img: time04,
      },
      {
        title: 'Jun.11 再現酒保口 藝術工作坊',
        img: time05,
      },
      {
        title: 'Jun.11 再現酒保口 居民分享會',
        img: time06,
      },
    ],
  },
];

const TimeCard = props => {
  return (
    <VStack spacing="12px">
      <Text color="blue.600" fontWeight="700" fontSize="16px">
        {props.title}
      </Text>
      <Image src={props.img} w="300px" />
    </VStack>
  );
};

const TimelineContainer = () => {
  return (
    <VStack
      display={{ base: 'flex', lg: 'none' }}
      spacing="24px"
      py="20px"
      px="20px"
    >
      <Flex bg="#DEE3F0" color="blue.600" px="12px" py="2px" fontWeight="700">
        四月
      </Flex>
      {timeList[0].event.map((item, index) => (
        <TimeCard key={item.title + index} {...item} />
      ))}
      <Flex bg="#DEE3F0" color="blue.600" px="12px" py="2px" fontWeight="700">
        五月
      </Flex>
      {timeList[1].event.map((item, index) => (
        <TimeCard key={item.title + index} {...item} />
      ))}
      <Flex bg="#DEE3F0" color="blue.600" px="12px" py="2px" fontWeight="700">
        六月
      </Flex>
      {timeList[2].event.map((item, index) => (
        <TimeCard key={item.title + index} {...item} />
      ))}
    </VStack>
  );
};

const Timeline = () => {
  return (
    <Flex direction="column" align="center">
      <Flex
        w={{ base: '168px', lg: '240px' }}
        h={{ base: '168px', lg: '240px' }}
        bg="cream.600"
        color="blue.600"
        rounded="full"
        align="center"
        justify="center"
        mb={{ base: '0', lg: '-20px' }}
        zIndex="1"
      >
        <Text fontSize={{ base: '24px', lg: '32px' }} fontWeight="900">
          2022
          <br />
          共農計畫
          <br />
          執行日記
        </Text>
      </Flex>
      <TimelineContainer />
      <Image display={{ base: 'none', lg: 'block' }} w="800px" src={timeline} />
      <Flex
        w={{ base: '168px', lg: '240px' }}
        h={{ base: '168px', lg: '240px' }}
        bg="cream.600"
        color="blue.600"
        rounded="full"
        align="center"
        justify="center"
        mt={{ base: '0', lg: '-20px' }}
        zIndex="1"
        position="relative"
      >
        <Image
          w={{ base: '72px', lg: '122px' }}
          position="absolute"
          src={rock01}
          left="-35%"
          bottom="-10px"
        />
        <Image
          w={{ base: '120px', lg: '186px' }}
          position="absolute"
          src={rock02}
          right="-48%"
          bottom="-10px"
        />
        <Text fontSize={{ base: '24px', lg: '32px' }} fontWeight="900">
          礦石結晶
          <br />
          產出中…
        </Text>
      </Flex>
      <Box w="100%" mt="20px">
        <AspectRatio w="100%" ratio={1440 / 415}>
          <Image src={land} w="100%" />
        </AspectRatio>
      </Box>
    </Flex>
  );
};

export default Timeline;

// bgImage={`url('${land}')`}
