/*
render current day at top of planner
create time blocks in html (assignment requires regular biz hours, but maybe just do all hours?)
create input fields for time blocks
create save button for each time block
link current time to time blocks with Moment.js
set color for past time blocks, present time blocks, future time blocks
    if time has passed
        add class .past
    if time is present
        add class .present
    if time is future
        add class .future
create click event for save button
    save text from input field to localStorage (localStorage.setItem("name", value))
    render text from localStorage to event field (localStorage.getItem("name from setItem ↑ "))
*/

//set variables
let currentHour = Number.parseInt(moment().format("H"));
let hour9 = Number.parseInt($("#hour-9").text().split(" ")[0]);
let hour10 = Number.parseInt($("#hour-10").text().split(" ")[0]);
let hour11 = Number.parseInt($("#hour-11").text().split(" ")[0]);
let hour12 = Number.parseInt($("#hour-12").text().split(" ")[0]);
let hour1 = Number.parseInt($("#hour-1").text().split(" ")[0]);
let hour2 = Number.parseInt($("#hour-2").text().split(" ")[0]);
let hour3 = Number.parseInt($("#hour-3").text().split(" ")[0]);
let hour4 = Number.parseInt($("#hour-4").text().split(" ")[0]);
let hour5 = Number.parseInt($("#hour-5").text().split(" ")[0]);

//render current day and time at top of planner
setInterval(function () {
  $("#currentDay").text(moment().format("dddd MMM Do YYYY, h:mm:ss a"));
}, 1000);

//set color for past time blocks, present time blocks, future time blocks
// if time has passed
if (currentHour > hour9) {
  //     add class .past
  $("#9").removeClass("present future").addClass("past");
}
// if time is present
else if (currentHour === hour9) {
  //     add class .present
  $("#9").removeClass("past future").addClass("present");
}
// if time is future
//     add class .future
else $("#9").removeClass("past present").addClass("future");

if (currentHour > hour10) {
  //     add class .past
  $("#10").removeClass("present future").addClass("past");
}
// if time is present
else if (currentHour === hour10) {
  //     add class .present
  $("#10").removeClass("past future").addClass("present");
}
// if time is future
//     add class .future
else $("#10").removeClass("past present").addClass("future");

if (currentHour > hour11) {
  //     add class .past
  $("#11").removeClass("present future").addClass("past");
}
// if time is present
else if (currentHour === hour11) {
  //     add class .present
  $("#11").removeClass("past future").addClass("present");
}
// if time is future
//     add class .future
else $("#11").removeClass("past present").addClass("future");

if (currentHour > hour12) {
  //     add class .past
  $("#12").removeClass("present future").addClass("past");
}
// if time is present
else if (currentHour === hour12) {
  //     add class .present
  $("#12").removeClass("past future").addClass("present");
}
// if time is future
//     add class .future
else $("#12").removeClass("past present").addClass("future");

if (currentHour > hour1 + 12) {
  //     add class .past
  $("#1").removeClass("present future").addClass("past");
}
// if time is present
else if (currentHour === hour1 + 12) {
  //     add class .present
  $("#1").removeClass("past future").addClass("present");
}
// if time is future
//     add class .future
else $("#1").removeClass("past present").addClass("future");

if (currentHour > hour2 + 12) {
  //     add class .past
  $("#2").removeClass("present future").addClass("past");
}
// if time is present
else if (currentHour === hour2 + 12) {
  //     add class .present
  $("#2").removeClass("past future").addClass("present");
}
// if time is future
//     add class .future
else $("#2").removeClass("past present").addClass("future");

if (currentHour > hour3 + 12) {
  //     add class .past
  $("#3").removeClass("present future").addClass("past");
}
// if time is present
else if (currentHour === hour3 + 12) {
  //     add class .present
  $("#3").removeClass("past future").addClass("present");
}
// if time is future
//     add class .future
else $("#3").removeClass("past present").addClass("future");

if (currentHour > hour4 + 12) {
  //     add class .past
  $("#4").removeClass("present future").addClass("past");
}
// if time is present
else if (currentHour === hour4 + 12) {
  //     add class .present
  $("#4").removeClass("past future").addClass("present");
}
// if time is future
//     add class .future
else $("#4").removeClass("past present").addClass("future");

if (currentHour > hour5 + 12) {
  //     add class .past
  $("#5").removeClass("present future").addClass("past");
}
// if time is present
else if (currentHour === hour5 + 12) {
  //     add class .present
  $("#5").removeClass("past future").addClass("present");
}
// if time is future
//     add class .future
else $("#5").removeClass("past present").addClass("future");

//event listener for clicked save button
$(".saveBtn").on("click", function () {
  //save this timeblock event to localStorage
  let thisEvent = $(this).siblings('textarea').val();
  localStorage.setItem(`${this.id}`, thisEvent);
});

//set event to corresponding timeblock
$("#9").append(localStorage.getItem("submit-9am"));
$("#10").append(localStorage.getItem("submit-10am"));
$("#11").append(localStorage.getItem("submit-11am"));
$("#12").append(localStorage.getItem("submit-12pm"));
$("#1").append(localStorage.getItem("submit-1pm"));
$("#2").append(localStorage.getItem("submit-2pm"));
$("#3").append(localStorage.getItem("submit-3pm"));
$("#4").append(localStorage.getItem("submit-4pm"));
$("#5").append(localStorage.getItem("submit-5pm"));