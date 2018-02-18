import React, { Component } from 'react';
import Headroom from 'react-headroom';
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

            <Headroom
              onPin={() => console.log('pinned')}
              onUnpin={() => console.log('unpinned')}
            >
              <Navbar/>
            </Headroom>

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
