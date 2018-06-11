function countDown(makeInt) {
  for (var i = makeInt; i >= 0; i -= 1) {
    displayResults(i);
  }
}

function numberSort(divThree) {
  // if (zeroYes === true) {
  //   displayResults("BEEP");
  // } else if (zeroYes === true) {
  //   displayResults("BOOP");
} if (divThree === true) {
    displayResults("I'm sorry, Dave. I'm afraid I can't do that.");
  } else {
    alert("nope");
}



// put at bottom. from count to project
// button/page load code

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
      var inputNumber = $("#inputString").val(); //bring in number as string to check value
      var splitNumber = inputNumber.split(""); // split string into characters to be searchable
      var oneYes = splitNumber.includes("1"); // check for 1
      var zeroYes = splitNumber.includes("0"); // check for 0
      var makeInt = parseInt($("#inputString").val()); // brings in string value as integer
      var divThree = makeInt%3 === 0 ;  // is int divisible by 3?
      // console log here for oneYes zeroYes and divThree all work
      // var numberSort(splitNumber); // spits number into top function
      numberSort(divThree);

      // numberSort(oneYes, zeroYes, divThree);



  });

  $("#reset").click(function(e) {
    e.preventDefault();

    location.reload();
  })
});
