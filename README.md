# SLCC-CSIS-1430
Internet-and-HTML-Fundamentals
Coursework for 1430 Internet &amp; HTML Fundamentals at Salt Lake Community College.

```
function startGame() {
      var counter = 1;
      var innerDivs = "";
        
      for (i = 1; i <= 3; i++) {
          innerDivs += '<div id ="row-' + i + '">';
            for (j = 1; j <= 3; j++) {
                innerDivs += '<div onclick = 
                "playGame(this,' + counter + ');"></div>'
                counter *= 2;
            }
          innerDivs += '</div>';
      }
        document.getElementById("board").innerHTML =innerDivs;
        totals = [0, 0];
        gameOver = false;
        document.getElementById("title").innerText = players[whoseTurn] + " 's Turn";
}
```
