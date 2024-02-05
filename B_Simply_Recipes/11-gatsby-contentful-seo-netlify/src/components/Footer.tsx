import * as React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyRecipes</span> Powered
        using <a href="https://www.gatsbyjs.com/">Gatsby 5.13+ & Typescript</a>
      </p>
    </footer>
  );
};

export default Footer;
