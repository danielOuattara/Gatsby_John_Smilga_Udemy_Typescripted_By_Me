import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import { graphql } from "gatsby";

export default function IndexPage() {
  return <h2>gatsby mdx blog starter</h2>;
}

export const Head: HeadFC = () => <title>Home Page</title>;
