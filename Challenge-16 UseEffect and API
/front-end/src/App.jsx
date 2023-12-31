import React, { useEffect, useState } from "react";
import {
  postPokemon,
  getAllPokemons,
  deletePokemon,
  updatePokemon,
} from "./api/api";
import "./app.css";
const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [newPokemon, setNewPokemon] = useState({
    Name: "",
    TypeofPokemon: "",
    Description: "",
    Weakness: "",
    Drops: "",
  });
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemons = await getAllPokemons();
        setPokemonList(pokemons);
      } catch (error) {
        console.error("Error fetching Pokemons:", error);
      }
    };

    fetchData();
  }, []);

  const handleInitialize = async () => {
    try {
      const response = await fetch("/assets/initialPokemons.json");
      const initialPokemons = await response.json();

      for (const pokemon of initialPokemons) {
        await postPokemon(pokemon);
      }

      const updatedPokemonList = await getAllPokemons();
      setPokemonList(updatedPokemonList);
    } catch (error) {
      console.error("Error initializing Pokemons:", error);
    }
  };
  const handleAddPokemon = async (event) => {
    event.preventDefault();

    try {
      await postPokemon(newPokemon);

      const updatedPokemonList = await getAllPokemons();
      setPokemonList(updatedPokemonList);

      setNewPokemon({
        Name: "",
        TypeofPokemon: "",
        Description: "",
        Weakness: "",
        Drops: "",
      });
    } catch (error) {
      console.error("Error adding Pokemon:", error);
    }
  };

  const handleDeletePokemon = async (id) => {
    try {
      await deletePokemon(id);

      const updatedPokemonList = await getAllPokemons();
      setPokemonList(updatedPokemonList);
    } catch (error) {
      console.error("Error deleting Pokemon:", error);
    }
  };

  const handleUpdatePokemon = async () => {
    try {
      await updatePokemon(selectedPokemon._id, selectedPokemon);

      const updatedPokemonList = await getAllPokemons();
      setPokemonList(updatedPokemonList);

      setSelectedPokemon(null);
    } catch (error) {
      console.error("Error updating Pokemon:", error);
    }
  };

  const handleEditClick = (pokemon) => {
    setSelectedPokemon({ ...pokemon });
  };

  const handleCancelEdit = () => {
    setSelectedPokemon(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPokemon((prevPokemon) => ({
      ...prevPokemon,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      {" "}
      {/* Apply the 'container' class */}
      <button onClick={handleInitialize}>Initialize Pokemons</button>
      <h2>Add Pokemon</h2>
      <form className="pokemon-form" onSubmit={handleAddPokemon}>
        <label>
          Name:
          <input
            type="text"
            name="Name"
            value={newPokemon.Name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="TypeofPokemon"
            value={newPokemon.TypeofPokemon}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="Description"
            value={newPokemon.Description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Weakness:
          <input
            type="text"
            name="Weakness"
            value={newPokemon.Weakness}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Drops:
          <input
            type="text"
            name="Drops"
            value={newPokemon.Drops}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Pokemon</button>
      </form>
      <h2>Pokemon List</h2>
      <ul className="pokemon-list">
        {" "}
        {/* Apply the 'pokemon-list' class */}
        {pokemonList.map((pokemon) => (
          <li key={pokemon._id} className="pokemon-item">
            {" "}
            {/* Apply the 'pokemon-item' class */}
            {selectedPokemon && selectedPokemon._id === pokemon._id ? (
              <form className="update-form" onSubmit={handleUpdatePokemon}>
                <input
                  type="text"
                  name="Name"
                  value={selectedPokemon.Name}
                  onChange={handleInputChange}
                  className="update-input"
                />

                <button type="submit" className="update-button">
                  Update
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="cancel-button"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <>
                {pokemon.Name} -
                <button
                  onClick={() => handleDeletePokemon(pokemon._id)}
                  className="delete-button"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditClick(pokemon)}
                  className="edit-button"
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
