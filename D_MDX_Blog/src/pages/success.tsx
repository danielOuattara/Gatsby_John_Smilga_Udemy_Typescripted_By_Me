import * as React from "react";
import { Layout } from "../components";
import { Link, HeadFC, PageProps } from "gatsby";

export default function Success() {
  return (
    <Layout>
      <section className="success-page">
        <div className="page-center">
          <h2>your submission was successful</h2>
          <Link to="/" className="btn">
            Back to home page
          </Link>
        </div>
      </section>
    </Layout>
  );
}
