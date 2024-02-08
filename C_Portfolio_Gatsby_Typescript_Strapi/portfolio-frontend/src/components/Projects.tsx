import * as React from "react";
import { Title, Project } from "./index";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

type TypeProjects = Array<{
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

type TypeProjectsProp = {
  title: string;
  projects: TypeProjects;
  showLinkToProjects: boolean;
};

export default function Projects({
  title,
  projects,
  showLinkToProjects,
}: TypeProjectsProp) {
  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center projects-center">
        {projects.map((project, index) => (
          <Project key={project.id} index={index} project={project}></Project>
        ))}
      </div>

      {showLinkToProjects && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  );
}
