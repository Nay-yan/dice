var scores, roundScore, activePlayer, gameplayer;
gameplayer = true;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;


document.querySelector(".dice-img").style.display = "none";
document.querySelector("#score-0").innerHTML = 0;
document.querySelector("#player-0").innerHTML = 0;
document.querySelector("#score-1").innerHTML = 0;
document.querySelector("#player-1").innerHTML = 0;

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    var diceDom = document.querySelector(".dice-img");
    document.querySelector("#score-0").innerHTML = 0;
    document.querySelector("#score-1").innerHTML = 0;
    document.querySelector('.active-player-0').classList.toggle('active-now');
    document.querySelector('.active-player-1').classList.toggle('active-now');
    diceDom.style.display = "none";
}

document.getElementById("RollBtn").addEventListener("click", function() {
    if (gameplayer) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector(".dice-img");
        diceDom.style.display = "block";
        diceDom.src = `./img/dice-${dice}.png`;
        if (dice > 1) {
            roundScore += dice;
            document.querySelector("#score-" + activePlayer).innerHTML = roundScore;
        } else {
            // Next player 
            nextPlayer()
        }
    }
});

document.getElementById('HoldBtn').addEventListener("click", function() {
    if (gameplayer) {
        scores[activePlayer] += roundScore;
        document.querySelector("#player-" + activePlayer).innerHTML = scores[activePlayer];

        if (scores[activePlayer] >= 10) {
            gameplayer = false;
            document.getElementById("playerName-" + activePlayer).textContent = "Winner !";
            document.querySelector(".dice-img").style.display = "none";
            document.querySelector("#playerName-" + activePlayer).classList.add("winner");
            document.querySelector("#playerName-" + activePlayer).classList.remove("p-font");
            document.querySelector(".active-player-" + activePlayer).classList.remove("active-now");
        } else {
            // Next player 
            nextPlayer();
        }
    }

});

document.getElementById("NewgameBtn").addEventListener("click", function() {
    gameplayer = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector(".dice-img").style.display = "none";
    document.querySelector("#score-0").innerHTML = 0;
    document.querySelector("#player-0").innerHTML = 0;
    document.querySelector("#score-1").innerHTML = 0;
    document.querySelector("#player-1").innerHTML = 0;
    document.querySelector("#playerName-0").innerHTML = "Player 1";
    document.querySelector("#playerName-1").innerHTML = "Player 2";

    document.querySelector("#playerName-0").classList.remove("winner");
    document.querySelector("#playerName-1").classList.remove("winner");
    document.querySelector("#playerName-0").classList.add("p-font");
    document.querySelector("#playerName-1").classList.add("p-font");

    document.querySelector(".active-player-0").classList.remove("active-now");
    document.querySelector(".active-player-1").classList.remove("active-now");
    document.querySelector(".active-player-0").classList.add("active-now");

});