import Head from "next/head";
import Layout from "../components/navigation/Layout";
import RegisterForm from "../components/pages/register/Register";

export default function Register() {
  return (
    <Layout>
      <Head>
        <title>TEDxITB 5.0</title>
      </Head>

      <RegisterForm />
    </Layout>
  );
}
