import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { TagsList, RecipesList } from "./index";
import { IGatsbyImageData } from "gatsby-plugin-image";

type AllRecipesQuery = {
  readonly allContentfulSimpleRecipesGatsbyJohnSmilga: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
      readonly title: string;
      readonly cookingTime: number;
      readonly preparationTime: number;
      readonly content: {
        readonly tags: ReadonlyArray<string>;
      };
      readonly image: {
        readonly gatsbyImageData: IGatsbyImageData;
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
  const data: AllRecipesQuery = useStaticQuery(query);
  const recipes = data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes;
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
}
