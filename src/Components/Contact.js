import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const headerStyle = {
   color: "#FFF",
   textAlign: "center",
   padding: "2%"
}

const sectionStyle = {
   height: "100vh", /* Magic here */
}

const pStyle = {
   padding: '0px',
   margin: '5px'
}

const whiteStyle = {
   color: 'white',
   textAlign: 'center'
}

class Contact extends Component {
  render() {
    return (
      <section id="contact">
      <div className="row">
         <div className="twelve columns main-col">
            <h1 style={headerStyle}>Contato</h1>
         </div>
      </div>
      <div className="row">
         <div className="four columns">            
            <ul>
               <li style={whiteStyle}>
                  <FontAwesomeIcon icon={faClock} size="3x" />
               </li>
               <li style={whiteStyle}>
                  <h5 style={whiteStyle}>Horário</h5>
               </li>
               <li style={whiteStyle}>
                  <p style={pStyle}>Seg a Sex: 8:00 às 18:00</p>
                  <p style={pStyle}>Sáb: 9:00 às 13:00</p>
               </li>
            </ul>
         </div>
         <div className="four columns main-col">
         <ul>
               <li style={whiteStyle}>
                  <FontAwesomeIcon icon={faPhone} size="3x" />
               </li>
               <li style={whiteStyle}>
                  <h5 style={whiteStyle}>Telefones</h5>
               </li>
               <li style={whiteStyle}>
                  <p style={pStyle}>(48) 98833-0048</p>
                  <p style={pStyle}>(48) 3204-9791</p>
               </li>
            </ul>
         </div>
         <div className="four columns main-col">
         <ul>
               <li style={whiteStyle}>
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
               </li>
               <li style={whiteStyle}>
                  <h5 style={whiteStyle}>E-mail</h5>
               </li>
               <li style={whiteStyle}>
                  <p style={pStyle}>jullymariapetshop@gmail.com</p>
               </li>
            </ul>
         </div>
      </div>

   </section>
    );
  }
}

export default Contact;
