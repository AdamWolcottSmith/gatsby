import React from "react";

import Footer from "../components/footer";
import NavBar from "../components/navbar";

import "../styles/index.scss";
import * as layoutStyles from "./layout.module.scss";

const IndexPage = (props) => {
  return (
    <div className={layoutStyles.container}>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default IndexPage;
