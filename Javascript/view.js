updateview();
function updateview(){
document.getElementById('app').innerHTML = /*HTML*/`



<div class="car" style="background-color: ${currentCarColor};">CAR</div>
${showColorChoice()}
${showItemChoice()}
<div></div>
<div></div>

<H1>Coolness meter</H1>
<div id="bar-container">
    <div id="bar-fill"></div>
    <div id="percentage">0%</div>
  </div>

  <p id="event">Laster hendelser.</p>

  <div id="buttons" style="display:none;">
    <button id="yes-btn">Ja</button>
    <button id="no-btn">Nei</button>
  </div>

`
}


function showColorChoice(){
    if(bucketEventRGBA == null){
    return "";
    }else{
    return /*HTML*/`
    <div class="bucket" style="background-color: ${bucketEventRGBA};">bucket</div>
    <button onclick="acceptColorChoice()">Yes</button>
    <button onclick="declineColorChoice()">No</button>
    `;
    }
}


function showItemChoice(){
if(itemEventImg == null){
    return "";
}else{
    return /*HTML*/`
    <Img src="${itemsEventImg}">
    <button onclick="acceptItemChoice()">Yes</button>
    <button onclick="declineItemChoice()">No</button>
    `
}
}

function showWinningScreen(){
return /*HTML*/`
<div class="winningScreen">
    <p id="winningMsg">You're so cool, bro</p>
</div>
`

}



 var barFill = document.querySelector("#bar-fill");
var percentage = document.querySelector("#percentage");
var eventText = document.querySelector("#event");
var buttonsDiv = document.querySelector("#buttons");

function updateBar(coolnessPercent){
    barFill.style.width = coolnessPercent + "%";
    percentage.innerText = coolnessPercent + "%";
}

function showEvent(){
    eventText.innerText = text;
}

function showButtons(){
    buttonsDiv.style.display = "block";
}

function hideButtons(){
    buttonsDiv.style.display = "none";
}
    