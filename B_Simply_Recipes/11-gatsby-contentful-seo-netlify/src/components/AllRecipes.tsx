import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { TagsList, RecipesList } from "./index";

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
  const data: Queries.AllRecipesQuery = useStaticQuery(query);
  const recipes = data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes;
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
}
