import React from "react";

import Footer from "../components/footer";
import NavBar from "../components/navbar";

import "../styles/index.scss";

const IndexPage = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default IndexPage;
