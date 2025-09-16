updateview();
function updateview(){
document.getElementById('app').innerHTML = /*HTML*/`

<div class="wrap">
    <Img src="" alt="backgroundSky" class="Sky">
    <Img src="" alt="car" class="Car">

    <div>
        <div class="events">
            <Img src="" alt="Friendcar" class="Friend">
        </div>
    </div>

    <div class="itemContainer">
        <div class="items">
            <Img src="" alt="pinkPaint">
        </div>
        <div class="items">
            <Img src="" alt="neonLights">
        </div>
    </div>

    <div class="speechContainer">
        <div class="speechbubles">
            <h2 onclick="correctGreeting()">Kyss på munnen</h2>
        </div>
        <div class="speechbubles">
            <h2 onclick="correctGreeting()">Bro hug</h2>
        </div>
        <div class="speechbubles">
            <h2 onclick="correctGreeting()">Vis Fingern'</h2>
        </div>
    </div>



</div>







`
}

function showItem(){

}

function showWinningScreen(){
/*HTML*/`
<div class="winningScreen">
    <p id="winningMsg">You're so cool, bro</p>
</div>
`

}