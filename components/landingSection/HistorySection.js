import React, { useState } from "react";
import { Box, Text, Grid, GridItem, Image, SlideFade } from "@chakra-ui/react";
import VisibilitySensor from 'react-visibility-sensor';

function Card(props) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <VisibilitySensor
      active={!viewPortEntered}
      partialVisibility={true}
      onChange={isVisible => {
        if (isVisible) {
          setViewPortEntered(true);
        }
      }}
    >
      <SlideFade
        in={viewPortEntered}
        offsetY='20px'
        transition={{
          enter: { duration: 0.5 }
        }}
        >
        <Box
          minW={{base: "100px", lg: "200px"}}
          w="80%"
          maxW="340px"
          h="100%"
          bg={props.gradient}
          px="4%"
          py="4%"
          boxShadow="6px 9px 14px rgba(0, 0, 0, 0.25)"
          margin="0 auto"
          >
            <Image
              src={props.logo}
              width="75%"
              display="block"
              margin="auto"
              py="5%" />
            <Text
              style={{WebkitTextStroke: "0.6px white"}}
              fontFamily="HKGrotesk"
              fontWeight="extrabold"
              fontSize="1.6rem"
              color="transparent"
              textAlign="right"
            >
              {props.title}
            </Text>
            <Text
              fontFamily="HKGrotesk"
              fontWeight="semibold"
              fontSize="1rem"
              color="white"
              textAlign="right"
              paddingBottom="10px"
            >
              {props.location}
            </Text>
            <Text
              fontFamily="HKGrotesk"
              fontWeight="thin"
              fontSize="1rem"
              color="white"
            >
              {props.desc}
            </Text>
        </Box>
      </SlideFade>
    </VisibilitySensor>
  );
}

const HistorySection = () => {
  return (
    <Box>
      <Text
          fontFamily="HKGrotesk"
          fontWeight="extrabold"
          fontSize={{base: "3rem", sm: "4rem"}}
          color="#E62B1E"
          textShadow="0px 4px 4px #00000040"
          px="100px"
          paddingTop="60px"
          textAlign={{base: "center", lg: "right"}}
        >
          Previous TEDxITB
        </Text>
      <Grid
        h="max-content"
        w='100vw'
        templateRows='repeat(4, 1fr)'
        templateColumns='repeat(4, 1fr)'
        bg="white"
        px={{base: "0px", lg: "100px"}}
        justifyItems="center"
      >
        <GridItem
          rowSpan={{base: 1, lg: 2, xl: 4}}
          colSpan={{base: 4, lg: 2, xl: 1}}
          display="flex"
          alignItems="stretch"
          py="60px"
          >
          <Card 
            logo="../assets/images/landingPage/Logo TEDxITB 1.png"
            gradient="linear-gradient(180deg, #F6F6F6 0%, #e4382c 100%)"
            title="TEDxITB 1.0"
            location="May 25, 2018 - Freeport Building, SBM ITB"
            desc="In its first ever appearance, TEDxITB aims to break the boundaries standing in between our norms and what is beyond the grasp."
          />
        </GridItem>
        <GridItem
          rowSpan={{base: 1, lg: 2, xl: 4}}
          colSpan={{base: 4, lg: 2, xl: 1}}
          display="flex"
          alignItems="stretch"
          py="60px"
          >
            <Card 
              logo="../assets/images/landingPage/Logo TEDxITB 2.png"
              gradient="linear-gradient(353.41deg, #E62B1E 4.6%, rgba(244, 132, 98, 0.38) 90.68%)"
              title="TEDxITB 2.0"
              location="November 24, 2018 - Nu Art Gallery"
              desc="Seeing things from a different perspective that could lead us to act beyond our impulses, to rethink, and relearn."
            />
        </GridItem>
        <GridItem
          rowSpan={{base: 1, lg: 2, xl: 4}}
          colSpan={{base: 4, lg: 2, xl: 1}}
          display="flex"
          alignItems="stretch"
          py="60px"
        >
          <Card 
              logo="../assets/images/landingPage/Logo TEDxITB 3.png"
              gradient="linear-gradient(180deg, #FFAAAA 0%, #E62B1E 100%)"
              title="TEDxITB 3.0"
              location="November 16, 2019 - Selasar Sunaryo"
              desc="In the increasingly interconnected world of today, we navigate our lives through the effects of an overwhelming number of the things happening in the background."
          />
        </GridItem>
        <GridItem
          rowSpan={{base: 1, lg: 2, xl: 4}}
          colSpan={{base: 4, lg: 2, xl: 1}}
          display="flex"
          alignItems="stretch"
          py="60px"
        >
          <Card 
              logo="../assets/images/landingPage/Logo TEDxITB 4.png"
              gradient="linear-gradient(354.09deg, #FF3333 3.94%, rgba(240, 90, 43, 0.68) 88.98%)"
              title="TEDxITB 4.0"
              location="April 18, 2021 - Online"
              desc="The power of life metamorphosis guides us to another level of development in recognizing and maximizing each opportunity to bring changes for the world."
          />
        </GridItem>
      </Grid>
    </Box>
    
  );
};

export default HistorySection;