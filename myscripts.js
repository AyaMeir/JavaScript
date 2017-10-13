$(document).ready(function() {
  // Click functions.
  $("#click-test").click(function() {
    alert( "Handler for .click() called." );
    console.log('Clicked');
  });
  $("#login").click(function() {
    alert("Remember me!");
  });
  $("#click-here").click(function(){
    $(this).hide();
  });

  // Render average values of stuff.
  var sub1 = 149;
  var sub2 = 150;
  var sub3 = 145;
  var sub4 = 147;
  var tNum = 4;
  var avg = (sub1 + sub2 + sub3 + sub4)/tNum;
  var avgValue = "Heres the value: " + avg;
  console.log('this is working!');

  $("#temp").append(avgValue);
});
