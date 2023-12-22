import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
const spongeBobCharacters = [
  {
    id: 1,
    name: "SpongeBob SquarePants",
    description: "a fun-loving person",
    image: "src/assets/1.png",
  },
  {
    id: 2,
    name: "Mr. Krab",
    description: "loves money",
    image: "src/assets/2.png",
  },
  {
    id: 3,
    name: "Squidward",
    description: "artist ",
    image: "src/assets/3.png",
  },
];

const CharacterBox = ({ character, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(character.name);
  const [editedDescription, setEditedDescription] = useState(
    character.description
  );
  const [editedImage, setEditedImage] = useState(character.image);

  const handleSaveChanges = () => {
    onEdit(character.id, editedName, editedDescription, editedImage);
    setEditing(false);
  };

  return (
    <div className="character-box">
      <img
        src={character.image}
        alt={character.name}
        onClick={() => setEditing(true)}
      />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <input
            type="text"
            value={editedImage}
            onChange={(e) => setEditedImage(e.target.value)}
          />
          <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
      ) : (
        <div>
          <p>{character.name}</p>
          <p>{character.description}</p>
          <button onClick={() => onDelete(character.id)}>Delete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};
CharacterBox.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
const Dashboard = () => {
  const [characters, setCharacters] = useState(spongeBobCharacters);

  const handleDelete = (id) => {
    setCharacters((prevCharacters) =>
      prevCharacters.filter((char) => char.id !== id)
    );
  };

  const handleEdit = (id, newName, newDescription, newImage) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((char) =>
        char.id === id
          ? {
              ...char,
              name: newName,
              description: newDescription,
              image: newImage,
            }
          : char
      )
    );
  };

  return (
    <div className="dashboard">
      {characters.map((character) => (
        <CharacterBox
          key={character.id}
          character={character}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default Dashboard;
