import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Layout from "../components/navigation/Layout";
import MicroblogHero from "../components/microblog/MicroblogHero";
import IGMicroblog from "../components/microblog/IGMicroblog";
import getPosts from "../hooks/microblog/microblog";
import Loading from "../components/loading/Loading";

export default function Microblog() {
  const data = getPosts();
  return data.posts && !data.loading ? (
    <Layout>
      <Head>
        <title>TEDxITB 5.0 | Microblog</title>
      </Head>

      <Flex
        justify="center"
        align="center"
        w="100%"
        minH="100vh"
        fontSize="5em"
        direction="column"
      >
        <MicroblogHero />
        <IGMicroblog data={data} />
      </Flex>
    </Layout>
  ) : (
    <Loading />
  );
}
