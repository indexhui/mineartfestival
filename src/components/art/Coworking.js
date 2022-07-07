import { Flex, Image, Text } from '@chakra-ui/react';

import worker01 from 'assets/images/bureauPage/worker01.jpg';
import worker02 from 'assets/images/bureauPage/worker02.jpg';

const workerList = [
  {
    img: worker01,
    name: '陳宣誠',
    title: '共感地景創作 ArchiBlur Lab',
    content:
      '讓生命找到自己，美也在其中顯現。 \n 陳宣誠從不侷限於建築形式，善於以多元思維突破框架，並致力於聲音、光影、水文、物質、質感、構造等，讓建築成為一種關於人與非人的環境。',
  },
  {
    img: worker02,
    name: '林暐翔',
    title: '植物學家',
    content:
      '綽號「植物人」，長年推動植物、生態、農業科普教材化，研究並建立人類與土地之間的友善關係。常帶領民眾走入自然，從解讀樹木身體語言的過程中，獲得深深的療癒。',
  },
];

const WorkerCard = props => {
  return (
    <Flex
      direction="column"
      align="center"
      px={{ base: '30px', lg: '45px' }}
      pb={{ base: '24px', lg: '0' }}
    >
      <Image w="100%" maxW="400px" src={props.img} />
      <Text
        fontSize="18px"
        fontWeight="700"
        color="grey.900"
        pt={{ base: '16px', lg: '27px' }}
      >
        {props.name}
      </Text>
      <Text
        fontSize="16px"
        color="grey.900"
        pt="8px"
        pb={{ base: '8px', lg: '16px' }}
      >
        {props.title}
      </Text>
      <Text
        whiteSpace="pre-line"
        maxW="400px"
        fontSize={{ base: '14px', lg: '16px' }}
      >
        {props.content}
      </Text>
    </Flex>
  );
};

const Coworking = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      align="center"
      py={{ base: '60px', lg: '100px' }}
    >
      <Text
        pb={{ base: '20px', lg: '48px' }}
        fontSize={{ base: '16px', lg: '24px' }}
        fontWeight="700"
        color="blue.600"
      >
        藝術家與居民共同創作
      </Text>
      <Flex
        w={{ base: '100%', lg: '70%' }}
        direction={{ base: 'column', lg: 'row' }}
        justify="center"
      >
        {workerList.map((worker, index) => (
          <WorkerCard key={worker.name} {...worker} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Coworking;
