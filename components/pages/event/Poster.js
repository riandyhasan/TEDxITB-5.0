import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Event({ user }) {
  const router = useRouter();

  const registerNow = () => {
    if (user.data) {
      router.push("/event/register");
    } else {
      router.push("/login");
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
        flexDir="column"
        align="center"
      >
        <Heading
          fontFamily="HKGrotesk"
          fontWeight="bold"
          fontSize={{ base: "1rem", sm: "2rem", md: "3rem" }}
          color="black"
          textShadow="0px 4px 4px #00000040"
          textAlign="center"
          my="2rem"
        >
          Our Main Event
        </Heading>

        <Flex gridGap="2rem" justify="center" alignItems={{base: "center", md:"flex-start"}} flexDir={{base:"column", md:"row"}}>
          <Box w={{ base: "200px", md: "350px" }}>
            <Image src="/assets/images/poster/early-bird-event.png"/ />
          </Box>
          <Text maxW={{base:"90%", md:"40%"}} mt="1rem" fontSize="1.1em">
            We would like to invite our audience to take a step into the world
            of dreams through the theme of daydreamers. To take a journey into a
            world where the limit is your own imagination. Ideas are the
            embodiment of dreams, in one way or another, it is a dream that has
            a plan, like a destination but with the map to get there. Therefore,
            TEDxITB 5.0 Daydreamers' main event will welcome 6 prestigious
            speakers with an amazing sequence of interactive and fun activities
            to build the best TEDxITB 5.0 experience!
            <br />
            <br />
            If you have any questions, please do not hesitate to contact
            <br />
            Fina 081382425880
            <br />
            LINE ID fina24
          </Text>
        </Flex>
        <Box
          color="white"
          bg="brand.gradientRed"
          fontWeight="bold"
          borderRadius="19px"
          px="3rem"
          py="0.8rem"
          cursor="pointer"
          fontSize="1.3em"
          mt="2rem"
          onClick={registerNow}
        >
          Register Now
        </Box>
      </Flex>
    </Flex>
  );
}
