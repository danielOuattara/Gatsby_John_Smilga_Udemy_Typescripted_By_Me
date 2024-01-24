import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "./../components/Navbar";

export default function Contact(props: PageProps) {
  return (
    <>
      <Navbar />
      <h1>Contact page</h1>
    </>
  );
}

export const Head: HeadFC = () => <title>Contact Page</title>;
