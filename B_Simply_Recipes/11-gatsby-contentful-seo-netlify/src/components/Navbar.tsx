import React from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "./../assets/images/logo.svg";


const navBarItems = ["home", "recipes", "tags", "about"];

export default function Navbar() {
  const [showLinks, setShowLinks] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simple recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setShowLinks(!showLinks)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={showLinks ? "show-links nav-links" : " nav-links"}>
          {navBarItems.map((item) => (
            <Link
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShowLinks(false)}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </Link>
          ))}

          <div className="nav-link contact-link">
            <Link
              to="/contact"
              className="btn"
              onClick={() => setShowLinks(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
