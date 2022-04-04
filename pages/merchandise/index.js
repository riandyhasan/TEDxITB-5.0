import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Merch from "../../components/pages/merch/Merch";

export default function MerchandisePage() {
  return (
    <Layout>
      <Head>
        <title>TEDxITB 5.0 | Merchandise</title>
      </Head>
      <Merch />
    </Layout>
  );
}
