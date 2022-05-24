import { Flex } from '@chakra-ui/react';
import Banner from 'components/Banner';

import travelerBanner from 'assets/images/travelerPage/travelerBanner.jpg';
export function TravelerPage() {
  return (
    <Flex>
      <Banner
        backgroundImage={travelerBanner}
        title="山人旅行社"
        subtitle="文化行旅"
        titleColor="white"
      />
    </Flex>
  );
}
