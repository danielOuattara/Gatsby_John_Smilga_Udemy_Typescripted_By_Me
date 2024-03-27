import * as React from "react";
import { Layout, Hero, Banner } from "../components";
import styled from "styled-components";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

export default function PostTemplate({
  data,
}: PageProps<TypeGetSinglePostQuery>) {
  const { frontmatter } = data.mdx;

  console.log("data = ", data);

  return (
    <Layout>
      <Hero showPersonImg={true} />
      <Wrapper>
        {/* ------- post info-------- */}
        <article>
          <GatsbyImage
            image={getImage(frontmatter.image) as IGatsbyImageData}
            alt={frontmatter.title}
            className="main-img"
          />
          <div className="post-info">
            <span>{frontmatter.category}</span>
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.date}</p>
            <div className="underline"></div>
          </div>

          {/* <MDXProvider components={frontmatter.embeddedImages}>
            {frontmatter.embeddedImages && (
              <>
                <GatsbyImage
                  image={getImage(frontmatter.embeddedImages[0])}
                  alt="backroad"
                  className="first-inline-img"
                />
                <GatsbyImage
                  image={getImage(frontmatter.embeddedImages[1])}
                  alt="backroad"
                  className="first-inline-img"
                />
                <GatsbyImage
                  image={getImage(frontmatter.embeddedImages[2])}
                  alt="backroad"
                  className="first-inline-img"
                />
              </>
            )}
            {props.children}
          </MDXProvider> */}
        </article>
        {/* ------- banner -------- */}
      </Wrapper>
    </Layout>
  );
}

type TypeGetSinglePostQuery = {
  mdx: {
    id: string;
    body: string;
    frontmatter: {
      category: string;
      date: string;
      slug: string;
      title: string;
      image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
};

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        category
        date(formatString: "MMMM Do, YYYY")
        slug
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;

  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .main-img {
      width: 75%;
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
`;
