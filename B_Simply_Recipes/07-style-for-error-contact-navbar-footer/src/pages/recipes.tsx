import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "./../components";
export default function Recipes(props: PageProps) {
  return (
    <Layout>
      <h1>Recipes page</h1>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Recipes Page</title>;
