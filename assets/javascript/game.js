$(document).ready(function() {

  var targetNumber = Math.floor((Math.random() *101) +19);
  $("#targetNumber").text(targetNumber);

  var counter = 0;
  $("#score").text(counter);

  var win = 0;
  var loss = 0;
  $("#winsLosses").html("<br> Wins: <br>" + win + " <br> Losses: <br>" + loss);

  var numberArray = [];

  function randomNumberFuntion() {
    var i = 0;
    while (i < 4){
      var randomNumber = Math.floor((Math.random() *11) + 1);
      if(numberArray.indexOf(randomNumber) == -1) {
        numberArray.push(randomNumber);
        i++;
      }
    }
  }

  randomNumberFuntion();

  for (var i = 0; i < numberArray.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.attr("src", "assets/images/Crystal.jpg");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", numberArray[i]);
    $(".crystals").append(imageCrystal);
  }

  function reset() {
    randomNumberFuntion()
    for (var i = 0; i < numberArray.length; i++){
      imageCrystal.attr("data-crystalvalue", numberArray[i])
    }

    targetNumber = Math.floor((Math.random() *101) +19);
    $("#targetNumber").text(targetNumber);

    counter = 0;
    $("#score").text(counter);

  }

  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#score").text(counter);

    if (counter === targetNumber) {
      alert("Winner");
      win++;
      $("#winsLosses").html("<br> Wins: <br>" + win + " <br> Losses: <br>" + loss);
      reset()
    }

    else if (counter >= targetNumber) {
      alert ("Le Looser");
      loss++;
      $("#winsLosses").html("<br> Wins: <br>" + win + " <br> Losses: <br>" + loss);
      reset()
    }
  });

});