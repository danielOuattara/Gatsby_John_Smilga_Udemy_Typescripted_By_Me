import * as React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

type TypesRecipesSuper =
  | {
      recipes: ReadonlyArray<{
        readonly id: string;
        readonly title: string | null;
        readonly cookingTime: number | null;
        readonly preparationTime: number | null;
        readonly content: {
          readonly tags: ReadonlyArray<string | null> | null;
        } | null;
        readonly image: {
          readonly gatsbyImageData: IGatsbyImageData | null;
        } | null;
      }>;
    }
  | {
      recipes: ReadonlyArray<{
        readonly id: string;
        readonly title: string | null;
        readonly cookingTime: number | null;
        readonly preparationTime: number | null;
        readonly image: {
          readonly gatsbyImageData: IGatsbyImageData | null;
        } | null;
      }>;
    };

export default function RecipesList({ recipes = [] }: TypesRecipesSuper) {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        return (
          <Link
            // to={`/${titleToSlug(recipe.title)}`}
            to={`/${recipe.title}`}
            key={recipe.id}
            className="recipe"
          >
            <GatsbyImage
              image={getImage(recipe.image.gatsbyImageData)}
              className="recipe-img"
              alt={recipe.title || "not found"}
            />
            <h5>{recipe.title}</h5>
            <p>
              Prep: {recipe.preparationTime} minutes | Cook:{" "}
              {recipe.cookingTime} minutes
            </p>
          </Link>
        );
      })}
    </div>
  );
}
