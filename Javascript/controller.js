function winning(){
if(coolness= 100){
showWinningScreen()
}
}


function showRandomEvent(){
    const randomIndex = Math.floor(Math.random()*events.length);
    currentEvent = events[randomIndex];

    document.getElementById("events").innerText = currentEvent.text + "Vil du plukke det opp?";
    document.getElementById("buttons").style.display = "block";
}

function acceptEvent(){
    coolness += currentEvent.coolness
    if(coolness>maxCoolness) coolness = maxCoolness
    if(coolness<0) coolness = 0;
    updateBar();
    document.getElementById("event").innerText = "✅ Du tok det!"
    document.getElementById("buttons").style.display = "none";
}


function declineEvent(){
    document.getElementById("event").innerText = "Du ignorerte det. Du kjører videre";
    document.getElementById("buttons").style.display = "none";
}



//function startTicking(){}



//correctGreeting(){}