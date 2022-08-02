import { useEffect, useRef } from 'react';
import { polyfill, scrollIntoView } from 'seamless-scroll-polyfill';

import { motion } from 'framer-motion';
import { Flex, Text, AspectRatio, Image } from '@chakra-ui/react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

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
import ShowSwipe from 'components/stages/ShowSwipe';

const MotionFlex = motion(Flex);

// const ClosingList = [
//   {
//     title: '浩瀚',
//     content: '絕美的文化資產',
//     image: stageClosing01,
//   },
//   {
//     title: '創新',
//     content: '時尚藝術帶動礦山想像',
//     image: stageClosing02,
//   },
//   {
//     title: '共好',
//     content: '表演藝術共鳴山城',
//     image: stageClosing03,
//   },
// ];

// const ClosingCard = props => {
//   const { title, content, image, order } = props;
//   return (
//     <RevealFlex
//       direction="column"
//       justify="center"
//       align="center"
//       order={order}
//       pb={{ base: '32px', lg: '0' }}
//     >
//       <Text color="white" fontSize="24px">
//         {title}
//       </Text>
//       <Image
//         w="300px"
//         h="200px"
//         mt="10px"
//         mb="15px"
//         src={image}
//         rounded="45px"
//       />
//       <Text color="white" fontSize="16px">
//         {content}
//       </Text>
//     </RevealFlex>
//   );
// };

export function StagesPage() {
  const location = useLocation();
  const transportationInfoRef = useRef(null);

  // const handleScroll = ref => {
  //   window.scrollTo({
  //     top: ref?.offsetTop,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };

  const handleScroll = () => {
    const element = document.getElementById('transportationInfo');
    polyfill();
    scrollIntoView(element, {
      behavior: 'smooth',
      inline: 'center',
    });
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => handleScroll(transportationInfoRef.current), 500);
    }
  }, []);

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

        {/* <Slogan /> */}
      </Flex>
      {/* <Chromatic />
      <Show bgColor="#070A0C" />
      <ShowSwipe />
      <TheAtre bgGradient="linear-gradient(180deg, #152128 0%, #1A2931 100%)" /> */}
      <ShowDetail transportationInfoRef={transportationInfoRef} />
      {/* <StagesGrid /> */}
    </MotionFlex>
  );
}
