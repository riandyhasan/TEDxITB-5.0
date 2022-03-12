import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Layout from "../components/navigation/Layout";
import MerchForm from "../components/form/merch/Merch";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TEDxITB 5.0</title>
      </Head>

      <MerchForm />
    </Layout>
  );
}
