import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "./../components/Layout";
import { page } from "./../style/Contact.module.css";

export default function Contact(props: PageProps) {
  return (
    <Layout>
      <h1>Contact page</h1>

      {/* ------------------------------------ */}
      <p className={page}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sit qui
        animi neque in fugit perferendis corrupti amet quia temporibus eius
        minus vel enim nulla repudiandae, voluptatem tenetur ad? Qui!
      </p>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Contact Page</title>;
