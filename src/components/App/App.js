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
      isSelected: true,
      selected: "",
      components: [

      ],
      styles: {
        boxShadow: "5px 5px 5px rgba(6255,255,0,0.6)",
        filter: "progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30)",
        zoom: 1
      }
    }
  }

  componentDidMount(){

  }

  select(id){
    this.setState({selected: id})
  }

  isSelected(el){
    debugger;
  }

  render() {
    return (
      <div className="App" style={this.state.styles}>
        <Header key="1"/>
        <NavBar key="2"/>
        <Content key="3" selected={this.select.bind(this)}/>
        <SpeechBar />
      </div>
    );
  }
}

export default App;
