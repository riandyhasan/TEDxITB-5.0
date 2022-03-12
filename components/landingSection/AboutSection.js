import React from "react";
import { Box, Text, Grid, GridItem, Flex } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box>
      <Text
          fontFamily="HKGrotesk"
          fontWeight="extrabold"
          fontSize={{base: "3rem", sm: "4rem"}}
          color="#E62B1E"
          textShadow="0px 4px 4px #00000040"
          py="40px"
          textAlign="center"
      >
        About TEDx
      </Text>
      <Flex
      direction="column"
      px="100px"
      >
        <Flex
        direction={{base: "column", lg: "row"}}
        py="2%"
        alignItems="center"
        >
          <Box
            flex="1"
            px="20px"
          >
            <Text
              fontFamily="HKGrotesk"
              fontWeight="extrabold"
              fontSize={{base: "2.8rem", sm: "3.8rem"}}
              color="#E62B1E"
              textShadow="0px 4px 4px #00000040"
              textAlign="left"
            >
              What is TEDx?
            </Text>
          </Box>
          <Box
            flex="3"
            px="20px"
          >
            <Text
              fontFamily="HKGrotesk"
              fontWeight="thin"
              fontSize={{base: "0.85rem", sm: "1rem"}}
              color="#000000"
              textAlign="justify"
            >
              In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxITB, where x = independently organized TED event. At our TEDxITB event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
            </Text>
          </Box>
        </Flex>
        <Flex
          direction={{base: "column", lg: "row-reverse"}}
          py="40px"
          alignItems="center"
        >
          <Box
            flex="1"
            px="20px"
          >
            <Text
              fontFamily="HKGrotesk"
              fontWeight="extrabold"
              fontSize={{base: "2.5rem", sm: "3rem"}}
              color="#E62B1E"
              textShadow="0px 4px 4px #00000040"
              textAlign={{base: "left", lg: "right"}}
            >
              TEDxITB 5.0 Daydreamers
            </Text>
          </Box>
          <Box
            flex="3"
            px="20px"
          >
            <Text
              fontFamily="HKGrotesk"
              fontWeight="thin"
              fontSize={{base: "0.85rem", sm: "1rem"}}
              color="#000000"
              textAlign="justify"
            >
              In this TEDxITB event, we would like to invite our audience to take a step into the world of dreams through the theme of daydreamers. To take a journey into a world where the limit is your own imagination. Ideas are the embodiment of dreams. In one way or another, it is a dream that has a plan, like a destination but with the map to get there. the boundaries and redefine their own limitations.
            </Text>
          </Box>
        </Flex>
        
          
      </Flex>
    </Box>
    
  );
};

export default AboutSection;