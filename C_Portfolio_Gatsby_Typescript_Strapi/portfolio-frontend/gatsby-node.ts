// gatsby-node.ts

import { GatsbyNode } from "gatsby";
import path from "path";

type TypeGetProjectsPageGatsbyNodes = {
  allStrapiProject: {
    nodes: Array<{
      slug: string;
      title: string;
    }>;
  };
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data, errors } = await graphql<TypeGetProjectsPageGatsbyNodes>(`
    query GetProjectsPageGatsbyNode {
      allStrapiProject {
        nodes {
          slug
          title
        }
      }
    }
  `);

  if (errors) {
    throw new Error(errors.join(", "));
  }

  if (data) {
    data.allStrapiProject.nodes.forEach((project) => {
      return actions.createPage({
        path: "/projects/" + project.slug,
        component: path.resolve(
          "./src/templates/projectTemplateGatsbyNode.tsx",
        ),
        context: {
          title: project.title,
        },
      });
    });
  }
};
