import * as React from "react";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import setupTags from "./../utils/setupTag";
import slugify from "slugify";

type TypesRecipes = {
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
};

export default function TagsList({ recipes = [] }: TypesRecipes) {
  const lightedRecipes = recipes.map((recipe) => {
    return { content: { ...recipe.content } };
  });

  const tags = setupTags(lightedRecipes);

  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {tags.map((tag) => (
          <Link
            key={tag[0]}
            // to={`/tags/${slugify(tag[0], { lower: true, trim: true })}`}
            to={`/tags/${tag[0]}`}
          >
            {tag[0]} ({tag[1]})
          </Link>
        ))}
      </div>
    </div>
  );
}
