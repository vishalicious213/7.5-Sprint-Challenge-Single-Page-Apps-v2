import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharList(response.data.results);
    })
    .catch(error => {
      console.log("Error retrieving data: ", error);
    })
  }, []);
 
  return (
    <section className="search-form">
     // Add a search form here
    </section>
  );
}
