import React from "react";
import "./App.css";

import cards from "./data";

import cardBack from "./images/CardBack.jpg"

function App() {
  return <div className="App border my-5">
    <div className="container">
      <div className="row">
        <div className="col-3 my-1">
          <img className="mx-auto" src={cardBack} height="100%" width="100%" key="back">
          </img>
        </div>
      </div>
    </div>
  </div>;
}

export default App;
