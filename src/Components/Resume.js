import React, { Component } from 'react';

import clinica from '../assets/clinica.jpg';
import dermatologia from '../assets/dermatologia.jpg';
import felina from '../assets/felina.jpg';
import petshop from '../assets/petshop.jpg';
import boutique from '../assets/boutique.jpg';
import canina from '../assets/canina.jpg';

const headerStyle = {
  color: "#e91e63",
  textAlign: "center",
  padding: "2%"
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
  
  render() {

    // if(this.props.data){
    //   var skillmessage = this.props.data.skillmessage;
    //   var education = this.props.data.education.map(function(education){
    //     return <div key={education.school}><h3>{education.school}</h3>
    //     <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
    //     <p>{education.description}</p></div>
    //   })
    //   var work = this.props.data.work.map(function(work){
    //     return <div key={work.company}><h3>{work.company}</h3>
    //         <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
    //         <p>{work.description}</p>
    //     </div>
    //   })

    //   var skills = this.props.data.skills.map((skills)=>{
    //     var className = 'bar-expand '+skills.name.toLowerCase();
    //     return (
    //       <li key={skills.name}>
    //         <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
    //       </li>
    //     )
    //   })
    // }

    return (
      <section id="resume">
      <div>
        <h1 style={headerStyle}>Nossos Serviços</h1>
      </div>
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Pet Shop</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {/* {education} */}
                 {/* <h3>Pet Shop</h3> */}
                 <img src={petshop}></img>
                 <p>A Jully Maria conta com diversos produtos de qualidade para o seu pet, como rações, petiscos, brinquedos e medicamentos.</p>
               </div>
            </div>
         </div>
      </div>
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Pet</span></h1>
            <h1><span>Boutique</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {/* {education} */}
                 {/* <h3>Pet Shop</h3> */}
                 <img src={boutique}></img>
                 <p>
                  Seu pet também merece estar na moda e confortável. Encontre tudo que o seu bichinho precisa na Pet Boutique da Jully Maria. Disponível roupas e acessórios das melhores marcas, como Maristella, Pata Chic, Mallo, Simba Lovers, Bicho com Luxo, Du Dog Vest, Zoo Pet, Zeedog, K9 Spirit e Free Faro.
                 </p>
                </div>
            </div>
         </div>
      </div>
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Estética</span></h1>
            <h1><span>Canina</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {/* {education} */}
                 {/* <h3>Pet Shop</h3> */}
                 <img src={canina}></img>
                 <p>Produtos de alta tecnologia e especiais para cães. Na Jully Maria a estética canina é feita exclusivamente com a linha Hydra, da Pet Society, que garante o bem estar do seu animal.</p>
               </div>
            </div>
         </div>
      </div>
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Estética</span></h1>
            <h1><span>Felina</span></h1>
         </div>

         <div className="nine columns main-col">
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
         <div className="three columns header-col">
            <h1><span>Clínica</span></h1>
            <h1><span>Veterinária</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {/* {education} */}
                 {/* <h3>Pet Shop</h3> */}
                 <img src={clinica}></img>
                 <p>Equipe preparada para atender o seu pet e contribuir para que a vida dele seja mais saudável e duradoura. Conte com a Jully Maria sempre que seu bichinho precisar.</p>
               </div>
            </div>
         </div>
      </div>
      <div className="row education">
         <div className="three columns header-col">
            <h2><span>Dermatologia</span></h2>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {/* {education} */}
                 {/* <h3>Pet Shop</h3> */}
                 <img src={dermatologia}></img>
                 <p>A pele do seu pet precisa de cuidados especiais. Assim como os humanos, eles podem desenvolver doenças dermatológicas, como, por exemplo, alergias, otites, infecções bacterianas e fúngicas, que comprometem a qualidade de vida do animal. Para garantir a saúde do seu pet, conte com os profissionais qualificados da Jully Maria.</p>
               </div>
            </div>
         </div>
      </div>


      {/* <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div> 
      </div>*/}
   </section>
    );
  }
}

export default Resume;
