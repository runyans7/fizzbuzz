$(document).ready(function(){

  $('#start').on('click', function(){
    for (var i = 1; i <= 100; i++) {
      if (i % 5 == 0 && i % 3 == 0) {
        $('<p>FizzBuzz</p>').appendTo('body');
      } else if (i % 3 == 0) {
        $('<p>Fizz</p>').appendTo('body');
      } else if (i % 5 == 0) {
        $('<p>Buzz</p>').appendTo('body');
      } else {
        $('<p>' + i + '<p>').appendTo('body');
      }
    };
  })

});
