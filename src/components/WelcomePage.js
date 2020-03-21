import React from "react";
import styled from "styled-components";

const MainImg = styled.img`
  width: 100%;
  border-radius: .5rem;`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <MainImg src={require("../components/rick-morty.jpg")} alt="Rick and Morty"></MainImg>
        <h1>Welcome to the ultimate fan site?</h1>
      </header>
    </section>
  );
}
