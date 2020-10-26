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

//render current day at top of planner
setInterval(function () {
        $("#currentDay").text(moment().format("dddd MMM Do YYYY, h:mm:ss a"));
    }, 1000);

//event listener for clicked save button
$(".submit").on("click", function(){
    console.log(`${this.id} event submitted!`);
    // console.log(this.id.value);
});