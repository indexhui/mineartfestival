import { Text } from '@chakra-ui/react';

const Title = props => {
  return (
    <Text
      fontFamily="Noto Serif TC,'Noto Serif CJK TC'"
      fontSize={{ base: '20px', lg: '24px' }}
      pb="4px"
      borderBottom="3px solid white"
      {...props}
    >
      {props.children}
    </Text>
  );
};

export default Title;
