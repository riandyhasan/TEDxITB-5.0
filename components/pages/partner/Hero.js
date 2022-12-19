import React from "react";
import { Text, Flex, Heading } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      bgImage="url('/assets/images/background/partnership.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h={{ base: "20vh", md: "40vh" }}
      minH="350px"
      align="center"
      justify="center"
      direction="column"
      p="20px"
    >
      <Heading
        fontFamily="HKGrotesk"
        fontWeight="extrabold"
        fontSize={{ base: "1.5rem", sm: "2rem", md: "2.5rem" }}
        color="white"
        textShadow="0px 4px 4px #00000040"
        textAlign="center"
      >
        Interested in becoming a TEDxITB partner?
      </Heading>
      <Text
        fontFamily="HKGrotesk"
        color="white"
        textShadow="0px 4px 4px #00000040"
        marginBottom="1vh"
        textAlign="center"
        fontSize={{ base: "1.5rem", sm: "1.5rem", md: "2rem" }}
      >
        Get in touch with{" "}
        <span style={{ color: "#FF3333" }}>
          <a
            href="mailto:contact.tedxitb@gmail.com"
            style={{ textDecoration: "none" }}
          >
            contact.tedxitb@gmail.com
          </a>
        </span>
      </Text>
    </Flex>
  );
}
