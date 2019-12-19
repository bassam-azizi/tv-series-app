import React, { Component } from "react";
import Intro from "./components/Intro/Intro";
import Series from "./containers/series/series";
import "./app.css";
import "whatwg-fetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv-Series-App</h1>
        </header>
        <Intro message="Here you can find all of your most loved series" />
        <Series />
      </div>
    );
  }
}

export default App;
