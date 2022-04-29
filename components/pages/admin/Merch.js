import React, {useRef} from 'react';
import {
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  OrderedList,
  ListItem,
  Box
} from "@chakra-ui/react";
import getTransaction from "../../../hooks/transaction/transaction";
import XLSX from "xlsx";

export default function MerchDetail() {
  const data = getTransaction();
  const transaction = data.transaction;

  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });

  const getItems = (data) => {
    let items = "";
    data?.map((q, i) => (items += `${i + 1}. ${q}<br />`));
    const tags = <>{items}</>;
    return tags;
  };

  const tableRef = useRef(null);
  
  const downloadExcel = () => {
    XLSX = require('xlsx');
    const worksheet = XLSX.utils.json_to_sheet(transaction);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    let today = new Date()
    today.toISOString().split('T')[0]
    XLSX.writeFile(workbook, `Merch TEDxITB - ${today}.xlsx`);
  };



  return (
    <Flex w="80%" minH="80vh" flexDir="column"
    >
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
        <Box overflowX="auto" overflowY="auto" maxH="60vh"  whiteSpace="nowrap" display='inline-block'>
      <Table ref={tableRef}>
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>Name</Th>
            <Th>Item</Th>
            <Th>Total</Th>
            <Th>Referral Code</Th>
            <Th>Address</Th>
            <Th>Shipping</Th>
            <Th>Payment proof</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transaction && transaction.length ? (
            transaction.map((i) => (
              <Tr>
                <Td>{i.email}</Td>
                <Td>{i.name}</Td>
                <Td>
                  <OrderedList>
                    {i.item?.map((q) => (
                      <ListItem>{q}</ListItem>
                    ))}
                  </OrderedList>
                </Td>
                <Td>{formatter.format(String(i.total))}</Td>
                {}
                <Td>{i.referralcode}</Td>
                {i.shipping == 'pickup' ?  <Td>Offline</Td> : <Td>{`${i.address} ${i.subdistrict} ${i.district} ${i.city} ${i.province} ${i.postcode}`}</Td> }
                <Td>{i.shipping}</Td>
                <Td color="red">
                  <a href={i.proof} target="_blank">
                    Proof
                  </a>
                </Td>
              </Tr>
            ))
          ) : (
            <Heading>No Transaction</Heading>
          )}
        </Tbody>
      </Table>
      </Box>
      </Flex>
  );
}
