import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(response => {
      // console.log(response);
      // const charList = response.data.results;
      // console.log(charList);
      setCharList(response.data.results);
    })
    .catch(error => {
      console.log("Error retrieving data: ", error);
    })
  }, []);

  // console.log(charList); //charList is using state

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {charList.map(char => {
        // console.log(char.name, char.species, char.status, char.gender)
        return <CharacterCard key={char.id} name={char.name} species={char.species} type={char.type} status={char.status} gender={char.gender} origin={char.origin.name} location={char.location.name} imgSrc={char.image} />
      })}
    </section>
  );
}
