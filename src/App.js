import React, { Component } from 'react';
import Hero from './Hero';
import Slider from './Slider';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Hero />
        <Slider />
      </div>
    )
  }
}

export default App;
