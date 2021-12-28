/***********************************************************************
Write a function `thunderstorm` that takes an array containing a series
of strings that represents storm events ("lightning", "wind", "rain"). Your
function should `console.log` each storm event, followed by a pause of 200ms
after each event.

- For the "lightning" storm event, you should first log a "FLASH!" followed by a
  "BOOM!" 400ms later. 
    - Note: If there is another storm event after the lightning, it should
      execute 200ms after the "FLASH!"
- For the "rain" or "wind" event, you should simply log the name of the storm event.

__________________________________________________
Example #1:

let stormEvents1 = ["lightning", "wind", "rain"];

thunderstorm(stormEvents1);
// print 'FLASH!'   then pause for 200ms
// print 'wind'     then pause for 200ms
// print 'BOOM!'    (exactly 400ms after 'FLASH!')
// print 'rain'     (exactly 200ms after 'wind')   then pause for 200ms

__________________________________________________
Example #2:

let stormEvents2 = ["lightning"];

thunderstorm(stormEvents2);
// print 'FLASH!'   then pause for 200ms
// print 'BOOM!'    (exactly 400ms after 'FLASH!')

__________________________________________________
Example #3:

let stormEvents3 = ["rain", "wind"];

thunderstorm(stormEvents3);
// print 'rain'    then pause for 200ms
// print 'wind'    (200ms after 'rain')   then pause for 200ms

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