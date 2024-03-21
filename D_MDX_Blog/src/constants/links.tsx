import * as React from "react";
import { Link } from "gatsby";

interface ILinksProps {
  styleClass: string;
  children?: React.ReactNode;
}
export default function Links({ styleClass, children }: ILinksProps) {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/posts" className="page-link">
          Posts
        </Link>
        {children}
      </li>
      <li>
        <Link to="/newsletter" className="page-link">
          Newsletter
        </Link>
      </li>
      <li>
        <Link to="/post" className="page-link">
          Post
        </Link>
      </li>
    </ul>
  );
}
