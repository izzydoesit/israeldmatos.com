import React, { Component } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Slider from './Slider';
import Blog from './Blog';
import Contact from './Contact';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Home/>
        <Navbar />
        <About />
        
        <div className="slider-container">
          <Slider />
        </div>

      </div>
    )
  }
}

export default App;
