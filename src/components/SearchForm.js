import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [charList, setCharList] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharList(response.data.results);
    })
    .catch(error => {
      console.log("Error retrieving data: ", error);
    })
  }, []);

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
      </form>
    </section>
  );
}
