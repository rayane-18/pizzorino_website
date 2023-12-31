import axios from "axios";

const baseURL = " http://localhost:5648";

const api = axios.create({
  baseURL,
});

export const postPokemon = async (pokemonData) => {
  try {
    const response = await api.post("/AddPokemon", pokemonData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllPokemons = async () => {
  try {
    const response = await api.get("/AllPokemons");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePokemon = async (id) => {
  try {
    const response = await api.delete(`/DeletePokemon/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePokemon = async (id, updatedData) => {
  try {
    const response = await api.put(`/UpdatePokemon/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
