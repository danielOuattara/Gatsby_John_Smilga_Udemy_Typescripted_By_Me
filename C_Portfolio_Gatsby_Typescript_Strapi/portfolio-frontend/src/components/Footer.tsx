import * as React from "react";
import { social_links } from "../constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {social_links.map((link) => (
            <a href={link.url} key={link.id} className="social-link">
              {link.icon}
            </a>
          ))}
        </div>
        <h4>
          copyright &copy; 2019 - {new Date().getFullYear()}{" "}
          <span>Web dev</span> all right reserved
        </h4>
      </div>
    </footer>
  );
}
