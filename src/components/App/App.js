import React, { Component } from 'react';
import registerServiceWorker from '../../registerServiceWorker';
import WatsonSpeech from 'watson-speech';
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
    this.onTalkClick = this.onTalkClick.bind(this)
  }

  handleTalk = () => {
    var input = document.querySelector("#response").value.toLowerCase();
    var inputArr = input.split(' ');
    var myRequest = new URL('http://localhost:3001/api/conversation?message=' + input);

    fetch(myRequest)
      .then((response) => {
        return response.text();
      })
      .then((response) => {
        switch (response.intents[0].intent) {
          case "select":
            // this.select(11, 'baecfacb-a2c8-4762-bff4-31e485695e39');
            break;
          // case "add":
          //   console.log(inputArr[0]+"ed: "+inputArr[inputArr.length - 1])
          //   break;
          // case "remove":
          //   console.log(inputArr[0]+"d: "+inputArr[inputArr.length - 1])
          //   break;
          default:console.log("nope!")
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    }

  componentDidMount(){
    registerServiceWorker();
  }

  select(id, conversationId){
    this.setState({selected: id, conversationId: conversationId})
  }


  render() {
    let className = "App"
    if (this.state.id.toUpperCase() === this.state.selected.toUpperCase()) {className = className +" selected"}
    return (
      <div className={className}>
        <Header selected={this.state.selected} showLabels={this.state.showLabels}/>
        <NavBar selected={this.state.selected} showLabels={this.state.showLabels}/>
        <Content selected={this.state.selected} showLabels={this.state.showLabels}/>

        <SpeechBar select={this.select.bind(this)} onTalkClick={this.onTalkClick.bind(this)}/>
      </div>
    );
  }

  onTalkClick () {
  	var myHeaders = new Headers();
  	myHeaders.append('Host', 'localhost:3001');

  	var myInit = { 
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
  	   cache: 'default'
  	};

  	var myRequest = new Request('http://localhost:3001/api/token', myInit);

    fetch(myRequest)
      .then((response) => {
        return response.text();
      })
      .then((token) => {

        var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
          token: token,
          outputElement: '#response' // CSS selector or DOM Element
        });

        stream.on('data', data => {
          if(data.results[0] && data.results[0].final) {
            stream.stop();
            this.handleTalk();
            console.log('stop listening.');
          }
        });

        stream.on('error', function(err) {
          console.log(err);
        });

      }).catch(function(error) {
        console.log(error);
      });
    }
}

export default App;
