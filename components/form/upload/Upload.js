import React, { useEffect } from "react";
import { Center, Text, Box } from "@chakra-ui/react";
import { BsUpload } from "react-icons/bs";

export default function Upload({ ...props }) {
  return (
    <Center {...props} textAlign="center" flexDirection="column" border="2px dashed #000000" borderRadius="19px" py="1rem" px="3rem">
      <input />
      <BsUpload size="2em" />
      <Text fontWeight={600} fontSize="0.75em">
        Drag and Drop File <br />
        or
      </Text>
      <Box color="white" bg="brand.gradientRed" borderRadius="19px" fontSize="0.6em" px="2rem" py="0.4rem" cursor="pointer">
        Browse
      </Box>
    </Center>
  );
}
