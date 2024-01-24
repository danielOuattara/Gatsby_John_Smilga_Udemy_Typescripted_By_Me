import React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Hello world !</h1>
      <img src="/rockets.png" alt="rockets" />
    </main>
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
