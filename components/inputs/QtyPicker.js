import { Flex, Button, Input, useTheme } from "@chakra-ui/react";

export default function QtyPicker({ qty, setQty }) {
  const theme = useTheme();
  return (
    <Flex>
      <Button
        size='sm'
        backgroundColor={theme.colors.brand.tedred}
        colorScheme='red'
        onClick={() => qty !== 0 && setQty(qty - 1)}
      >
        -
      </Button>
      <Input
        size='sm'
        maxW='7ch'
        value={qty}
        type='number'
        onChange={(e) => e.target.value >= 0 && setQty(e.target.value)}
      />
      <Button
        backgroundColor={theme.colors.brand.tedred}
        colorScheme='red'
        size='sm'
        onClick={() => setQty(qty + 1)}
      >
        +
      </Button>
    </Flex>
  );
}
