/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react";
import { Footer, Navbar, Sidebar } from "./index";

import { type PageProps } from "gatsby";

export default function Layout({ children }: PageProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <>
      <Navbar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
