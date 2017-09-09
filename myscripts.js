$(document).ready(function() {
  console.log('this is working!');

  $("#click-test").click(function() {
    alert( "Handler for .click() called." );
    console.log('Clicked');
  });

  $("#login").click(function() {
    alert("Remember me!");
  });

  
});
