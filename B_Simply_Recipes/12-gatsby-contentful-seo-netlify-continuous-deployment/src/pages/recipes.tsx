import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout, AllRecipes, Seo } from "./../components";
export default function Recipes(props: PageProps) {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Recipes" />;
}
