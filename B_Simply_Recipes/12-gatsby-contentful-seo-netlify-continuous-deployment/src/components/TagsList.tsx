import * as React from "react";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { setupTags } from "./../utils/setupTag";
import slugify from "slugify";

type TypesRecipes = {
  recipes: Array<{
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
            to={`/tags/${slugify(tag[0], { lower: true, trim: true })}`}
          >
            {tag[0]} ({tag[1]})
          </Link>
        ))}
      </div>
    </div>
  );
}
