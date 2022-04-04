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
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import getTransaction from "../../../hooks/transaction/transaction";

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

  console.log(transaction);

  return (
    <Flex w="100%" minH="100vh" justifyContent="center" py="4rem">
      <Table variant="simple" size="sm">
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
                <Td>{i.referralcode}</Td>
                <Td>{`${i.address} ${i.subdistrict} ${i.district} ${i.city} ${i.province} ${i.postcode}`}</Td>
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
    </Flex>
  );
}
