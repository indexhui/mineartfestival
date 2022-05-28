import { motion } from 'framer-motion';
import { Flex, Text } from '@chakra-ui/react';
import Banner from 'components/Banner';
import stageBanner from 'assets/images/stagesPage/stageBanner.jpg';
import StagesGrid from 'components/stages/StagesGrid';

const MotionFlex = motion(Flex);

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
    </MotionFlex>
  );
}
