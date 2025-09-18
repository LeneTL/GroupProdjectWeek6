var coolness= 0; 
var currentEvent = null;
var maxCoolness = 100;
var events = [
{ text: "Du fant en rosa lakk!", coolness: 30 },
{ text: "Du fant Neon Lights!", coolness: 20 },
{ text: "Du fant Rustflekk!", coolness: -15}
];

function resetGame(){
    coolness = 0;
    currentEvent = null;
}
function getRandomEvent(){
    var idx = Math.floor(Math.random()*events.length);
    currentEvent = events[idx];
    return currentEvent;
}

function changeCoolness(amount){
    coolness += amount
    if (coolness > maxCoolness) coolness = maxCoolness;
    if (coolness < 0) coolness = 0;
}

function getCoolness(){
    return coolness;
}


//const app= document.getElementById('app')

let possibleCarColorsRGBA = ["rgba(90, 56, 24, 1)","rgba(39, 17, 165, 1)","rgba(179, 19, 19, 1)","rgba(197, 23, 159, 1)"]; 
// let possibleBucketColorsImg = ["brownBucket.png","blueBucket.png","greenBucket.png","pinkBucket.png"];
let possibleCarColorScores = [0,10,20,30];
let currentCarColor= possibleCarColorsRGBA[0];
let bucketEventRGBA = null;
let bucketEventScore = null;

let possibleItemImg = ["neonlights.png","Dice.png","goodSniff.png"];
let possibleItemScores = [20,10,5];
let itemsEventImg = null;
let itemsEventScore = null;