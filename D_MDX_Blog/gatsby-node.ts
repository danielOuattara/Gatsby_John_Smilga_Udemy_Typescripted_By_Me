import path from "node:path";

import { GatsbyNode } from "gatsby";

// create pages dynamically

type TypeGatsbyNodeQuery = {
  allMdxPostSlug: {
    nodes: Array<{
      frontmatter: { slug: string };
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
      allMdxPostSlug: allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            slug
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
    data.allMdxPostSlug.nodes.forEach((post) => {
      return actions.createPage({
        path: `/posts/${post.frontmatter.slug}`,
        component: path.resolve(`src/templates/post-template.tsx`),
        context: { slug: post.frontmatter.slug },
      });
    });

    data.allCategories.distinct.forEach((category) => {
      actions.createPage({
        path: `/categories/${category.toLowerCase()}`,
        component: path.resolve(`src/templates/category-template.tsx`),
        context: { category },
      });
    });
  }
};
