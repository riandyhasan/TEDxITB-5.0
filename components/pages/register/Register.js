import React, { useState } from "react";
import { Flex, Box, Heading, Grid, GridItem, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import Alert from "../../reusable/alert/Alert"
import { db } from "../../../utils/firebase";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { useRouter } from "next/router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const router = useRouter();

  const validateForm = () => {
    let errors = "";
    if (!name || name == "") {
      errors = "Name is required";
    }
    if (!email || email == "") {
      errors = "Email is required";
    }
    if (!password || password == "") {
      errors = "Password is required";
    }
    if (!validate || password !== validate) {
      errors = "Confirm password is not equal to password";
    }

    return errors;
  };

  const handleRegister = async () => {
    const err = validateForm();
    if (err && err != ""){
      setShowAlert(true);
      setAlertStatus("error");
      setAlertMessage(err);
    }else{
      try {
        const auth = getAuth();
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {displayName: name});
        await setDoc(doc(db, "user", user.uid), {
            name: name,
            email: user.email,
          })
          setShowAlert(true);
          setAlertMessage("Register success!");
          router.push("/");
      } catch (e) {
        setShowAlert(true);
        setAlertStatus("error");
        var msg = e.message;
        const error = msg.replace("Firebase:", "");
        setAlertMessage(error);
      }

    }
  }

  return (
    <>
    <Alert
      show={showAlert}
      setShow={setShowAlert}
      status={alertStatus}
      title={alertMessage}
    />
    <Flex w="100%" minH="100vh">
      <Box d={{ base:"none", md: "flex" }} alignItems="center" w="30%" bg="linear-gradient(193.42deg, #F0592B -2.69%, #FF3333 104.89%)" px="2rem">
        <Heading color="white">Are you ready to be a Daydreamer?</Heading>
      </Box>
      <Flex w={{ base: "100%", md:"70%" }} flexDir="column" justifyContent="center" alignItems="center" py={{ base: "2rem", sm: "0rem" }}>
        <Heading textAlign="center" color="brand.tedred">
          Register
        </Heading>
        <Grid gridTemplateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }} gap={4} w="100%" px="2rem" py="2rem">
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input type="email" id="email" placeholder="email@gmail.com" value={email} borderRadius="19px" border="2px solid #C4C4C4" onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <Input id="name" placeholder="John Doe" borderRadius="19px" value={name} border="2px solid #C4C4C4" onChange={(e) => setName(e.target.value)}/>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" placeholder="Enter your password here" value={password} borderRadius="19px" border="2px solid #C4C4C4" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
              <Input id="confirm-password" type="password" placeholder="Confirm your password here" value={validate} borderRadius="19px" border="2px solid #C4C4C4" onChange={(e) => setValidate(e.target.value)}/>
            </FormControl>
          </GridItem>
        </Grid>
        <Box color="white" bg="brand.gradientRed" borderRadius="19px" px="2rem" py="0.4rem" cursor="pointer" mt="2rem" onClick={handleRegister}>
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
    </>
  );
}
