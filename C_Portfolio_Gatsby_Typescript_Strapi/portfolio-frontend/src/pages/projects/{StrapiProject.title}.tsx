import * as React from "react";
import { HeadProps, Link, PageProps, graphql } from "gatsby";
import { SEO } from "./../../components";

export const query = graphql`
  query ProjectTemplate($title: String) {
    strapiProject(title: { eq: $title }) {
      title
      web_url
      description
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`;

type TypeProjectTemplateQuery = {
  strapiProject: {
    title: string;
    web_url: string;
    description: string;
    image: {
      localFile: { publicURL: string };
    };
  };
};

type TypePageContext = {
  title: string;
};

export default function ProjectTemplate({
  data,
  pageContext,
}: PageProps<TypeProjectTemplateQuery, TypePageContext>) {
  const projectData = data.strapiProject;

  console.log("projectData --->>> ", projectData);
  return (
    <main className="project-template-page">
      <h2>{pageContext.title}</h2>
      <p>{projectData.description}</p>
      <a href={projectData.web_url} target="_blank" rel="noreferrer">
        <img
          src={projectData.image.localFile.publicURL}
          alt={projectData.title}
        />
      </a>
      <Link to="/projects" className="btn">
        back to projects
      </Link>
    </main>
  );
}

export const Head = ({ data }: HeadProps<TypeProjectTemplateQuery>) => {
  const projectData = data.strapiProject;
  return (
    <SEO
      title={projectData.title.toUpperCase()}
      description={projectData.description}
      image={projectData.image.localFile.publicURL}
    />
  );
};
