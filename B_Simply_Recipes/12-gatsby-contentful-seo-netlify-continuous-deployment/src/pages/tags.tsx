import * as React from "react";
import { HeadFC, PageProps, graphql, Link } from "gatsby";
import { Layout, Seo } from "./../components";
import { setupTags } from "./../utils/setupTag";
import slugify from "slugify";

type TagsQuery = {
  allContentfulSimpleRecipesGatsbyJohnSmilga: {
    nodes: {
      content: {
        tags: string[];
      };
    }[];
  };
};

type TypesTags = {
  content: {
    tags: readonly string[];
  };
}[];

export const query = graphql`
  query Tags {
    allContentfulSimpleRecipesGatsbyJohnSmilga(sort: { title: ASC }) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default function Tags({ data }: PageProps<TagsQuery>) {
  const recipesTags = data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes;
  const tags = setupTags(recipesTags);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {tags.map((item) => (
            <Link
              key={item[0]}
              to={`/tags/${slugify(item[0])}`}
              className="tag"
            >
              <h5>{item[0]}</h5>
              <p>
                {item[1]}
                {item[1] > 1 ? " recipes" : " recipe"}
              </p>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Tags" />;
}
