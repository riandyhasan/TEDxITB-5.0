import React, { useState } from "react";
import { Flex, Box, Heading, Grid, GridItem, FormControl, FormLabel, Input, Text, Image, ListItem, UnorderedList, RadioGroup, Radio, Select, Divider, Center, useToast } from "@chakra-ui/react";
import { db } from "../../../utils/firebase"
import { doc, collection, addDoc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import getCart from "../../../hooks/cart/cart"
import useUser from "../../../hooks/user/user"
import { AiOutlineClose } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/router";

const paymentmethod = [
  {
    name: "bca",
    value: "1",
    image: "/assets/images/payment-method/bca.png",
    w: "91px",
    h: "29px",
  },
  {
    name: "bni",
    value: "2",
    image: "/assets/images/payment-method/bni.png",
    w: "101px",
    h: "31px",
  },
  {
    name: "gopay",
    value: "3",
    image: "/assets/images/payment-method/gopay.png",
    w: "101px",
    h: "31px",
  },
  {
    name: "mandiri",
    value: "4",
    image: "/assets/images/payment-method/mandiri.png",
    w: "130px",
    h: "40px",
  },
  {
    name: "dana",
    value: "5",
    image: "/assets/images/payment-method/dana.png",
    w: "120px",
    h: "37px",
  },
  {
    name: "ovo",
    value: "6",
    image: "/assets/images/payment-method/ovo.png",
    w: "70px",
    h: "22px",
  },
];

export default function MerchForm() {

  let itemCost = 0;
  const [shippingCost, setShippingCost] = useState(0);
  const [referralcodeDiscount, SetReferralCodeDiscount] = useState(0);
  const [shipping, setShipping] = useState("shipping");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [subdistrict, setSubdistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postcode, setPostcode] = useState("");
  const [phone, setPhone] = useState("");
  const [referralcode, setReferralCode] = useState("");
  const [payment, setPayment] = useState("1");
  const [proof, setProof] = useState("");
  const toast = useToast();
  const router = useRouter();


  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
  useDropzone({
    accept: 'image/jpeg,image/png',
    multiple: false,
    maxSize: 10097152,
  });

  const data = getCart();
  const cart = data.cart;
  const user = useUser();

  let item = [];
  cart?.map((i) => item.push(`${i.name} - ${i.type}, ${i.quantity}`))

  const validateForm = () => {
    let err = "";
    if (!address || address == ""){
      err = "Address is required";
    }
    if (!subdistrict || subdistrict == ""){
      err = "Sub-district is required";
    }
    if (!district || district == ""){
      err = "District is required";
    }
    if (!city || city == ""){
      err = "City is required";
    }
    if (!province || province == ""){
      err = "Province is required";
    }
    if (!postcode || postcode == ""){
      err = "Postcode is required";
    }
    if (!phone || phone == ""){
      err = "Phone Number is required";
    }
    if (!shippingCost || shippingCost == ""){
      err = "Shipping Cost is required";
    }
    if (!name || name == ""){
      err = "Name is required";
    }
    if (!acceptedFiles || acceptedFiles.length < 1){
      err = "Payment Proof is required";
    }
    if (shipping == "pickup" && acceptedFiles && acceptedFiles.length && name != ""){
      err = "";
    }
    return err;
  }

  const getPaymentName = () => {
    let paymentName = "";
    switch(parseInt(payment)) {
      case 1:
        paymentName = "BCA";
        break;
      case 2:
        paymentName = "BNI";
        break;
      case 3:
         paymentName = "GOPAY";
        break;
      case 4:
        paymentName = "Mandiri";
        break;
      case 5:
        paymentName = "Dana";
        break;
      case 6:
        paymentName = "OVO";
        break;
    }
    return paymentName;
  }

  const deleteItem = async (id) => {
    try{
      await deleteDoc(doc(db, `user/${user.userID}/cart`, id));
    }catch(e){
      console.log(e);
    }
  } 

  const addRemoveItem = async (id, qty) => {
    try{
      const docRef = doc(db, `user/${user.userID}/cart`, id);
      await updateDoc(docRef, {
        quantity: qty
      });
    }catch(e){
      console.log(e);
    }
  }

 const addToFirestore = async () => {
   try{
     const paymentName = getPaymentName();
  await addDoc(collection(db, "transaction"), {
    name: name,
    email: user.profile.email,
    address: shipping == "pickup" ? "Offline" : address,
    subdistrict: shipping == "pickup" ? "Offline" : subdistrict,
    district: shipping == "pickup" ? "Offline" : district,
    city: shipping == "pickup" ? "Offline" : city,
    province: shipping == "pickup" ? "Offline" : province,
    postcode: shipping == "pickup" ? 0 : parseInt(postcode),
    phone: phone,
    shipping: shipping,
    shippingcost: shippingCost && shippingCost != "" ? parseInt(shippingCost) : 0,
    item: item,
    itemcost: itemCost,
    referralcodediscount: referralcodeDiscount,
    total: itemCost +  (shippingCost && shippingCost != "" ? parseInt(shippingCost) : 0) - referralcodeDiscount,
    referralcode: referralcode,
    payment: paymentName,
    proof: proof
    })
    toast({
      title: 'Success!',
      description: 'Your form has been submitted successfully!',
      status: 'success',
      duration: 2000,
      isClosable: true,
  })
  cart?.map((i) => deleteItem(i.id))
  router.push("/");
  }catch(e) {
    console.log(e);
  }
 }

  
const checkout = async () => {
  try{
  const err = validateForm();
  if (err != ""){
    toast({
        title: 'Error!',
        description: err,
        status: 'error',
        duration: 2000,
        isClosable: true,
    })
  }else{
    const storage = getStorage();
    const today =  new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const storageRef = ref(storage, `merch-proof/${name}-${date}.jpg`);
    uploadBytes(storageRef, acceptedFiles[0]).then((snapshot) => {
      getDownloadURL(ref(storage, `merch-proof/${name}-${date}.jpg`)).then((url) => {
        setProof(url);
        console.log(proof)
        addToFirestore();
    })
    });
}

  } catch (e) {
    var msg = e.message;
    const error = msg.replace("Firebase:", "");
    toast({
        title: 'Error!',
        description: error,
        status: 'error',
        duration: 2000,
        isClosable: true,
    })
  }
}

const formatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "IDR",
});

  return (
    <Flex w="100%" padding="2rem" bg="linear-gradient(180deg, #FFFFFF 23.76%, #E62B1E 44.24%)">
      <Flex bg="white" justifyContent="center" alignItems="center" padding="2rem" gridGap="2rem" flexDir="column" w="100%">
        <Heading color="black" textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
          Please Fill The Buying Form
        </Heading>
        <Flex flexDir={{base:"column", lg:"row"}} alignItems="flex-start" justifyContent="space-between" gridGap="2rem" w="100%">
          <Grid gridTemplateColumns="repeat(1, 1fr)" gap={4} w="100%">
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="name">
                  Full Name
                </FormLabel>
                <Input fontSize="0.75em" id="name" placeholder="John Doe" borderRadius="19px" border="2px" borderColor="black" value={name} onChange={(e) => setName(e.target.value)}/>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="address">
                  Address
                </FormLabel>
                <Input fontSize="0.75em" id="address" placeholder="Jl. Ganesha No. 10" borderRadius="19px" border="2px" borderColor="black" isDisabled={shipping == "shipping" ? false : true} value={address} onChange={(e) => setAddress(e.target.value)}/>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="subdistrict">
                  Sub-district
                </FormLabel>
                <Input fontSize="0.75em" id="subdistrict" placeholder="Siliwangi" borderRadius="19px" border="2px" borderColor="black" isDisabled={shipping == "shipping" ? false : true} value={subdistrict} onChange={(e) => setSubdistrict(e.target.value)}/>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="district">
                  District
                </FormLabel>
                <Input fontSize="0.75em" id="district" placeholder="Coblong" borderRadius="19px" border="2px" borderColor="black" isDisabled={shipping == "shipping" ? false : true} value={district} onChange={(e) => setDistrict(e.target.value)}/>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="city">
                  City
                </FormLabel>
                <Input fontSize="0.75em" id="city" placeholder="Bandung" borderRadius="19px" border="2px" borderColor="black" isDisabled={shipping == "shipping" ? false : true} value={city} onChange={(e) => setCity(e.target.value)}/>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="province">
                  Province
                </FormLabel>
                <Input fontSize="0.75em" id="province" placeholder="Jawa Barat" borderRadius="19px" border="2px" borderColor="black" isDisabled={shipping == "shipping" ? false : true} value={province} onChange={(e) => setProvince(e.target.value)}/>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="postcode">
                  Postcode
                </FormLabel>
                <Input fontSize="0.75em" id="postcode" placeholder="140132" borderRadius="19px" border="2px" borderColor="black" isDisabled={shipping == "shipping" ? false : true} value={postcode} onChange={(e) => setPostcode(e.target.value)}/>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="phone">
                  Phone Number
                </FormLabel>
                <Input fontSize="0.75em" id="phone" placeholder="+62" borderRadius="19px" border="2px" borderColor="black" value={phone} onChange={(e) => setPhone(e.target.value)}/>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="shippingcost">
                  Choose Shipping Type
                </FormLabel>
                <Box fontSize="0.65em" mt="-0.5rem" mb="0.7rem">
                  If you choose pick up, the product available at Venue Event TEDxITB: soon to be announced
                </Box>
                <Select fontSize="0.65em" borderRadius="19px" border="2px" borderColor="black" value={shipping} onChange={(e) => setShipping(e.target.value)}>
                  <option value="shipping">Shipping</option>
                  <option value="pickup">Pick up</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="shippingcost">
                  Shipping Cost
                </FormLabel>
                <Box fontSize="0.65em" mt="-0.5rem" mb="0.7rem">
                  If you choose shipping, please check your shipping cost at{" "}
                  <a href="https://cek-ongkir.com/" target="_blank" style={{ textDecoration: "none", color: "#e62b1e" }}>
                    https://cek-ongkir.com/.
                  </a>{" "}
                  Select “Domestic Shipping” from “Bandung”.
                </Box>
                <Input fontSize="0.75em" id="shippingcost" placeholder="12000" borderRadius="19px" border="2px" borderColor="black" value={shippingCost} onChange={(e) => setShippingCost(e.target.value)}/>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel fontSize="0.85em" htmlFor="referralcode">
                  Referral Code
                </FormLabel>
                <Box fontSize="0.65em" mb="0.7rem" mt="-0.5rem">
                  <Text fontWeight="bold">Do you have any referral code? Please fill in with your referral code to get discount!</Text>
                  <Flex alignItems="center">
                    <Text color="red">*</Text>
                    <Text>Note:</Text>
                  </Flex>
                  <UnorderedList fontStyle="italic">
                    <ListItem>Referral code can be obtained from TEDxITB 5.0 committee.</ListItem>
                    <ListItem>Referral code can not be used during promo session.</ListItem>
                  </UnorderedList>
                </Box>
                <Input fontSize="0.75em" id="referralcode" placeholder="XXXXXXXX" borderRadius="19px" border="2px" borderColor="black" value={referralcode} onChange={(e) => setReferralCode(e.target.value)}/>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel fontSize="0.85em" htmlFor="referralcode">
                  <Flex>
                    <Text color="red">*</Text>
                    <Text>Payment Method</Text>
                  </Flex>
                </FormLabel>
                <Box fontSize="0.65em" mb="0.7rem" mt="-0.5rem">
                  Please choose your payment method.
                </Box>
              </FormControl>
              <Box border="2px solid #000000" borderRadius="19px" padding="1rem">
                <RadioGroup value={payment} onChange={setPayment}>
                  <Grid gridTemplateColumns={{ base: "repeat(1, 1fr)", sm:"repeat(2, 1fr)" ,md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"}} gap={6}>
                    {paymentmethod.map((item) => (
                      <Radio value={item.value}>
                        <Box w={item.w} h={item.h} filter="drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))">
                          <Image src={item.image} alt={item.nama} />
                        </Box>
                      </Radio>
                    ))}
                  </Grid>
                </RadioGroup>
              </Box>
            </GridItem>
          </Grid>

          <Flex flexDir="column" w="100%" h="100%" justifyContent="space-between">
            <Box border="2px solid #F0592B" borderRadius="21px" w="100%">
              <Box bg="linear-gradient(180deg, #F0592B 0%, rgba(235, 83, 73, 0.91) 100%)" px="2rem" py="0.5rem" borderRadius="19px 19px 0px 0px" fontSize="0.85em">
                <Text color="white" textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
                  Your Order
                </Text>
              </Box>
              <Flex flexDir="column" gridGap="0.5rem" padding="1rem">
                {cart?.map((item) => (
                <Flex d={{base:"column", sm:"row"}} gridGap="1rem" w="100%" alignItems="center">
                  <Flex w="100%">
                    <Box filter="drop-shadow(8px 10px 8px rgba(0, 0, 0, 0.25))" width={150} height={150}>
                      <Image src={item.image} />
                    </Box>
                    <Flex w="10%" justifyContent="flex-end" d={{base:"flex", sm:"none"}}>
                    <AiOutlineClose size="1em" cursor="pointer" onClick={() => deleteItem(item.id)} />
                  </Flex>
                  </Flex>
                  <Flex flexDir="column" alignItems="flex-end" gridGap="1rem" w="100%">
                  <Flex w="100%" justifyContent="flex-end" d={{base:"none", sm:"flex"}}>
                    <AiOutlineClose size="1em" cursor="pointer" onClick={() => deleteItem(item.id)} />
                  </Flex>
                    <Flex flexDir="column" fontSize="0.7em" w="100%" fontWeight="bold">
                      <Heading size="md" color="white" sx={{ "-webkit-text-stroke": "1px black" }}>
                        {item.name}
                      </Heading>
                      <Text>Quantity: {item.quantity}</Text>
                      <Text>{formatter.format(String(item.price * item.quantity))}</Text>
                    </Flex>
                    <Flex justifyContent="flex-end" alignItems="flex-end">
                      <Flex gridGap="0.4rem" alignItems="center" justifyContent="flex-end">
                        <Box d="flex" alignItems="center" justifyContent="center" cursor="pointer" w="1.3rem" h="1.3rem" bg="brand.tedred" color="white" p="0.2rem" borderRadius="5px" 
                        onClick={() => {
                          if (item.quantity == 1){
                            deleteItem(item.id)
                          }else{
                          addRemoveItem(item.id, item.quantity-1)
                          }
                        }}
                          >
                          -
                        </Box>
                        <Box d="flex" alignItems="center" justifyContent="center" fontSize="8px" w="1.3rem" h="1.3rem" borderColor="red.300" borderRadius="5px"  border="2px" fontWeight="bold">
                        {item.quantity}
                          </Box>
                        <Box d="flex" alignItems="center" justifyContent="center" cursor="pointer" w="1.3rem" h="1.3rem" bg="brand.tedred" color="white" p="0.2rem" borderRadius="5px" onClick={() => addRemoveItem(item.id, item.quantity+1)}>
                          +
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              ))}

              </Flex>
            </Box>

            <Flex flexDir="column" justifyContent="center" gridGap="2rem">
              <Box padding="1rem" borderRadius="20px" border="2px solid #000000" fontSize="0.75em">
                <Heading size="md">Total</Heading>
                {cart?.map((i) => {
                  itemCost += i.price * i.quantity;
                  return(
                    <Flex justifyContent="space-between">
                      <Text>{i.name}</Text>
                      <Text>{formatter.format(String(i.price * i.quantity))}</Text>
                    </Flex>
                )
                })}
                <Flex justifyContent="space-between">
                  <Text>Shipping Cost</Text>
                  <Text>{formatter.format(String(shippingCost))}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text>Referral Code</Text>
                  <Text color="red">-{formatter.format(String(referralcodeDiscount))}</Text>
                </Flex>
                <Divider bg="black" border="1px solid #000000" />
                <Flex w="100%" justifyContent="flex-end">
                  <Text>{formatter.format(String(itemCost + (shippingCost && shippingCost != "" ? parseInt(shippingCost) : 0) - referralcodeDiscount))}</Text>
                </Flex>
              </Box>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" fontWeight="bold">
                  Please Upload Your Payment Slip
                </FormLabel>
                <Center {...getRootProps({ className: "dropzone" })} textAlign="center" flexDirection="column" border="2px dashed #000000" borderRadius="19px" py="1rem" px="3rem">
                  <input {...getInputProps()} />
                  {acceptedFiles && acceptedFiles.length ?
                    <Text fontWeight={600} fontSize="0.75em">
                    {acceptedFiles.map((f) => f.name)}
                  </Text>
                  :
                  <>
                  <BsUpload size="2em" />
                  <Text fontWeight={600} fontSize="0.75em">
                    Drag and Drop File <br />
                    or
                  </Text>
                    <Box color="white" bg="brand.gradientRed" borderRadius="19px" fontSize="0.6em" px="2rem" py="0.4rem" cursor="pointer">
                    Browse
                  </Box>
                  </>
                  }
                </Center>
              </FormControl>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" justifyContent="flex-end">
          <Box color="white" bg="brand.gradientRed" fontWeight="bold" borderRadius="19px" px="3rem" py="0.4rem" cursor="pointer" fontSize="0.85em" onClick={checkout}>
            Checkout
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
