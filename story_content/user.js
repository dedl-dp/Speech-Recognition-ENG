function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5h1mARUVour":
        Script1();
        break;
  }
}

function Script1()
{
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-GB';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.start();

recognition.onresult = function(event) {

var speechResult = event.results[0][0].transcript;
//return speech and change storyline variable with a result
var player = GetPlayer();
player.SetVar("SpeechReceived",speechResult);
console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
recognition.stop();
console.log('Speech ended!');
}

recognition.onerror = function(event) {
console.log('Error occurred in recognition: ' + event.error);
}

recognition.onaudiostart = function(event) {
//Fired when the user agent has started to capture audio.
console.log('SpeechRecognition.onaudiostart');
}

recognition.onaudioend = function(event) {
//Fired when the user agent has finished capturing audio.
console.log('SpeechRecognition.onaudioend');
}

recognition.onend = function(event) {
//Fired when the speech recognition service has disconnected.
console.log('SpeechRecognition.onend');
var player = GetPlayer();
player.SetVar("Button","START");
}

recognition.onnomatch = function(event) {
//Fired when the speech recognition can't recognise speech
console.log('SpeechRecognition.onnomatch');
}

recognition.onsoundstart = function(event) {
//Fired when any sound — recognisable speech or not — has been detected.
console.log('SpeechRecognition.onsoundstart');
}

recognition.onsoundend = function(event) {
//Fired when no sound present
console.log('SpeechRecognition.onsoundend');
}

recognition.onspeechstart = function (event) {
//Fired when speech starts
console.log('SpeechRecognition.onspeechstart');
}
recognition.onstart = function(event) {
//Fired when the speech recognition service has begun listening
console.log('SpeechRecognition.onstart');
var player = GetPlayer();

}
}

