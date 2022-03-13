import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Alert from "../../reusable/alert/Alert";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const router = useRouter();

  const validateForm = () => {
    let errors = "";
    if (!email || email == "") {
      errors = "Email is required";
    }
    if (!password || password == "") {
      errors = "Password is required";
    }

    return errors;
  };

  const handleLogin = async () => {
    const err = validateForm();
    if (err && err != "") {
      setShowAlert(true);
      setAlertStatus("error");
      setAlertMessage(err);
    } else {
      try {
        const auth = getAuth();
        const userData = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userData);
        setShowAlert(true);
        setAlertMessage("Login success!");
        router.push("/");
      } catch (e) {
        console.log(e);
        setAlertStatus("error");
        var msg = e.message;
        const error = msg.replace("Firebase:", "");
        setAlertMessage(error);
        setShowAlert(true);
      }
    }
  };

  return (
    <>
      <Alert
        show={showAlert}
        setShow={setShowAlert}
        status={alertStatus}
        title={alertMessage}
      />
      <Flex w="100%" minH="100vh">
        <Box
          d={{ base: "none", md: "flex" }}
          alignItems="center"
          w="30%"
          bg="linear-gradient(193.42deg, #F0592B -2.69%, #FF3333 104.89%)"
          px="2rem"
        >
          <Heading color="white">Hello, Daydreamers!</Heading>
        </Box>
        <Flex
          w={{ base: "100%", md: "70%" }}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading textAlign="center" color="brand.tedred">
            Log In
          </Heading>
          <Grid
            gridTemplateColumns="repeat(1, 1fr)"
            gap={4}
            w="100%"
            px={{ base: "2rem", md: "8rem" }}
            py="2rem"
          >
            <GridItem>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="email@gmail.com"
                  borderRadius="19px"
                  border="2px solid #C4C4C4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password here"
                  borderRadius="19px"
                  border="2px solid #C4C4C4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Box
            color="white"
            bg="brand.gradientRed"
            borderRadius="19px"
            px="2rem"
            py="0.4rem"
            cursor="pointer"
            mt="2rem"
            onClick={handleLogin}
          >
            Sign In
          </Box>
          <Text color="#C4C4C4">
            Don’t have an account yet?{" "}
            <a
              href="/register"
              style={{ textDecoration: "none", color: "#E62B1E" }}
            >
              Register
            </a>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
