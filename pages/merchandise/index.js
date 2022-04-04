import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Merch from "../../components/pages/merch/Merch";
import getMerch from "../../hooks/merch/merch";
import getCart from "../../hooks/cart/cart";
import Loading from "../../components/loading/Loading";

export default function MerchandisePage() {
  const data = getMerch();
  const dataCart = getCart();
  return data.merch && !data.loading && !dataCart.loading ?  (
    <Layout>
      <Head>
        <title>TEDxITB 5.0 | Merchandise</title>
      </Head>
      <Merch data={data} dataCart={dataCart}/>
    </Layout>
  ) : (
    <Loading/>
  )
}
