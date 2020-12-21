import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {

    // if(this.props.data){
    //   var networks = this.props.data.social.map(function(network){
    //     return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    //   });
    //   networks.
    // }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              <li key="facebook"><a target="_blank" href="https://www.facebook.com/jullymariapet"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li key="instagram"><a target="_blank" href="https://www.instagram.com/jullymariapet/"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li key="whatsapp"><a target="_blank" href="https://api.whatsapp.com/send?phone=5548988330048"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
           </ul>

           <ul className="copyright">
              <li>&copy; Jully Maria Pet Shop Ltda | CNPJ 38.708.698/0001-77</li>
              {/* <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li> */}
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
