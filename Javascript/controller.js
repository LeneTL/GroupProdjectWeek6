// var yesBtn = document.querySelector("#yes-btn");
// var noBtn = document.querySelector("#no-btn");

 function startGame(){
     resetGame();
     updateBar(getCoolness());
     nextEvent();
}

 function nextEvent(){
     var event = getRandomEvent();
     showEventText(event.text + "Vil du plukke det opp?????");
    showButtons();
 ;}

function acceptEvent(){
    changeCoolness(currentEvent.coolness);
    updateBar(getCoolness());
    showEventText("Du tok det!" + currentEvent.coolness)
    hideButtons();
    setTimeout(nextEvent, 1500);
}

function declineEvent(){
    showEvent ("Du ignorerte det.");
    hideButtons();
    setTimeout(nextEvent, 1500);
}

// yesBtn.onlick = acceptEvent;
// noBtn.onlcik = declineEvent;

window.onload = startGame;

//correctGreeting(){}
//-----------------------------------ColorChoices
function acceptColorChoice(){
    currentCarColor = possibleCarColorsImg[randomizedColorIndex];
    changeCoolness(bucketEventScore);
    updateBar(getCoolness());
   // coolness = bucketEventScore; //add a += something (although it's bugged)
    bucketEventImg = null;
    bucketEventScore = null;
    nextEvent();
    console.log(randomizedColorIndex);
}

function declineColorChoice(){
    bucketEventImg = null;
    bucketEventScore = null;
    nextEvent();
}
//-----------------------------------ItemChoices
function acceptItemChoice(){
    changeCoolness(itemsEventScore)
    updateBar(getCoolness());
    // coolness = itemsEventScore;
    itemsEventImg = null;
    itemsEventScore = null;
    nextEvent();
}

function declineItemChoice(){
    itemsEventImg = null;
    itemsEventScore = null;
    nextEvent();
}

//-------------------------------------Next Event
function nextEvent(){
    let randomizedEvent = Math.floor(Math.random() * 2);
    if(randomizedEvent == 0){
        randomizedColorIndex = randomizedBucketColor();
    }else if(randomizedEvent == 1){
        randomizedItemImg();
    } //else if(randomizedEvent == 3){
        //Friend
   // }
updateview();
}

function startGame(){
    nextEvent();
}
//--------------------------------------Randomizers
function  randomizedBucketColor(){
    let randomizedColorIndex = Math.floor(Math.random() * possibleBucketColorsImg.length);
    bucketEventImg = possibleBucketColorsImg[randomizedColorIndex];
    bucketEventScore = possibleCarColorScores[randomizedColorIndex];
    return randomizedColorIndex;
}
function  randomizedItemImg(){
    let randomizedIndex = Math.floor(Math.random() * possibleItemImg.length); 
    itemsEventImg = possibleItemImg[randomizedIndex];
    itemsEventScore = possibleItemScores[randomizedIndex];
}
//--------------------------------------
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
