import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout, AllRecipes } from "./../components";
export default function Recipes(props: PageProps) {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Recipes Page</title>;
