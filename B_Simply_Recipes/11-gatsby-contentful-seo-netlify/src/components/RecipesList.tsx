import * as React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import slugify from "slugify";

type TypesRecipes = NonNullable<
  | {
      recipes: ReadonlyArray<{
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
    }
  | {
      recipes: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
        readonly cookingTime: number;
        readonly preparationTime: number;
        readonly image: {
          readonly gatsbyImageData: IGatsbyImageData;
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
