import * as React from "react";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { Link } from "gatsby";

type TypeSingleProject = {
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
};

type TypeSingleProjectProps = {
  index: number;
  project: TypeSingleProject;
};

export default function Project({ index, project }: TypeSingleProjectProps) {
  return (
    <article className="project">
      <GatsbyImage
        image={
          getImage(
            project.image.localFile.childImageSharp.gatsbyImageData,
          ) as IGatsbyImageData
        }
        className="project-img"
        alt={project.title}
      />

      <div className="project-info">
        <span className="project-number">#{index + 1}</span>

        <Link to={`/projects/${project.slug}`} className="project-slug">
          <h3>{project.title}</h3>
        </Link>

        <p className="project-desc">{project.description}</p>

        <div className="project-stack">
          {project.stack.map((stackItem) => (
            <span key={stackItem.id}>{stackItem.title}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>

          <a href={project.web_url} target="_blank" rel="noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
}
