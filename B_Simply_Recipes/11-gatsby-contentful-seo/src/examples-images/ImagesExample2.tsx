import React from "react";
// import "./images_Example_2.module.css";
import * as styles from "./images_Example_2.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Images_Example_2() {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h4> constrained / default</h4>
        <StaticImage
          src="./../assets/images/recipe-1.jpeg"
          alt="recipe 1"
          placeholder="tracedSVG"
          layout="constrained"
          // height={400}
          // width={200}
          className={styles.exampleImg}
          as="section"
        />
      </article>
    </section>
  );
}
