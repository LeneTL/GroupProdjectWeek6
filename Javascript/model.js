let coolness= 0; 
let currentEvent = null;
let maxCoolness = 100;
const events = [
{ text: "Du fant en rosa lakk!", coolness: 30 },
{ text: "Du fant Neon Lights!", coolness: 20 },
{ text: "Du fant Rustflekk!", coolness: -15}
];




//const app= document.getElementById('app')

let possibleCarColorsImg= ["browncar.png","bluecar.png","greencar.png","pinkcar.png"]; 
let possibleBucketColorsImg = ["brownBucket.png","blueBucket.png","greenBucket.png","pinkBucket.png"];
let possibleCarColorScores = [0,10,20,30];
let currentCarColor = possibleCarColorsImg[0];
let carEventImg = null;
let bucketEventImg = null;
let bucketEventScore = null;
let randomizedColorIndex = null;

let possibleItemImg = ["neonLights.png","dice.png","goodSniff.png"]; 
let possibleItemScores = [20,10,5];
let itemsEventImg = null;
let itemsEventScore = null;