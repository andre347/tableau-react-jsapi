import React, { Component } from "react";
import BasicEmbed from "./components/BasicEmbed";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Testing Tableau JS API</h1>
        {/* testing sending string prop and destructure in component */}
        <BasicEmbed title="Basic Embed" />
      </div>
    );
  }
}

export default App;
