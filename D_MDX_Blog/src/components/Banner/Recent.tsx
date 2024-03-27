import * as React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Title from "./Title";

export default function Recent() {
  const data: TypeBannerRecentPostsQuery = useStaticQuery(query);
  return (
    <Wrapper>
      <Title title={"recent posts"} />
      {data.allMdx.nodes.map((post) => (
        <Link
          to={`/posts/${post.frontmatter.slug}`}
          className="post"
          key={post.id}
        >
          <GatsbyImage
            image={getImage(post.frontmatter.image) as IGatsbyImageData}
            alt={post.frontmatter.title}
            className="img"
          />
          <div>
            <h5>{post.frontmatter.title}</h5>
            <p>{post.frontmatter.date}</p>
          </div>
        </Link>
      ))}
    </Wrapper>
  );
}

type TypeBannerRecentPostsQuery = {
  allMdx: {
    nodes: Array<{
      id: string;
      frontmatter: {
        title: string;
        slug: string;
        date: string;
        image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    }>;
  };
};

const query = graphql`
  query BannerRecentPosts {
    allMdx(limit: 5, sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  .post {
    display: grid;
    grid-template-columns: 75px 1fr;
    column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .img {
    border-radius: var(--radius);
  }
  h5 {
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
    letter-spacing: 0;
    line-height: 1.2;
    color: var(--clr-grey-1);
  }
  p {
    font-size: 0.6rem;
    margin-bottom: 0;
    color: var(--clr-grey-5);
  }
  .post:hover {
    h5 {
      color: var(--clr-primary-5);
    }
  }
`;
