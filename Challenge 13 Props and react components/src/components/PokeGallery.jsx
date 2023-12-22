import React from "react";
import Pokemon from "./Pokemon";

const PokeGallery = () => {
  const pokemons = [
    {
      id: 1,
      name: "Charmander",
      image: "/src/assets/1.png",
      types: ["Fire"],
    },
    {
      id: 2,
      name: "Victini",
      image: "/src/assets/2.png",
      types: ["Psychic", "Fire"],
    },
    {
      id: 3,
      name: "Articuno",
      image: "/src/assets/3.png",
      types: ["Ice", "Flying"],
    },
    {
      id: 4,
      name: "Zapdos",
      image: "/src/assets/4.png",
      types: ["Electric", "Flying"],
    },
    {
      id: 5,
      name: "Moltres",
      image: "/src/assets/5.png",
      types: ["Dark", "Flying"],
    },
    {
      id: 6,
      name: "Mewtwo",
      image: "/src/assets/6.png",
      types: ["Psychic"],
    },
    {
      id: 7,
      name: "Kyurem",
      image: "/src/assets/7.png",
      types: ["Dragon", "Ice"],
    },
    {
      id: 8,
      name: "Duraludon",
      image: "/src/assets/8.png",
      types: ["Dragon", "Steel"],
    },
    {
      id: 9,
      name: "Chikorita",
      image: "/src/assets/9.png",
      types: ["Grass"],
    },
    {
      id: 10,
      name: "Cyndaquil",
      image: "/src/assets/10.png",
      types: ["Fire"],
    },
    {
      id: 11,
      name: "Totodile",
      image: "/src/assets/11.png",
      types: ["Water"],
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
