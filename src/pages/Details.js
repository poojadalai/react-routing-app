import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  //add usesate empty array
  const [pokemon, setPokemon] = useState();

  // use params to get data from url
  const params = useParams({});

  // get data from API using axios
  const fetchPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`
    );
    setPokemon(response.data);
    console.log("data", response.data);
  };

  //use useEffect hook to fetch data once
  useEffect(() => {
    fetchPokemon();
  }, []);

  //display data
  return pokemon ? (
    <div>
      <p>{pokemon.name} </p>
      <img alt="backimage" src={pokemon.sprites.front_default} />
      {pokemon
        ? pokemon.types.map((type) => {
            console.log("type", type);
            return <div> {type.type.name} </div>;
          })
        : "loading"}
    </div>
  ) : (
    "Loading..."
  );
}
