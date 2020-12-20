import React, { Component } from 'react';
import Modal from 'react-modal';

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

  state = {
    modalIsOpen: false,
    image: ""
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
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a onClick={() => { openModal(projectImage); }} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                {/* <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div> */}
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
