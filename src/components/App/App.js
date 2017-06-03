import React, { Component } from 'react';
import './App.css';
import Header from './../Header/Header';
import Content from './../Content/Content';
import NavBar from './../NavBar/NavBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      components: [
        <Header />,
        <NavBar />,
        <Content />
      ]
    }
  }




  render() {
    return (
      <div className="App">
        {this.state.components}
      </div>
    );
  }
}

export default App;
