import * as React from "react";
import { Layout, Hero, Posts } from "../components/";
import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

type TypePageContext = {
  category: string;
};

export default function CategoryTemplate({
  data,
  pageContext,
}: PageProps<TypeSingleCategoryPostsQuery, TypePageContext>) {
  return (
    <Layout>
      <Hero showPersonImg={true} />
      <Posts
        title={`categories / ${pageContext.category.toLowerCase()}.`}
        posts={data.allMdx.nodes}
      />
    </Layout>
  );
}

type TypeSingleCategoryPostsQuery = {
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
          publicURL: string;
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    }>;
  };
};

export const query = graphql`
  query SingleCategoryPosts($category: String) {
    allMdx(filter: { frontmatter: { category: { eq: $category } } }) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          readTime
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
            publicURL
          }
        }
        excerpt
      }
    }
  }
`;
