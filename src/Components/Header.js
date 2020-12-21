import React, { Component } from 'react';
//import ParticlesBg  from "particles-bg";

import background from '../assets/landing-bg.jpg';
import logo from '../assets/apple-icon.png';

var sectionStyle = {
   backgroundImage: `url(${background})`,
   backgroundPosition: 'left',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover'
 };

 var logoStyle = {
   width: '40%'
 };

 var logoMobStyle = {
   width: '40%',
   paddingBottom: '25%'
 };

 var bannerStyle = {
   width: '100%', 
   textAlign: 'right'
 }

 var bannerMobStyle = {
   width: '100%'
 }

class Header extends Component {
   constructor(props) {
      super(props)
      this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
   }
  
   componentDidMount() {
      const handler = e => this.setState({matches: e.matches});
      window.matchMedia("(min-width: 768px)").addListener(handler);
   }

  render() {     

    if(this.props.data){
      //var project = this.props.data.project;
      //var github = this.props.data.github;
      //var name = this.props.data.name;
      //var description= this.props.data.description;
      // var city= this.props.data.address.city;
      // var networks= this.props.data.social.map(function(network){
      //   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      // })
    }

    return (
      <header id="home" style={sectionStyle}>
      {/* <ParticlesBg src={background} type="circle" bg={true} /> */}      
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Início</a></li>
            <li><a className="smoothscroll" href="#about">Sobre</a></li>
	         <li><a className="smoothscroll" href="#resume">Serviços</a></li>
            <li><a className="smoothscroll" href="#portfolio">Fotos</a></li>
            <li><a className="smoothscroll" href="#localization">Localização</a></li>
            <li><a className="smoothscroll" href="#contact">Contato</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div style={this.state.matches ? bannerStyle : bannerMobStyle }>
            <img src={logo} style={this.state.matches ? logoStyle : logoMobStyle }></img>
            {/* <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul> */}
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

      {/* <img src={background} background={true}></img> */}
   </header>
    );
  }
}

export default Header;
