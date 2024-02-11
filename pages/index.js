import { useEffect, useState } from 'react';
import Layout from "../components/layout/Layout";
import Header1 from "../components/layout/header/Header1";
import SliderScroll from "../pages/slider-scroll";
import AboutUs from "../pages/about-us";

export default function Home() {
  return (
    <>
      <Layout header={<Header1 />} headerStyle={1} footerStyle={1} pageCls="home-1">
        <SliderScroll />
        <AboutUs />
      </Layout>
    </>
  );
}
