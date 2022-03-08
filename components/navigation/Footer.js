import React from "react";
import { Box, Text, Flex, Spacer, Grid } from "@chakra-ui/react";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="linear-gradient(180deg, #FF3333 -22.31%, #F0592B 100%)"
      minW="100vw"
      p="1.5rem"
      color="white"
      display="grid"
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(3, 1fr)",
      }}
      gridTemplateRows={{
        base: "repeat(1, 1fr)",
        md: "1fr",
      }}
      gridGap={{
        base: "0.5em",
        md: "0",
      }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex d={{ base: "none", md: "flex" }} flexDir={{ base: "row", md: "column" }} gridGap="2rem">
        <a href="https://www.instagram.com/tedxitb/" target="_blank" style={{ textDecoration: "none" }}>
          <Flex gridGap="1rem" cursor="pointer">
            <AiOutlineInstagram size="1.5em" />
            <Text>@tedxitb</Text>
          </Flex>
        </a>
        <a href="https://www.linkedin.com/company/tedxitb/" target="_blank" style={{ textDecoration: "none" }}>
          <Flex gridGap="1rem" cursor="pointer">
            <AiFillLinkedin size="1.5em" />
            <Text>TEDxITB</Text>
          </Flex>
        </a>
      </Flex>
      <Flex alignItems="center" justifyContent="center" flexDir="column" gridGap="2rem">
        <Image src="/assets/images/logo/Logo TEDxITB Hitam.png" height={100} width={200} />
        <Text textAlign="center">This independent TEDx event is operated under license from TED.</Text>
        <Flex d={{ base: "flex", md: "none" }} gridGap="1rem">
          <a href="https://www.instagram.com/tedxitb/" target="_blank" style={{ textDecoration: "none" }}>
            <AiOutlineInstagram size="1.5em" />
          </a>
          <a href="https://www.linkedin.com/company/tedxitb/" target="_blank" style={{ textDecoration: "none" }}>
            <AiFillLinkedin size="1.5em" />
          </a>
        </Flex>
      </Flex>
    </Box>
  );
}
