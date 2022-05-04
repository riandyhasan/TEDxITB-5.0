import React, { useState, useRef } from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { db } from "../../../utils/firebase";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { MdMarkEmailRead } from "react-icons/md";
import emailjs from "emailjs-com";

export default function RegisterEvent({ user, registrant }) {
  let submitted = false;
  registrant.registrant?.map((i) => {
    if (i.id == user.userID) {
      submitted = true;
    }
  });
  const email = user.profile.email;
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phone, setPhone] = useState("");
  const [findEvent, setFindEvent] = useState("1");
  const [findEventOther, setFindEventOther] = useState("");
  const [address, setAddress] = useState("");
  const [ticketType, setTicketType] = useState("1");
  const [vaccinated, setVaccinated] = useState("1");
  const [reasons, setReasons] = useState("");
  const [spread, setSpread] = useState("");
  const toast = useToast();
  const router = useRouter();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();
  const cancelRef = React.useRef();

  function WordCount(str) {
    return str.split(" ").length;
  }

  function findEventValue() {
    let find = "";
    if (findEvent == "1") {
      find = "TEDxITB Instagram";
    } else if (findEvent == "2") {
      find = "Friend";
    } else if (findEvent == "3") {
      find = "LINE/Whatsapp Broadcast";
    } else if (findEvent == "4") {
      find = findEventOther;
    }
    return find;
  }

  const validateForm = () => {
    let err = "";
    if (WordCount(reasons) > 100 || WordCount(spread) > 100) {
      err = "Opinion questions max 100 words!";
    }
    if (reasons == "" || spread == "") {
      err = "Opinion questions are required";
    }
    if (occupation == "") {
      err = "Occupation is required";
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
    onCloseAlert();
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
      } else {
        const today = new Date();
        const early = new Date("2022-05-06");
        const normal = new Date("2022-05-18");
        const late = new Date("2022-05-19");
        let ticketWave = "Out of registration date";
        if (today <= early) {
          ticketWave = "Early bird";
        } else if (today > early && today <= normal) {
          ticketWave = "Normal";
        } else if (today > normal && today <= late) {
          ticketWave = "Late";
        }
        const find = findEventValue();
        await setDoc(doc(db, "event-registrant", user.userID), {
          name: name,
          email: email,
          address: address,
          phone: phone,
          occupation: occupation,
          institution: institution,
          findEvent: find,
          ticketType: ticketType == "1" ? "Offline" : "Online",
          ticketWave: ticketWave,
          vaccinated:
            ticketType == "2" ? "Online" : vaccinated == "1" ? "Yes" : "No",
          reasonQuestion: reasons,
          spreadingQuestion: spread,
        });
        const emailBody = {
          email: email,
          name: name,
        };
        emailjs
          .send("tedxitb5.0", "tedxitb5", emailBody, "QUWx86By2g9osljF4")
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        onOpenModal();
      }
    } catch (e) {
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

  const handleClose = () => {
    onCloseModal();
    router.push("/");
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpenAlert}
        leastDestructiveRef={cancelRef}
        onClose={onCloseAlert}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Submit Form
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to submit the form?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCloseAlert}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={submit} ml={3}>
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpenModal}
        onClose={onCloseModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your form has been submitted successfully!</ModalHeader>
          <ModalBody pb={6}>
            <Text>
              Thank you for registering to TEDxITB 5.0 Daydreamers!
              <br />
              <br />
              We are highly delighted by your interest in contributing to
              broaden the spread of ideas and we will review your responses
              carefully.
              <br />
              <br />
              The following notification will be sent promptly through the
              registered email to announce the selected participants who will
              attend the TEDxITB 5.0 Daydreamers.
              <br />
              <br />
              Please complete the payment once you have received an acceptance
              email and for further information will be included in the mail.
              <br />
              <br />
              Thank you once again for your patience and enthusiasm to attend
              the TEDxITB 5.0 Daydreamers!
              <br />
              <br />
              If you have any questions, please do not hesitate to contact
              <br />
              Fina 081382425880
              <br />
              LINE ID fina24
            </Text>
          </ModalBody>

          <ModalFooter>
            <Box
              color="white"
              bg="brand.gradientRed"
              fontWeight="bold"
              borderRadius="19px"
              px="3rem"
              py="0.4rem"
              cursor="pointer"
              fontSize="0.85em"
              onClick={handleClose}
            >
              Close
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
          {submitted ? (
            <Flex
              w="100%"
              align="center"
              justify="center"
              gridGap="2rem"
              flexDir="column"
            >
              <Heading
                fontFamily="HKGrotesk"
                fontWeight="bold"
                fontSize="2em"
                color="black"
                textShadow="0px 4px 4px #00000040"
                textAlign="center"
              >
                You already submitted the form
              </Heading>
              <MdMarkEmailRead size="10em" color="#E62B1E" />
              <Heading
                fontFamily="HKGrotesk"
                fontWeight="bold"
                fontSize="1.5em"
                color="black"
                textAlign="center"
              >
                Please kindly check your email for confirmation
              </Heading>
            </Flex>
          ) : (
            <>
              <Heading
                fontFamily="HKGrotesk"
                fontWeight="bold"
                fontSize={{ base: "1rem", sm: "2rem", md: "3rem" }}
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
                  fontSize={{ base: "1rem", md: "1.5rem" }}
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
                        borderColor: "black",
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
                    <FormLabel fontSize="1em" htmlFor="occupation">
                      Occupation
                    </FormLabel>
                    <Input
                      fontSize="1em"
                      id="ccupation"
                      placeholder="Occupation"
                      borderRadius="19px"
                      border="2px"
                      borderColor="black"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
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
                    <FormLabel fontSize="1em" htmlFor="findevent">
                      Where did you find out about this event?
                    </FormLabel>
                    <RadioGroup
                      onChange={setFindEvent}
                      value={findEvent}
                      fontSize="1.2em"
                    >
                      <Stack direction="column">
                        <Radio colorScheme="red" value="1">
                          TEDxITB Instagram
                        </Radio>
                        <Radio colorScheme="red" value="2">
                          Friend
                        </Radio>
                        <Radio colorScheme="red" value="3">
                          LINE/Whatsapp Broadcast
                        </Radio>
                        <Flex alignItems="center" gridGap="1.5rem">
                          <Radio colorScheme="red" value="4">
                            Others
                          </Radio>
                          <Input
                            w="30%"
                            fontSize="0.75em"
                            id="findEvent"
                            borderRadius="19px"
                            border="2px"
                            borderColor="black"
                            value={findEventOther}
                            onChange={(e) => setFindEventOther(e.target.value)}
                            isDisabled={findEvent == "4" ? false : true}
                          />
                        </Flex>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel fontSize="1em" htmlFor="tickettype">
                      Ticket Type
                    </FormLabel>
                    <RadioGroup
                      onChange={setTicketType}
                      value={ticketType}
                      fontSize="1.2em"
                    >
                      <Stack direction="row">
                        <Radio colorScheme="red" value="1">
                          Offline
                        </Radio>
                        <Radio colorScheme="red" value="2">
                          Online
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </GridItem>

                {ticketType == "1" ? (
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel fontSize="1em" htmlFor="vaccine">
                        Are you fully vaccinated by third dose/booster?
                      </FormLabel>
                      <RadioGroup
                        onChange={setVaccinated}
                        value={vaccinated}
                        fontSize="1.2em"
                      >
                        <Stack direction="row">
                          <Radio colorScheme="red" value="1">
                            Yes
                          </Radio>
                          <Radio colorScheme="red" value="2">
                            No, but I am willing to do antigen test
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                  </GridItem>
                ) : null}

                <Heading
                  fontFamily="HKGrotesk"
                  fontWeight="bold"
                  fontSize={{ base: "1rem", md: "1.5rem" }}
                  color="black"
                  textAlign="left"
                  mt="2rem"
                >
                  Opinion Questions
                </Heading>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel fontSize="1em">
                      What are your reasons and expectations for coming to
                      TEDxITB? (max. 100 words)
                    </FormLabel>
                    <Textarea
                      placeholder="Max 100 words."
                      minH="200px"
                      fontSize="1em"
                      borderRadius="19px"
                      border="2px"
                      borderColor="black"
                      value={reasons}
                      onChange={(e) => setReasons(e.target.value)}
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel fontSize="1em">
                      How do you want to utilize the ideas you get from TEDxITB
                      to others? (max. 100 words)
                    </FormLabel>
                    <Textarea
                      placeholder="Max 100 words."
                      minH="200px"
                      fontSize="1em"
                      borderRadius="19px"
                      border="2px"
                      borderColor="black"
                      value={spread}
                      onChange={(e) => setSpread(e.target.value)}
                    />
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
                  onClick={onOpenAlert}
                >
                  Submit
                </Box>
              </Flex>
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
}
