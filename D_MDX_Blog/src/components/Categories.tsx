import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

type TypeAllPostsByCategory = {
  allMdx: { distinct: Array<string> };
};

const query = graphql`
  query AllPostsByCategory {
    allMdx {
      distinct(field: { frontmatter: { category: SELECT } })
    }
  }
`;

export default function Categories() {
  const data: TypeAllPostsByCategory = useStaticQuery(query);
  return (
    <ul className="categories">
      {data.allMdx.distinct.map((category, index) => (
        <li key={index}>
          <Link
            className="category"
            to={`/categories/${category.toLowerCase()}`}
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
