import * as React from "react";
import { Footer, Header } from "./index";
import "normalize.css";
import "./../assets/css/main.css";
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
