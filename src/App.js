import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  let [characters, setcharacters] = useState({ ready: false });

  function handleResponse(response) {
    setcharacters({
      ready: true,
      data: response.data.results,
    });
  }

  function getCharacters() {
    let apiUrl = "https://rickandmortyapi.com/api/character";
    axios.get(apiUrl).then(handleResponse);
  }

  if (characters.ready) {
    console.log(characters);
    return (
      <div className="App">
        <div className="container">
          {characters.data.map(function (character, index) {
            if (index < 10) {
              return (
                <div key={index}>
                  <div className="character-card">
                    <img className="character-img" src={character.image} />
                    <div className="character-content">
                      <div>
                        <h2 className="character-name">Arthricia</h2>
                        <p className="status">
                          {character.status} - {character.species}
                        </p>
                      </div>
                      <div>
                        <p className="character-option-desc">Gender</p>
                        <p className="character-option">{character.gender}</p>
                      </div>
                      <div>
                        <p className="character-option-desc">
                          Last known location:
                        </p>
                        <p className="character-option">
                          {character.location.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    getCharacters();
    return "Loading...";
  }
}

export default App;
