import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "./../components/Layout";
import { page, text } from "./../style/Home.module.css";
import { ExampleButton } from "../styled-components/ExampleButton";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "capitalize" }}>
        Hello world !
      </h1>

      <h1 className="home-heading">New H1 Title</h1>
      <img src="/rockets.png" alt="rockets" />

      {/* ---------------------------------- */}

      <p className={`${page}, ${text}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
        excepturi nisi quia. Nihil doloribus architecto recusandae officia ad
        quibusdam impedit eligendi sapiente culpa minus, velit magni, beatae
        dolor iste neque?
      </p>

      {/* ------------------------------------- */}

      <ExampleButton type="button" onClick={() => alert("Clicked !")}>
        Click on Button Styled Component
      </ExampleButton>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

//-------------------------------------------------------------------

// export default function Home() {
//   return (
//     <>
//       <h1>Hello world!</h1>
//       <img src="images/icon.png" alt="gatsby" />
//     </>
//   );
// }
