import * as React from "react";
import Post from "./Post";
import Banner from "../Banner";
import type { PageProps } from "gatsby";

interface IPostsProps extends PageProps {
  posts: [];
  title: string;
}

export default function PostsPage({ posts, title }: IPostsProps) {
  return <h4>posts component</h4>;
}
