import React from "react";

import Footer from "../components/footer";
import NavBar from "../components/navbar";

import "../styles/index.scss";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: auto;
  max-width: 750px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const StyledContent = styled.section`
  flex-grow: 1;
`;

const IndexPage = (props) => {
  return (
    <StyledContainer>
      <StyledContent>
        <NavBar />
        {props.children}
      </StyledContent>
      <Footer />
    </StyledContainer>
  );
};

export default IndexPage;
