import React, { Component } from 'react';

import equipe from '../assets/prazer.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { map } from 'jquery';

const headerStyle = {
   color: "#FFF",
   textAlign: "center",
   padding: "2%"
}

const pStyle = {
   padding: "1vh"
}

class About extends Component {
  render() {

    return (
      <section id="about">
      <div className="row">
         <div className="twelve columns main-col">
            <h1 style={headerStyle}>Jully Maria, muito prazer!</h1>
         </div>
      </div>
      <div className="row">
         <div className="six columns">
            {/* <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" /> */}
            <img src={equipe} alt="Jully Maria, prazer!"/>
         </div>
         <div className="six columns main-col">
            <div className="row">
               <p style={pStyle}>A Jully Maria Pet Shop nasceu do amor partilhado entre mãe e filha por bichinhos. Atuantes na causa animal e com a casa cheia de pets, decidiram colocar em prática o sonho de ter um espaço especial e familiar que garanta o bem estar de caninos e felinos.</p>
               <p style={pStyle}>A pet leva o nome - e o focinho - da Shih-Tzu da família. Jully Maria conquistou o título de mascote da empresa e está pronta para receber os novos amigos com muito amor e carinho.</p>
               <p style={pStyle}>Siga a Jully Maria nas Redes Sociais @jullymariapet</p>
            </div>
            <div className="row">
               <button style={{margin: '1%'}}>
                  <a href="https://www.facebook.com/jullymariapet">
                     <FontAwesomeIcon icon={faFacebook} />
                  </a>
               </button>
               <button style={{margin: '1%'}}>
                  <a href="https://www.instagram.com/jullymariapet/">
                     <FontAwesomeIcon icon={faInstagram} />
                  </a>
               </button>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
