import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 30%;
  a {
    text-decoration: none;
    font-size: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    color: gainsboro;
    font-weight: bold;
    text-shadow:  
      3px 3px 0 #000,
      -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
    :hover {color: darkkhaki;}
    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1100px) {
    // align-text: center;
    // width: 90%;
    margin-bottom: 2rem;
  }
`

const Banner = styled.img`
  width: 100%;`

export default function Header() {
  return (
    // <header className="ui centered">
    //   <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    // </header>
    <div className="logo">
      <Banner src={require("../components/logo.png")}></Banner>
      {/* <h1 className="ui center">Rick &amp; Morty Fan Page</h1> */}
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/search">Search</Link>
      </Nav>
    </div>
  );
}
