import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
      overflowX="hidden"
      {...props}
    >
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
}
