import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "./../components/Layout";

export default function About(props: PageProps) {
  return (
    <Layout>
      <h1>About page</h1>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>About Page</title>;
