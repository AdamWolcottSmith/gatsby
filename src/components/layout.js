import React from "react";
// import { Link } from "gatsby";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

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
