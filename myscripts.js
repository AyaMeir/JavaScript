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

  var engineData = [];
  var engineNumb = 1
  var enginesOper = 10
  while (engineNumb <= enginesOper) {
    console.log("Engine # " + engineNumb + " is running.");
    engineData.push("Engine # " + engineNumb + " is running.");
    engineNumb++;
  }

   console.log(engineData);
  $("#engines").append(engineData);

  for (var brokenEngine = 11;  brokenEngine <= 15; brokenEngine++){
    console.log("Engine # " + brokenEngine + " isn't working.");
    var brEngines = [];
    brEngines.push("Engine # " + brokenEngine + " isn't working.");
    console.log(brEngines);
    $("#brEng").append(brEngines);
  }

  // Set the height of the browser window to a variable
  // Subtract the difference of the padding from the window height variable
  // Set the background image div to be the value of the calculation above
});
