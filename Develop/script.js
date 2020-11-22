//Pseudocode
//
// Use moment.js to start doing this HW, already linked.description

// Plans
// when the page loads it shows the current hour
// Gonna need the user's time. also make the current hour green
//
// When the time area is clicked, the user enters in a sentence detailing their planned day.
// the blue button on the right allows the sentence to be saved.



// display current time in Javascript
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

// applying the date and time to HTML
document.getElementById("rightNow").innerHTML = n + ' ' + time;

// local storage, so look up the documentation, still not understanding

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });
});

