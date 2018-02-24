import React, { Component } from 'react';
import Headroom from 'react-headroom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <div className="overflow-wrap">
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
          <Contact />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
