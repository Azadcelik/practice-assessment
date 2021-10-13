/***********************************************************************
Write a function `thunderstorm` that takes an array containing a series
of strings that represents storm events ("lightning", "wind", "rain"). Your
function should `console.log` each "wind and "rain" storm event, followed by a
pause of 200ms after each event. For each "lightning" event, the function
should print out "FLASH!" followed by "BOOM!" 400ms later.


Example:

let stormEvents = ["lightning", "wind", "rain"];

thunderstorm(stormEvents);
// print 'FLASH!'
// pause for 200ms
// print 'wind'
// pause for 200ms
// print 'BOOM!'  (400ms after 'FLASH!')
// print 'rain'   (200ms after 'wind')

***********************************************************************/

function thunderstorm(stormEvents) {
  // Your code here
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = thunderstorm;
} catch {
  module.exports = null;
}