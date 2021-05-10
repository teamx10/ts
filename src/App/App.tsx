import React from 'react';
import './App.css';
import {TextField} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
      </form>
    </div>
  );
}

export default App;
