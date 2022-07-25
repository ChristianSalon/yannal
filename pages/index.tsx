import type { NextPage } from "next";
import Head from "next/head";
import {
  Categories,
  Footer,
  Header,
  Menu,
  MobileApp,
  PopularProducts,
  Testimonials,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <div className="px-6 md:px-14">
        <Head>
          <title>Yannal.</title>
          <link rel="icon" href="/logo-dark.png" />
        </Head>

        <Header />

        <PopularProducts />

        <Categories />

        <Menu />
      </div>

      <MobileApp />

      <Testimonials />

      <Footer />
    </>
  );
};

export default Home;
