import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ModalSlider from '../Modal/ModalSlider';
import Slider from '../Projects/Slider';

import Headroom from 'react-headroom';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import './App.css';

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };
Modal.setAppElement('#root');

class App extends Component {

  componentDidMount() {
    // window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    // window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }
  
  // handleKeyUp = (e) => {
  //   const { onCloseRequest } = this.props;
  //   const keys = {
  //     27: () => {
  //       e.preventDefault();
  //       this.props.toggleModal(false);
  //       window.removeEventListener('keyup', this.handleKeyUp, false);
  //     },
  //   };

  //   if (keys[e.keyCode]) { keys[e.keyCode](); }
  // }
  
  handleOutsideClick = (e) => {
    const { onCloseRequest, children } = this.props;

    if (!(this.modal)) {
      if (!this.modal.contains(e.target)) {
        this.props.toggleModal(false);
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  afterOpenModal = () => {
     // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal = (e) => {
    console.log('closing')
    
    this.props.toggleModal(false);
  }

  render() {
    const { currentProject, modalOpen } = this.props;
    console.log('app', this.props.modalOpen)
    return (
        <div className="App" id="App">
            <div
              className="modal"
              ref={node => (this.modal = node)}
            >
            {/*<button onClick={this.openModal}>Open Modal</button>*/}
              <Modal
                isOpen={modalOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Project Modal"
                overlayClassName="modalOverlay"
              >

                <h1>{currentProject.title}</h1>
                <h2>{currentProject.blurb}</h2>
                <p>{currentProject.description}</p>

                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >See Code</a>
                <button onClick={this.closeModal}>X</button>
              </Modal>
            </div>
          
          <div className="overflow-wrap">
            <Headroom
              onPin={() => console.log('pinned')}
              onUnpin={() => console.log('unpinned')}
            >
              <Navbar/>
            </Headroom>

            <Home />
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
  modalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,

}

export default App;
