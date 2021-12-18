import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import { data } from "../data";

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>ኮድ X Ethiopia </title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation"
        />
      </Head>
      <Intro />
      <Services services={services} />
   
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
