import * as React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

/* OK ! */

// type TypeRecipes = {
//   recipes: ReadonlyArray<{
//     id: string;
//     title: string | null;
//     cookingTime: number | null;
//     preparationTime: number | null;
//     content: {
//       tags: ReadonlyArray<string | null> | null;
//     } | null;
//     image: any;
//   }>;
// };

/* OR */

type TypesRecipes = {
  recipes: readonly {
    readonly id: string;
    readonly title: string | null;
    readonly cookingTime: number | null;
    readonly preparationTime: number | null;
    readonly content: {
      readonly tags: readonly (string | null)[] | null;
    } | null;
    readonly image: {} | null;
  }[];
};

export default function RecipesList({ recipes }: TypesRecipes) {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        return (
          <Link
            // to={`/${titleToSlug(recipe.title)}`}
            to={""}
            key={recipe.id}
            className="recipe"
          >
            <GatsbyImage
              image={getImage(recipe.image)}
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
