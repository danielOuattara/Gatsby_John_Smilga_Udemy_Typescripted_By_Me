import * as React from "react";
import { Footer, Header, Navbar } from "./index";
import "normalize.css";
import "./../assets/css/main.css";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
