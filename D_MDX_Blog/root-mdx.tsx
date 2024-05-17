// import * as React from "react";
// import { MDXProvider } from "@mdx-js/react";

// const components = {
//   h3: () => <span>And you thought I was a h3</span>,
//   h2: () => <p>I become a paragraph</p>,
// };

// export function wrapMDXRoot({ element }) {
//   return <MDXProvider components={components}>{element}</MDXProvider>;
// }

//------------------------------------

// import * as React from "react";
// import { MDXProvider } from "@mdx-js/react";

// const components = {
//   h2: (props) => {
//     console.log(props);
//     return <h2>Props for H2</h2>;
//   },
// };

// export function wrapMDXRoot({ element }) {
//   return <MDXProvider components={components}>{element}</MDXProvider>;
// }

//------------------------------------

// import * as React from "react";
// import { MDXProvider } from "@mdx-js/react";

// const components = {
//   h2: (props) => {
//     console.log(props);
//     return <h2 {...props}>{props.children}</h2>;
//   },
// };

// export function wrapMDXRoot({ element }) {
//   return <MDXProvider components={components}>{element}</MDXProvider>;
// }

//------------------------------------

// import * as React from "react";
// import { MDXProvider } from "@mdx-js/react";

// const MyH1 = (props) => <h1 style={{ color: `tomato` }} {...props} />;
// const MyParagraph = (props) => (
//   <p style={{ fontSize: "18px", lineHeight: 1.6, color: "green" }} {...props} />
// );

// const components = {
//   h1: MyH1,
//   p: MyParagraph,
// };

// export function wrapMDXRoot({ element }) {
//   return <MDXProvider components={components}>{element}</MDXProvider>;
// }

//------------------------------------

// import * as React from "react";
// import { MDXProvider } from "@mdx-js/react";

// const myH2 = (props) => {
//   console.log(props);
//   if (props.title) {
//     return (
//       <h2 {...props} style={{ fontSize: "2rem", color: "red" }}>
//         {props.children}
//       </h2>
//     );
//   }
//   return (
//     <h2 {...props} className="code">
//       {props.children}
//     </h2>
//   );
// };

// const components = {
//   h2: myH2,
// };

// export function wrapMDXRoot({ element }) {
//   return <MDXProvider components={components}>{element}</MDXProvider>;
// }

//-------------------------------------

// import * as React from "react";
// import { MDXProvider } from "@mdx-js/react";
// import {
//   Headings,
//   Code,
//   Blockquote,
//   PrismSetup,
// } from "./src/components/Complete";
// import styled from "styled-components";
// import { ImyH2Props } from "./src/components/Complete/Headings";

// const myH2 = (props: ImyH2Props) => {
//   if (props.title) {
//     return (
//       <H2Wrapper>
//         <h2>{props.children}</h2>
//         <div className="underline"></div>
//       </H2Wrapper>
//     );
//   }
//   return (
//     <h2
//       style={{
//         margin: "2rem 0",
//         color: "var(--clr-grey-5)",
//       }}
//     >
//       {props.children}
//     </h2>
//   );
// };
// const H2Wrapper = styled.div`
//   margin: 2rem 0;
//   .underline {
//     width: 5rem;
//     height: 5px;
//     background: var(--clr-primary-5);
//   }
// `;

// const components = {
//   h2: myH2,
// };

// export function wrapMDXRoot({ element }) {
//   return <MDXProvider components={components}>{element}</MDXProvider>;
// }

//-------------------------------------

import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import {
  Headings,
  PrismSetup,
  Code,
  Blockquote,
} from "./src/components/Complete";

const TestingBlockquote = ({ children }) => (
  <div className="code">{children}</div>
);

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  // code: Code,
  blockquote: Blockquote,
};

export const wrapMDXRoot = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
