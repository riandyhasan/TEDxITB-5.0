import React from "react";
import { Flex, Heading, Spinner, Image } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex
      minH="100vh"
      pt="15rem"
      pb="1rem"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="black"
          color="brand.tedred"
          size="xl"
        />
        <Heading
          as="h1"
          size="lg"
          textAlign="center"
          fontSize={["1.2em", null, "1.4em"]}
          color="brand.tedred"
        >
          Loading...
        </Heading>
      </Flex>

      <Flex w="15%" justifyContent="center" alignItems="flex-end">
        <Image src="/assets/images/logo/Logo TEDxITB.png" />
      </Flex>
    </Flex>
  );
}
