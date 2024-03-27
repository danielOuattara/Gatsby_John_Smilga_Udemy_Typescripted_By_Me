import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Hero, Layout, Posts } from "../components";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

export default function IndexPage({
  data,
}: PageProps<TypeFeaturedBlogsPostQuery>) {
  return (
    <Layout>
      <Hero showPersonImg={true} />
      <Posts title="recently published " posts={data.allMdx.nodes} />
    </Layout>
  );
}

type TypeFeaturedBlogsPostQuery = {
  allMdx: {
    nodes: Array<{
      id: string;
      excerpt: string;
      frontmatter: {
        title: string;
        author: string;
        category: string;
        readTime: number;
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

export const query = graphql`
  query FeaturedBlogs {
    allMdx(limit: 3, sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          readTime
          slug
          date(formatString: "MMMM Do, YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
