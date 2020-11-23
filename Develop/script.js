//Pseudocode
//
// Use moment.js to start doing this HW, already linked.description

// Plans
// when the page loads it shows the current hour
// Gonna need the user's time. also make the current hour green
//
// When the time area is clicked, the user enters in a sentence detailing their planned day.
// the blue button on the right allows the sentence to be saved.





// Restarting the Javascript after this commit

$(document).ready(function () {
    // save button actually will save on click
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        
        localStorage.setItem(time, text);
    });

    $("#hour9 .description").val(localStorage.getItem("hour9"));

});


// display current time in Javascript
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

// applying the date and time to HTML
document.getElementById("rightNow").innerHTML = n + ' ' + time;