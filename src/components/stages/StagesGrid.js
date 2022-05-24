import {
  Flex,
  Grid,
  GridItem,
  Heading,
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
} from '@chakra-ui/react';
import useCsv from 'hooks/useCsv';
import stageCsv from 'assets/csv/stage.csv';
import { FaMapMarker } from 'react-icons/fa';
import { CloseIcon } from '@chakra-ui/icons';
import intro from 'assets/images/stagesPage/intro.svg';

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
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="yellow.700">
          <ModalBody p="45px">
            <Flex align="flex-start" justify="space-between">
              {props.name} <CloseIcon cursor="pointer" onClick={onClose} />
            </Flex>
            <Flex borderBottom="1px solid black" py="12px" mb="24px">
              <Image src={intro} />
            </Flex>
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
    <Flex w="100%" justify="center">
      <Grid
        py="45px"
        px="30px"
        w="1280px"
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap="80px"
      >
        {stageData.map(stage => (
          <GridItem key={stage.id}>
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
            <Image my="24px" w="100%" src={stage.image} />
            <Text color="blue.600" fontSize="16px" fontWeight="700">
              {stage.time}
            </Text>
            <Flex justify="space-between">
              <HStack>
                <Icon as={FaMapMarker} size="24px" color="yellow.700" />
                <Text color="grey.900">{stage.location}</Text>
              </HStack>
              <StageModal {...stage} />
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
export default StagesGrid;
