import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [charList, setCharList] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(response => {
      const allChars = response.data.results;
      const seeking = allChars.filter(char =>
        char.name.includes(searchString));
      setCharList(seeking)
    })
    .catch(error => {
      console.log("Error retrieving data: ", error);
    })
  }, [searchString]);

  const handleSearch = event => {
    setSearchString(event.target.value);
  };
 
  return (
    <section className="search-form">
     {/* Add a search form here */}
      <form className="search">
        <input
          type="text"
          onChange={handleSearch}
          value={searchString}
          name="search"
          placeholder="Enter character name"
        />
        <button>Reset Search</button>
      </form>

      <div className="results">
        {charList.map(char => {
          return (
            // <p>{char.name}</p>
            <section className="character-list">
              {charList.map(char => {
                return <CharacterCard key={char.id} name={char.name} species={char.species} type={char.type} status={char.status} gender={char.gender} origin={char.origin.name} location={char.location.name} imgSrc={char.image} />
              })}
            </section>
          )
        })}
      </div>
    </section>
  );
}
