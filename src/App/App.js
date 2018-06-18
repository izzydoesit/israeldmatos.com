import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ModalSlider from '../Modal/ModalSlider';
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

const customStyles = {
  content : {
    top                   : '0%',
    left                  : '20%',
    right                 : '20%',
    bottom                : '5%',
    marginRight           : '0%',
    // transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root');

export default class App extends Component {

  componentDidMount() {
    // window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    // window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }
  
  handleOutsideClick = (e) => {

    if (!(this.modal)) {
      if (!this.modal.contains(e.target)) {
        this.closeModal();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  afterOpenModal = () => {
     // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal = (e) => {
    this.props.updateModalSlide(0);
    this.props.toggleModal(false);
  }

  render() {
    const { currentProject, modalIsOpen } = this.props;

    return (
        <div className="App" id="App">
          <div className="overflow-wrap">
            <div
              className="modal"
              ref={node => (this.modal = node)}
            >
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Project Modal"
                overlayClassName="modalOverlay"
              >
                <ModalSlider {...this.props} />

                <h1>{currentProject.title}</h1>
                <h2>{currentProject.blurb}</h2>
                <p>{currentProject.description}</p>

                <a
                  className="modal-link-btn"
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >See Code</a>
                <button 
                  className="close-modal-btn" 
                  onClick={this.closeModal}
                >
                  <i className="fa fa-5x fa-times-circle" />
                </button>
              </Modal>
            </div>
          
          
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
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
}
