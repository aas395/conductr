import React, { Component } from 'react';
import './SpeechBar.css';

class SpeechBar extends Component {


  handleClick(){
    this.props.onTalkClick()
  }

  render() {
    return (
      <div className="SpeechBar">
        <span className="response">
            <input type="text" id="response" placeholder="//What you said would go here//"/>
            <button className="talk" type="button" id="talk" onClick={this.handleClick.bind(this)}><i className="fa fa-microphone" aria-hidden="true"></i></button>
        </span>
      </div>
    );
  }
}

export default SpeechBar;
