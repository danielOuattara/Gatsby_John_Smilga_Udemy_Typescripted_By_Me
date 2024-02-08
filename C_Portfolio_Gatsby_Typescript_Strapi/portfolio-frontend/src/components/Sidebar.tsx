import * as React from "react";
import { page_links, social_links } from "../constants";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";

type TypeSidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export default function Sidebar({
  isSidebarOpen,
  toggleSidebar,
}: TypeSidebarProps) {
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isSidebarOpen ? "sidebar-links" : ""}>
          {page_links.map((link) => (
            <li key={link.id}>
              <Link to={link.url} onClick={toggleSidebar}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={isSidebarOpen ? "social-links sidebar-icons" : ""}>
          {social_links.map((link) => (
            <li key={link.id}>
              <a href={link.url} className="social-link">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
