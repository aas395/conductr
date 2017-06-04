import React, { Component } from 'react';
import registerServiceWorker from '../../registerServiceWorker';
import WatsonSpeech from 'watson-speech';
import './App.css';
import Header from './../Header/Header';
import Content from './../Content/Content';
// import NavBar from './../NavBar/NavBar';
import SpeechBar from './../SpeechBar/SpeechBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      id: "MAIN",
      showLabels: false,
      selected: "",
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

    var conversationContext = this.state.conversationContext;

    let input = document.querySelector("#response").value.toLowerCase();

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
        
        var intents = response.intents;
        var entities = response.entities;

        if(typeof intents[0] != 'undefined') {
          var intent = intents[0].intent;
          if(typeof entities[0] != 'undefined') {
            var entity = entities[0];
          }
          

          switch (intent) {
            case "select":
              if(typeof entity != 'undefined') {
                this.setState({selected: entity.value});
              } else {
                this.setState({selected: ''});
              }
              break;
            case "create":
              this.addElement(entity.value);
              break;
            case "remove":
              // console.log(inputArr[0]+"d: "+inputArr[inputArr.length - 1])
              break;
            case "showlabels":
              this.setState({showLabels: true});
            break;
            case "hidelabels":
              this.setState({showLabels: false});
            break;
            case "increasesize":
              this.setState({fontBigger: true});
            break;
            default:console.log("nope!")
          }
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
