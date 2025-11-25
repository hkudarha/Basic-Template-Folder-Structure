import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNavBar from "./TopNavBar";

const Layout = () => {
  return (
    <>
    <TopNavBar />
      <Navbar />
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
