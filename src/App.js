import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Projects />
        {/* <Blog /> */}
        {/* <Contact /> */}
      </div>
    )
  }
}

export default App;
