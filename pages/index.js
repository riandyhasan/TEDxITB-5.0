import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Layout from "../components/navigation/Layout";
import HeroSection from "../components/landingSection/HeroSection";
import NumbersSection from "../components/landingSection/NumbersSection";
import HistorySection from "../components/landingSection/HistorySection";
import AboutSection from "../components/landingSection/AboutSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TEDxITB 5.0</title>
      </Head>

      <Flex
        justify="center"
        align="center"
        w="100%"
        minH="100vh"
        fontSize="5em"
        direction="column"
      >
        <HeroSection />
        <AboutSection />
        <NumbersSection />
        <HistorySection />
      </Flex>
    </Layout>
  );
}
