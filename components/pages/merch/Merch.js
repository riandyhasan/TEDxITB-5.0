import { useState } from "react";
import {
  Grid,
  GridItem,
  Input,
  Select,
  Container,
  Flex,
  useTheme,
  Heading,
  IconButton,
  Button,
  useMediaQuery,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  RadioGroup,
  Radio,
  Image,
  useToast,
} from "@chakra-ui/react";
import QtyPicker from "../../inputs/QtyPicker";
import getMerch from "../../../hooks/merch/merch";
import useUser from "../../../hooks/user/user";
import getCart from "../../../hooks/cart/cart";
import { useRouter } from "next/router";
import { db } from "../../../utils/firebase";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

export default function MerchandisePage() {
  const [searchBarInput, setSearchBarInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("all");
  const [showOpen, setShowOpen] = useState(0);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState([]);
  const [type, setType] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = getMerch();
  const merchandise = data.merch;
  const dataCart = getCart();
  const cart = dataCart.cart;
  const loading = data.loading;
  let unfiltered_category = [];
  data.merch?.map((item) =>
    item.category?.map((i) => unfiltered_category.push(i))
  );
  const categories = [...new Set(unfiltered_category)];

  const theme = useTheme();
  const merchandiseController = (merch) => {
    // if (categoryInput !== "") {
    //   return merch.name.toLowerCase().includes(searchBarInput.toLowerCase());
    // } else {
    //   return (
    //     merch.name.toLowerCase().includes(searchBarInput.toLowerCase()) &&
    //     merch.category.includes(categoryInput)
    //   );
    // }

    const inSearch =
      searchBarInput === "" ||
      merch.name.toLowerCase().includes(searchBarInput.toLowerCase());
    const inFilter =
      categoryInput === "all" || merch.category.includes(categoryInput);
    return inSearch && inFilter;
  };

  const handleSearchBarInputChange = (e) => setSearchBarInput(e.target.value);

  const handleCategoryInputChange = (e) => setCategoryInput(e.target.value);

  return (
    <Container maxW="container.xl" fontFamily={theme.fonts.body}>
      {isMobile ? null : <BackgroundMerchandiseText />}
      <Heading
        size="3xl"
        fontWeight="800"
        color={theme.colors.brand.tedred}
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="1.5em 0 0.5em 0"
      >
        Merchandise
      </Heading>
      <Flex w="100%" justify="space-between">
        <Flex
          w="92%"
          direction={isMobile ? "column" : "row"}
          justify="space-between"
          gap="0.5em"
        >
          <Input
            value={searchBarInput}
            placeholder="search"
            focusBorderColor={theme.colors.brand.tedred}
            onChange={handleSearchBarInputChange}
            w={isMobile ? "90%" : "71%"}
            size={isMobile ? "sm" : "md"}
          />

          <Select
            bg={theme.colors.brand.tedred}
            borderRadius="full"
            color="white"
            w={isMobile ? "70%" : "26%"}
            cursor="pointer"
            size={isMobile ? "sm" : "md"}
            borderWidth={0}
            onChange={handleCategoryInputChange}
            value={categoryInput}
          >
            <option
              key="all"
              value="all"
              style={{ backgroundColor: theme.colors.brand.tedred }}
            >
              All
            </option>
            {categories.map((c) => (
              <option
                key={c}
                value={c}
                style={{ backgroundColor: theme.colors.brand.tedred }}
              >
                {c}
              </option>
            ))}
          </Select>
        </Flex>
        <ShoppingCartLogo cart={cart} />
      </Flex>
      <MerchandiseDetail
        isOpen={isOpen}
        onClose={onClose}
        isMobile={isMobile}
        id={id}
        name={name}
        description={description}
        price={price}
        image={image}
        type={type}
        cart={cart}
      />
      <Grid
        templateColumns={["18em", "18em 18em", "18em 18em", "18em 18em 18em"]}
        padding="2em 0"
        justifyContent="space-around"
      >
        {Array.isArray(merchandise) &&
          merchandise.map((merch) =>
            merchandiseController(merch) ? (
              <GridItem
                key={merch.id}
                display="flex"
                flexDirection="column"
                gap="1em"
                cursor="pointer"
                onClick={() => {
                  setShowOpen(true);
                  onOpen();
                  setId(merch.id);
                  setName(merch.name);
                  setDescription(merch.description);
                  setPrice(merch.price);
                  setImage(merch.image);
                  setType(merch.type ? merch.type : []);
                }}
              >
                <Box
                  as="div"
                  overflow="hidden"
                  boxShadow="4px 6px 10px rgba(0, 0, 0, 0.2)"
                  height="18em"
                >
                  <Image
                    src={merch.image[0]}
                    layout="responsive"
                    objectFit="contain"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box>
                  <Text
                    fontWeight={800}
                    fontSize="xl"
                    letterSpacing="2px"
                    textAlign="center"
                  >
                    {merch.name}
                  </Text>
                  <Text fontWeight={400} fontSize="md" textAlign="center">
                    {formatter.format(String(merch.price))}
                  </Text>
                </Box>
              </GridItem>
            ) : null
          )}
      </Grid>
    </Container>
  );
}

function MerchandiseDetail({
  id,
  name,
  description,
  price,
  image,
  type,
  isOpen,
  onClose,
  isMobile,
  cart,
}) {
  const [qty, setQty] = useState(0);
  const [imgIdx, setImgIdx] = useState("1");
  const router = useRouter();
  const user = useUser();
  const theme = useTheme();
  const toast = useToast();

  const buyNow = async () => {
    if (user.data) {
      try {
        let item = false;
        let itemID = "";
        let itemQty = 0;
        cart?.map((i) => {
          if (name == i.name) {
            item = true;
            itemID = i.id;
            itemQty = i.quantity;
          }
        });
        if (item == true) {
          const docRef = doc(db, `user/${user.userID}/cart`, itemID);
          await updateDoc(docRef, {
            quantity: itemQty + qty,
          });
        } else {
          await addDoc(collection(db, `user/${user.userID}/cart`), {
            idItem: id,
            name: name,
            type: type && type.length ? type[parseInt(imgIdx) - 1] : "",
            price: price,
            image: image[parseInt(imgIdx) - 1],
            quantity: qty,
          });
        }
        toast({
          title: "Success!",
          description: "Item has add to your cart!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        router.push("/merchandise/checkout");
      } catch (e) {
        var msg = e.message;
        const error = msg.replace("Firebase:", "");
        toast({
          title: "Error!",
          description: error,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } else {
      router.push("/login");
    }
  };

  const addToCart = async () => {
    if (user.data) {
      try {
        let item = false;
        let itemID = "";
        let itemQty = 0;
        cart?.map((i) => {
          if (name == i.name) {
            item = true;
            itemID = i.id;
            itemQty = i.quantity;
          }
        });
        if (item == true) {
          const docRef = doc(db, `user/${user.userID}/cart`, itemID);
          await updateDoc(docRef, {
            quantity: itemQty + qty,
          });
        } else {
          await addDoc(collection(db, `user/${user.userID}/cart`), {
            idItem: id,
            name: name,
            type: type && type.length ? type[parseInt(imgIdx) - 1] : "",
            price: price,
            image: image[parseInt(imgIdx) - 1],
            quantity: qty,
          });
        }
        toast({
          title: "Success!",
          description: "Item has add to your cart!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } catch (e) {
        var msg = e.message;
        const error = msg.replace("Firebase:", "");
        toast({
          title: "Error!",
          description: error,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <Modal
      onClose={() => {
        setQty(0);
        onClose();
        setImgIdx("1");
      }}
      isCentered
      isOpen={isOpen}
      size={isMobile ? "sm" : "5xl"}
    >
      <ModalOverlay />
      <ModalContent borderRadius="0">
        <ModalCloseButton />
        <ModalBody padding="0">
          <Flex direction={isMobile ? "column" : "row"} margin="0">
            <Box height={isMobile ? "40%" : "100%"} width="40%">
              <Image
                src={image[parseInt(imgIdx) - 1]}
                layout="responsive"
                objectFit="contain"
                width="100%"
                height="100%"
              />
            </Box>
            <Flex
              padding="4%"
              direction="column"
              justify="space-between"
              width={isMobile ? "100%" : "50%"}
            >
              <Box>
                <Heading size="lg">{name}</Heading>
                <Heading size="sm">{formatter.format(price)}</Heading>
                <br></br>
                <Heading size="sm">Product description</Heading>
                <Text fontSize="0.75em">{description}</Text>
                {type && type.length ? (
                  <RadioGroup my="1rem" onChange={setImgIdx} value={imgIdx}>
                    <Grid gridTemplateColumns="repeat(3, 1fr)" gap={6}>
                      {image.map((item, i) => (
                        <Radio value={(i + 1).toString()}>
                          <Box
                            w="3rem"
                            h="3rem"
                            filter="drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))"
                          >
                            <Image src={item} />
                          </Box>
                        </Radio>
                      ))}
                    </Grid>
                  </RadioGroup>
                ) : null}
              </Box>
              <Flex direction="column" gap="1em">
                <QtyPicker qty={qty} setQty={setQty} />
                <Flex justify="space-between" width="100%">
                  <Heading size="sm">Subtotal</Heading>
                  <Heading size="sm">{formatter.format(qty * price)}</Heading>
                </Flex>
                <Flex justify="flex-end" gap="2em" width="100%">
                  <Button
                    backgroundColor={theme.colors.brand.tedred}
                    colorScheme="red"
                    size="md"
                    disabled={qty === 0}
                    onClick={buyNow}
                  >
                    Buy Now
                  </Button>
                  <Button
                    border={`1px solid ${theme.colors.brand.tedred}`}
                    color={theme.colors.brand.tedred}
                    background="white"
                    size="md"
                    disabled={qty === 0}
                    onClick={addToCart}
                  >
                    Add to Cart
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

const formatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "IDR",
});

function BackgroundMerchandiseText() {
  const MerchandiseText = "/assets/images/background/merchandise-text.png";
  return (
    <Box width="18em" position="absolute" right={0} top="4.5em">
      <Image src={MerchandiseText} alt="merchandise" width="18em" />
      <Image src={MerchandiseText} alt="merchandise" width="18em" />
      <Image src={MerchandiseText} alt="merchandise" width="18em" />
    </Box>
  );
}

function ShoppingCartLogo({ cart }) {
  const router = useRouter();
  const user = useUser();
  const toast = useToast();

  const handleOnclick = () => {
    if (!user.data) {
      toast({
        title: "You need to login first!",
        description: "To access shopping cart you need to login first",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else if (!cart || cart.length < 1) {
      toast({
        title: "Add your item!",
        description: "Please add item first before checkout",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      router.push("/merchandise/checkout");
    }
  };
  return (
    <>
      <IconButton
        colorScheme="whiteAlpha"
        margin="auto"
        padding="0"
        onClick={handleOnclick}
        icon={
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.2499 27.6666H10.4166C9.90825 27.6666 9.42074 27.4647 9.0613 27.1052C8.70185 26.7458 8.49992 26.2583 8.49992 25.7499C8.49992 25.2416 8.70185 24.7541 9.0613 24.3946C9.42074 24.0352 9.90825 23.8333 10.4166 23.8333H30.4266C31.7082 23.8333 32.953 23.4052 33.9635 22.617C34.974 21.8287 35.6922 20.7255 36.0041 19.4824L39.1666 7.04325C39.2384 6.76037 39.2446 6.46483 39.1848 6.17916C39.125 5.8935 39.0008 5.62527 38.8216 5.39492C38.6352 5.15866 38.3958 4.9696 38.1227 4.84307C37.8497 4.71654 37.5507 4.65608 37.2499 4.66659H9.95659C9.56115 3.54812 8.82945 2.57933 7.86179 1.89305C6.89414 1.20677 5.7379 0.836586 4.55159 0.833252H2.74992C2.24159 0.833252 1.75408 1.03519 1.39463 1.39463C1.03519 1.75408 0.833252 2.24159 0.833252 2.74992C0.833252 3.25825 1.03519 3.74576 1.39463 4.10521C1.75408 4.46465 2.24159 4.66659 2.74992 4.66659H4.55159C4.98942 4.65383 5.41841 4.79142 5.76715 5.05646C6.11588 5.3215 6.36331 5.69799 6.46825 6.12325L6.58325 7.04325L9.89909 19.9999C8.37409 20.0685 6.93882 20.7402 5.90901 21.867C4.8792 22.9939 4.33921 24.4837 4.40784 26.0087C4.47646 27.5337 5.14808 28.9689 6.27494 29.9987C7.40179 31.0286 8.89159 31.5685 10.4166 31.4999H10.7616C10.4464 32.3684 10.3451 33.3001 10.4663 34.216C10.5875 35.132 10.9277 36.0052 11.4579 36.7619C11.9882 37.5185 12.693 38.1361 13.5127 38.5626C14.3323 38.989 15.2427 39.2117 16.1666 39.2117C17.0905 39.2117 18.0009 38.989 18.8205 38.5626C19.6401 38.1361 20.3449 37.5185 20.8752 36.7619C21.4055 36.0052 21.7457 35.132 21.8669 34.216C21.9881 33.3001 21.8868 32.3684 21.5716 31.4999H26.0949C25.7797 32.3684 25.6784 33.3001 25.7996 34.216C25.9208 35.132 26.261 36.0052 26.7913 36.7619C27.3216 37.5185 28.0264 38.1361 28.846 38.5626C29.6657 38.989 30.576 39.2117 31.4999 39.2117C32.4239 39.2117 33.3342 38.989 34.1538 38.5626C34.9735 38.1361 35.6783 37.5185 36.2086 36.7619C36.7389 36.0052 37.079 35.132 37.2002 34.216C37.3214 33.3001 37.2201 32.3684 36.9049 31.4999H37.2499C37.7583 31.4999 38.2458 31.298 38.6052 30.9385C38.9647 30.5791 39.1666 30.0916 39.1666 29.5833C39.1666 29.0749 38.9647 28.5874 38.6052 28.228C38.2458 27.8685 37.7583 27.6666 37.2499 27.6666ZM34.7966 8.49992L32.2858 18.5433C32.1808 18.9685 31.9334 19.345 31.5846 19.61C31.2359 19.8751 30.8069 20.0127 30.3691 19.9999H13.8283L10.9533 8.49992H34.7966ZM16.1666 35.3333C15.7875 35.3333 15.4169 35.2208 15.1017 35.0102C14.7865 34.7996 14.5409 34.5003 14.3958 34.1501C14.2507 33.7998 14.2128 33.4145 14.2867 33.0427C14.3607 32.6709 14.5432 32.3293 14.8113 32.0613C15.0793 31.7932 15.4209 31.6107 15.7927 31.5367C16.1645 31.4628 16.5498 31.5007 16.9001 31.6458C17.2503 31.7909 17.5496 32.0365 17.7602 32.3517C17.9708 32.6669 18.0833 33.0375 18.0833 33.4166C18.0833 33.9249 17.8813 34.4124 17.5219 34.7719C17.1624 35.1313 16.6749 35.3333 16.1666 35.3333ZM31.4999 35.3333C31.1208 35.3333 30.7503 35.2208 30.4351 35.0102C30.1199 34.7996 29.8742 34.5003 29.7292 34.1501C29.5841 33.7998 29.5461 33.4145 29.6201 33.0427C29.694 32.6709 29.8766 32.3293 30.1446 32.0613C30.4127 31.7932 30.7542 31.6107 31.126 31.5367C31.4978 31.4628 31.8832 31.5007 32.2334 31.6458C32.5836 31.7909 32.883 32.0365 33.0936 32.3517C33.3042 32.6669 33.4166 33.0375 33.4166 33.4166C33.4166 33.9249 33.2147 34.4124 32.8552 34.7719C32.4958 35.1313 32.0083 35.3333 31.4999 35.3333Z"
              fill="#E62B1E"
            />
          </svg>
        }
      />
      {cart && cart.length ? (
        <Box
          cursor="pointer"
          w="15px"
          h="15px"
          borderRadius="50px"
          bg="red"
          d="flex"
          justifyContent="center"
          alignItems="center"
          padding="2px"
          color="white"
          onClick={() => router.push("/merchandise/checkout")}
        >
          {cart.length}
        </Box>
      ) : null}
    </>
  );
}
