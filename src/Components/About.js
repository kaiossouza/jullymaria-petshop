import React, { Component } from 'react';

import equipe from '../assets/equipe.jpg';

const headerStyle = {
   color: "#FFF",
   textAlign: "center",
   padding: "2%"
}

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="twelve columns main-col">
            <h1 style={headerStyle}>Jully Maria, prazer!</h1>
         </div>
      </div>
      <div className="row">
         <div className="six columns">
            {/* <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" /> */}
            <img src={equipe} alt="Jully Maria, prazer!" />
         </div>
         <div className="six columns main-col">
            {/* <h2>Sobre Nós</h2> */}
            <p>A Jully Maria Pet Shop nasceu do amor partilhado entre mãe e filha por bichinhos. Atuantes na causa animal e com a casa cheia de pets, decidiram colocar em prática o sonho de ter um espaço especial e familiar que garanta o bem estar de caninos e felinos.</p>
            <p>A pet leva o nome - e o focinho - da Shih-Tzu da família. Jully Maria conquistou o título de mascote da empresa e está pronta para receber os novos amigos com muito amor e carinho.</p>
            {/* <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div> */}
         </div>
      </div>

   </section>
    );
  }
}

export default About;
