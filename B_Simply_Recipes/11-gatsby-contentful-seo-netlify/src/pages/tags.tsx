import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "./../components";

export default function Tags(props: PageProps) {
  return (
    <Layout>
      <h1>Tags page</h1>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Tags Page</title>;
