import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const API_URL = "https://pokeapi.co/api/v2/pokemon";

  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get(API_URL);
    setPokemons(response.data.results);
    console.log("data", response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPokemons = [...pokemons].filter((poke) => {
    return poke.name.includes(searchTerm);
  });

  // const filteredPokemons = [...pokemons].filter(poke => poke.name.includes(searchTerm))
  console.log("filter", filteredPokemons);
  return (
    <div className="HomePage">
      Search:{" "}
      <input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <hr></hr>
      {!pokemons
        ? "Loading"
        : filteredPokemons.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <NavLink to={`/details/${pokemon.name}`}>
                  {pokemon.name}
                </NavLink>
              </div>
            );
          })}
    </div>
  );
}
