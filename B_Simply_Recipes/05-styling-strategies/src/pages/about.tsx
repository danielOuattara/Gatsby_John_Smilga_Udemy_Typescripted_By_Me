import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "./../components/Layout";
import * as styles from "../style/About.module.css";
import styled from "styled-components";

export default function About(props: PageProps) {
  return (
    <Layout>
      <Wrapper>
        <h1>About page</h1>
        <h1 className="about-heading">Next H1 Heading</h1>

        {/* ------------------------------------------ */}

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          placeat ratione facilis laudantium fugiat possimus explicabo, officia
          molestiae unde, dolore deleniti impedit cumque ad quae fugit aliquam
          hic aut quidem.
        </p>
        <p className="text-styled">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quae, deserunt pariatur eligendi expedita ad hic, iste quis quod non
          numquam mollitia accusantium! Eos nobis nostrum placeat cupiditate
          doloremque dolorum.
        </p>
      </Wrapper>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>About Page</title>;

const Wrapper = styled.section`
  color: grey;
  background-color: #502626;
  padding: 10px;
  margin: 10px;

  h1 {
    color: olivedrab;
  }

  .text-styled {
    text-transform: uppercase;
  }
`;
