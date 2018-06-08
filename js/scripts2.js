function countDown(makeInt) {
  for (var i = makeInt; i >= 0; i -= 1) {
    numberSniffer(i);
  }
}

// ####################code for 2 digit numbers ######
// function oneCheck(i) {
//   var stringI = i.toString();
//   var splitNumber = stringI.split("");
//   var oneYes = splitNumber.includes("1");
//  var zeroYes = splitNumber.includes("0"); // check for 0
// }

function numberSniffer(i) {
  var stringI = i.toString()
  if (stringI === "0") {
    return ("BOOP");
  }
  else if (stringI === "1") {
    return ("BEEP");
  }
  else if (stringI) {
    var makeInt = parseInt($("#inputString").val()); // brings in string value as integer
    var divThree = makeInt%3 === 0
    return ("I'm sorry, Dave.  I'm afraid I can't do that.")
  }
  else {
    displayResults(i);
  }
}

function displayResults(i) {
  $("#output").append("<li>" + i + "</li>");
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
      var makeInt = parseInt($("#inputString").val()); // brings in string value as integer
      countDown(makeInt);
  });

  $("#reset").click(function(e) {
    e.preventDefault();

    location.reload();
  })
});
