// global variables
var randomNumber;
var totalScore = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {

    // random number generator ... #19-120 and show 
    // function getRandomNumber() {
    //     var min = 19;
    //     var max = 120;
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // var randomNumber = $("#randomNumber").html(getRandomNumber());
    // console.log(randomNumber);

    // Shortened random number generator 
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#randomNumber").html(randomNumber);
    console.log(randomNumber);

    // function to assign random points to fruits ... 1-12
    function randomPoints() {
        var min = 1;
        var max = 12;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log("fruit points: " + randomPoints());


    // save each fruit as a variable and create array of fruit buttons 
    function getfruitPoints() {
        let fruit0 = $("#fruit0");
        let fruit1 = $("#fruit1");
        let fruit2 = $("#fruit2");
        let fruit3 = $("#fruit3");
        let fruitArray = [
            fruit0, fruit1, fruit2, fruit3
        ];

        // loop through fruit array and set each fruit to a random generated value
        for (i = 0; i < fruitArray.length; i++) {
            fruitArray[i] = randomPoints();
        }
        console.log(fruitArray);    //logs random # for whole array

        // On click of fruit image, take number generated and add it to the total score 
        // work on this it looks terrible but at least its working 

        $('#fruit0').on("click", function () {
            totalScore = totalScore + fruitArray[0];
            $("#totalScore").html(totalScore);

            performCheck();
        });
        $('#fruit1').on("click", function () {
            totalScore = totalScore + fruitArray[1];
            $("#totalScore").html(totalScore);

            performCheck();
        });
        $('#fruit2').on("click", function () {
            totalScore = totalScore + fruitArray[2];
            $("#totalScore").html(totalScore);

            performCheck();
        });
        $('#fruit3').on("click", function () {
            totalScore = totalScore + fruitArray[3];
            $("#totalScore").html(totalScore);

            performCheck();
        });

    }
    getfruitPoints();

    // Reset game if win or loss
    function reset() {
        $("#randomNumber").html(randomNumber);
        totalScore = 0;
    }

    //when total score equals random number... else if total score is greater than 
    function performCheck() {
        if (totalScore === randomNumber) {
            alert('you win');
            wins++;
            $("#wins").text(wins);
            reset();
        } else if (totalScore > randomNumber) {
            alert('you lose');
            $("#losses").text(losses);
            losses++;
            reset();
        } else {
            return totalScore;
        }

    }


});