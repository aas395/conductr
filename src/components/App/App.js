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
      conversationContext: {},
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

    let input = document.querySelector("#response").value.toLowerCase();
    // fetch.(conversation)
    // .then(stuff => stuff.json)
    // .then(stuff => swtich stament to run based on result of stuff.intent)

    var inputArr = input.split(' ');

    var conversationContext = this.state.conversationContext;
    var requestURL = 'http://localhost:3001/api/conversation?message=' + input;

    if(conversationContext.hasOwnProperty('conversation_id')) {
      var context = JSON.stringify(conversationContext);
      requestURL += '&context=' + escape(context);
    }

    var myRequest = new URL(requestURL);

    fetch(myRequest)
      .then((response) => {
        return response.text();
      })
      .then((response) => {
        var response = JSON.parse(response);
        this.setState({conversationContext: response.context})
        var lastWord = inputArr[inputArr.length-1]

        if (lastWord.indexOf(".") == lastWord.length - 1) {
            lastWord = lastWord.substring(0, lastWord.length-1);
        }
        
        inputArr[inputArr.length-1] = lastWord //remove period

        switch (inputArr[0]) {
          case "select":
            inputArr.shift()
            let id = inputArr.join(" ")
            this.setState({selected: id})
            break;
          case "add":
            console.log(inputArr[0]+"ed: "+ inputArr[1])
            this.addElement(inputArr[1])
            break;
          case "remove":
            console.log(inputArr[0]+"d: "+inputArr[inputArr.length - 1])
            break;
          default:console.log("nope!")
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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

  select(id, conversationId){
    this.setState({selected: id, conversationId: conversationId})
  }


  render() {
    let blockText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    let blockImg = "b-img";
    let className = "App"
    if (this.state.id.toUpperCase() === this.state.selected.toUpperCase()) {className = className +" selected"}
    return (
      <div className={className}>
        <Header selected={this.state.selected}
          showLabels={this.state.showLabels}
          actions={this.state.actions}
          resetActions={this.resetActions.bind(this)}/>

        <NavBar selected={this.state.selected}
          showLabels={this.state.showLabels}
          actions={this.state.actions}
          resetActions={this.resetActions.bind(this)}/>

        <Content
          selected={this.state.selected}
          showLabels={this.state.showLabels}
          actions={this.state.actions}
          resetActions={this.resetActions.bind(this)}
          blockImg={blockImg}
          blockText={blockText}
        />

        <SpeechBar
          select={this.select.bind(this)}
          onTalkClick={this.onTalkClick.bind(this)}
          handleTalk={this.handleTalk.bind(this)}/>
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
