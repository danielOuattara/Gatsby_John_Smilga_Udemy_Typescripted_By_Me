// import * as React from "react";
// import { HeadFC, PageProps, graphql } from "gatsby";
// import Layout from "../components/Layout";

// export default function Testing({ data }: PageProps<Queries.TestingQuery>) {
//   const title = data.site?.siteMetadata?.title;

//   return (
//     <Layout>
//       <main className="page">
//         <h2>Testing Page siteMetadata: {title}</h2>
//       </main>
//     </Layout>
//   );
// }

// export const query = graphql`
//   query Testing {
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
//   }
// `;

//-------------------------------------------------- With <Gallery />>

import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "../examples-graphql/Gallery";

export const Head: HeadFC = () => <title>testing Page</title>;

export default function Testing({ data }: PageProps<Queries.TestingQuery>) {
  const title = data.site?.siteMetadata?.title;

  return (
    <Layout>
      <main className="page">
        <h2>Testing Page siteMetadata: {title}</h2>
        <Gallery />
      </main>
    </Layout>
  );
}

export const query = graphql`
  query Testing {
    site {
      siteMetadata {
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
