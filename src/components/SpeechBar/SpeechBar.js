import React, { Component } from 'react';
import './SpeechBar.css';

class SpeechBar extends Component {


  handleClick(){
    this.props.onTalkClick();
  }

  render() {
    return (
      <div className="SpeechBar">
            <input type="text" id="response" /><button className="trash" onClick={this.props.handleTalk}>Submit</button>
            <button className="talk" type="button" id="talk" onClick={this.handleClick.bind(this)}><i className="fa fa-microphone" aria-hidden="true"></i></button>
      </div>
    );
  }
}

export default SpeechBar;
