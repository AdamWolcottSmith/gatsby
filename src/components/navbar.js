import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;
const StyledTitle = styled.h1`
  color: #000000;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.2rem;
`;
const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`;

const StyledListItem = styled.li`
  color: #999999;
  font-size: 0.9rem;
  margin-right: 1.3rem;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <StyledHeader>
      <StyledTitle>
        <Link to="/">PAIN ANNIHILATOR</Link>
      </StyledTitle>

      <nav>
        <StyledNavList>
          <StyledListItem>
            <Link to="/about">About</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/work">Work</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/cv">CV</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/contact">Contact</Link>
          </StyledListItem>
        </StyledNavList>
      </nav>
    </StyledHeader>
  );
};

export default NavBar;
