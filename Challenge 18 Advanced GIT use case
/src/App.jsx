import { useState } from "react";
import gameData from "./assets/switchtdb.json";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("");

  const renderGames = () => {
    const filteredGames = gameData.filter(
      (game) =>
        game.locale &&
        game.locale.title &&
        game.locale.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!filterCriteria ||
          (game.region && game.region.includes(filterCriteria)))
    );

    return filteredGames.map((game) => (
      <div key={game.id} className="game-card">
        <img
          src={`/src/assets/Images/${game.id}.jpg`}
          alt={game.locale.title}
        />
        <h3>{game.locale.title}</h3>
      </div>
    ));
  };

  return (
    <div>
      <div>
        <h2>Gallery</h2>
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filterCriteria}
            onChange={(e) => setFilterCriteria(e.target.value)}
          >
            <option value="">All Regions</option>
            <option value="USA">USA</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="game-list">
          {/* Use grid styling for the game cards */}
          <div className="game-grid">{renderGames()}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
