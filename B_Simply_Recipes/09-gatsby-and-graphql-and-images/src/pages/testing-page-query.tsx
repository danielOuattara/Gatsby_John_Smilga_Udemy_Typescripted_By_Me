// import * as React from "react";
// import { HeadFC, PageProps, graphql } from "gatsby";

// export const Head: HeadFC = () => <title>test Page Query</title>;

// export default function TestingPageQuery({
//   data,
// }: PageProps<Queries.TestingPageQueryQuery>) {
//   const title = data.site?.siteMetadata?.title;
//   return <h2>Testing Page siteMetadata: {title}</h2>;
// }

// export const query = graphql`
//   query TestingPageQuery {
//     site {
//       siteMetadata {
//         title
//         description
//         inspiredBy
//         author {
//           name
//           place
//         }
//         simpleData
//         complexData {
//           id
//           email
//           first_name
//           gender
//           last_name
//           ip_address
//         }
//       }
//     }
//   } `;

//------------------------------------------------------------

import * as React from "react";
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "../examples-graphql/Gallery";

export default function TestingPageQuery({
  data,
}: PageProps<Queries.TestingPageQueryQuery>) {
  // page query: page query OR static query, not both at the same time
  console.log("data = ", data);
  const title_1 = data?.site?.info?.title;

  // static query: page query OR static query, not both at the same time
  const data2: Queries.TestingPageQueryQuery = useStaticQuery(query);
  const title_2 = data2.site?.info?.title;

  return (
    <Layout>
      <main className="page">
        <Gallery />
        <hr />
        <h3>Testing Page Query: {title_1}</h3>
        <h3>Testing Static Query: {title_2} hello</h3>
      </main>
    </Layout>
  );
}

const query = graphql`
  query TestingPageQuery {
    # site {
    #   info: siteMetadata {
    #     title
    #     description
    #     inspiredBy
    #     author {
    #       name
    #       place
    #     }
    #     simpleData
    #     complexData {
    #       id
    #       email
    #       first_name
    #       gender
    #       last_name
    #       ip_address
    #     }
    #   }
    # }

    site {
      info: siteMetadata {
        title
        description
        inspiredBy
        author {
          name
          place
        }
        simpleData
        complexData {
          id
          email
          first_name
          gender
          last_name
          ip_address
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Testing Page Query</title>;
