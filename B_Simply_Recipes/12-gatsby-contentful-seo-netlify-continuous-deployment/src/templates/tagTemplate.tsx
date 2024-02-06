import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { Layout, RecipesList } from "../components/";
import pluralize from "pluralize";
import { IGatsbyImageData } from "gatsby-plugin-image";

type TagTemplateQuery = {
  allContentfulSimpleRecipesGatsbyJohnSmilga: {
    totalCount: number;
    nodes: Array<{
      id: string;
      title: string;
      preparationTime: number;
      cookingTime: number;
      image: {
        gatsbyImageData: IGatsbyImageData;
      };
    }>;
  };
};

type PageContextType = { tag: string };

export const query = graphql`
  query TagTemplate($tag: String) {
    allContentfulSimpleRecipesGatsbyJohnSmilga(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      totalCount
      nodes {
        id
        title
        preparationTime
        cookingTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default function TagTemplate({
  data,
  pageContext,
}: PageProps<TagTemplateQuery, PageContextType>) {
  const recipes = data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes;
  const totalCount = data.allContentfulSimpleRecipesGatsbyJohnSmilga.totalCount;

  return (
    <Layout>
      <main className="page">
        <h2>
          category: {pageContext.tag}, {totalCount}
          {totalCount > 1 ? " recipes" : " recipe"}{" "}
        </h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
}
