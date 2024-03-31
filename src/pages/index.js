import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div>
      <h1>HELLO</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
