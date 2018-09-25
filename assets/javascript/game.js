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
        console.log(fruitArray);

        // loop through fruit array and set each fruit to a random generated value
        for (i = 0; i < fruitArray.length; i++) {
            fruitArray[i] = randomPoints();
        }
        console.log(fruitArray);    //logs random # for whole array
        console.log(fruitArray[0]); //logs random # for first button

        // On click of fruit image, take number generated and add it to the total score 

        $('#fruit0').on("click", function () {
            totalScore = totalScore + fruitArray[0];
            $("#totalScore").html(totalScore);

        });
        $('#fruit1').on("click", function () {
            totalScore = totalScore + fruitArray[1];
            $("#totalScore").html(totalScore);

        });
        $('#fruit2').on("click", function () {
            totalScore = totalScore + fruitArray[2];
            $("#totalScore").html(totalScore);

        });
        $('#fruit3').on("click", function () {
            totalScore = totalScore + fruitArray[3];
            $("#totalScore").html(totalScore);

        });

        //totalScore = totalScore + getfruitPoints();
        //$("#totalScore").html(totalScore);

        //when total score equals random number... else if total score is greater than 
        // if (totalScore === randomNumber) {
        //     wins++;
        //     $("#wins").html(wins);
        //     alert("you win!");
        // } else if (totalScore > randomNumber) {
        //     losses++;
        //     $("#losses").html(losses);
        // }


    }
    getfruitPoints();


});