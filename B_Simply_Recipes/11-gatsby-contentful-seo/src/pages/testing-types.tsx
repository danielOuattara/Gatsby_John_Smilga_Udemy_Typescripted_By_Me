//-------------------------------------------------- With <Gallery />>

import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";


export const query = graphql`
  query GetRecipes {
    allContentfulSimpleRecipesGatsbyJohnSmilga {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default function GetRecipes({
  data,
}: PageProps<Queries.GetRecipesQuery>) {
  return (
    <main className="page">
      <h2>Testing Page </h2>
    </main>
  );
}

export const Head: HeadFC = () => <title>testing Page</title>;


