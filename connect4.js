

var playerRed = "R";
var playerYellow = "Y";
var currPlayer = playerRed;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;

window.onload = function(){
    setGame();
}

function setGame(){
    board = [];

    for (let r = 0; r < row; r++) {
        let row = [];
        for(let c=0; c<columns; c++)
        //js
        row.push('');

        //HTML
        let tile = document.createElement("div");
        tile.id = r.toString() + "-" c.toString();
        tile.classList.add("tile");
        document.getElementById("board").append(tile);
    }
}