import React, { Component } from 'react';
import './SpeechBar.css';

class SpeechBar extends Component {

  render() {
    return (
      <div className="SpeechBar">
        
        <button className="talk" type="button"><i className="fa fa-microphone" aria-hidden="true"></i></button>
        <span className="response">What you said would go here</span>
      </div>
    );
  }
}

export default SpeechBar;
