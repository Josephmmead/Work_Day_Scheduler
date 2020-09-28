var inputs = {
  "9": [],
  "10": [],
  "11": [],
  "12": [],
  "13": [],
  "14": [],
  "15": [],
  "16": [],
  "17": []
};




$(document).ready(function() {
    setTheDate();

    updateBackgrounds();
});
 

// sets the date and time within the jumbotron
function setTheDate(){
    setInterval(function(){
    document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a'); 
  }, 1000);
}


// set text inputed within <textareas> to be saved to local storage via the save button

// set up save buttons on click function

// change color of time rows based on the time it is


// update the background on each row depending on time of day
var updateBackgrounds = function() {
  
  var currentHour = moment().hour();
  $(".scheduler-row").each( function() {
      var rowHour = parseInt($(this).attr("id"));

      // handle past, present, and future
      if ( rowHour < currentHour ) {
          $(this).removeClass(["present", "future"]).addClass("past");
      }
      else if ( rowHour === currentHour ) {
          $(this).removeClass(["past", "future"]).addClass("present");
      }
      else {
          $(this).removeClass(["past", "present"]).addClass("future");
      }
  })
};