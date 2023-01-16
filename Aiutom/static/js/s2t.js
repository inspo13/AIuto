//Response-Speech to text
//q1
if ("webkitSpeechRecognition" in window) {
    // Initialize webkitSpeechRecognition
    let speechRecognition = new webkitSpeechRecognition();
  
    // String for the Final Transcript
    let final_transcript = "";
  
    // Set the properties for the Speech Recognition object
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
  
    // Callback Function for the onStart Event
    speechRecognition.onstart = () => {
      // Show the Status Element
      document.querySelector("#status").style.display = "block";
    };
    speechRecognition.onerror = () => {
      // Hide the Status Element
      document.querySelector("#status").style.display = "none";
    };
    speechRecognition.onend = () => {
      // Hide the Status Element
      document.querySelector("#status").style.display = "none";
    };
  
    speechRecognition.onresult = (event) => {
      // Create the interim transcript string locally because we don't want it to persist like final transcript
      let interim_transcript = "";
  
      // Loop through the results from the speech recognition object.
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
  
      // Set the Final transcript and Interim transcript.
      document.querySelector("#final").innerHTML = final_transcript;
      document.querySelector("#interim").innerHTML = interim_transcript;
    };
  
    // Set the onClick property of the start button
    document.querySelector("#start").onclick = () => {
      // Start the Speech Recognition
      speechRecognition.start();
    };
    
      // Set the onClick property of the stop button
     document.querySelector("#stop").onclick = () => {
      // Stop the Speech Recognition
      speechRecognition.stop();
    
      };
  
  } else {
    console.log("Speech Recognition Not Available");
  
  }

//q2

  if ("webkitSpeechRecognition" in window) {
    // Initialize webkitSpeechRecognition
    let speechRecognition = new webkitSpeechRecognition();
  
    // String for the Final Transcript
    let final_transcript = "";
  
    // Set the properties for the Speech Recognition object
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
  
    // Callback Function for the onStart Event
    speechRecognition.onstart = () => {
      // Show the Status Element
      document.querySelector("#status_2").style.display = "block";
    };
    speechRecognition.onerror = () => {
      // Hide the Status Element
      document.querySelector("#status_2").style.display = "none";
    };
    speechRecognition.onend = () => {
      // Hide the Status Element
      document.querySelector("#status_2").style.display = "none";
    };
  
    speechRecognition.onresult = (event) => {
      // Create the interim transcript string locally because we don't want it to persist like final transcript
      let interim_transcript = "";
  
      // Loop through the results from the speech recognition object.
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
  
      // Set the Final transcript and Interim transcript.
      document.querySelector("#final_2").innerHTML = final_transcript;
      document.querySelector("#interim_2").innerHTML = interim_transcript;
    };
  
    // Set the onClick property of the start button
    document.querySelector("#start_2").onclick = () => {
      // Start the Speech Recognition
      speechRecognition.start();
    };
    
      // Set the onClick property of the stop button
     document.querySelector("#stop_2").onclick = () => {
      // Stop the Speech Recognition
      speechRecognition.stop();
    
      };
  
  } else {
    console.log("Speech Recognition Not Available");
  
  }

//q3
if ("webkitSpeechRecognition" in window) {
  // Initialize webkitSpeechRecognition
  let speechRecognition = new webkitSpeechRecognition();

  // String for the Final Transcript
  let final_transcript = "";

  // Set the properties for the Speech Recognition object
  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;

  // Callback Function for the onStart Event
  speechRecognition.onstart = () => {
    // Show the Status Element
    document.querySelector("#status_3").style.display = "block";
  };
  speechRecognition.onerror = () => {
    // Hide the Status Element
    document.querySelector("#status_3").style.display = "none";
  };
  speechRecognition.onend = () => {
    // Hide the Status Element
    document.querySelector("#status_3").style.display = "none";
  };

  speechRecognition.onresult = (event) => {
    // Create the interim transcript string locally because we don't want it to persist like final transcript
    let interim_transcript = "";

    // Loop through the results from the speech recognition object.
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }

    // Set the Final transcript and Interim transcript.
    document.querySelector("#final_3").innerHTML = final_transcript;
    document.querySelector("#interim_3").innerHTML = interim_transcript;
  };

  // Set the onClick property of the start button
  document.querySelector("#start_3").onclick = () => {
    // Start the Speech Recognition
    speechRecognition.start();
  };
  
    // Set the onClick property of the stop button
   document.querySelector("#stop_3").onclick = () => {
    // Stop the Speech Recognition
    speechRecognition.stop();
  
    };

} else {
  console.log("Speech Recognition Not Available");

}  


  //Ask
  //q1
  var btnSpeak = document.querySelector('#btnSpeak');
        var synth = window.speechSynthesis;
        var voices = [];
        let quest='what is your name';
        PopulateVoices();
        if(speechSynthesis !== undefined){
            speechSynthesis.onvoiceschanged = PopulateVoices;
        }
        btnSpeak.addEventListener('click', ()=> {
            var toSpeak = new SpeechSynthesisUtterance(quest);
            synth.speak(toSpeak);
        });
        function PopulateVoices(){
        }

//q2
        var btnSpeak2 = document.querySelector('#btnSpeak2');
        var synth = window.speechSynthesis;
        var voices = [];
        let quest2='what is your age';
        PopulateVoices();
        if(speechSynthesis !== undefined){
            speechSynthesis.onvoiceschanged = PopulateVoices;
        }
        btnSpeak2.addEventListener('click', ()=> {
            var toSpeak = new SpeechSynthesisUtterance(quest2);
            synth.speak(toSpeak);
        });
        function PopulateVoices(){
        }

//q3

var btnSpeak3 = document.querySelector('#btnSpeak3');
var synth = window.speechSynthesis;
var voices = [];
let quest3='what is your phone number';
PopulateVoices();
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = PopulateVoices;
}
btnSpeak3.addEventListener('click', ()=> {
    var toSpeak = new SpeechSynthesisUtterance(quest3);
    synth.speak(toSpeak);
});
function PopulateVoices(){
}
  //Table
  function myFunc() {
    var name = document.getElementById('data').innerHTML;
    var age = document.getElementById('data_2').innerHTML;
    var phone_no = document.getElementById('data_3').innerHTML;
    //var prescribed_test = document.querySelector('#tests').innerHTML;
    var prescribed_test;
    selectElement = document.querySelector('#tests');
    var prescribed_test = selectElement.value;
    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = phone_no;
    cell4.innerHTML = prescribed_test;
  }
  //collapsible
  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

