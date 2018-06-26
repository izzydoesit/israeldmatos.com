import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyModal from '../Modal/Modal';
import Headroom from 'react-headroom';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import 'font-awesome/css/font-awesome.css'
import './App.css';

export default class App extends Component {

  render() {
    return (
        <div className="App" id="App">
          <div className="overflow-wrap">
            
            <MyModal {...this.props} />
          
            <Home />
            <Headroom
              onPin={() => console.log('pinned')}
              onUnpin={() => console.log('unpinned')}
              pinStart={500}
            >
              <Navbar/>
            </Headroom>

            <About />
            <Projects {...this.props}/>
            {/* <Blog /> */}
            <Contact />
            <Footer />
          </div>
        </div>
    )
  }
}

App.propTypes = {
  currentProject: PropTypes.object.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
}
