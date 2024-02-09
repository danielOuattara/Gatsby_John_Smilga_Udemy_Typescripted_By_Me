import { GatsbyNode } from "gatsby";
import path from "path";

type TypeProjectsGatsbyNode = {
  allStrapiProject: {
    nodes: Array<{
      slug: string;
    }>;
  };
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data, errors } = await graphql<TypeProjectsGatsbyNode>(`
    query ProjectsPage {
      allStrapiProject {
        nodes {
          slug
        }
      }
    }
  `);

  if (errors) {
    throw new Error(errors.join(", "));
  }

  if (data) {
    console.log("data ==>> ", data);
    data.allStrapiProject.nodes.forEach((project) => {
      return actions.createPage({
        path: "/projects/" + project.slug,
        component: path.resolve(
          "./src/templates/projectTemplateGatsbyNode.tsx",
        ),
        context: {
          slug: project.slug,
        },
      });
    });
  }
};
