import * as React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import slugify from "slugify";

type TypesRecipes = NonNullable<
  | {
      recipes: ReadonlyArray<{
        id: string;
        title: string;
        cookingTime: number;
        preparationTime: number;
        content: {
          tags: ReadonlyArray<string>;
        };
        image: {
          gatsbyImageData: IGatsbyImageData;
        };
      }>;
    }
  | {
      recipes: ReadonlyArray<{
        id: string;
        title: string;
        cookingTime: number;
        preparationTime: number;
        image: {
          gatsbyImageData: IGatsbyImageData;
        };
      }>;
    }
>;

export default function RecipesList({ recipes }: TypesRecipes) {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        return (
          <Link
            to={`/${slugify(recipe.title, { lower: true, trim: true })}`}
            key={recipe.id}
            className="recipe"
          >
            <GatsbyImage
              image={getImage(recipe.image.gatsbyImageData)}
              className="recipe-img"
              alt={recipe.title}
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
