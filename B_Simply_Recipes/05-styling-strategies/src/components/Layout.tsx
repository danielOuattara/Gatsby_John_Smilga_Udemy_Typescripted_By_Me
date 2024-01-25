import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./../style/layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
