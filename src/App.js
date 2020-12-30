import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Localization from './Components/Localization';

import whatsapp from './assets/whatsapp.png';

const whatsappStyle = {
  position: 'absolute',
  bottom: '0',
  right: '0',
  width: '80%',
  height: 'auto',
  border: 'none',
  zIndex: '99',
  transition: 'all .25s ease',
  textAlign: 'center',
  padding: '0'
}

const whatsappDivStyle = {
  position: 'fixed',
  bottom: '-4px',
  width: '30vh',
  right: '10px'
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header data={this.state.resumeData.main}/>
          <About data={this.state.resumeData.main}/>
          <Resume data={this.state.resumeData.resume}/>
          <Portfolio data={this.state.resumeData.portfolio}/>
          <Localization />
          <Contact />
          <Footer data={this.state.resumeData.main}/>
        </div>
        <div style={whatsappDivStyle}>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=5548988330048"><img src={whatsapp} id="fixedbutton" style={whatsappStyle}/></a>
        </div>
      </div>
    );
  }
}

export default App;
