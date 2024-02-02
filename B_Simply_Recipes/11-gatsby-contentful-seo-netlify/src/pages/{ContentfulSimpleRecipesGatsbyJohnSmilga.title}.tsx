import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import { Layout } from "./../components";
import slugify from "slugify";

type GetSingleRecipeQuery = {
  readonly contentfulSimpleRecipesGatsbyJohnSmilga: {
    readonly id: string;
    readonly title: string;
    readonly servings: number;
    readonly cookingTime: number;
    readonly preparationTime: number;
    readonly description: { readonly description: string };
    readonly content: {
      readonly ingredients: ReadonlyArray<string>;
      readonly instructions: ReadonlyArray<string>;
      readonly tags: ReadonlyArray<string>;
      readonly tools: ReadonlyArray<string>;
    };
    readonly image: {
      readonly gatsbyImageData: IGatsbyImageData;
    };
  };
};

export const query = graphql`
  query GetSingleRecipe($title: String) {
    contentfulSimpleRecipesGatsbyJohnSmilga(title: { eq: $title }) {
      id
      title
      servings
      cookingTime
      preparationTime
      description {
        description
      }
      content {
        ingredients
        instructions
        tags
        tools
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

export default function RecipesTemplate({
  data,
}: PageProps<GetSingleRecipeQuery>) {
  const recipe = data.contentfulSimpleRecipesGatsbyJohnSmilga;
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={getImage(recipe.image.gatsbyImageData)}
              alt={recipe.title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{recipe.title}</h2>
              <p>{recipe.description.description}</p>

              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{recipe.preparationTime} minutes</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cock time</h5>
                  <p>{recipe.cookingTime} minutes</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{recipe.servings} persons</p>
                </article>
              </div>

              <p className="recipe-tags">
                Tags:
                {recipe.content.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/tags/${slugify(tag, { lower: true, trim: true })}`}
                  >
                    {tag}
                  </Link>
                ))}
              </p>
            </article>
          </section>

          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {recipe.content.instructions.map((item, index) => (
                <div key={index} className="single-instruction">
                  <header>
                    <p>step {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{item}</p>
                </div>
              ))}
            </article>

            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {recipe.content.ingredients.map((singleIngredient, index) => (
                  <p key={index} className="single-ingredient">
                    {singleIngredient}
                  </p>
                ))}
              </div>
              <div>
                <h4>tools</h4>
                {recipe.content.tools.map((singleTool, index) => (
                  <p key={index} className="single-tool">
                    {singleTool}
                  </p>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
}
