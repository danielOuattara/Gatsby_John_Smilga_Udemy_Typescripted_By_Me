import * as React from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./gallery.module.css";

const query = graphql`
  query Gallery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "recipes" }
        extension: { ne: "svg" }
      }
    ) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            # transformOptions: { grayscale: true }
            width: 275
            height: 250
          )
        }
      }
    }
  }
`;

export default function Gallery() {
  const data: Queries.GalleryQuery = useStaticQuery(query);
  return (
    <section className={styles.section}>
      {data.allFile.nodes.map((imageObject) => {
        const image = getImage(imageObject.childImageSharp.gatsbyImageData);
        return (
          <article key={imageObject.name} className={styles.item}>
            <GatsbyImage
              image={image}
              alt={imageObject.name}
              className={styles.galleryImg}
            />
            <p>{imageObject.name}</p>
          </article>
        );
      })}
    </section>
  );
}
