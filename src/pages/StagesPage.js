import { motion } from 'framer-motion';
import { Flex, Text, AspectRatio, Image } from '@chakra-ui/react';
import Banner from 'components/Banner';
import stageBanner from 'assets/images/stagesPage/stageBanner.jpg';
import StagesGrid from 'components/stages/StagesGrid';
import RevealFlex from 'components/RevealFlex';
import closingBg from 'assets/images/closingBg.jpg';
import ClosingTitle from 'assets/images/closingTitle.svg';

const MotionFlex = motion(Flex);

const ClosingList = [
  {
    title: '浩瀚',
    content: '絕美的文化資產',
    image: '',
  },
  {
    title: '創新',
    content: '時尚藝術帶動礦山想像',
    image: '',
  },
  {
    title: '美好',
    content: '表演藝術共鳴山城',
    image: '',
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
      <Flex
        w="300px"
        h="200px"
        bgColor="grey.400"
        mt="10px"
        mb="15px"
        rounded="45px"
      ></Flex>
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
      <Banner
        backgroundImage={stageBanner}
        title="小山舞台"
        subtitle="表演藝術"
      />

      <StagesGrid />
      <RevealFlex
        w="100%"
        justify="center"
        mb={{ base: '-80px', lg: '-200px' }}
      >
        <AspectRatio
          w={{ base: '90%', lg: '50%' }}
          maxW="800px"
          ratio={850 / 480}
        >
          <iframe
            title="mineartfestival"
            src="https://www.youtube.com/embed/7GybxtIbGzA"
            allowFullScreen
          />
        </AspectRatio>
      </RevealFlex>
      <Flex
        bgSize="cover"
        borderTop={{ base: '10px solid #2D458A', lg: '150px solid #2D458A' }}
        bgImage={`url(${closingBg})`}
        direction="column"
        align="center"
        pt="120px"
        pb="72px"
      >
        <Flex
          w={{ sm: '100%', md: '75%', lg: '80%', xl: '1280px' }}
          align="center"
          pb={{ base: '72px', lg: '120px' }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <RevealFlex order="1" once={false}>
            <Image
              h={{ base: '138px', lg: '183px' }}
              mb="20px"
              src={ClosingTitle}
            />
          </RevealFlex>
          <RevealFlex order="2" once={false}>
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
          w={{ sm: '100%', md: '75%', lg: '80%', xl: '1280px' }}
          justify="space-between"
          direction={{ base: 'column', lg: 'row' }}
        >
          {ClosingList.map((item, index) => (
            <ClosingCard order={index} key={item.title} {...item} />
          ))}
        </Flex>
      </Flex>
    </MotionFlex>
  );
}
