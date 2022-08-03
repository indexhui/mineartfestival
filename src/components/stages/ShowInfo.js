import {
  Flex,
  Text,
  VStack,
  HStack,
  Stack,
  Box,
  Image,
  chakra,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

import MainButton from 'components/MainButton';

import BusIcon from 'components/icons/BusIcon';
import ShuttleIcon from 'components/icons/ShuttleIcon';
import CarIcon from 'components/icons/CarIcon';

import showTime from 'assets/images/stagesPage/showTime.svg';
import shuttleMap from 'assets/images/stagesPage/shuttleMap03.png';
import carMap from 'assets/images/stagesPage/carMap.png';
import parkMap from 'assets/images/stagesPage/parkMap.png';
import trafficControl from 'assets/images/stagesPage/trafficControl.jpg';

import t01 from 'assets/images/stagesPage/t01.png';
import t02 from 'assets/images/stagesPage/t02.png';
import t03 from 'assets/images/stagesPage/t03.png';
import t04 from 'assets/images/stagesPage/t04.png';
import t05 from 'assets/images/stagesPage/t05.png';

const routeList = [
  {
    color: '#39B54A',
    title:
      '【基隆線】八斗子觀光漁港C區停車場－大基隆駕訓班停車場－水湳洞停車場',
    content:
      '去程｜17:00-19:00每10-15分鐘一班，由八斗子觀光漁港C區停車場發車 \n回程｜20:30 由水湳洞停車場發車',
  },
  {
    color:
      'linear-gradient(90deg, #EAE7E3 0%, #DCD8D6 6.36%, #B6B1B3 18.51%, #9A959A 26.4%, #F9F9F9 52.25%, #EBEAEB 58.78%, #C6C3C5 71.33%, #8E888B 87.64%, #B5B5B6 100%)',
    title: '【瑞芳線】瑞芳火車站－大基隆駕訓班停車場－水湳洞停車場',
    content:
      '去程｜17:00-19:00每10-15分鐘一班，由瑞芳火車站發車 \n回程｜20:30 由水湳洞停車場發車',
  },
  {
    // isThin: true,
    color:
      'linear-gradient(90deg, #F0CC7E 0.56%, #E8C47E 18.54%, #C78A03 59.55%, #E3B75E 79.27%, #EFCA84 87.08%, #F4E7CF 100%)',
    title:
      '【金九線】新九停車場－隔頂停車場－黃金博物館－勸濟堂停車場－水湳洞停車場',
    content:
      '去程｜17:00-19:00每10-15分鐘一班，由新九停車場發車 \n回程｜20:30 由水湳洞停車場發車',
  },
  // {
  //   color: '#F7931E',
  //   title: '4.【勸濟堂停車場-水湳洞停車場】線 返程',
  //   content:
  //     '行經路線：19:00~22:30 每15分鐘一班沿途停靠水湳洞停車場→勸濟堂→隔頂停車場→九份老街→九份分局（台陽停車場）→九號停車場→瑞芳區公所→水湳洞停車場（僅提供下車，不提供沿途載客）',
  // },
];

const ShowInfo = ({ transportationInfoRef }) => {
  return (
    <>
      <Flex id="showInfo" bg="#3C627A" w="100%">
        <Flex
          display={{ base: 'none', lg: 'flex' }}
          pt="120px"
          w="15%"
          bg="yellow.600"
          justify="flex-end"
          pr="30px"
        >
          <VStack spacing="8px">
            <Box w="12px" h="12px" bg="grey.900"></Box>
            <Text
              pt="10px"
              fontWeight="900"
              fontSize="24px"
              letterSpacing="5px"
              color="grey.900"
              fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
              writingMode="vertical-lr"
              style={{
                writingMode: 'vertical-lr',
              }}
            >
              節目單
            </Text>
          </VStack>
        </Flex>
        <Flex
          pl="50px"
          pr="30px"
          pt={{ base: '40px', lg: '120px' }}
          w={{ base: '100%', lg: '70%' }}
          justify="flex-start"
          direction={{ base: 'column', lg: 'row' }}
        >
          <Text
            display={{ base: 'block', lg: 'none' }}
            pb="20px"
            fontSize="16px"
            color="yellow.500"
            fontWeight="900"
            fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
          >
            活動資訊
          </Text>
          <Image w={{ base: '60px', lg: '120px' }} src={showTime} mb="24px" />
          <VStack
            pl={{ base: '0', lg: '300px' }}
            color="white"
            align="flex-start"
          >
            <Stack direction={{ base: 'column', lg: 'row' }}>
              <Text fontSize={{ base: '14px', lg: '16px' }}>18:30-19:00</Text>
              <Text fontSize={{ base: '14px', lg: '16px' }}>
                入場/暖場表演
                <br />
                金銀之間
                <br />
                演出團隊：新象劇場
              </Text>
            </Stack>
            <Stack direction={{ base: 'column', lg: 'row' }}>
              <Text fontSize={{ base: '14px', lg: '16px' }}>19:00-19:10</Text>
              <Text
                fontSize={{ base: '14px', lg: '16px' }}
                whiteSpace="pre-wrap"
              >
                主持人引言
              </Text>
            </Stack>
            <Stack direction={{ base: 'column', lg: 'row' }}>
              <Text fontSize={{ base: '14px', lg: '16px' }}>19:10-19:45</Text>
              <Text
                fontSize={{ base: '14px', lg: '16px' }}
                whiteSpace="pre-wrap"
              >
                陽歌行
                <br />
                演出團隊：優人神鼓
              </Text>
            </Stack>
            <Stack direction={{ base: 'column', lg: 'row' }}>
              <Text fontSize={{ base: '14px', lg: '16px' }}>19:45-20:30</Text>
              <Text
                fontSize={{ base: '14px', lg: '16px' }}
                whiteSpace="pre-wrap"
                maxW={{ base: 'unset', lg: '280px' }}
              >
                鎏金時尚
                <br />
                演出團隊：金田創藝、潘怡良設計師群、李翊君、王敏淳
              </Text>
            </Stack>
            <Stack direction={{ base: 'column', lg: 'row' }}>
              <Text fontSize={{ base: '14px', lg: '16px' }}>20:30-20:40</Text>
              <Text
                id="transportationInfo"
                fontSize={{ base: '14px', lg: '16px' }}
                whiteSpace="pre-wrap"
              >
                大謝幕
              </Text>
            </Stack>
            <Stack direction={{ base: 'column', lg: 'row' }}>
              <Text fontSize={{ base: '14px', lg: '16px' }}>20:40-20:50</Text>
              <Text
                id="transportationInfo"
                fontSize={{ base: '14px', lg: '16px' }}
                whiteSpace="pre-wrap"
              >
                開放模特兒拍照
              </Text>
            </Stack>
          </VStack>
        </Flex>
      </Flex>
      <Flex
        ref={transportationInfoRef}
        bg="#3C627A"
        w="100%"
        color="white"
        align="flex-start"
      >
        <Flex
          display={{ base: 'none', lg: 'flex' }}
          pt="120px"
          pb="120px"
          w="15%"
          bg="yellow.600"
          justify="flex-end"
          pr="30px"
        >
          <VStack spacing="8px">
            <Box w="12px" h="12px" bg="grey.900"></Box>
            <Text
              pt="10px"
              fontWeight="900"
              fontSize="24px"
              letterSpacing="5px"
              color="grey.900"
              fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
              writingMode="vertical-lr"
              style={{
                writingMode: 'vertical-lr',
              }}
            >
              交通資訊
            </Text>
          </VStack>
        </Flex>
        <Flex
          pl="50px"
          pr="30px"
          pt={{ base: '40px', lg: '120px' }}
          w={{ base: '100%', lg: '70%' }}
          justify="flex-start"
          direction="column"
        >
          <Text
            display={{ base: 'block', lg: 'none' }}
            pb="20px"
            fontSize="16px"
            color="yellow.500"
            fontWeight="900"
            fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
          >
            活動資訊
          </Text>
          <Text
            pb={{ base: '16px', lg: '48px' }}
            fontWeight="700"
            fontSize={{ base: '14px', lg: '24px' }}
          >
            活動地點 水湳洞停車場
          </Text>
          <VStack spacing="48px">
            <VStack
              align="flex-start"
              w="100%"
              spacing={{ base: '8px', lg: '25px' }}
            >
              <HStack spacing="14px" align="center">
                <Flex fontSize={{ base: '30px', lg: '40px' }}>
                  <BusIcon boxSize={{ base: '30px', lg: '40px' }} />
                </Flex>
                <Text fontWeight="500" fontSize={{ base: '16px', lg: '20px' }}>
                  大眾交通｜公車路線
                </Text>
              </HStack>
              <VStack align="flex-start" w="100%" spacing="2px">
                <Text fontWeight="700" fontSize={{ base: '14px', lg: '18px' }}>
                  當日上午可至九份、金瓜石地區周邊旅遊，再
                  <chakra.span color="yellow.500">
                    轉乘【金九線】接駁車
                  </chakra.span>
                  前往活動會場
                </Text>
                <Text fontWeight="400" fontSize={{ base: '14px', lg: '18px' }}>
                  臺北出發：可搭965及1062客運前往
                </Text>
                <Text fontWeight="400" fontSize={{ base: '14px', lg: '18px' }}>
                  基隆市區出發：可搭788前往
                </Text>
                <Text fontWeight="400" fontSize={{ base: '14px', lg: '18px' }}>
                  瑞芳出發：可在瑞芳火車站搭乘856黃金福隆線、788、965公車或搭1062客運前往{' '}
                </Text>
              </VStack>
              <VStack align="flex-start" w="100%" spacing="2px">
                <Text fontWeight="700" fontSize={{ base: '14px', lg: '18px' }}>
                  回程選擇
                </Text>
                <Text fontWeight="400" fontSize={{ base: '14px', lg: '18px' }}>
                  ．搭乘【瑞芳線】接駁車至瑞芳車站轉乘火車
                </Text>
                <Text fontWeight="400" fontSize={{ base: '14px', lg: '18px' }}>
                  ．基隆市區出發：可搭788前往
                </Text>
              </VStack>
              <VStack align="flex-start" w="100%" spacing="2px">
                <Text fontWeight="700" fontSize={{ base: '14px', lg: '18px' }}>
                  公車末班車資訊：
                </Text>
                <Text fontWeight="700" fontSize={{ base: '14px', lg: '18px' }}>
                  臺北客運
                  <chakra.span fontWeight="400"> 965 末班21:00</chakra.span>
                </Text>
                <Text fontWeight="700" fontSize={{ base: '14px', lg: '18px' }}>
                  基隆客運
                  <chakra.span fontWeight="400">
                    788 末班22:30/ 1062 末班21:10 / 856黃金福隆線 末班15:10
                  </chakra.span>
                </Text>
              </VStack>
            </VStack>
            <VStack
              align="flex-start"
              w="100%"
              spacing={{ base: '16px', lg: '25px' }}
            >
              <HStack spacing="14px" align="center">
                <Flex fontSize={{ base: '30px', lg: '40px' }}>
                  <ShuttleIcon boxSize="40px" />
                </Flex>
                <Text fontWeight="500" fontSize={{ base: '16px', lg: '20px' }}>
                  接駁車資訊
                </Text>
              </HStack>
              <Image src={t01} />
              {/* <VStack align="flex-start" w="100%">
                {routeList.map(route => (
                  <Stack
                    pb="12px"
                    key={route.title}
                    direction={{ base: 'column', lg: 'row' }}
                    textAlign="left"
                  >
                    {route.isThin && (
                      <Box bg="#F7931E" w="90px" h="5px" rounded="full"></Box>
                    )}

                    {!route.isThin && (
                      <Box
                        bg={route.color}
                        w="90px"
                        h="12px"
                        rounded="full"
                      ></Box>
                    )}

                    <VStack
                      align="flex-start"
                      w={{ base: '100%', lg: '100%' }}
                      pl="16px"
                      spacing="8px"
                    >
                      <Text
                        w="100%"
                        textAlign="left"
                        fontWeight="700"
                        fontSize="18px"
                        color="yellow.500"
                      >
                        {route.title}
                      </Text>
                      <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        whiteSpace="pre-wrap"
                        textAlign="left"
                      >
                        {route.content}
                      </Text>
                    </VStack>
                  </Stack>
                ))}
              </VStack> */}
            </VStack>
            <VStack
              align="flex-start"
              w="100%"
              spacing={{ base: '8px', lg: '25px' }}
            >
              <HStack spacing="14px" align="center">
                <Flex fontSize={{ base: '30px', lg: '40px' }}>
                  <CarIcon boxSize="40px" />
                </Flex>
                <Text fontWeight="500" fontSize={{ base: '16px', lg: '20px' }}>
                  自駕前往
                </Text>
              </HStack>
              <VStack spacing="2px" align="flex-start">
                <Text>
                  ．行駛台二線民眾可至
                  <chakra.span color="yellow.500">
                    大基隆駕訓班停車場
                  </chakra.span>
                  停車，再轉乘【基隆線】或【瑞芳線】接駁車
                </Text>
                <Text>
                  ．行駛102縣道往九份方向民眾可至
                  <chakra.span color="yellow.500">新九停車場</chakra.span>
                  停車，再轉乘【金九線】接駁車
                </Text>
              </VStack>
              <VStack spacing="2px" align="flex-start">
                <Text color="yellow.500" fontSize="14px">
                  車位有限請提早抵達入場 16:00-21:30
                </Text>
                <Text color="yellow.500" fontSize="14px">
                  北34道路管制，僅限居民通行(需出示通行證明）
                </Text>
              </VStack>
              <Image w="100%" src={t02} />
              <Text
                fontWeight="500"
                fontSize={{ base: '16px', lg: '20px' }}
                pt="32px"
              >
                散場指引
              </Text>
              <Image w="100%" src={t03} />
              <Text
                fontWeight="500"
                fontSize={{ base: '16px', lg: '20px' }}
                pt="32px"
              >
                場內須知
              </Text>
              <Image w="100%" src={t04} />
              <Text
                fontWeight="500"
                fontSize={{ base: '16px', lg: '20px' }}
                pt="32px"
              >
                觀展須知
              </Text>
              <Image w="100%" src={t05} />
              {/* <Image src={trafficControl} /> */}
              {/* <VStack align="flex-start" w="100%" pt="12px">
                <Text fontWeight="700" fontSize="18px">
                  1. 活動地點水湳洞停車場開放部分車位可直接停車
                </Text>
                <Text fontWeight="700" fontSize="18px">
                  2.開放路肩：將活動會場東北側，北部濱海公路(洞頂路以東)雙側800m則開放路邊停車使用
                </Text>
              </VStack> */}
              {/* <VStack
                spacing="2px"
                fontWeight="400"
                fontSize={{ base: '14px', lg: '16px' }}
                textAlign="left"
                algin="flex-start"
                w="100%"
              >
                <Text w="100%">
                  ・自駕停車轉免費接駁車僅規劃碧沙C區停車場(海科館)、瑞芳車站周邊、勸濟堂停車場三處，其餘停車場域請考慮使用計程車轉乘
                </Text>
                <Text w="100%">
                  ・當日現場車位狀況請密切留意黃金博物館臉書將作即時公告
                </Text>
                <Text w="100%">
                  ・建議民眾當日可提早至瑞芳/九份及金瓜石地區進行旅遊，並將車輛停放於海科館/瑞芳火車站周邊停車場/勸濟堂停車場，17:30後再轉乘免費接駁車前往會場。
                </Text>
              </VStack> */}
            </VStack>
            {/* <Flex direction="column" align="flex-start" w="100%">
              <Text fontWeight="700" fontSize="18px" pb="20px">
                周邊停車空間建議：（車位數量有限，僅供參考評估）
              </Text>
              <Flex direction={{ base: 'column', lg: 'row' }}>
                <Image w="100%" maxW="800px" src={parkMap} />
                <Text
                  maxW={{ base: '100%', lg: '280px' }}
                  pl={{ base: '0', lg: '28px' }}
                  pt={{ base: '16px', lg: '0' }}
                >
                  活動場域周邊停車場（至會場步行約15~20分）：水湳洞遊客中心停車場、黃金瀑布前停車場、濱海公路周邊駐車空間
                </Text>
              </Flex>
            </Flex> */}
          </VStack>
        </Flex>
      </Flex>
      <Flex w="100%" justify="center" bg="#3C627A">
        <RouterLink to="/partner">
          <MainButton my="100px">合作民宿</MainButton>
        </RouterLink>
      </Flex>
    </>
  );
};

export default ShowInfo;
