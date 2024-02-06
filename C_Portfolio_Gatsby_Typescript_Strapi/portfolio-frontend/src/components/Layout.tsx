// Layout.tsx

import * as React from "react";
import { PageProps } from "gatsby";
import { Navbar, Sidebar, Footer } from "./index";
import "../assets/css/main.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
