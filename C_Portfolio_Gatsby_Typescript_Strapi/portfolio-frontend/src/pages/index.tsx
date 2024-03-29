import * as React from "react";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import { Hero, Services, Jobs, Projects, SEO } from "../components";
import { IGatsbyImageData } from "gatsby-plugin-image";

export const query = graphql`
  query FeaturedProjects {
    allStrapiProject(filter: { featured: { eq: true } }) {
      totalCount
      nodes {
        id
        title
        slug
        description
        featured
        github
        web_url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

export type TypeFeaturedProjectsQuery = {
  allStrapiProject: {
    totalCount: number;
    nodes: Array<{
      id: string;
      title: string;
      slug: string;
      description: string;
      featured: boolean;
      github: string;
      web_url: string;
      stack: Array<{
        id: string;
        title: string;
      }>;
      image: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    }>;
  };
};

export default function IndexPage({
  data,
}: PageProps<TypeFeaturedProjectsQuery>) {
  const projects = data.allStrapiProject.nodes;
  return (
    <main>
      <Hero />
      <Services />
      <Jobs />
      <Projects
        showLinkToProjects={true}
        title="featured projects"
        projects={projects}
      />
    </main>
  );
}

export function Head() {
  return (
    <>
      <SEO title={"Home"} image="/home.png" />;
      {/* Add a specific lang attr. if needed ! */}
      {/* <html lang="ru-RU" /> */}
    </>
  );
}
