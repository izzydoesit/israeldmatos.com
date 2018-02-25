import React, { Component } from 'react';
import Headroom from 'react-headroom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Projects from './Projects/Projects';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
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
