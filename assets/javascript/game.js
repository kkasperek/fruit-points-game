// global variables
var randomNumber;
var totalScore = 0; 
var wins = 0;
var losses = 0;

$(document).ready(function() {

// random number generator ... #19-120 and show 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRandomNumber(19,120));
randomNumber = $("#randomNumber").html(getRandomNumber(19,120));

// function to assign random points to fruits ... 1-12
var fruitPoints = Math.round(Math.random() * (12 - 0 + 1));
console.log(fruitPoints);

// loop through fruit points array to assign points

var fruit0 = $("#fruit0");
var fruit1 = $("#fruit1");
var fruit2 = $("#fruit2");
var fruit3 = $("#fruit3");
var fruitImage = [
    fruit0, fruit1, fruit2, fruit3
];

function getFruitPoints(points) {
    //1. select id
    points = $(".fruits"); 
   //2.
   //3.
 for(i=0; i < fruitImage; i++){
    console.log(points);
 }

   // On click of fruit image, take number generated and add it to the total score 
  $(".fruits").on("click", function() {

    totalScore = totalScore + fruitPoints;
    

  });


  }



});