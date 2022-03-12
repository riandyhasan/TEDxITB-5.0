import React from "react";
import { Flex, Box, Heading, Grid, GridItem, FormControl, FormLabel, Input, Text, Image, ListItem, UnorderedList, RadioGroup, Radio, Select, Divider } from "@chakra-ui/react";
import Upload from "../upload/Upload";
// import Image from "next/image";

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
  return (
    <Flex w="100%" padding="2rem" bg="linear-gradient(180deg, #FFFFFF 23.76%, #E62B1E 44.24%)">
      <Flex bg="white" justifyContent="center" alignItems="center" padding="2rem" gridGap="2rem" flexDir="column" w="100%">
        <Heading color="black" textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
          Please Fill The Buying Form
        </Heading>
        <Flex alignItems="flex-start" justifyContent="space-between" gridGap="2rem" w="100%">
          <Grid gridTemplateColumns="repeat(1, 1fr)" gap={4} w="100%">
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="name">
                  Full Name
                </FormLabel>
                <Input fontSize="0.75em" id="name" placeholder="John Doe" borderRadius="19px" border="2px" borderColor="black" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="address">
                  Address
                </FormLabel>
                <Input fontSize="0.75em" id="address" placeholder="Jl. Ganesha No. 10" borderRadius="19px" border="2px" borderColor="black" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="subdistrict">
                  Sub-district
                </FormLabel>
                <Input fontSize="0.75em" id="subdistrict" placeholder="Siliwangi" borderRadius="19px" border="2px" borderColor="black" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="district">
                  District
                </FormLabel>
                <Input fontSize="0.75em" id="district" placeholder="Coblong" borderRadius="19px" border="2px" borderColor="black" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="city">
                  City
                </FormLabel>
                <Input fontSize="0.75em" id="city" placeholder="Bandung" borderRadius="19px" border="2px" borderColor="black" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="province">
                  Province
                </FormLabel>
                <Input fontSize="0.75em" id="province" placeholder="Jawa Barat" borderRadius="19px" border="2px" borderColor="black" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="postcode">
                  Postcode
                </FormLabel>
                <Input fontSize="0.75em" id="postcode" placeholder="140132" borderRadius="19px" border="2px" borderColor="black" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="phone">
                  Phone Number
                </FormLabel>
                <Input fontSize="0.75em" id="phone" placeholder="+62" borderRadius="19px" border="2px" borderColor="black" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" htmlFor="shippingcost">
                  Choose Shipping Type
                </FormLabel>
                <Box fontSize="0.65em" mt="-0.5rem" mb="0.7rem">
                  If you choose pick up, the product available at *Address*
                </Box>
                <Select fontSize="0.65em" borderRadius="19px" border="2px" borderColor="black">
                  <option value="ship">Shipping</option>
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
                <Input fontSize="0.75em" id="shippingcost" placeholder="12000" borderRadius="19px" border="2px" borderColor="black" />
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
                <Input fontSize="0.75em" id="referralcode" placeholder="XXXXXXXX" borderRadius="19px" border="2px" borderColor="black" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel fontSize="0.85em" htmlFor="referralcode">
                  Payment Method
                </FormLabel>
                <Box fontSize="0.65em" mb="0.7rem" mt="-0.5rem">
                  Please choose your payment method.
                </Box>
              </FormControl>
              <Box border="2px solid #000000" borderRadius="19px" padding="1rem">
                <RadioGroup>
                  <Grid gridTemplateColumns="repeat(3, 1fr)" gap={6}>
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
                <Flex gridGap="1rem" w="100%" alignItems="center">
                  <Flex w="100%">
                    <Box filter="drop-shadow(8px 10px 8px rgba(0, 0, 0, 0.25))" width={150} height={150}>
                      <Image src="https://pbs.twimg.com/profile_images/490590018943983616/1QtYly1m_400x400.png" />
                    </Box>
                  </Flex>
                  <Flex flexDir="column" alignItems="flex-end" gridGap="1rem" w="100%">
                    <Flex flexDir="column" fontSize="0.7em" w="100%" fontWeight="bold">
                      <Heading size="md" color="white" sx={{ "-webkit-text-stroke": "1px black" }}>
                        Kantong Ajaib
                      </Heading>
                      <Text>Quantity: 1</Text>
                      <Text>Rp123.456.000</Text>
                    </Flex>
                    <Flex justifyContent="flex-end" alignItems="flex-end">
                      <Flex gridGap="0.4rem" alignItems="center" justifyContent="flex-end">
                        <Box d="flex" alignItems="center" justifyContent="center" cursor="pointer" w="1.3rem" h="1.3rem" bg="brand.tedred" color="white" p="0.2rem" borderRadius="5px">
                          -
                        </Box>
                        <Input fontSize="8px" w="1.3rem" h="1.3rem" borderColor="red.300" borderRadius="5px" paddingLeft="0.35rem" paddingRight="0rem" border="2px" fontWeight="bold" />
                        <Box d="flex" alignItems="center" justifyContent="center" cursor="pointer" w="1.3rem" h="1.3rem" bg="brand.tedred" color="white" p="0.2rem" borderRadius="5px">
                          +
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex gridGap="1rem" w="100%" alignItems="center">
                  <Flex w="100%">
                    <Box filter="drop-shadow(8px 10px 8px rgba(0, 0, 0, 0.25))" width={150} height={150}>
                      <Image src="https://pbs.twimg.com/profile_images/490590018943983616/1QtYly1m_400x400.png" />
                    </Box>
                  </Flex>
                  <Flex flexDir="column" alignItems="flex-end" gridGap="1rem" w="100%">
                    <Flex flexDir="column" fontSize="0.7em" w="100%" fontWeight="bold">
                      <Heading size="md" color="white" sx={{ "-webkit-text-stroke": "1px black" }}>
                        Kantong Ajaib
                      </Heading>
                      <Text>Quantity: 1</Text>
                      <Text>Rp123.456.000</Text>
                    </Flex>
                    <Flex justifyContent="flex-end" alignItems="flex-end">
                      <Flex gridGap="0.4rem" alignItems="center" justifyContent="flex-end">
                        <Box d="flex" alignItems="center" justifyContent="center" cursor="pointer" w="1.3rem" h="1.3rem" bg="brand.tedred" color="white" p="0.2rem" borderRadius="5px">
                          -
                        </Box>
                        <Input fontSize="8px" w="1.3rem" h="1.3rem" borderColor="red.300" borderRadius="5px" paddingLeft="0.35rem" paddingRight="0rem" border="2px" fontWeight="bold" />
                        <Box d="flex" alignItems="center" justifyContent="center" cursor="pointer" w="1.3rem" h="1.3rem" bg="brand.tedred" color="white" p="0.2rem" borderRadius="5px">
                          +
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex gridGap="1rem" w="100%" alignItems="center">
                  <Flex w="100%">
                    <Box filter="drop-shadow(8px 10px 8px rgba(0, 0, 0, 0.25))" width={150} height={150}>
                      <Image src="https://pbs.twimg.com/profile_images/490590018943983616/1QtYly1m_400x400.png" />
                    </Box>
                  </Flex>
                  <Flex flexDir="column" alignItems="flex-end" gridGap="1rem" w="100%">
                    <Flex flexDir="column" fontSize="0.7em" w="100%" fontWeight="bold">
                      <Heading size="md" color="white" sx={{ "-webkit-text-stroke": "1px black" }}>
                        Kantong Ajaib
                      </Heading>
                      <Text>Quantity: 1</Text>
                      <Text>Rp123.456.000</Text>
                    </Flex>
                    <Flex justifyContent="flex-end" alignItems="flex-end">
                      <Flex gridGap="0.4rem" alignItems="center" justifyContent="flex-end">
                        <Box d="flex" alignItems="center" justifyContent="center" cursor="pointer" w="1.3rem" h="1.3rem" bg="brand.tedred" color="white" p="0.2rem" borderRadius="5px">
                          -
                        </Box>
                        <Input fontSize="8px" w="1.3rem" h="1.3rem" borderColor="red.300" borderRadius="5px" paddingLeft="0.35rem" paddingRight="0rem" border="2px" fontWeight="bold" />
                        <Box d="flex" alignItems="center" justifyContent="center" cursor="pointer" w="1.3rem" h="1.3rem" bg="brand.tedred" color="white" p="0.2rem" borderRadius="5px">
                          +
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Box>

            <Flex flexDir="column" justifyContent="center" gridGap="2rem">
              <Box padding="1rem" borderRadius="20px" border="2px solid #000000" fontSize="0.75em">
                <Heading size="md">Total</Heading>
                <Flex justifyContent="space-between">
                  <Text>Kantong Ajaib</Text>
                  <Text>Rp123.456.</Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text>Shipping Cost</Text>
                  <Text>Rp12000</Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text>Referral Code</Text>
                  <Text color="red">-Rp123.456</Text>
                </Flex>
                <Divider bg="black" border="1px solid #000000" />
                <Flex w="100%" justifyContent="flex-end">
                  <Text>Rp123.456.000</Text>
                </Flex>
              </Box>
              <FormControl isRequired>
                <FormLabel fontSize="0.85em" fontWeight="bold">
                  Please Upload Your Payment Slip
                </FormLabel>
                <Upload />
              </FormControl>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" justifyContent="flex-end">
          <Box color="white" bg="brand.gradientRed" fontWeight="bold" borderRadius="19px" px="3rem" py="0.4rem" cursor="pointer" fontSize="0.85em">
            Checkout
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
