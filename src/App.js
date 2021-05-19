import React, { useState } from "react";
import DataFetching from "./DataFetching";
import "./App.css";

function App() {
  // const [value, setValue] = useState("");

  // const updateInput = (e) => {
  //   this.setValue({
  //     value: e.target.value,
  //   });
  // };

  const [value, setVal] = useState("");
  const onChange = (e) => {
    setVal(e.target.value);
  };

  const onClear = () => {
    setVal("");
  };

  return (
    <div>
      <div className="search">
        <input type="text" value={value} onChange={onChange} />
        <button onClick={onClear}>Clear</button>
      </div>

      <DataFetching />
    </div>
  );
}

export default App;
