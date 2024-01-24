import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "./../components/Navbar";

export default function About(props: PageProps) {
  return (
    <>
      <Navbar />
      <h1>About page</h1>
    </>
  );
}

export const Head: HeadFC = () => <title>About Page</title>;
