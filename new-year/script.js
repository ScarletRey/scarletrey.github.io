$(document).ready(function() {
  var $container = $('#snowfall');

  var timer = setTimeout(function tick() {
    createFlake();
    timer = setTimeout(tick, randomInteger(500, 2000))
  }, randomInteger(500, 2000));

  // setInterval(createFlake, randomInteger(500, 2500));

  function createFlake() {
    var randomId = Math.floor(Math.random() * 1e10),
        percent = Math.floor(Math.random() * 100);

    $container.append('<div id="'+randomId+'" class="mr-smith" style="left:'+percent+'%;-webkit-animation-duration: '+randomInteger(7, 15)+'s;animation-duration: '+randomInteger(7, 15)+'s;"><span style="-webkit-animation-duration: '+randomInteger(5, 20)+'s;animation-duration: '+randomInteger(5, 20)+'s;"></span></div>');

    setTimeout(function() {
      $('#'+randomId).remove();
    }, 15000)
  }

  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    console.log(rand);
    return rand;
  }

});
