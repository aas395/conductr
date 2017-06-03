import React, { Component } from 'react';
import './SpeechBar.css';

class SpeechBar extends Component {

  render() {
    return (
      <div className="SpeechBar">
        <span className="response">//What you said would go here//</span>
        <button className="talk" type="button"><i className="fa fa-microphone" aria-hidden="true"></i></button>
      </div>
    );
  }
}

export default SpeechBar;
