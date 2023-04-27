import React from "react";
import Myheader from "../components/Myheader";
import NewsList from "../components/NewsList";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Myheader />

      <Outlet />
      {/* <Banner />
      <NewsList /> */}
      <Footer />
    </>
  );
};

export default Root;
