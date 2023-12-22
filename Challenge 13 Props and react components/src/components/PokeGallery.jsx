import React from "react";
import Pokemon from "./Pokemon";

const PokeGallery = () => {
  const pokemons = [
    {
      id: 1,
      name: "Bulbasaur",
      image: "bulbasaur-image-url",
      types: ["Grass", "Poison"],
    },
    {
      id: 2,
      name: "Bulbasaur",
      image: "bulbasaur-image-url",
      types: ["Grass", "Poison"],
    },
    {
      id: 3,
      name: "Bulbasaur",
      image: "bulbasaur-image-url",
      types: ["Grass", "Poison"],
    },
    {
      id: 4,
      name: "Bulbasaur",
      image: "bulbasaur-image-url",
      types: ["Grass", "Poison"],
    },
    {
      id: 5,
      name: "Bulbasaur",
      image: "bulbasaur-image-url",
      types: ["Grass", "Poison"],
    },
    {
      id: 6,
      name: "Bulbasaur",
      image: "bulbasaur-image-url",
      types: ["Grass", "Poison"],
    },
    {
      id: 7,
      name: "Bulbasaur",
      image: "bulbasaur-image-url",
      types: ["Grass", "Poison"],
    },
    {
      id: 8,
      name: "Bulbasaur",
      image: "bulbasaur-image-url",
      types: ["Grass", "Poison"],
    },
    {
      id: 9,
      name: "Bulbasaur",
      image: "bulbasaur-image-url",
      types: ["Grass", "Poison"],
    },
    {
      id: 10,
      name: "Bulbasaur",
      image: "bulbasaur-image-url",
      types: ["Grass", "Poison"],
    },
    {
      id: 11,
      name: "Bulbasaur",
      image: "bulbasaur-image-url",
      types: ["Grass", "Poison"],
    },
  ];

  return (
    <div className="poke-gallery">
      {pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default PokeGallery;
