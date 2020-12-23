import React, { Component } from 'react';
import Modal from 'react-modal';

import image1 from '../assets/carrossel/1.jpg';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    margin                : '2%',
    transform             : 'translate(-50%, -50%)'
  },
  image:{
    maxWidth: "900px",
    maxHeight: '500px'
  }
};

const headerStyle = {
  color: "#FFF",
  textAlign: "center",
  padding: "2%"
}

class Portfolio extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      modalIsOpen: false,
      image: "",
      matches: window.matchMedia("(min-width: 768px)").matches 
    };
  }

  render() { 
    const closeModal = () => {
      this.setState({
        modalIsOpen: false,
        image: ""
      });
    }
  
    const openModal = (image) => {
      this.setState({
        modalIsOpen: true,
        image: image
      });
    }

    if (this.props.data) {      
      const isDesktop = this.state.matches;
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        var image = require(`../assets/${projects.image}`);

        var style = {
          backgroundImage: `url(${image})`, 
          backgroundPosition: 'top', 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover', 
          height: '25vh', 
          width: '25vh' 
        };
  
        if(!isDesktop){
          style.width = "100%";
        }

        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap" style={style}>
              <a onClick={() => { openModal(projectImage); }} title={projects.title}>
                {/* <img alt={projects.title} src={projectImage} /> */}
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Clique Aqui para Maximizar</h5>
                    {/* <p>{projects.category}</p> */}
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img style={customStyles.image} src={this.state.image} />
        </Modal>

        <div className="row">

          <div className="twelve columns collapsed">

            <h1 style={headerStyle}>Fotos</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
