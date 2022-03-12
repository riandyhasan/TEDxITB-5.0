import React, { useState } from "react";
import { Flex, Box, Heading, Grid, GridItem, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex w="100%" minH="100vh">
      <Box d="flex" alignItems="center" w="30%" bg="linear-gradient(193.42deg, #F0592B -2.69%, #FF3333 104.89%)" px="2rem">
        <Heading color="white">Hello, Daydreamers!</Heading>
      </Box>
      <Flex w="70%" flexDir="column" justifyContent="center" alignItems="center">
        <Heading textAlign="center" color="brand.tedred">
          Log In
        </Heading>
        <Grid gridTemplateColumns="repeat(1, 1fr)" gap={4} w="100%" px="8rem" py="2rem">
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input type="email" id="email" placeholder="email@gmail.com" borderRadius="19px" border="2px solid #C4C4C4" />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" placeholder="Enter your password here" borderRadius="19px" border="2px solid #C4C4C4" />
            </FormControl>
          </GridItem>
        </Grid>
        <Box color="white" bg="brand.gradientRed" borderRadius="19px" px="2rem" py="0.4rem" cursor="pointer" mt="2rem">
          Sign In
        </Box>
        <Text color="#C4C4C4">
          Don’t have an account yet?{" "}
          <a href="/register" style={{ textDecoration: "none", color: "#E62B1E" }}>
            Register
          </a>
        </Text>
      </Flex>
    </Flex>
  );
}
