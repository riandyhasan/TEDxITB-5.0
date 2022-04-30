import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import MerchForm from "../../components/form/merch/Merch";
import getCart from "../../hooks/cart/cart";
import useUser from "../../hooks/user/user";
import Loading from "../../components/loading/Loading";

export default function MerchandiseForm() {
  const data = getCart();
  const user = useUser();
  return data.cart && user.data && !data.loading && !user.loading ? (
    <Layout>
      <Head>
        <title>TEDxITB 5.0 | Merchandise</title>
      </Head>

      <MerchForm data={data} user={user} />
    </Layout>
  ) : (
    <Loading />
  );
}
