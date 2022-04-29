import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Hero from "../../components/pages/event/Hero";
import Form from "../../components/form/event/Event";
import Loading from "../../components/loading/Loading";
import useUser from "../../hooks/user/user";

export default function RegisterEvent() {
  const user = useUser();
  return user.data && !user.loading ?(
    <Layout>
      <Head>
        <title>TEDxITB 5.0 | Event</title>
      </Head>


        <Hero />
        <Form user={user}/>
    </Layout>
    ) : (
      <Loading/>
    )
  }