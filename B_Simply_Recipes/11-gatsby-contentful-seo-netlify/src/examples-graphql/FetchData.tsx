// import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";

// /* Testing useStaticQuery() code exporter
// ------------------------------------------*/

// type User = {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   gender: string;
//   ip_address: string;
// };

// type DataProps = {
//   site: {
//     siteMetadata: {
//       title: string;
//       description: string;
//       inspiredBy: string;
//       author: {
//         name: string;
//         place: string;
//       };
//       simpleData: string[];
//       complexData: User[];
//     };
//   };
// };

// export const query = graphql`
//   query FetchData {
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

// export default function FetchData() {
//   const data: DataProps = useStaticQuery(query);
//   console.log("data ==> ", data);
//   // return <pre>{JSON.stringify(data, null, 2)}</pre>;

//   return (
//     <div>
//       <h2>{data.site.siteMetadata.author.name}</h2>
//       <div>
//         {data.site.siteMetadata.complexData.map((person) => (
//           <p key={person.id}>
//             {person.first_name} : {person.email}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }

//--------------------------------------- useStaticQueries from scratch

// import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

// /* Testing useStaticQuery()
// -----------------------------*/

// type User = {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   gender: string;
//   ip_address: string;
// };

// type DataProps = {
//   site: {
//     siteMetadata: {
//       title: string;
//       description: string;
//       inspiredBy: string;
//       author: {
//         name: string;
//         place: string;
//       };
//       simpleData: string[];
//       complexData: User[];
//     };
//   };
// };

// const FetchDataQuery = graphql`
//   query FetchData {
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

// export default function FetchData() {
//   // site is the alias declared above

//   const data: DataProps = useStaticQuery(FetchDataQuery);

//   return (
//     <>
//       <h2>{data.site.siteMetadata.author.name}</h2>
//       <p>{data.site.siteMetadata.description}</p>
//     </>
//   );
// }

//----------------------------------------------- alias

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

/* Testing useStaticQuery() Automatic Types from Gatsby
-------------------------------------------------------*/

const query = graphql`
  query FetchData {
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

export default function FetchData() {
  // site is the alias declared above

  const data: Queries.FetchDataQuery = useStaticQuery(query);

  return (
    <>
      <h2>{data.site?.info?.author?.name}</h2>
      <p>{data.site?.info?.description}</p>
    </>
  );
}
