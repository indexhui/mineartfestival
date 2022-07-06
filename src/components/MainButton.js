import { Button } from '@chakra-ui/react';

const MainButton = props => {
  return (
    <Button
      bg="yellow.600"
      color="grey.900"
      rounded="full"
      p="16px 24px"
      _hover={{
        bg: 'linear-gradient(90deg, #7C8DC6 0%, #7487C3 28%, #5D78BA 72.01%, #4B6CB3 100.01%)',
        color: 'white',
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default MainButton;
