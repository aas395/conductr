module.exports = function() {
  
    document.querySelector('#button').onclick = function () {
      console.log('button clicked')
      fetch('/api/speech-to-text/token')
        .then(function(response) {

          return response.text();
        }).then(function (token) {
          
    //       var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
    //         token: token,
    // //        continuous: false, // no longer supported
    //         outputElement: '#output' // CSS selector or DOM Element
    //       });

          // stream.on('data', function(data) {
          //   if(data.results[0] && data.results[0].final) {
          //     stream.stop();
          //     console.log('stop listening.');
          //   }
          // });

          // stream.on('error', function(err) {
          //   console.log(err);
          // });

        }).catch(function(error) {
          console.log(error);
        });
    };
  // }
};