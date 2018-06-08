function countUpTo(countTo, countBy) {
  if ((numberCompare(countTo, countBy) === true) || (noZero(countTo, countBy) === true) || (noBlanks(countTo, countBy) === true) || (notNum(countTo, countBy) === true)) {
    alert("try again");
  } else {
    for(var i = countBy; i <= countTo; i += countBy) {
      displayResults(i);
    }
  }
}

function numberCompare(countTo, countBy) {
  if (countTo <= countBy) {
    return true;
  }
}

function noZero(countTo, countBy) {
  if ((countTo <= 0) || (countBy <= 0)) {
    return true;
  }
}

function noBlanks(countTo, countBy) {
  if ((countTo.length === 0) || (countBy.length === 0)) {
    return true;
  }
}

function notNum(countTo, countBy) {
  if ((isNaN(countTo)) || (isNaN(countBy))) {
    return true;
  }
}

function displayResults(number) {
  $("#output").append("<li>" + number + "</li>");
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    countUpTo(countTo, countBy);
  });

  $("#reset").click(function(e) {
    e.preventDefault();

    location.reload();
  })
});
