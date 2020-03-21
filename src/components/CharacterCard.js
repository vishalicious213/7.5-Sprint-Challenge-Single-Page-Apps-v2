import React from "react";
import styled from "styled-components";

const Card = styled.div`
        width: 19rem;
        margin-bottom: 1.5rem;
        background-color: cadetblue;
        border-radius: .5rem;
        padding: .5rem`

export default function CharacterCard(props) {
  // return <span>todo: character</span>;
  return (
    <Card>
      <img src={props.imgSrc} alt={props.name}></img>
      <h2>{props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Type: {props.type}</p>
      <p>Gender: {props.gender}</p>
      <p>Status: {props.status}</p>
      <p>Origin: {props.origin}</p>
      <p>Location: {props.location}</p>
    </Card>
  )
}
