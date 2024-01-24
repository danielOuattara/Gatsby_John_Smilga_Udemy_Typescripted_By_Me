import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "./../components/Layout";

export default function Contact(props: PageProps) {
  return (
    <Layout>
      <h1>Contact page</h1>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Contact Page</title>;
