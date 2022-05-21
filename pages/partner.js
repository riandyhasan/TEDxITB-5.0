import Head from "next/head";
import Layout from "../components/navigation/Layout";
import Hero from "../components/pages/partner/Hero";
import Partner from "../components/pages/partner/Partner";

export default function Event() {
  return (
    <Layout>
      <Head>
        <title>TEDxITB 5.0 | Partner</title>
      </Head>

      <Hero />
      <Partner />
    </Layout>
  );
}
