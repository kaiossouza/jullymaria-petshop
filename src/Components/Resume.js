import React, { Component } from 'react';

import clinica from '../assets/clinica.jpg';
import dermatologia from '../assets/landing-bg_old.jpg';
import felina from '../assets/felina.jpg';
import petshop from '../assets/petshop.jpg';
import boutique from '../assets/roupas.jpeg';
import canina from '../assets/banho.jpg';

const headerStyle = {
  color: "#e91e63",
  textAlign: "center",
  padding: "2%"
}

const divStyle = {
   padding: '2vh',
   textAlign: 'center'
}

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
         width,
         height
      };
   }

   getHeader(title) {
      if(this.getWindowDimensions().width <= 768){
         return (
            <div>
               <h1 style={{textAlign: 'center'}}><span>{title}</span></h1>
            </div>
         );
      }
      else {
         var titles = title.split(' ').map(function (t) {
            return (<h1><span>{t}</span></h1>);
         })

         return (<div>{titles}</div>);
      }
   }
  
  render() {
   const isSmallScreen = this.getWindowDimensions().width <= 768;
   var headerCol = isSmallScreen ? "twelve" : "three";
   var bodyCol = isSmallScreen ? "twelve" : "nine";
   return (
      <section id="resume">
         <div>
            <h1 style={headerStyle}>A Loja</h1>
         </div>
         <div className="row education">
            <div className="twelve columns main-col" style={divStyle}>
               <div className="row item" style={divStyle}>
                  <div className="twelve columns" style={divStyle}>
                     <p>A Jully Maria conta com diversos produtos de qualidade para o seu pet, como rações, petiscos, brinquedos e medicamentos.</p>
                     <img src={boutique}></img>                     
                  </div>
               </div>
            </div>
         </div>
         <div>
            <h1 style={headerStyle}>Pet Boutique</h1>
         </div>
         <div className="row education">
            <div className="twelve columns main-col" style={divStyle}>
               <div className="row item" style={divStyle}>
                  <div className="twelve columns" style={divStyle}>
                     <p>
                        Seu pet também merece estar na moda e confortável. Encontre tudo que o seu bichinho precisa na Pet Boutique da Jully Maria. Disponível roupas e acessórios das melhores marcas.
                     </p>
                     <img src={petshop}></img>                     
                  </div>
               </div>
            </div>
         </div>
         <div id="services">
            <h1 style={headerStyle}>Nossos Serviços</h1>
         </div>  
         <div className="row education">
            <div className={`${headerCol} columns header-col`}>
               {this.getHeader("Estética Canina")}
            </div>

            <div className={`${bodyCol} columns header-col`}>
               <div className="row item">
                  <div className="twelve columns">
                     <img src={canina}></img>
                     <p>Produtos de alta tecnologia e especiais para cães. Na Jully Maria a estética canina é feita exclusivamente com a linha Hydra, da Pet Society, que garante o bem estar do seu animal.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="row education">
            <div className={`${headerCol} columns header-col`}>
               {this.getHeader("Estética Felina")}
            </div>

            <div className={`${bodyCol} columns header-col`}>
               <div className="row item">
                  <div className="twelve columns">
                  {/* {education} */}
                  {/* <h3>Pet Shop</h3> */}
                  <img src={felina}></img>
                  <p>Um cantinho exclusivo para os cuidados estéticos de felinos e filhotes. Produtos de qualidade e profissionais especializados que cuidarão muito bem do seu bichinho, além de deixar-lo ainda mais fofo.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="row education">
            <div className={`${headerCol} columns header-col`}>
               {this.getHeader("Clínica Veterinária")}
            </div>

            <div className={`${bodyCol} columns header-col`}>
               <div className="row item">
                  <div className="twelve columns">
                     <img src={clinica}></img>
                     <p>Equipe preparada para atender o seu pet e contribuir para que a vida dele seja mais saudável e duradoura. Conte com a Jully Maria sempre que seu bichinho precisar.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="row education">
            <div className={`${headerCol} columns header-col`}>
               {
                  isSmallScreen ? 
                     (<h2 style={{textAlign:'center', lineHeight:'10vh', fontSize:'38px'}}><span>Dermatologia</span></h2>) :
                     (<h2 style={{lineHeight:'10vh'}}><span>Dermatologia</span></h2>)
               }               
            </div>

            <div className={`${bodyCol} columns header-col`}>
               <div className="row item">
                  <div className="twelve columns">
                     <img src={dermatologia}></img>
                     <p>A pele do seu pet precisa de cuidados especiais. Assim como os humanos, eles podem desenvolver doenças dermatológicas, como, por exemplo, alergias, otites, infecções bacterianas e fúngicas, que comprometem a qualidade de vida do animal. Para garantir a saúde do seu pet, conte com os profissionais qualificados da Jully Maria.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}

export default Resume;
