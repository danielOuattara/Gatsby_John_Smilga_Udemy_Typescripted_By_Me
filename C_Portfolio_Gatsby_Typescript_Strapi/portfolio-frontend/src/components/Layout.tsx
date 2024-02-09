import * as React from "react";
import { PageProps } from "gatsby";
import { Navbar, Sidebar, Footer } from "./index";
import "../assets/css/main.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
}
