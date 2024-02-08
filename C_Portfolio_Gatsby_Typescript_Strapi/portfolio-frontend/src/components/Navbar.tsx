import * as React from "react";
import logo from "../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { page_links } from "../constants";
import { Link } from "gatsby";

type TypeNavbarProps = {
  toggleSidebar: () => void;
};

export default function Navbar({ toggleSidebar }: TypeNavbarProps) {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo as never as string} alt="web dev" />
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>

        <div className="nav-links">
          {page_links.map((link) => (
            <Link key={link.id} to={link.url}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
