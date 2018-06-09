function countDown(makeInt) {
  for (var i = makeInt; i >= 0; i -= 1) {
    numCheck(i);
  }
}

function numCheck(i) {
  var stringI = i.toString();
  var splitNumber = stringI.split("");
  var oneYes = splitNumber.includes("1");
  var zeroYes = splitNumber.includes("0");
  //   #### These next 2 lines break the code in their current state/position ####
  //   var makeInt = parseInt(i).val();
  //   var divThree = makeInt%3 === 0 ;
  if (zeroYes === true) {
    displayResults("BEEP");
  } else if (oneYes === true) {
  displayResults("BOOP");
  // unhide to display "sorry, Dave" if num%3===0
  // } else if (divThree === true) {
  //   displayResults("I'm sorry, Dave. I'm afraid I can't do that.");
  } else {
    displayResults(i);
  }
}

function displayResults(i) {
  $("#output").append("<li>" + i + "</li>");
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
      var makeInt = parseInt($("#inputString").val());
      countDown(makeInt);
  });

  $("#reset").click(function(e) {
    e.preventDefault();
    location.reload();
  })
});
