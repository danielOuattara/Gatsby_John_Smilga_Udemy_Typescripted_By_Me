/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import { type PageProps } from "gatsby";

export default function Layout({ children }: PageProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
