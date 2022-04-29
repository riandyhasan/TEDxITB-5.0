import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/navigation/Layout";
import Merch from "../components/pages/admin/Merch";
import Registrant from "../components/pages/admin/Registrant";
import useUser from "../hooks/user/user";
import { useRouter } from "next/router";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Loading from "../components/loading/Loading";

export default function AdminPage() {
  const user = useUser();
  const router = useRouter();
  const [page, setPage] = useState("Registrant");

  useEffect(() => {
    if (user.data) {
      if (!user.profile.admin || user.profile.admin != 0) router.push("/");
    }
  }, []);

  return user.data && !user.loading ?(
    <Layout>
      <Head>
        <title>TEDxITB 5.0 | Admin</title>
      </Head>
      {user.data && user.profile.admin == 1 ? (
        <Flex w="100%" flexDir="column" py="2rem">
          <Heading textAlign="center">{page}</Heading>
          <Flex justify="center" py="1rem">
            <Flex gridGap="2rem">
              <Text cursor="pointer" onClick={() => setPage("Registrant")} borderBottom={page == "Registrant" ? "3px solid #E62B1E" : null} color={page == "Registrant" ?"#E62B1E" : "black"}>Event Registrant</Text>
              <Text cursor="pointer" onClick={() => setPage("Merch")} borderBottom={page == "Merch" ? "3px solid #E62B1E" : null} color={page == "Merch" ?"#E62B1E" : "black"}>Merch</Text>
            </Flex>
          </Flex>
        <Flex w="100%" justifyContent="center" alignItems="center">
        {page == "Merch" ? <Merch /> : null}
        {page == "Registrant" ? <Registrant/> : null}
        </Flex>
        </Flex>

      ) : (
        <Flex w="100%" minH="100vh" justifyContent="center" alignItems="center">
          <Heading fontSize="4em">No Access</Heading>
        </Flex>
      )}
    </Layout>
  ) : (
    <Loading/>
  )
}
