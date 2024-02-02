import * as React from "react";
import { HeadFC, PageProps, graphql, Link } from "gatsby";
import { Layout, RecipesList } from "./../components";
import { StaticImage, IGatsbyImageData } from "gatsby-plugin-image";

type AboutQuery = {
  readonly allContentfulSimpleRecipesGatsbyJohnSmilga: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
      readonly title: string;
      readonly cookingTime: number;
      readonly preparationTime: number;
      readonly image: {
        readonly gatsbyImageData: IGatsbyImageData;
      };
    }>;
  };
};

export const query = graphql`
  query About {
    allContentfulSimpleRecipesGatsbyJohnSmilga(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        cookingTime
        preparationTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default function About({ data }: PageProps<AboutQuery>) {
  const featuredRecipes = data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes;

  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article className="">
            <h2>Lorem ipsum dolor sit amet consectetur. Ut, enim!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum sit animi in natus quidem quod sequi hic non
              reprehenderit autem.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum sit animi in natus quidem quod sequi hic non
              reprehenderit autem.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            alt="person poring salt in food bowl"
            src="./../assets/images/about.jpg"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome sauce!</h5>
          <RecipesList recipes={featuredRecipes} />
        </section>
      </main>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>About Page</title>;
