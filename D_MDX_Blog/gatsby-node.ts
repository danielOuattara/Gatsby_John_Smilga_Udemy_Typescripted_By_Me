import { resolve } from "node:path";
import { GatsbyNode } from "gatsby";

const postTemplate = resolve(`./src/templates/post-template.tsx`);
// create pages dynamically

type TypeGatsbyNodeQuery = {
  allMdxPost: {
    nodes: Array<{
      frontmatter: { slug: string };
      internal: { contentFilePath: string };
    }>;
  };
  allCategories: { distinct: Array<string> };
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data, errors } = await graphql<TypeGatsbyNodeQuery>(`
    query GatsbyNode {
      allMdxPost: allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
      allCategories: allMdx {
        distinct(field: { frontmatter: { category: SELECT } })
      }
    }
  `);

  if (errors) {
    throw new Error(errors.join(", "));
  }

  if (data) {
    data.allMdxPost.nodes.forEach((post) => {
      return actions.createPage({
        path: `/posts/${post.frontmatter.slug}`,
        // component: resolve(`src/templates/post-template.tsx`) /*old version*/,
        component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
        context: { slug: post.frontmatter.slug },
      });
    });

    data.allCategories.distinct.forEach((category) => {
      actions.createPage({
        path: `/categories/${category.toLowerCase()}`,
        component: resolve(`src/templates/category-template.tsx`),
        context: { category },
      });
    });
  }
};
