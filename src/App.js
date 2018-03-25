import React, { Component } from 'react';
import Modal from 'react-modal';
import uniqueId from 'lodash/uniqueId';

import Headroom from 'react-headroom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Projects from './Projects/Projects';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import smarterBear from './Projects/smarterbear.png';
import colorGame from './Projects/colorGame.png';
import curvaFit from './Projects/curvaFit.png';
import hackerHaus from './Projects/hackerhaus.png';
import frais from './Projects/frais.png';
import './App.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const projectArray = [
  { title: 'The Color Game', id: 0, url: 'http://izzydoesit.github.io/colorGame', blurb: 'Test your hex-guessing skills here', src: colorGame },
  { title: 'Smarter Bear', id: 1, url: 'https://smarterbear.herokuapp.com/', blurb: 'Find out what the insiders are trading...', src: smarterBear },
  { title: 'Curva Fitness', id: 2, url: 'https://curva.herokuapp.com/', blurb: 'Get CURVA fit!', src: curvaFit },
  { title: 'Hackerhaus', id: 3, url: 'https://hackerhaus.herokuapp.com/', blurb: 'The NEXT best thing in SF housing...', src: hackerHaus },
  { title: 'Frais Recipes', id: 4, url: 'https://recipesbyfrais.herokuapp.com/', blurb: 'Discover a new dish or share your fav', src: frais }
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: projectArray,
      modalIsOpen: false,
      currentProjectId: 0
    };
  } 
  
  updateProjectId = (index) => {
    this.setState({currentProjectId: index})
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
   }
   
  afterOpenModal = () => {
     // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {

    return (
      <div className="App" id="App">
        
        {/*<button onClick={this.openModal}>Open Modal</button>*/}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Project Modal"
          overlayClassName="modalOverlay"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />

            <a
              href={'/'}
              target="_blank"
              rel="noopener noreferrer"
            >tab navigation</a>
          
            <p>{this.state.projects[this.state.currentProjectId].title}</p>
            
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        
        <div className="overflow-wrap">
          <Headroom
            onPin={() => console.log('pinned')}
            onUnpin={() => console.log('unpinned')}
          >
            <Navbar/>
          </Headroom>

          <Home />
          <About />
          <Projects 
            openModal={this.openModal} 
            updateProjectId={this.updateProjectId}
            currentProjectId={this.state.currentProjectId}
            projects={this.state.projects}
          />
          {/* <Blog /> */}
          <Contact />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
