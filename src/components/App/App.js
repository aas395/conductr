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
      selected: "Main",
      actions: {
        addRow: false,
        addImg: false,
        addText: false,
        moveUpLeft: false,
        moveDownRight: false,
        makeBig: false,
        makeSmall: false,
        fontBigger: false,
        fontSmaller: false,
        delete: false
      }
    }
    this.onTalkClick = this.onTalkClick.bind(this)
  }

  handleTalk = () => {

    var input = document.querySelector("#response").value.toLowerCase();
    // fetch.(conversation)
    // .then(stuff => stuff.json)
    // .then(stuff => swtich stament to run based on result of stuff.intent)

    var inputArr = input.split(' ');


    switch (inputArr[0]) {
      case "select":
        this.setState({selected: inputArr[1].slice(0, -1)})
        break;
      case "add":
        console.log(inputArr[0]+"ed: "+ inputArr[1].slice(0, -1))
        this.addElement(inputArr[1].slice(0, -1))
        break;
      case "remove":
        console.log(inputArr[0]+"d: "+inputArr[inputArr.length - 1])
        break;
      default:console.log("nope!")
    }

  }

  resetActions(){
    let actions = this.state.actions

    Object.keys(actions).map(function(key, index) {
           actions[key] = false;
        });
    this.setState({actions})
    console.log("reset", this.state.actions)
  }

  addElement (thing) {
    let actions = this.state.actions

    switch (thing.toLowerCase()) {
      case "row":
        actions.addRow = true
      break;
      case "image":
        actions.addImg = true
      break;
      case "text":
        actions.addText = true
      break;
      default:

    }

    this.setState({actions})
    console.log(this.state.actions)
  }

  componentDidMount(){
    registerServiceWorker();
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
        <Content selected={this.state.selected} showLabels={this.state.showLabels} actions={this.state.actions} resetActions={this.resetActions.bind(this)}/>

        <SpeechBar select={this.select.bind(this)} onTalkClick={this.onTalkClick.bind(this)} handleTalk={this.handleTalk.bind(this)}/>
      </div>
    );
  }

    onTalkClick () {
  	var myHeaders = new Headers();
  	myHeaders.append('Host', 'localhost:3001');

  	var myInit = { method: 'GET',
  	               headers: myHeaders,
  	               mode: 'cors',
  	               cache: 'default'
  	           };

  	var myRequest = new Request('http://localhost:3001/api/token', myInit);

        fetch(myRequest)
          .then((response) => {
            return response.text();
          }).then((token) => {
            var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
              token: token,
      //        continuous: false, // no longer supported
              outputElement: '#response' // CSS selector or DOM Element
            });

            stream.on('data', data => {
              if(data.results[0] && data.results[0].final) {
                stream.stop();
                this.handleTalk()
                console.log('stop listening.');
              }
            });

            stream.on('error', function(err) {
              console.log(err);
            });

          }).catch(function(error) {
            console.log(error);
          });
      // };
  }




}

export default App;
