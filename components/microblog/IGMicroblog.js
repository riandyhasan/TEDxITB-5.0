import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  useTheme,
  useDisclosure,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

function Card(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();
  return (
    <>
      <Box
        as="button"
        w="320px"
        h="auto"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        color="#4b4f56"
        my="20px"
        _active={{
          transform: "scale(0.96)",
        }}
        boxShadow="-5px 5px 30px rgba(0, 0, 0, 0.2)"
        onClick={onOpen}
      >
        <Image
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _hover={{ filter: "brightness(90%)" }}
          src={props.image}
          boxSize="320px"
          objectFit="cover"
          borderRadius="5px"
        />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent
          bg="linear-gradient(203.74deg, #FF3333 -12.79%, #FF3333 -12.78%, #FF7B55 75.36%)"
          p="20px"
        >
          <ModalCloseButton color="white" />
          <ModalBody>
            <Image
              src={props.image}
              boxSize="auto"
              objectFit="cover"
              borderRadius="5px"
              py="10px"
            />
            <Text
              fontFamily="HKGrotesk"
              fontWeight="bold"
              fontSize="1rem"
              color="white"
              py="10px"
            >
              {props.title}
            </Text>
            <Text
              fontFamily="HKGrotesk"
              fontSize="1rem"
              color="white"
              py="10px"
            >
              {props.desc}
              <Link
                href={props.link}
                fontFamily="HKGrotesk"
                fontSize="1rem"
                color={theme.colors.brand.tedred}
                isExternal
              >
                {" "}
                Read More
              </Link>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

const IGMicroblog = ({ data }) => {
  return (
    <Flex
      bg="linear-gradient(255.02deg, #E62B1E 22.91%, rgba(240, 89, 43, 0.9) 99.42%);"
      bgSize="fill"
      w="100%"
      h="fit-content"
      justify="center"
    >
      <Flex
        bgImage="/assets/images/background/microblog-wave.png"
        w="90%"
        h="fit-content"
        px="4%"
        py="2%"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        {data.posts.length > 0 ? (
          data.posts.map((post) => (
            <Card
              key={post.key}
              image={post.image}
              title={post.title}
              desc={post.description}
              link={post.link}
            />
          ))
        ) : (
          <header>No posts yet</header>
        )}
      </Flex>
    </Flex>
  );
};

export default IGMicroblog;
