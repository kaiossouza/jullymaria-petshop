import React, { Component } from 'react';

import GoogleApiWrapper from './GoogleApiWrapper';

const headerStyle = {
   color: "#e91e63",
   textAlign: "center",
   padding: "2%"
}

const mapStyles = {
   grid: {
     position: "relative",
     width: "100%",
     minHeight: "50vh",
     paddingRight: "15px",
     paddingLeft: "15px",
     flexBasis: "auto"
   },
   centerGrid: {
     position: "relative",
     width: "100%",
     minHeight: "1px",
     paddingRight: "15px",
     paddingLeft: "15px",
     height: "50vh", /* Magic here */
     display: "flex",
     justifyContent: "center",
     alignItems: "center"
   },
   section: {
      height: "100vh", /* Magic here */
   },
   address: {
      textAlign: 'center',
      padding: '2%'
   }
 };

class Localization extends Component {
  render() {
     return (
      <section id="localization" style={mapStyles.section}>
      <div className="row">
         <div className="twelve columns main-col">
            <h1 style={headerStyle}>Localização</h1>            
         </div>
      </div>
      <div className="row">         
         <div style={mapStyles.grid}>
            <div style={mapStyles.address}>
               <h5>Av Madre Benvenuta, 943, Loja 01, Santa Mônica, Florianópolis | CEP 88035-000</h5>
            </div>
            <GoogleApiWrapper />
         </div>
         {/* <div className="six columns main-col">
            <p>A Jully Maria Pet Shop nasceu do amor partilhado entre mãe e filha por bichinhos. Atuantes na causa animal e com a casa cheia de pets, decidiram colocar em prática o sonho de ter um espaço especial e familiar que garanta o bem estar de caninos e felinos.</p>
            <p>A pet leva o nome - e o focinho - da Shih-Tzu da família. Jully Maria conquistou o título de mascote da empresa e está pronta para receber os novos amigos com muito amor e carinho.</p>
         </div> */}
      </div>

   </section>
    );
  }
}

export default Localization;
