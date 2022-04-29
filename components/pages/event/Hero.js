import React from "react";
import { Text, Flex, Heading, Image, Grid, GridItem } from "@chakra-ui/react";

export default function Hero(){
  return (
      <Flex
        bgImage="url('/assets/images/background/event.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        h="40vh"
        minH="350px"
        align="center"
        justify="center"
        direction="column"
        p="20px">
        <Heading
          fontFamily="HKGrotesk"
          fontWeight="extrabold"
          fontSize={{ base: "3rem", sm: "4rem", md:"5rem" }}
          color="white"
          textShadow="0px 4px 4px #00000040"
          marginBottom="1vh">
          EVENT
        </Heading>
      </Flex>
  );
};

