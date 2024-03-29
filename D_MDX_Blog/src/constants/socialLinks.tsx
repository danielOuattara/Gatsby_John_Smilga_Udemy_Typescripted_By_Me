import * as React from "react";
import { FaFacebookSquare, FaDribbbleSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, PageProps } from "gatsby";

interface ISocialLinksProps {
  styleClass: string;
}

export default function SocialLinks({ styleClass }: ISocialLinksProps) {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://twitter.com">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaDribbbleSquare className="social-icon dribble-icon"></FaDribbbleSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaSquareXTwitter className="social-icon twitter-icon"></FaSquareXTwitter>
        </a>
      </li>
    </ul>
  );
}
