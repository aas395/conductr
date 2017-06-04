import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import WatsonSpeech from 'watson-speech';
import './index.css';
// import STT from './stt.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


//asdfasdf

document.querySelector('#talk').onclick = function () {
	var myHeaders = new Headers();
	myHeaders.append('Host', 'localhost:3001');

	var myInit = { method: 'GET',
	               headers: myHeaders,
	               mode: 'cors',
	               cache: 'default'
	           };

	var myRequest = new Request('http://localhost:3001/api/token', myInit);

      fetch(myRequest)
        .then(function(response) {
          return response.text();
        }).then(function (token) {
          
          var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
            token: token,
    //        continuous: false, // no longer supported
            outputElement: '#response' // CSS selector or DOM Element
          });

          stream.on('data', function(data) {
            if(data.results[0] && data.results[0].final) {
              stream.stop();
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