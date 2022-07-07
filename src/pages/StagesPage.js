import { motion } from 'framer-motion';
import { Flex, Text, AspectRatio, Image } from '@chakra-ui/react';

import Banner from 'components/Banner';
import Show from 'components/Show';
import ShowDetail from 'components/stages/ShowDetail';

import stageBanner from 'assets/images/stagesPage/stageBanner.jpg';
import StagesGrid from 'components/stages/StagesGrid';
import RevealFlex from 'components/RevealFlex';
import Slogan from 'components/home/Slogan';
import closingBg from 'assets/images/closingBg.jpg';
import ClosingTitle from 'assets/images/closingTitle.svg';
import stageClosing01 from 'assets/images/stagesPage/stage-closing01.jpg';
import stageClosing02 from 'assets/images/stagesPage/stage-closing02.jpg';
import stageClosing03 from 'assets/images/stagesPage/stage-closing03.jpg';
import Chromatic from 'components/stages/Chromatic';
import TheAtre from 'components/TheAtre';

const MotionFlex = motion(Flex);

const ClosingList = [
  {
    title: '浩瀚',
    content: '絕美的文化資產',
    image: stageClosing01,
  },
  {
    title: '創新',
    content: '時尚藝術帶動礦山想像',
    image: stageClosing02,
  },
  {
    title: '共好',
    content: '表演藝術共鳴山城',
    image: stageClosing03,
  },
];

const ClosingCard = props => {
  const { title, content, image, order } = props;
  return (
    <RevealFlex
      direction="column"
      justify="center"
      align="center"
      order={order}
      pb={{ base: '32px', lg: '0' }}
    >
      <Text color="white" fontSize="24px">
        {title}
      </Text>
      <Image
        w="300px"
        h="200px"
        mt="10px"
        mb="15px"
        src={image}
        rounded="45px"
      />
      <Text color="white" fontSize="16px">
        {content}
      </Text>
    </RevealFlex>
  );
};

export function StagesPage() {
  const pageMotion = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 0.2 } },
  };
  return (
    <MotionFlex
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageMotion}
      bg="white"
      w="100%"
      direction="column"
    >
      <Flex direction="column" bg="#0E2B45">
        <Banner
          backgroundImage={stageBanner}
          title="小山舞台"
          subtitle="表演藝術"
          mb="-40px"
        />

        <Slogan />
      </Flex>
      <Chromatic />
      <Show />
      <TheAtre />
      <ShowDetail />
      {/* <StagesGrid /> */}
      <Flex
        bgSize="cover"
        borderTop={{ base: '10px solid #2D458A', lg: '10px solid #2D458A' }}
        bgImage={`url(${closingBg})`}
        direction="column"
        align="center"
        pt="120px"
        pb="72px"
      >
        <Flex
          w={{ sm: '100%', md: '75%', lg: '80%', '2xl': '1280' }}
          align="center"
          pb={{ base: '72px', lg: '120px' }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <RevealFlex order="1">
            <Image
              h={{ base: '138px', lg: '183px' }}
              mb="20px"
              src={ClosingTitle}
            />
          </RevealFlex>
          <RevealFlex order="2">
            <Text
              color="white"
              px="30px"
              fontSize={{ base: '18px', lg: '20px' }}
            >
              鎏金時尚文化夜・跨界璀璨耀山城
            </Text>
          </RevealFlex>
        </Flex>
        <Flex
          w={{ sm: '100%', md: '75%', lg: '80%', '2xl': '1280' }}
          justify="space-between"
          direction={{ base: 'column', lg: 'row' }}
        >
          {ClosingList.map((item, index) => (
            <ClosingCard order={index} key={item.title} {...item} />
          ))}
        </Flex>
      </Flex>
      <Flex
        w="100%"
        justify="center"
        bg="blue.700"
        py={{ base: '30px', lg: '80px' }}
      >
        <AspectRatio
          w={{ base: '90%', lg: '70%' }}
          maxW="800px"
          ratio={850 / 480}
        >
          <iframe
            title="mineartfestival"
            src="https://www.youtube.com/embed/7GybxtIbGzA"
            allowFullScreen
          />
        </AspectRatio>
      </Flex>
    </MotionFlex>
  );
}
