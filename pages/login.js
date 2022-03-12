import Head from "next/head";
import Layout from "../components/navigation/Layout";
import LoginForm from "../components/pages/login/Login";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>TEDxITB 5.0</title>
      </Head>

      <LoginForm />
    </Layout>
  );
}
