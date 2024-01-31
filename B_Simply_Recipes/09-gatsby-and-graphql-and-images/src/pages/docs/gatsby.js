import React from "react";
import { Link } from "gatsby";
const gatsby = () => {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Documentation about Gatsby.js"),
        React.createElement(Link, { to: "/" }, "Home")));
};
export default gatsby;
