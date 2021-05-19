import React from "react";
import DataFetching from "./DataFetching";
import "./App.css";

function App() {
  return (
    <div>
      <div className="search">
        <input type="text" /> <button>Search</button>
      </div>

      <DataFetching />
    </div>
  );
}

export default App;
