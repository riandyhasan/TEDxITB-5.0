import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/navigation/Layout";
import Transaction from "../components/pages/admin/Merch";
import useUser from "../hooks/user/user";
import { useRouter } from "next/router";
import { Flex, Heading } from "@chakra-ui/react";
import Loading from "../components/loading/Loading";

export default function TransactionPage() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user.data) {
      if (!user.profile.admin || user.profile.admin != 0) router.push("/");
    }
  }, []);

  console.log;

  return user.data && !user.loading ?(
    <Layout>
      <Head>
        <title>TEDxITB 5.0</title>
      </Head>
      {user.data && user.profile.admin == 1 ? (
        <Transaction />
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
