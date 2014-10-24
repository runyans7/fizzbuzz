$(document).ready(function(){
  // Get value from prompt
  var endValue = prompt("Please enter a whole number");

  // Convert string to integer
  var endValue = +endValue;

  //Check if value is whole intger
  if (isNaN(endValue)){
    alert("You must enter an integer!");
    location.reload();
  } else if (endValue % 1 != 0){
    alert("You must enter a whole number!");
    location.reload();
  } else {
    console.log("Value is a whole integer");
  };

  var fizzBuzzFunc = function() {
    for (var i = 1; i <= endValue; i++) {
      if (i % 15 == 0) {
        $('<p>FizzBuzz</p>').appendTo('body');
      } else if (i % 3 == 0) {
        $('<p>Fizz</p>').appendTo('body');
      } else if (i % 5 == 0) {
        $('<p>Buzz</p>').appendTo('body');
      } else {
        $('<p>' + i + '<p>').appendTo('body');
      };
    };
  };
  
  fizzBuzzFunc();
});