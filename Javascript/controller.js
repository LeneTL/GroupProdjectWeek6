function winning(){
if(coolness == maxCoolness){
showWinningScreen();
}
}


var yesBtn = document.querySelector("#yes-btn");
var noBtn = document.querySelector("#no-btn");

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
    shangeCoolness(currectEvent.coolness);
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

yesBtn.onlick = acceptEvent;
noBtn.onlcik = declineEvent;

window.onload = startGame;

//correctGreeting(){}
//-----------------------------------ColorChoices
function acceptColorChoice(){
    currentCarColor = bucketEventRGBA;
    coolness = bucketEventScore;
    bucketEventRGBA = null;
    bucketEventScore = null;
    nextEvent();
}

function declineColorChoice(){
    bucketEventRGBA = null;
    bucketEventScore = null;
    nextEvent();
}
//-----------------------------------ItemChoices
function acceptItemChoice(){
    coolness = itemsEventScore;
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
    let randomizedEvent = Math.floor(Math.random() * 3);
    if(randomizedEvent == 1){
        randomizedBucketColor();
    }else if(randomizedEvent == 2){
        randomizedItemImg();
    }else if(randomizedEvent == 3){
        //Friend
    }
updateview()
}

function startGame(){
    nextEvent();
}
//--------------------------------------Randomizers
function  randomizedBucketColor(){
    let randomizedIndex = Math.floor(Math.random() * possibleCarColorsRGBA.length);
    bucketEventRGBA = possibleCarColorsRGBA[randomizedIndex];
    bucketEventScore = possibleCarColorScores[randomizedIndex];
}
function  randomizedItemImg(){
    let randomizedIndex = Math.floor(Math.random() * possibleItemImg.length);
    itemsEventImg = possibleItemImg[randomizedIndex];
    itemsEventScore = possibleItemScores[randomizedIndex];
}

