function tooBig(makeInt) {
  if (makeInt > 30) {
    displayResults("You're being unreasonable, Dave.  That number is too large");
    $("#inputString").val("");
  } else {
    countDown(makeInt);
  }
}

function countDown(makeInt) {
  for (var i = makeInt; i >= 0; i -= 1) {
    numCheck(i);
    $("#inputString").val("");
  }
}

function numCheck(i) {
  var divThree = i%3 === 0 ;
  var stringI = i.toString();
  var splitNumber = stringI.split("");
  var oneYes = splitNumber.includes("1");
  var zeroYes = splitNumber.includes("0");
  if (divThree === true) {
    displayResults("I'm sorry, Dave. I'm afraid I can't do that.");
  } else if (zeroYes === true) {
    displayResults("BEEP");
  } else if (oneYes === true) {
    displayResults("BOOP");
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
    $("#output").text("");
      var makeInt = parseInt($("#inputString").val());
      tooBig(makeInt);
  });

  $("#reset").click(function(e) {
    e.preventDefault();
    location.reload();
  })
});
