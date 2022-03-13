import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import MerchForm from "../../components/form/merch/Merch";

export default function MerchandiseForm() {
  return (
    <Layout>
      <Head>
        <title>TEDxITB 5.0 | Merchandise</title>
      </Head>

      <MerchForm />
    </Layout>
  );
}
