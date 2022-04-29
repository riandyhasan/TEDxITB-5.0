import React from "react";
import { Text, Flex, Heading, Image, Grid, GridItem } from "@chakra-ui/react";

const MicroblogHero = () => {
  return (
    <Flex
      w="100vw"
      direction="column"
      >
      <Flex
        bgImage="url('/assets/images/background/microblog.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        h="100vh"
        minH="350px"
        align="center"
        justify="center"
        direction="column"
        p="20px">
        <Heading
          fontFamily="HKGrotesk"
          fontWeight="extrabold"
          fontSize={{ base: "3rem", sm: "4rem", md:"5rem" }}
          color="transparent"
          textAlign="center"
          marginBottom="1vh"
          style={{ WebkitTextStroke: "2px black" }}>
          IDEAS WORTH
        </Heading>
        <Heading
          fontFamily="HKGrotesk"
          fontWeight="extrabold"
          fontSize={{ base: "3rem", sm: "4rem", md:"5rem" }}
          color="white"
          textShadow="0px 4px 4px #00000040"
          marginBottom="1vh">
          SPREADING
        </Heading>
      </Flex>
      <Grid
        bg="url('/assets/images/background/noise.png'), #000000"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        w="100%"
        h="fit-content"       
        bgAttachment="fixed"
        minH="350px"
        py="50px"
      >
        <GridItem
          rowSpan={{ base: 1, lg: 2 }}
          colSpan={{ base: 3, lg: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={{ base: "20px 20px 10px 20px", lg: "20px 60px 10px 160px" }}
      >
        <Heading
          fontFamily="HKGrotesk"
          fontWeight="extrabold"
          fontSize={{ base: "2.6rem", md: "3.6rem" }}
          color="white"
          width="50%"
          textAlign={{ base: "center", lg: "left" }}
          flex="1">
          Reach high, for stars lie hidden in your soul. Dream deep, for every dream precedes the goal.
        </Heading>
      </GridItem>
      <GridItem
        rowSpan="1"
        colSpan="1"
        display={{ base: "none", lg: "flex" }}
        justifyContent="end"
        alignItems="center"
        >
        <Image
          src="/assets/images/background/constellation.png"
          boxSize="20vw"/>
      </GridItem>
      <GridItem
        rowSpan="1"
        colSpan={{ base: 3, lg: 1 }}
        display="flex"
        justifyContent={{ base: "center", lg: "flex-start" }}
        alignItems="center"
        paddingTop={{ base: "0px", lg: "60px" }}
        >
        <Text
          fontFamily="HKGrotesk"
          fontWeight="bold"
          fontStyle="italic"
          fontSize={{ base: "2rem", md: "2.5rem" }}
          color="white"
          px="20px"
        >
          Pamella Vaull--Starr
        </Text>
      </GridItem>
          
      </Grid>
    </Flex>
  );
};

export default MicroblogHero;
