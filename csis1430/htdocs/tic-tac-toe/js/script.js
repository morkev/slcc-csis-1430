    var markers = ["X", "O"];
    var players = [];
    var totals = [];
    var winCodes = [7,56,73,84,146,273,292,448];
    var gameOver;
    var whoseTurn = 0;

    players[0] = prompt("Enter Player 1");
    players[1] = prompt("Enter Player 2");


    function restartGame() {
        var innerDivs = "";
        for (i = 1; i <= 3; i++) {
            innerDivs = '<div id ="row-1"></div>';
        }
      document.getElementById("board").innerHTML = innerDivs;
      startGame();
    }

    function startGame() {
        var counter = 1;
        var innerDivs = "";
        
          for (i = 1; i <= 3; i++) {
              innerDivs += '<div id ="row-' + i + '">';
          for (j = 1; j <= 3; j++) {
              innerDivs += '<div onclick="playGame(this,' + counter + ');"></div>'
              counter *= 2;
          }
          innerDivs += '</div>';
          }
        
        document.getElementById("board").innerHTML =innerDivs;
        totals = [0, 0];
        gameOver = false;
        document.getElementById("title").innerText = players[whoseTurn] + " 's Turn";
    }

    function playGame(clickedDiv, divValue) {

      if (!isWin()) {
        clickedDiv.innerText = markers[whoseTurn];
          totals[whoseTurn] += divValue;
      if (isWin()) {
        document.getElementById("title").innerText = 
            players[whoseTurn] + " Wins!";
        var audio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3');
        audio.play();
      }
      else if (gameOver) {
        document.getElementById("title").innerText = "It's a Draw!";
        var audio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Zombie.mp3');
        audio.play();
      }
      else {
          if (whoseTurn) whoseTurn = 0; else whoseTurn = 1;
            clickedDiv.attributes["0"].nodeValue = "";
              document.getElementById("title").innerText = players[whoseTurn] + " 's Turn";
           }
         }
       }

      function isWin() {
        for (i = 0; i < winCodes.length; i++) {
          if ((totals[whoseTurn] & winCodes[i]) == winCodes[i]) {
            gameOver = true; return true;}
          }
          if (totals[0] + totals[1] == 511) {
            gameOver = true;
          }

        return false;
    }
