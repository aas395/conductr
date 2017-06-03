import React, { Component } from 'react';
import './App.css';
import Header from './../Header/Header';
import Content from './../Content/Content';
import NavBar from './../NavBar/NavBar';
import SpeechBar from './../SpeechBar/SpeechBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      components: [
        <Header key="1"/>,
        <NavBar key="2"/>,
        <Content key="3"/>
      ]
    }
  }




  render() {
    return (
      <div className="App">
        {this.state.components}
        <SpeechBar />
      </div>
    );
  }
}

export default App;
