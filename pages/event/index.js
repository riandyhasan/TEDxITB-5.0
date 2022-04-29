import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Hero from "../../components/pages/event/Hero";
import Poster from "../../components/pages/event/Poster";
import Loading from "../../components/loading/Loading";
import useUser from "../../hooks/user/user";

export default function Event() {
  const user = useUser();
  return !user.loading ?(
    <Layout>
      <Head>
        <title>TEDxITB 5.0 | Event</title>
      </Head>


        <Hero />
        <Poster user={user}/>
    </Layout>
    ) : (
      <Loading/>
    )
  }