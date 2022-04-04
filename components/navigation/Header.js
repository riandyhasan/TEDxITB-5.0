import React, { useState } from "react";
import { Box, Text, Flex, Stack } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useUser from "../../hooks/user/user";
import { getAuth, signOut } from "firebase/auth";

const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Merchandise",
    path: "/merchandise",
  },
  {
    name: "Microblog",
    path: "/microblog",
  }
];

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useUser();
  const router = useRouter();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Flex
      as="nav"
      bgImg="url('/assets/images/background/navbar.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py="0.4rem"
      paddingLeft={["2em", "4em", "2em"]}
      paddingRight={["2em", "4em", "2em"]}
      {...props}
    >
      <Box cursor="pointer" maxW="25vw" mt="0.2rem">
        <Link href="/">
          <Image
            src="/assets/images/logo/Logo TEDxITB.png"
            height={33}
            width={133}
          />
        </Link>
      </Box>
      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
      </Box>
      <Box
        display={{ base: menuOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          mt={{ base: menuOpen ? "1em" : "0", md: "0" }}
          spacing={10}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
        >
          {LINKS.map((link) => {
            return (
              <Box key={link.name + "-nav"}>
                <Link href={link.path} key={link.name + "-nav"}>
                  <Text
                    fontSize="0.9em"
                    fontWeight="extrabold"
                    cursor="pointer"
                    textAlign="center"
                    textShadow="0px 2.3px 1.6px rgba(0, 0, 0, 0.35)"
                    color="brand.tedred"
                  >
                    {link.name}
                  </Text>
                </Link>
              </Box>
            );
          })}
          {user.data && user.profile.admin == 1 ? (
            <Box>
              <Link href="/transaction">
                <Text
                  fontSize="0.9em"
                  fontWeight="extrabold"
                  cursor="pointer"
                  textAlign="center"
                  textShadow="0px 2.3px 1.6px rgba(0, 0, 0, 0.35)"
                  color="brand.tedred"
                >
                  Transaction
                </Text>
              </Link>
            </Box>
          ) : null}
          {user.data ? (
            <Box
              px="2rem"
              py="0.3rem"
              bg="brand.tedred"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="20px"
              cursor="pointer"
              fontSize="0.8em"
              onClick={handleSignOut}
            >
              <Text color="white" textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
                Log Out
              </Text>
            </Box>
          ) : (
            <Link href="/register">
              <Box
                px="2rem"
                py="0.3rem"
                bg="brand.tedred"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="20px"
                cursor="pointer"
                fontSize="0.8em"
              >
                <Text
                  color="white"
                  textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  Register
                </Text>
              </Box>
            </Link>
          )}
        </Stack>
      </Box>
    </Flex>
  );
}
