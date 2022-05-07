import {
  Flex,
  Heading,
} from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Close() {
    return(
        <Flex
        bg="linear-gradient(255.02deg, #E62B1E 22.91%, rgba(240, 89, 43, 0.9) 99.42%);"
        w="100%"
        minH="70vh"
        color="white"
        align="center"
        justify="center"
        px="4%"
        py="2%"
      >
        <Flex
          bgImage="/assets/images/background/microblog-wave.png"
          w="90%"
          h="60%"
          py="5rem"
          align="center"
          justify="center"
          gridGap="2rem"
          flexDir="column"
        >
            <AiFillCloseCircle size="10em" color="#E62B1E" />
            <Heading
                fontFamily="HKGrotesk"
                fontWeight="bold"
                fontSize="3em"
                color="black"
                textShadow="0px 4px 4px #00000040"
                textAlign="center"
                >
                Sorry, merch is not available.
            </Heading>
        </Flex>
      </Flex>
    )
}