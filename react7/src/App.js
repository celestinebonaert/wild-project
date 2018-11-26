import React, { Component } from 'react';
import './App.css';
import FormEmployee from "./FormEmployee";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FormEmployee/>
        </header>
      </div>
    );
  }
}

export default App;
