import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const Input = styled.input`
  font-size: 1.25rem;
  border: 3px solid black;
  border-radius: .5rem;
  color: darkkhaki;
  background: cadetblue;
  margin: 1px;
  text-shadow:  
    3px 3px 0 #000,
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;`

const Button = styled.button`
  font-size: 1.25rem;
  // width: 10rem;
  color: cadetblue;
  font-weight: bold;
  background: darkkhaki;
  border: 3px solid black;
  border-radius: .5rem;
  margin: 1px;
  text-shadow:  
    3px 3px 0 #000,
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  :hover {
    color: darkkhaki;
    background: cadetblue;
  }`

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
        <Input
          type="text"
          onChange={handleSearch}
          value={searchString}
          name="search"
          placeholder="Enter character name"
        />
        <Button>Reset Search</Button>
      </form>

      <div className="results">
        {charList.map(char => {
          return (
            // <p>{char.name}</p>
            <section className="character-list" key={char.id}>
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
