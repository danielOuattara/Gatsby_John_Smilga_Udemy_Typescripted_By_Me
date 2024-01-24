import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

export default function About(props: PageProps) {
  return <h1>About page</h1>;
}

export const Head: HeadFC = () => <title>About Page</title>;
