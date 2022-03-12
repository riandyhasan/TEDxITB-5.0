import React, { useState } from "react";
import { Flex, Box, Heading, Grid, GridItem, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("");

  return (
    <Flex w="100%" minH="100vh">
      <Box d="flex" alignItems="center" w="30%" bg="linear-gradient(193.42deg, #F0592B -2.69%, #FF3333 104.89%)" px="2rem">
        <Heading color="white">Are you ready to be a Daydreamer?</Heading>
      </Box>
      <Flex w="70%" flexDir="column" justifyContent="center" alignItems="center">
        <Heading textAlign="center" color="brand.tedred">
          Register
        </Heading>
        <Grid gridTemplateColumns="repeat(2, 1fr)" gap={4} w="100%" px="2rem" py="2rem">
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input type="email" id="email" placeholder="email@gmail.com" value={email} borderRadius="19px" border="2px solid #C4C4C4" />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <Input id="name" placeholder="John Doe" borderRadius="19px" value={name} border="2px solid #C4C4C4" />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" placeholder="Enter your password here" value={password} borderRadius="19px" border="2px solid #C4C4C4" />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
              <Input id="confirm-password" type="password" placeholder="Confirm your password here" value={validate} borderRadius="19px" border="2px solid #C4C4C4" />
            </FormControl>
          </GridItem>
        </Grid>
        <Box color="white" bg="brand.gradientRed" borderRadius="19px" px="2rem" py="0.4rem" cursor="pointer" mt="2rem">
          Create Account
        </Box>
        <Text color="#C4C4C4">
          Already have an account?{" "}
          <a href="/login" style={{ textDecoration: "none", color: "#E62B1E" }}>
            Sign in
          </a>
        </Text>
      </Flex>
    </Flex>
  );
}
