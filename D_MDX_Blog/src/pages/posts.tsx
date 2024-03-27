import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Layout, Hero } from "../components";
import { graphql } from "gatsby";
import Posts from "../components/Posts";
import { IGatsbyImageData } from "gatsby-plugin-image";

export default function PostsPage({ data }: PageProps<AllBlogsPostQuery>) {
  return (
    <Layout>
      <Hero showPersonImg={false} />
      <Posts title="all posts" posts={data.allMdx.nodes} />
    </Layout>
  );
}

type AllBlogsPostQuery = {
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
    allMdx(sort: { frontmatter: { date: DESC } }) {
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

export const Head: HeadFC = () => <title>Posts Page</title>;
