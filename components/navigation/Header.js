import React, { useState } from "react";
import { Box, Text, Flex, Stack } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Merchandise",
    path: "/merchandise",
  },
];

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Flex as="nav" bg="transparent" align="center" justify="space-between" wrap="wrap" w="100%" p="0.75em" paddingLeft={["2em", "4em", "2em"]} paddingRight={["2em", "4em", "2em"]} {...props}>
      <Box cursor="pointer" maxW="25vw">
        <Link href="/">
          <Image src="/assets/images/logo/Logo TEDxITB.png" height={75} width={150} />
        </Link>
      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
      </Box>
      <Box display={{ base: menuOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Stack mt={{ base: menuOpen ? "1em" : "0", md: "0" }} spacing={10} align="center" justify={["center", "space-between", "flex-end", "flex-end"]} direction={["column", "row", "row", "row"]}>
          {LINKS.map((link) => {
            return (
              <Box key={link.name + "-nav"}>
                <Link href={link.path} key={link.name + "-nav"}>
                  <Text fontSize="0.85em" fontWeight="extrabold" cursor="pointer" textAlign="center" textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
                    {link.name}
                  </Text>
                </Link>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Flex>
  );
}
