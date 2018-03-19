$('#formy').hide();
$('#successform').hide();
$('#emptyform').hide();

$('#upload').on('click', function () {
    event.preventDefault();
    $('#formy').show();
    $('#upload').hide();

});


//this is an example of velocity.js this website is a good tutorial: http://www.independent-software.com/velocity-js-tutorial-accelerated-javascript-animation/
$(".jumbotron").velocity("fadeIn", { duration: 1500 })

//more velocity js
$("#upload").velocity({ translateY: 125 }, {
    duration: 2250,
    easing: [ 300, 8 ]
  });