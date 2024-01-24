import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import Navbar from "./../components/Navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <h1>Hello world !</h1>
      <img src="/rockets.png" alt="rockets" />

      <hr />
      <div>
        <h1>Hello world! </h1>
        <ul>
          <li>
            <Link to="/contact"> go to Contact</Link>
          </li>
          <li>
            <Link to="/about"> go to About</Link>
          </li>
        </ul>
      </div>
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
