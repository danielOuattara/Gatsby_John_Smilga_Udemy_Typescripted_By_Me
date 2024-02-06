import { GatsbyNode } from "gatsby";
import path from "path";
import slugify from "slugify";
import { setupTags } from "./src/utils/setupTag";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
    }
  `);
  };

//--------------------------------------------------------------

type TypeGetRecipesGatsbyNode = {
  allContentfulSimpleRecipesGatsbyJohnSmilga: {
    nodes: Array<{
      content: {
        tags: Array<string>;
      };
    }>;
  };
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data, errors } = await graphql<TypeGetRecipesGatsbyNode>(`
    query GetRecipes {
      allContentfulSimpleRecipesGatsbyJohnSmilga {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  if (errors) {
    throw new Error(errors.join(", "));
  }

  if (data) {
    data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes.forEach((recipe) => {
      return recipe.content.tags.forEach((tag) => {
        return actions.createPage({
          path: "/tags/" + slugify(tag, { lower: true, trim: true }),
          component: path.resolve("./src/templates/tagTemplate.tsx"),
          context: {
            tag,
          },
        });
      });
    });
  }
};
