import React, { Component } from 'react';
import'@fortawesome/react-fontawesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar-expand-lg navbar-light bg-light">
           <div className="row">
               <div className="col-4"><FontAwesomeIcon icon={faArrowLeft}/><span><p>Go back</p></span></div>
               <div className="col-4"><p>Codersx</p></div>
               <div className="col-4"><button>Sign up</button></div>
            </div>
        </nav>        
      </div>
    );
  }
}

export default Navbar;