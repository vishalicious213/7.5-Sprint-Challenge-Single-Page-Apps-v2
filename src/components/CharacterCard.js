import React from "react";

export default function CharacterCard(props) {
  // return <span>todo: character</span>;
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Type: {props.type}</p>
      <p>Gender: {props.gender}</p>
      <p>Status: {props.status}</p>
      <p>Origin: {props.origin}</p>
      <p>Location: {props.location}</p>
    </div>
  )
}
