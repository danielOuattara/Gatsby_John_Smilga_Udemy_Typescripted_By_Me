import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Hero, Layout, Posts } from "../components";
import { graphql } from "gatsby";

export default function IndexPage() {
  return <Layout></Layout>;
}

export const Head: HeadFC = () => <title>Home Page</title>;
