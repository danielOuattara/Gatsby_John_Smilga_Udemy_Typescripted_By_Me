import * as React from "react";
import { Footer, Header } from "./index";
// import "./../style/layout.css";

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
