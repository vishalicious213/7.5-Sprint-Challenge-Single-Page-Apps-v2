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
  const [typedString, setTypedString] = useState("");

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(response => {
      const allChars = response.data.results;
      const seeking = allChars.filter(char =>
        char.name.toLowerCase().includes(searchString.toLowerCase()));
      setCharList(seeking);
    })
    .catch(error => {
      console.log("Error retrieving data: ", error);
    })
  }, [searchString]);

  const handleSearch = event => {
    setTypedString(event.target.value);
  };

  const stopAxios = event => {
    event.preventDefault();
    setSearchString(typedString);
  }
 
  return (
    <section className="search-form">
     {/* Add a search form here */}
      <form onSubmit={stopAxios} className="search">
        <Input
          type="text"
          onChange={handleSearch}
          value={typedString}
          name="search"
          placeholder="Enter character name"
        />
        <Button type="submit">Search</Button>
      </form>

      <div className="character-list">
        {charList.map(char => {
          return <CharacterCard key={char.id} name={char.name} species={char.species} type={char.type} status={char.status} gender={char.gender} origin={char.origin.name} location={char.location.name} imgSrc={char.image} />
        })}
      </div>
    </section>
  );
}
