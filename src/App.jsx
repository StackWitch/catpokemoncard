import React, { useState } from "react";
import "./index.css";
import catPic from './EpPokemon.jpg';


const CatCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="card-front">
          <h2>✨ EP Thompson ✨</h2>
          <img
            src={catPic}
            alt="EP Thompson"
            className="cat-image"
          />
          <p>Type: Couch Potato</p>
          <p>Level: 2</p>
        </div>
        {/* Back */}
        <div className="card-back">
          <h3>Stats</h3>
          <ul>
            <li>Speed: 🐢 1</li>
            <li>Cuteness: ❤️ 3</li>
            <li>Agility: 🤷 0</li>
            <li>Favorite Move: Nap</li>
          </ul>
          <p>Click to flip back (if you can wake him up!)</p>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
