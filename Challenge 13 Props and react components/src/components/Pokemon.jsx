import React from "react";
import "./Pokemon.css";

const Pokemon = ({ name, image, types }) => (
  <div className="pokemon-card">
    <img className="pokemon-image" src={image} alt={name} />
    <div className="pokemon-details">
      <h3 className="pokemon-name">{name}</h3>
      <p className="pokemon-types">Types: {types.join(", ")}</p>
    </div>
  </div>
);

export default Pokemon;
