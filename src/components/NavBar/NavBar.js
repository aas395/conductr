import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-toggleable-md navbar-light ml-auto">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Link<span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="#">Link</a>
              <a className="nav-item nav-link" href="#">Link</a>
              <a className="nav-item nav-link" href="#">Link</a>
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
