import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "./../components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function About(props: PageProps) {
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
      </main>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>About Page</title>;
