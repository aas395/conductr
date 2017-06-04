import React, { Component } from 'react';
import './SpeechBar.css';

class SpeechBar extends Component {


  handleSubmit(e){
    e.preventDefault()
    var input = e.target.querySelector("input").value;
    var inputArr = input.split(' ');
    switch (inputArr[0]) {
      case "select":
        this.props.select(inputArr[inputArr.length - 1])
        console.log(inputArr[0]+"ed: "+inputArr[inputArr.length - 1])
        break;
      case "add":
        console.log(inputArr[0]+"ed: "+inputArr[inputArr.length - 1])
        break;
      case "remove":
        console.log(inputArr[0]+"d: "+inputArr[inputArr.length - 1])
        break;
      default:console.log("nope!")
    }
  }

  render() {
    return (
      <div className="SpeechBar">
        <span className="response">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" id="response" placeholder="//What you said would go here//"/>
            <button className="talk" type="button" id="talk"><i className="fa fa-microphone" aria-hidden="true"></i></button>
          </form>
        </span>
      </div>
    );
  }
}

export default SpeechBar;
