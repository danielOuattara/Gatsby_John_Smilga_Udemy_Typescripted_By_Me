import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { Hero, Services, Jobs, Projects, SEO } from "../components";

export default function IndexPage() {
  return <h1>Gatsby Portfolio Starter</h1>;
}

export const Head: HeadFC = () => <title>Home Page</title>;
