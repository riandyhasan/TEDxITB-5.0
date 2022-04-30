import React, { useRef } from "react";
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
} from "@chakra-ui/react";
import getRegistrant from "../../../hooks/registrant/registrant";
import XLSX from "xlsx";

export default function EventRegistrant() {
  const data = getRegistrant();
  const registrant = data.registrant;

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

  return (
    <Flex w="80%" minH="80vh" flexDir="column">
      <Flex w="100%" justifyContent="flex-end" my="1rem">
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
                </Tr>
              ))
            ) : (
              <Heading>No Registrant</Heading>
            )}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
}
