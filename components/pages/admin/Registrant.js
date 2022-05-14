import React, { useState } from "react";
import {
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Text,
  useDisclosure,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from "@chakra-ui/react";
import { db } from "../../../utils/firebase";
import { updateDoc, doc } from "firebase/firestore";
import XLSX from "xlsx";
import emailjs from "emailjs-com";

export default function EventRegistrant({data}) {
  const registrant = data.registrant;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [id, setID] = useState();
  const [email, setEmail] = useState();
  const [type, setType] = useState();


  const downloadExcel = () => {
    XLSX = require("xlsx");
    const worksheet = XLSX.utils.json_to_sheet(registrant);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    let today = new Date();
    today.toISOString().split("T")[0];
    XLSX.writeFile(workbook, `Event Registrant TEDxITB - ${today}.xlsx`);
  };

  const handleClose = () => {
    setID("");
    setEmail("");
    setType("");
    onClose();
  }

  const handleSendEmail = (id, email, type) => {
    setID(id);
    setEmail(email);
    setType(type);
    onOpen();
  }

  async function sendEmail(){
    try{
      const docRef = doc(db, "event-registrant", id);
      await updateDoc(docRef, {
        isEmailSend: true,
      });
      const emailBody = {
        email: email,
      };
      let emailType = "normal";
      if(type == "Normal"){
        emailType = "normal";
      }else{
        emailType = "early"
      }
      emailjs
      .send("tedxitb", emailType, emailBody, "xAzVAXE_gxwM2kw11")
      .then(
        (result) => {
          onClose();
          toast({
            title: "Email send!",
            description: "The confirmation email sent successfully",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    }catch(e){
      console.log(e)
    }
  }

  let online = 0;
  let offline = 0;
  let normal = 0;
  let earlybird = 0;

  registrant?.map((i) =>{
    if(i.ticketType == "Online"){
      online += 1;
    }else if(i.ticketType == "Offline"){
      offline += 1;
    }
    if(i.ticketWave == "Early Bird" || i.ticketWave == "Early bird"){
      earlybird += 1;
    }else if(i.ticketWave == "Normal"){
      normal += 1;
    }
  })


  return (
    <>
          <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Send Email
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure to send the confirmation email for {email} ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button  onClick={handleClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={sendEmail} ml={3}>
                Send
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    <Flex w="80%" minH="80vh" flexDir="column">
      <Flex w="100%" justifyContent="space-between" alignItems="center" my="1rem">
        <Box color="brand.tedred">
          <Text>Total Registrants: {registrant ? registrant.length : 0}</Text>
          <Flex gridGap="1rem"> 
            <Text>Offline: {offline}</Text>
            <Text>Online: {online}</Text>
          </Flex>
          <Flex gridGap="1rem"> 
            <Text>Early Bird: {earlybird}</Text>
            <Text>Normal: {normal}</Text>
          </Flex>
        </Box>
        <Box
          color="white"
          bg="brand.gradientRed"
          fontWeight="bold"
          borderRadius="19px"
          px="3rem"
          py="0.4rem"
          cursor="pointer"
          fontSize="0.85em"
          onClick={downloadExcel}
        >
          Download Data
        </Box>
      </Flex>
      <Box
        overflowX="auto"
        overflowY="auto"
        maxH="60vh"
        whiteSpace="nowrap"
        display="inline-block"
      >
        <Table>
          <Thead>
            <Th>Email</Th>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Phone</Th>
            <Th>Occupation</Th>
            <Th>Institution</Th>
            <Th>Ticket Type</Th>
            <Th>Ticket Wave</Th>
            <Th>Are you fully vaccinated by third dose/booster?</Th>
            <Th>Where did you find out about this event?</Th>
            <Th>
              What are your reasons and expectations for coming to TEDxITB?
            </Th>
            <Th>
              How do you want to utilize the ideas you get from TEDxITB to
              others?
            </Th>
            <Th>
              Action
            </Th>
          </Thead>
          <Tbody>
            {registrant && registrant.length ? (
              registrant.map((i) => (
                <Tr>
                  <Td>{i.email}</Td>
                  <Td>{i.name}</Td>
                  <Td>{i.address}</Td>
                  <Td>{i.phone}</Td>
                  <Td>{i.occupation}</Td>
                  <Td>{i.institution}</Td>
                  <Td>{i.ticketType}</Td>
                  <Td>{i.ticketWave}</Td>
                  <Td>{i.vaccinated}</Td>
                  <Td>{i.findEvent}</Td>
                  <Td>{i.reasonQuestion}</Td>
                  <Td>{i.spreadingQuestion}</Td>
                  <Td>
                  {i.isEmailSend ?
                  <Text color="brand.tedred" textAlign="center">Sent</Text>
                  :
                  <Box
                    color="white"
                    bg="brand.gradientRed"
                    fontWeight="bold"
                    borderRadius="19px"
                    px="3rem"
                    py="0.4rem"
                    cursor="pointer"
                    fontSize="0.85em"
                    onClick={() => handleSendEmail(i.id, i.email, i.ticketWave)}
                  >
                    Send Email
                  </Box>
                  }
                  </Td>
                </Tr>
              ))
            ) : (
              <Heading>No Registrant</Heading>
            )}
          </Tbody>
        </Table>
      </Box>
    </Flex>
    </>

  );
}
