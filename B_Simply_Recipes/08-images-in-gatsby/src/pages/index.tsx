import React from "react";
import type { HeadFC, Page, PageProps } from "gatsby";
import Layout from "./../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

import ImagesExample1 from "../components/Images-examples/ImagesExample1";
// import ImagesExample2 from "../components/Images-examples/ImagesExample2";
import ImagesExample3 from "../components/Images-examples/ImagesExample3";

export default function Home(props: PageProps) {
  return (
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
        {/* --------------------- */}
        {/* <ImagesExample1 /> */}
        {/* <ImagesExample2 /> */}
        {/* <ImagesExample3 /> */}
      </main>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
