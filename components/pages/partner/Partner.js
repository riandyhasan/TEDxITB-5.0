import { Box, Heading, Flex, Image, Text, Grid, GridItem } from "@chakra-ui/react";

export default function Event() {

  const sponsors = [
    {
      name: "ITB Career Center",
      img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FITBCC.png?alt=media&token=cfd2600d-f86a-4fd6-a293-f7f9395fad8a",
      width: 300
  },
  {
      name: "Ditmawa ITB",
      img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FDitmawa%20ITB.png?alt=media&token=e377d319-62a2-446a-b719-9855467b3d18",
      width: 300
  },
  {
    name: "Bank Indonesia",
    img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2Fbank-indonesia.png?alt=media&token=f32eed24-a7f2-45af-842e-16d7b5ab7c99",
    width: 360
  },
  {
    name: "ABB",
    img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FABB.png?alt=media&token=d791dbab-723b-409a-a628-4bf32070e272",
    width: 260
},
{
  name: "Rewindbooth",
  img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FRewindbooth.png?alt=media&token=5563d780-949c-4850-a5a0-ac99f057a0a1",
  width: 260
},
{
  name: "Nabati",
  img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FNabati.png?alt=media&token=2f044a6e-230b-49d0-9900-591dd924f2c0",
  width: 100
},
{
  name: "Amartha",
  img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FAmartha.png?alt=media&token=1db5fc5b-0ad7-4a76-81ca-facf2421c1e8",
  width: 140
},
{
  name: "Tiket.com",
  img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FTiketdotcom.png?alt=media&token=401016bb-b998-4cd1-b353-4981c3d39795",
  width: 140
},
{
  name: "IM3",
  img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2Fim3.png?alt=media&token=304c4051-a551-4e84-a85d-651e062ff9d8",
  width: 100
},
  ]
    const sponsorsLine1 = [
        {
            name: "ITB Career Center",
            img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FITBCC.png?alt=media&token=cfd2600d-f86a-4fd6-a293-f7f9395fad8a",
            width: 300
        },
        {
            name: "Ditmawa ITB",
            img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FDitmawa%20ITB.png?alt=media&token=e377d319-62a2-446a-b719-9855467b3d18",
            width: 300
        },
        {
          name: "Bank Indonesia",
          img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2Fbank-indonesia.png?alt=media&token=f32eed24-a7f2-45af-842e-16d7b5ab7c99",
          width: 360
        },
    ]

    const sponsorsLine2 = [
      {
        name: "ABB",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FABB.png?alt=media&token=d791dbab-723b-409a-a628-4bf32070e272",
        width: 260
    },
    {
      name: "Rewindbooth",
      img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FRewindbooth.png?alt=media&token=5563d780-949c-4850-a5a0-ac99f057a0a1",
      width: 260
    },
    {
      name: "Nabati",
      img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FNabati.png?alt=media&token=2f044a6e-230b-49d0-9900-591dd924f2c0",
      width: 100
    },
    ]

    const sponsorsLine3 = [
      {
        name: "Amartha",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FAmartha.png?alt=media&token=1db5fc5b-0ad7-4a76-81ca-facf2421c1e8",
        width: 140
      },
      {
        name: "Tiket.com",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2FTiketdotcom.png?alt=media&token=401016bb-b998-4cd1-b353-4981c3d39795",
        width: 140
      },
      {
        name: "IM3",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fsponsors%2Fim3.png?alt=media&token=304c4051-a551-4e84-a85d-651e062ff9d8",
        width: 100
      },
    ]

    const medpar = [
      {
          name: "Rise",
          img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FRISE.png?alt=media&token=97b8a5c8-b9b0-4a2c-a470-c28ffe979cff"
      },
      {
        name: "Ganesha Business Festival 2022",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FGBF%202022.png?alt=media&token=873c880a-5b64-4e01-a550-884ce9ba4345"
      },
      {
        name: "@eventcampus",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FLOGO%20%40eventcampus.png?alt=media&token=ae90b901-3f01-4535-9b73-c560f0839ce7"
      },
      {
        name: "INPOWER",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FINPOWER.png?alt=media&token=7ea82460-3300-46aa-a334-b3d748f0e77e"
      },
      {
        name: "Grand Summit",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FGrand%20Summit.png?alt=media&token=313a870f-bf6b-42f4-a649-41e80653d13a"
      },
      {
        name: "PPIA Amsterdam",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FPPIAmsterdam.png?alt=media&token=8b06b67b-f22b-4647-aaaf-29d1b248ef3d"
      },
      {
        name: "KMM ITB",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FLogo%20KMM%20ITB.PNG?alt=media&token=a2032fe0-1ba8-43d0-bfcc-89ef1cb33332"
      },
      {
        name: "StudentxCEO's Semarang",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FStudentxCEO%20Semarang.png?alt=media&token=98d4ea1e-b588-4798-a430-8f13cee56e76"
      },
      {
        name: "StudentxCEO's Bandung",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FStudentxCEO%20Bandung.png?alt=media&token=6d688d37-2305-4574-96b2-1cd05226a966"
      },
      {
        name: "ITB MUN",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FLogo%20Hitam.png?alt=media&token=1953f2c3-0d65-4695-8939-b953bc4fb3e4"
      },
      {
        name: "SRD",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FLogo%20SRD%2013_Logo%201.png?alt=media&token=f7885bf6-5e11-4f3e-8433-bad5f0d838c7"
      },
      {
        name: "eventcampus.co",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FLogo%20eventcampus.co.png?alt=media&token=ed2715cb-9c51-4674-868c-1a66cf060e8d"
      },
      {
        name: "SRE ITB",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2Flogo%20sre%20itb.png?alt=media&token=3ec8ae7e-81b1-4c3e-bc51-67c55a0d4a34"
      },
      {
        name: "Collegacy Indonesia",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FCollegacy.png?alt=media&token=6aa10d22-c2cd-4b5a-86dc-332092fbf499"
      },
      {
        name: "FPCI UI",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FLOGO%20FPCI%20UI.png?alt=media&token=3b04070c-2adb-4ece-a79e-59f29582f5cc"
      },
      {
        name: "Ganesha IoTech",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FGanesha%20IoTech.png?alt=media&token=5adc6323-5372-436d-9684-ebfffb29f713"
      },
      {
        name: "Setura",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FSetura%20Logo.png?alt=media&token=90b43f9d-0fc3-4f7c-9f46-6c51ae617b88"
      },
      {
        name: "",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2FLogo%202.0.png?alt=media&token=9918e189-d61b-47e6-8e80-6112028168d7"
      },
      {
        name: "8eh Radio ITB",
        img: "https://firebasestorage.googleapis.com/v0/b/tedxitb-32001.appspot.com/o/partners%2Fmedia-partners%2F8eh.png?alt=media&token=706f79f5-406e-40ea-ae54-ae42a0393ac4"
      },
  ]
  
  return (
    <Flex
      bg="linear-gradient(179.98deg, #E62B1E 0.02%, rgba(255, 255, 255, 0.88) 96.1%);"
      bgSize="fill"
      w="100%"
      minH="80vh"
      flexDir="column"
      align="center"
      justify="center"

      py="5rem"
    >
        <Box w="100%" display="flex" justifyContent="center" bg="white" borderRadius="0px 0px 40px 40px">
            <Heading
            fontFamily="HKGrotesk"
            fontWeight="bold"
            fontSize={{ base: "2.2rem", sm: "2rem", md: "3rem" }}
            color="black"
            textShadow="0px 4px 4px #00000040"
            textAlign="center"
            my="2rem"
            >
            Our Sponsors
            </Heading>
        </Box>
      <Flex
        w="100%"
        h="fit-content"
        justifyContent="center"
        my="3rem"
      >
          <Flex display={{ base: "none", md: "flex"}} flexDir="column" gridGap="1rem" alignItems="center" px={{ base:"0", md:"2rem" }} w="100%">
            <Flex alignItems="center" justifyContent="center" w="100%" gridGap="2rem">
            {sponsorsLine1.map((i) => (
                <Box w={i.width} h={i.width} >
                    <Image alt={i.name} src={i.img} />
                </Box>
            ))}
            </Flex>
            <Flex alignItems="center" justifyContent="center" w="100%" gridGap="2rem">
            {sponsorsLine2.map((i) => (
                <Box w={i.width} h={i.width} >
                    <Image alt={i.name} src={i.img} />
                </Box>
            ))}
            </Flex>
            <Flex alignItems="center" justifyContent="center" w="100%" gridGap="2rem">
            {sponsorsLine3.map((i) => (
                <Box w={i.width} h={i.width} >
                    <Image alt={i.name} src={i.img} />
                </Box>
            ))}
            </Flex>
          </Flex>
          <Grid display={{ base: "grid", md: "none"}} gridTemplateColumns="repeat(1, 1fr)"  w="100%">
            {sponsors.map((i, idx) => (
            <GridItem key={idx} display="flex" justifyContent="center" alignItems="center">
                <Box w={i.width} >
                    <Image alt={i.name} src={i.img} />
                </Box>
            </GridItem>
            ))}
          </Grid>
      </Flex>
      <Box w="100%" display="flex" justifyContent="center" bg="white" borderRadius="0px 0px 40px 40px">
            <Heading
            fontFamily="HKGrotesk"
            fontWeight="bold"
            fontSize={{ base: "2.2rem", sm: "2rem", md: "3rem" }}
            color="black"
            textShadow="0px 4px 4px #00000040"
            textAlign="center"
            my="2rem"
            >
            Our Media Partners
            </Heading>
        </Box>
      <Flex
        w="100%"
        h="fit-content"
        justifyContent="center"
        my="3rem"
      >
          <Grid gridTemplateColumns={{ base:"repeat(3, 1fr)", md:"repeat(4, 1fr)" }} gap="2rem">
            {medpar.map((i, idx) => (
            <GridItem key={idx}>
                <Box  display="flex" justifyContent="center" alignItems="center" bg="white" p="1rem" w={{ base: "100px", md: "150px" }}>
                    <Image alt={i.name} src={i.img} />
                </Box>
            </GridItem>
            ))}
          </Grid>
      </Flex>
    </Flex>
  );
}