// var creating arrays for user inputed tasks
var tasks = {
  "8": " ",
  "9": " ",
  "10": " ",
  "11": " ",
  "12": " ",
  "13": " ",
  "14": " ",
  "15": " ",
  "16": " ",
  "17": " ",
};



// runs all of the functions once the document is ready
$(document).ready(function() {
  loadingTasks();
  updateBackgrounds(); 
  setTheDate();    
});
 

// sets the date and time within the jumbotron
function setTheDate(){
    setInterval(function(){
    document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a'); 
  }, 1000);
}


// set text inputed within <textareas> to be saved to local storage via the save button
function logTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//  load the tasks from localStorage and add tasks 
var loadingTasks = function() {
  
  var loadTasks = JSON.parse(localStorage.getItem("tasks"));
  if (loadTasks) {
      tasks = loadTasks;

      $.each(tasks, function(timeBlock, input) {
          let hourDiv = $("#" + timeBlock);
          addTask(input, hourDiv);
      });
  };
};

//  add a task in the row that corresponds to the specified hour 
var addTask = function(taskText, hourDiv) {
  
  var taskDiv = hourDiv.find(".task");
  var pTag = $("<p>")
      .addClass("description")
      .text(taskText);
  taskDiv.html(pTag);
};


var replaceTextarea = function(textareaElement) {

    var taskInfo = textareaElement.closest(".scheduler-row");
    var textArea = taskInfo.find("textarea");  
    var time = taskInfo.attr("id");
    var text = textArea.val().trim();
        
    tasks[time] = [text];  

    logTasks();
    addTask(text, taskInfo);
};


  $(".saveBtn").on('click', function(){
    replaceTextarea($(this));
  });
  


// update the background on each row depending on time of day
function updateBackgrounds() {
  
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