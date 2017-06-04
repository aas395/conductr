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
      id: "MAIN",
      showLabels: false,
      isSelected: true,
      selected: "Main"
    }
  }

  componentDidMount(){
  }

  select(id){
    this.setState({selected: id})
  }


  render() {
    let className = "App"
    if (this.state.id.toUpperCase() === this.state.selected.toUpperCase()) {className = className +" selected"}
    return (
      <div className={className}>
        <Header selected={this.state.selected} showLabels={this.state.showLabels}/>
        <NavBar selected={this.state.selected} showLabels={this.state.showLabels}/>
        <Content selected={this.state.selected} showLabels={this.state.showLabels}/>

        <SpeechBar select={this.select.bind(this)}/>
      </div>
    );
  }
}

export default App;
