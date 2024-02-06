import React from "react";
import type { /* HeadFC, */ HeadProps, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { AllRecipes, Layout, Seo } from "./../components";

export default function Home(props: PageProps) {
  return (
    <Seo title="Seo Home Page">
      <Layout>
        <main className="page">
          <header className="hero">
            <StaticImage
              src="./../assets/images/main.jpeg"
              alt="eggs"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>simply recipes</h1>
                <h4>no fluff, just recipes</h4>
              </div>
            </div>
          </header>
          <AllRecipes />
        </main>
      </Layout>
    </Seo>
  );
}

// // export const Head: HeadFC = () => <title>Home Page</title>;
export function Head(props: HeadProps) {
  return <Seo title="New Home Page" image="mainImg.png" />;
}
