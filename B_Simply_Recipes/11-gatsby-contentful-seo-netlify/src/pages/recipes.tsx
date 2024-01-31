import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "./../components";
import AllRecipes from "./../components/AllRecipes";
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
