import React from "react";
import { Box, Text, Flex, Heading, Image, ScaleFade, Fade } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex
      bg="linear-gradient(255.02deg, #E62B1E 22.91%, rgba(240, 89, 43, 0.9) 99.42%);"
      bgSize="fill"
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <ScaleFade
        in={true}
        initialScale="0.8"
        transition={{
          enter: { duration: 2 }
        }}
      >
        <Flex 
          bgImage="url('/assets/images/landingPage/header pic.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={{base: "770px", md: "contain"}}
          w="100vw"
          h="100vh"
          align="center"
          justify="center"
          direction="column">
            <Image
              borderRadius='full'
              maxW="200px"
              w="30%"
              minW="140px"
              h="auto"
              src="../assets/images/landingPage/Logo TEDxITB 5.png"
              bg="white"
              alt='Logo TEDxITB 5.0'
            />
            <Box marginTop={{base:"6vh", sm: "10vh"}}/>
            <Heading
              fontFamily="HKGrotesk"
              fontWeight="extrabold"
              fontSize="4rem"
              color="white"
              textShadow="7px 6px 3px #00000040"
              marginBottom="1vh"
              textAlign="center"
              >
                TEDxITB 5.0
            </Heading>
            <Text
              fontFamily="HKGrotesk"
              fontWeight="normal"
              fontSize="2xl"
              color="white"
              textShadow="7px 6px 3px #00000040"
            >
              Tagline Tagline Tagline
            </Text>
        </Flex>
      </ScaleFade>
    </Flex>
  );
};

export default HeroSection;