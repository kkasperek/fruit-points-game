// global variables
var randomNumber;
var totalScore = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {

    // random number generator ... #19-120 and show 
    function getRandomNumber() {
        var min = 19;
        var max = 120;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomNumber = $("#randomNumber").html(getRandomNumber());
    console.log("random number: " + getRandomNumber());

    // function to assign random points to fruits ... 1-12
    function getfruitPoints(fruitPoints) {
        var min = 1;
        var max = 12;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log("fruit points: " + getfruitPoints());

    // created object fruit row where key names = fruit values 
    var fruitRow = {
        fruit0: $("#fruit0"),
        fruit1: $("#fruit1"),
        fruit2: $("#fruit2"),
        fruit3: $("#fruit3")
    };
    console.log(fruitRow);

    // loop through object and set each fruit to a random generated value

    

    // On click of fruit image, take number generated and add it to the total score 
    $(".fruits").on("click", function () {
        totalScore++;
        $("#totalScore").html(totalScore);

        //when total score equals random number... else if total score is greater than 
        if (totalScore === randomNumber) {
            wins++;
            $("#wins").html(wins);
            alert("you win!");
        } else if (totalScore > randomNumber) {
            losses++;
            $("#losses").html(losses);
        }

    });




});