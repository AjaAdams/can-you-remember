import React from "react";
import "./App.css";

import cards from "./data";

import Card from "./Components/Card";

function App() {
  let cardsGrid = cards.map (card => (
    <Card key={card.id} card={card} />
  ));
    
  return (
    <div className="App border my-5">
      <div className="container">
        <div className="row">
          {cardsGrid}
        </div>
      </div>
    </div>
    );
  }

export default App;
