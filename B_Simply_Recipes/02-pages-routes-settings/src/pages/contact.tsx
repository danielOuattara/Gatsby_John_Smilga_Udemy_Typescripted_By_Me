import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

export default function Contact(props: PageProps) {
  return <h1>Contact page</h1>;
}

export const Head: HeadFC = () => <title>Contact Page</title>;
