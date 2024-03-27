import * as React from "react";
import Post, { IBlogPost } from "./Post";
import Banner from "../Banner";

interface IPostsProps {
  posts: IBlogPost[];
  title: string;
}

export default function PostsPage({ posts, title }: IPostsProps) {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        {/* --- posts left column --- */}
        <article>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </article>

        {/* --- banner right column --- */}
        <article>
          <Banner />
        </article>
      </div>
    </section>
  );
}
