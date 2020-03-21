import React, { useEffect, useState } from "react";
import axios from "axios";

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
      </form>

      <div className="results">
        {charList.map(char => {
          return (
            <p>{char.name}</p>
          )
        })}
      </div>
    </section>
  );
}
