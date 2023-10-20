$(function() {
  // Add click event listener for save buttons
  $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  // Get the current hour in 24-hour format using Day.js
  var currentHour = dayjs().format("H");

  // Loop through each time block to apply past, present, or future class
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Loop through each time block to set textarea values from localStorage
  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var savedInput = localStorage.getItem(timeBlockId);
    if (savedInput) {
      $(this).find(".description").val(savedInput);
    }
  });

  // Get the current date and format it
  var currentDate = dayjs().format("MMMM D, YYYY");
  // Update the #currentDay element's text with the formatted date
  $("#currentDay").text(currentDate);
});

