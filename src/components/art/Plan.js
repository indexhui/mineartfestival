import {
  Flex,
  Text,
  Box,
  HStack,
  Link,
  Icon,
  Image,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { FaMapMarker } from 'react-icons/fa';

import planBg from 'assets/images/bureauPage/planBg.jpg';
import planConcept from 'assets/images/bureauPage/planConcept.png';

import planPast from 'assets/images/bureauPage/planPast.jpg';
import planNow from 'assets/images/bureauPage/planNow.jpg';
import planFuture from 'assets/images/bureauPage/planFuture.jpg';

import progress from 'assets/images/bureauPage/progress.svg';

const PlanCardModal = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack
        display={{ base: 'flex', lg: 'none' }}
        onClick={onOpen}
        spacing={{ base: '12px', lg: '20px' }}
        align="center"
        justify="center"
      >
        <Text
          fontWeight="900"
          fontSize={{ base: '16px', lg: '24px' }}
          fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
        >
          {props.title}
        </Text>
        <Image w={{ base: '40px', lg: '66px' }} src={progress} />
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
        <ModalOverlay />
        <ModalContent bg="blue.500" rounded="0">
          <ModalBody p="30px">
            <Flex w="100%" justify="flex-end" color="white" mb="10px">
              <CloseIcon cursor="pointer" onClick={onClose} />
            </Flex>
            <Text whiteSpace="pre-wrap" color="white">
              {props.content}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const PlanCard = props => {
  return (
    <Flex w={{ base: '100%', lg: 1 / 3 }} direction="column">
      <Flex
        h={{ base: '45px', lg: '60px' }}
        w="100%"
        bg="blue.600"
        justify="center"
        align="center"
        color="white"
      >
        <PlanCardModal title={props.title} content={props.content} />
        <HStack
          display={{ base: 'none', lg: 'flex' }}
          spacing={{ base: '12px', lg: '20px' }}
          align="center"
          justify="center"
        >
          <Text
            fontWeight="900"
            fontSize={{ base: '16px', lg: '24px' }}
            fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
          >
            {props.title}
          </Text>
          <Image w={{ base: '40px', lg: '66px' }} src={progress} />
        </HStack>
      </Flex>
      <Flex
        h={{ base: '200px', lg: '480px' }}
        w="100%"
        bgImage={`url('${props.img}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        position="relative"
      >
        <Flex
          display={{ base: 'none', lg: 'flex' }}
          w="100%"
          h="100%"
          top="0"
          position="absolute"
          bgColor="#3E5EBD90"
          opacity="0"
          transition="all .3s ease-in-out"
          _hover={{ opacity: 1 }}
          align="center"
          justify="center"
        >
          <Text w="280px" color="white" textAlign="left" whiteSpace="pre-wrap">
            {props.content}
          </Text>
        </Flex>
      </Flex>
      <Flex
        h="60px"
        w="100%"
        bg="blue.600"
        display={{ base: 'none', lg: 'flex' }}
      ></Flex>
    </Flex>
  );
};

const Plan = () => {
  return (
    <>
      <Flex w="100%" pt="40px" direction="column" align="center">
        <Flex border="2px solid #2D458A" position="relative" mb="-40px">
          <Box
            w="100%"
            h="100%"
            position="absolute"
            bottom="-10px"
            right="-10px"
            bg="blue.600"
          ></Box>
          <Text
            zIndex="10"
            bg="white"
            px="12px"
            pt="12px"
            pb="16px"
            color="blue.600"
            fontWeight="700"
            fontSize={{ base: '16px', lg: '36px' }}
          >
            #2022礦山的共農計畫
          </Text>
        </Flex>
        <Flex
          w="100%"
          py="80px"
          bgImage={`url('${planBg}')`}
          justify="center"
          direction="column"
          align="center"
        >
          <HStack
            pb="36px"
            as={Link}
            isExternal
            href="https://goo.gl/maps/m1u7cdJkSZASb1We8"
          >
            <Icon as={FaMapMarker} size="24px" color="yellow.700" />
            <Text color="grey.900">金瓜石酒保口</Text>
          </HStack>
          <Flex w="100%">
            <Flex align="center">
              <Box
                h="3px"
                w={{ base: '30px', lg: '270px' }}
                position="relative"
                bg="grey.900"
              >
                <Box
                  top="-8px"
                  right="-8px"
                  w="18px"
                  h="18px"
                  position="absolute"
                  rounded="full"
                  bg="grey.900"
                ></Box>
              </Box>
              <Text
                fontWeight="700"
                pl="10px"
                color="grey.900"
                letterSpacing="8px"
                fontSize={{ base: '16px', lg: '24px' }}
                writingMode="vertical-lr"
                style={{
                  writingMode: 'vertical-lr',
                }}
              >
                計畫概念
              </Text>
            </Flex>
            <VStack
              spacing="30px"
              align="flex-start"
              w="70%"
              pl="50px"
              textAlign="left"
              fontWeight="700"
              color="blue.600"
              fontSize={{ base: '14px', lg: '18px' }}
            >
              <Text>
                讓汗水滋養大地，
                <br />
                使社區再次滾動起來，
                <br />
                共創美麗結晶。
              </Text>
              <Text>
                本計劃以食農教育為出發，讓在地居民能夠多多認識友善栽培，讓人與耕透過金瓜石的可食地景場域中獲得實踐。透過基地調查，了解地方農地現況及需求，協力改造周邊空間，讓菜園變公園，深入街角，與居民共建新北美學廊帶。
              </Text>
              <Text>
                本計劃分階段進行，2022年以與居民溝通為目標，利用限制區塊設置具公共議題概念之示範區，開啟居民與藝術共構家園之可能。
              </Text>
            </VStack>
          </Flex>
          <Image
            w={{ base: '240px', lg: '600px' }}
            src={planConcept}
            mt="60px"
          />
        </Flex>
      </Flex>
      <Flex bg="grey.100" w="100%" direction="column">
        <Text
          fontWeight="900"
          color="blue.600"
          fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
          pt="40px"
          pb="20px"
          fontSize={{ base: '20px', lg: '48px' }}
        >
          酒保口的...
        </Text>
        <Flex w="100%" wrap="wrap">
          <PlanCard
            title="過去"
            img={planPast}
            content="現在所在是酒保口遺址，為早期台金公司的員工供應社，臺灣人習稱之為「酒保」 。酒保口過去是一棟兩層鋼筋建築，二樓為百貨售賣部，一樓則設有雜貨、蔬菜水果、魚類肉品、米、燃料等賣場，是金瓜石的購物中心。"
          />
          <PlanCard
            title="現在"
            img={planNow}
            content="酒保口乘載在地居民生活記憶，時光流逝，此區域物換星移，活絡模樣已變成模糊記憶。
現地已成為社區居民的菜園，黃金博物館與地方里長討論，期待導入藝術重新找回在地記憶，預計透過可食地景再設計，導入人文、記憶、未來，使這裡成為居民與觀眾的對接處。"
          />
          <PlanCard
            title="未來"
            img={planFuture}
            content="Step1：社區討論
與里長、在地居民討論未來模樣
Step2：閒置地整理＋示範區搭設
整理閒置空地，以此為基底打造共農計畫的開端，透過小地方的改善逐漸改變可食地景樣貌。
Step3：未來持續產出礦山結晶
持續產出好吃又健康的農作物，持續讓礦山變美麗！"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Plan;
