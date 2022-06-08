import {
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  Icon,
  HStack,
  useDisclosure,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Link,
} from '@chakra-ui/react';
import useCsv from 'hooks/useCsv';
import stageCsv from 'assets/csv/stage.csv';
import { FaMapMarker } from 'react-icons/fa';
import { CloseIcon } from '@chakra-ui/icons';
import RevealFlex from 'components/RevealFlex';
import intro from 'assets/images/stagesPage/intro.svg';
import stageLoading from 'assets/images/stageLoading.svg';
import { HiOutlineTicket } from 'react-icons/hi';

const StageModal = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        px="12px"
        py="10px"
        h="30px"
        lineHeight="0"
        bg="yellow.500"
        rounded="full"
        fontSize="14px"
        fontWeight="300"
        _hover={{
          color: 'white',
          bg: ' linear-gradient(90deg, #7C8DC6 0%, #7487C3 28%, #5D78BA 72.01%, #4B6CB3 100.01%)',
          transition: 'all .2s',
        }}
      >
        More
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
        <ModalOverlay />
        <ModalContent bg="yellow.500">
          <ModalBody p="30px">
            <Flex align="flex-start" justify="space-between">
              {props.name} <CloseIcon cursor="pointer" onClick={onClose} />
            </Flex>
            <Flex borderBottom="1px solid black" py="12px" mb="24px">
              <Image src={intro} />
            </Flex>
            {props.linkCopy && (
              <Flex fontSize="16px">
                <Link src={props.link}>
                  <HStack color="grey.900">
                    <Icon as={HiOutlineTicket} fontSize="20px" />
                    <Text fontSize="16px" color="grey.900">
                      {props.linkCopy}
                    </Text>
                  </HStack>
                </Link>
              </Flex>
            )}

            <Flex>
              <Text fontSize="16px" fontWeight="500" lineHeight="30px">
                {props.content}
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const StagesGrid = () => {
  const { data: stageData } = useCsv(stageCsv);

  return (
    <Flex w="100%" justify="center" minH="500px">
      <Grid
        py="45px"
        px="30px"
        w={{ sm: '100%', md: '75%', lg: '80%', '2xl': '1280' }}
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap="80px"
      >
        {stageData.map(stage => (
          <GridItem key={stage.id}>
            <RevealFlex direction="column">
              <Text
                color="blue.600"
                textAlign="center"
                h="58px"
                fontSize="18px"
                fontWeight="700"
                borderBottom="2px solid #3551A2"
              >
                {stage.name}
              </Text>
              <Image
                my="24px"
                w="100%"
                fallbackSrc={stageLoading}
                src={stage.image}
              />
              <Text color="blue.600" fontSize="16px" fontWeight="700">
                {stage.time}
              </Text>
              <Flex justify="space-between">
                <HStack as={Link} isExternal href={stage.map}>
                  <Icon as={FaMapMarker} size="24px" color="yellow.700" />
                  <Text color="grey.900">{stage.location}</Text>
                </HStack>
                <StageModal {...stage} />
              </Flex>
            </RevealFlex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
export default StagesGrid;
