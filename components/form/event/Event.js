import React, { useState, useEffect } from "react";
import { 
  Box, 
  Text, 
  Flex,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  Radio,
  RadioGroup,
  Textarea,
  useToast, 
  } from "@chakra-ui/react";
import { db } from "../../../utils/firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";

export default function RegisterEvent({user}) {
  const email = user.profile.email;
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [ticketType, setTicketType] = useState("1");
  const [vaccinated, setVaccinated] = useState("1");
  const [reasons, setReasons] = useState("");
  const [spread, setSpread] = useState("");
  const toast = useToast();
  const router = useRouter();

  function WordCount(str) { 
    return str.split(" ").length;
  }
  
  const validateForm = () => {
    let err = "";
    if(WordCount(reasons) > 100 || WordCount(spread) > 100){
      err = "Opinion questions max 100 words!"
    }
    if(reasons == "" || spread == ""){
      err = "Opinion questions are required"
    }
    if (!address || address == "") {
      err = "Address is required";
    }
    if (!institution || institution == "") {
      err = "Institution is required";
    }
    if (!phone || phone == "") {
      err = "Phone Number is required";
    }
    if (!name || name == "") {
      err = "Name is required";
    }

    return err;
  };

  const submit = async () => {
    try {
      const err = validateForm();
      if (err != "") {
        toast({
          title: "Error!",
          description: err,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
      else{
      const today = new Date();
      const early = new Date('2022-05-04')
      const normal = new Date ('2022-05-17')
      const late = new Date ('2022-05-19')
      let ticketWave = "Out of registration date";
      if(today <= early){
        ticketWave = "Early bird";
      }else if(today > early && today <= normal){
        ticketWave = "Normal";
      }else if(today > normal && today <= late){
        ticketWave = "Late";
      }
      await addDoc(collection(db, "event-registrant"), {
        name: name,
        email: email,
        address: address,
        phone: phone,
        institution: institution,
        ticketType: ticketType == '1' ? 'Offline' : 'Online',
        ticketWave: ticketWave,
        vaccinated: ticketType == '2' ? 'Online' : vaccinated == '1' ? 'Yes' : 'No',
        reasonQuestion: reasons,
        spreadingQuestion: spread,
      });

      toast({
        title: "Success!",
        description: "Your form has been submitted successfully!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      router.push("/");
    }

    } catch (e) {
      console.log(e);
      var msg = e.message;
      const error = msg.replace("Firebase:", "");
      toast({
        title: "Error!",
        description: error,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      bg="linear-gradient(255.02deg, #E62B1E 22.91%, rgba(240, 89, 43, 0.9) 99.42%);" 
      bgSize="fill"
      w="100%"
      h="fit-content"
      justify="center"
      py="5rem"
    >
      <Flex
        bgImage="/assets/images/background/microblog-wave.png"
        w="90%"
        h="fit-content"
        px="4%"
        py="2%"
        flexWrap="wrap"
        justifyContent="space-evenly"
        >

          <Heading
          fontFamily="HKGrotesk"
          fontWeight="bold"
          fontSize={{ base: "1rem", sm: "2rem", md:"3rem" }}
          color="black"
          textShadow="0px 4px 4px #00000040"
          textAlign="center"
          >
          Please Fill The Register Form
        </Heading>

          <Grid gridTemplateColumns="repeat(1, 1fr)" gap={4} w="100%">
          <Heading
          fontFamily="HKGrotesk"
          fontWeight="bold"
          fontSize={{ base: "0.75rem", sm: "1rem", md:"1.5rem" }}
          color="black"
          textAlign="left"
          mt="2rem"
          >
          Personal Data
        </Heading>
          <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="1em" htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  fontSize="1em"
                  id="name"
                  borderRadius="19px"
                  border="2px"
                  borderColor="black"
                  isDisabled={true}
                  value={email}
                  _hover={{
                    borderColor:"black"
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="1em" htmlFor="name">
                  Full Name
                </FormLabel>
                <Input
                  fontSize="1em"
                  id="name"
                  placeholder="Full Name"
                  borderRadius="19px"
                  border="2px"
                  borderColor="black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="1em" htmlFor="institution">
                  Institution
                </FormLabel>
                <Input
                  fontSize="1em"
                  id="institution"
                  placeholder="Institution"
                  borderRadius="19px"
                  border="2px"
                  borderColor="black"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="1em" htmlFor="phone">
                  Phone Number
                </FormLabel>
                <Input
                  fontSize="1em"
                  id="phone"
                  placeholder="+62"
                  borderRadius="19px"
                  border="2px"
                  borderColor="black"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="1em" htmlFor="address">
                  Full Address
                </FormLabel>
                <Input
                  fontSize="1em"
                  id="address"
                  placeholder="Full Address"
                  borderRadius="19px"
                  border="2px"
                  borderColor="black"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="1em" htmlFor="tickettype">
                  Ticket Type
                </FormLabel>
                <RadioGroup onChange={setTicketType} value={ticketType} fontSize="1.2em">
                <Stack direction='row'>
                  <Radio colorScheme='red' value='1'>Offline</Radio>
                  <Radio colorScheme='red' value='2'>Online</Radio>
                </Stack>
              </RadioGroup>
              </FormControl>
            </GridItem>

            {ticketType == "1" ? 
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="1em" htmlFor="vaccine">
                  Are you fully vaccinated by third dose/booster?
                </FormLabel>
                <RadioGroup onChange={setVaccinated} value={vaccinated} fontSize="1.2em">
                <Stack direction='row'>
                  <Radio colorScheme='red' value='1'>Yes</Radio>
                  <Radio colorScheme='red' value='2'>No, but I am willing to do antigen test</Radio>
                </Stack>
              </RadioGroup>
              </FormControl>
            </GridItem>
            : 
            null}
          
          <Heading
          fontFamily="HKGrotesk"
          fontWeight="bold"
          fontSize={{ base: "0.75rem", sm: "1rem", md:"1.5rem" }}
          color="black"
          textAlign="left"
          mt="2rem"
          >
          Opinion Questions
        </Heading>

        <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize="1em">
              What are your reasons and expectations for coming to TEDxITB? (max. 100 words)
              </FormLabel>
              <Textarea 
              placeholder="Max 100 words."
              minH='200px' 
              fontSize="1em"
              borderRadius="19px"
              border="2px"
              borderColor="black"
              value={reasons} 
              onChange={(e) => setReasons(e.target.value)}/>
            </FormControl>
        </GridItem>

        <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize="1em">
              How will you spread the ideas from TEDxITB to other people? (max. 100 words)
              </FormLabel>
              <Textarea 
              placeholder="Max 100 words."
              minH='200px' 
              fontSize="1em"
              borderRadius="19px"
              border="2px"
              borderColor="black"
              value={spread} 
              onChange={(e) => setSpread(e.target.value)}/>
            </FormControl>
        </GridItem>


          </Grid>

          <Flex w="100%" justifyContent="flex-end" mt="3rem">
          <Box
            color="white"
            bg="brand.gradientRed"
            fontWeight="bold"
            borderRadius="19px"
            px="3rem"
            py="0.4rem"
            cursor="pointer"
            fontSize="0.85em"
            onClick={submit}
          >
            Submit
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};


