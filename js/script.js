// set up vars


$(document).ready(function() {
    checkTheDay();
});
    
function checkTheDay(){
    setInterval(function(){
    document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a'); 
  }, 1000);
}


// need to set up Week day, month, and time to be set in the header

// set text inputed within <textareas> to be saved to local storage via the save button

// set up save buttons on click function

// change color of time rows based on the time it is