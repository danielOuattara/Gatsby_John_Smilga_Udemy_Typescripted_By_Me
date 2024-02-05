import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { TagsList, RecipesList } from "./index";
import { IGatsbyImageData } from "gatsby-plugin-image";

type TypeAllRecipesQuery = {
  allContentfulSimpleRecipesGatsbyJohnSmilga: {
    nodes: Array<{
      id: string;
      title: string;
      cookingTime: number;
      preparationTime: number;
      content: {
        tags: Array<string>;
      };
      image: {
        gatsbyImageData: IGatsbyImageData;
      };
    }>;
  };
};

const query = graphql`
  query AllRecipes {
    allContentfulSimpleRecipesGatsbyJohnSmilga(sort: { title: ASC }) {
      nodes {
        id
        title
        cookingTime
        preparationTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default function AllRecipes() {
  const data: TypeAllRecipesQuery = useStaticQuery(query);
  const recipes = data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes;
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
}
