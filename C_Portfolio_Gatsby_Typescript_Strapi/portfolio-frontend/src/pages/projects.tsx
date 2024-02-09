import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { Projects, SEO } from "../components";
import { IGatsbyImageData } from "gatsby-plugin-image";

export const query = graphql`
  query ProjectsPage {
    allStrapiProject {
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

export type TypeProjectsPageQuery = {
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

export default function ProjectsPage({
  data,
}: PageProps<TypeProjectsPageQuery>) {
  const projects = data.allStrapiProject.nodes;
  return (
    <main>
      <section className="projects-page">
        <Projects
          title="all projects"
          showLinkToProjects={false}
          projects={projects}
        />
      </section>
    </main>
  );
}

export const Head = () => <SEO title={"Projects"} image="/projects.png" />;
