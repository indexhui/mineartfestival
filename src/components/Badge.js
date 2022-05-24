import { Text } from '@chakra-ui/react';
import RevealFlex from 'components/RevealFlex';

const Badge = props => {
  return (
    <RevealFlex
      bg="yellow.500"
      w="200px"
      h="200px"
      rounded="full"
      zIndex="10"
      align="center"
      justify="center"
    >
      <Text
        h="220px"
        lineHeight="40px"
        style={{ writingMode: 'vertical-lr' }}
        fontWeight="900"
        fontSize="35px"
        textAlign="center"
        color="blue.500"
        {...props}
      >
        {props.children}
      </Text>
    </RevealFlex>
  );
};

export default Badge;
