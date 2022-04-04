import React, { useState } from "react";
import { Text, Grid, GridItem, Fade, SlideFade, Box } from "@chakra-ui/react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const DataCount = ({ desc, className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <Box>
      <CountUp {...rest} start={viewPortEntered ? null : 0}>
        {({ countUpRef }) => {
          return (
            <VisibilitySensor
              active={!viewPortEntered}
              onChange={(isVisible) => {
                if (isVisible) {
                  setViewPortEntered(true);
                }
              }}
              delayedCall
            >
              <Fade in={viewPortEntered}>
                <Text
                  className={className}
                  ref={countUpRef}
                  fontFamily="HKGrotesk"
                  fontWeight="extrabold"
                  fontSize="4rem"
                  color="#E62B1E"
                  style={{ WebkitTextStroke: "1px white" }}
                  textShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
                  textAlign={{ base: "center", xl: "left" }}
                />
              </Fade>
            </VisibilitySensor>
          );
        }}
      </CountUp>
      <VisibilitySensor
        active={!viewPortEntered}
        onChange={(isVisible) => {
          if (isVisible) {
            setViewPortEntered(true);
          }
        }}
        delayedCall
      >
        <SlideFade in={viewPortEntered} offsetX="-20px">
          <Text
            fontFamily="HKGrotesk"
            fontWeight="semibold"
            fontSize={{ base: "1.8rem", sm: "2rem" }}
            color="#FF3333"
            bg="white"
            width="fit-content"
            paddingX="8px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            textAlign={{ base: "center", xl: "left" }}
          >
            {desc}
          </Text>
        </SlideFade>
      </VisibilitySensor>
    </Box>
  );
};

const NumbersSection = () => {
  return (
    <Grid
      h="fit-content"
      w="100vw"
      templateRows={{ base: "repeat(5, 1fr)", md: "repeat(6, 1fr)" }}
      templateColumns="repeat(10, 1fr)"
      bg="#E62B1E"
      py="10vh"
    >
      <GridItem
        rowSpan={{ base: 1, md: 2, xl: 6 }}
        colSpan={{ base: 10, xl: 4 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={{ base: "20px", md: "100px" }}
      >
        <Text
          fontFamily="HKGrotesk"
          fontWeight="extrabold"
          fontSize={{ base: "3rem", sm: "4rem" }}
          color="white"
          textShadow="7px 5px 5px #00000040"
          textAlign={{ base: "center", xl: "left" }}
        >
          TEDxITB in Numbers
        </Text>
      </GridItem>
      <GridItem
        rowSpan={{ base: 1, md: 2, xl: 3 }}
        colSpan={{ base: 10, md: 5, xl: 3 }}
        display="flex"
        justifyContent="center"
        alignItems={{ base: "center", xl: "flex-start" }}
        flexDirection="column"
        py="20px"
      >
        <DataCount
          className="count"
          end={1000}
          prefix="+"
          desc="Online participants"
        />
      </GridItem>
      <GridItem
        rowSpan={{ base: 1, md: 2, xl: 3 }}
        colSpan={{ base: 10, md: 5, xl: 3 }}
        display="flex"
        justifyContent="center"
        alignItems={{ base: "center", xl: "flex-start" }}
        flexDirection="column"
        py="20px"
      >
        <DataCount
          className="count"
          end={5000}
          prefix="+"
          desc="Total online followers"
        />
      </GridItem>
      <GridItem
        rowSpan={{ base: 1, md: 2, xl: 3 }}
        colSpan={{ base: 10, md: 5, xl: 3 }}
        display="flex"
        justifyContent="center"
        alignItems={{ base: "center", xl: "flex-start" }}
        flexDirection="column"
        py="20px"
      >
        <DataCount
          className="count"
          end={28.9}
          decimals={1}
          suffix="k"
          prefix="+"
          desc="Total video views"
        />
      </GridItem>
      <GridItem
        rowSpan={{ base: 1, md: 2, xl: 3 }}
        colSpan={{ base: 10, md: 5, xl: 3 }}
        display="flex"
        justifyContent="center"
        alignItems={{ base: "center", xl: "flex-start" }}
        flexDirection="column"
        py="20px"
      >
        <DataCount
          className="count"
          end={500}
          prefix="+"
          desc="Tickets sold out"
        />
      </GridItem>
    </Grid>
  );
};

export default NumbersSection;
