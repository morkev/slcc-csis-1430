alert("Hello! Remember you can only type a number smaller or equal to 8.");
var x = prompt("Now... how many lottery numbers would you like?");

while (x > 8 || x <= 0) {
  alert("This is not an ERROR, but something worst: a WHILE LOOP!");
  var x = prompt("Type a number bigger than 0, but less or equal to 8.");
}

var lotto = [];

for (var i = 0; i < x; i++) {
  lotto[i] = Math.floor(Math.random() * 99);
}

document.write('<p id="jstext">' + lotto + '</p>')

function play() {
  var audio = new Audio(
    'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3'); //This is just a random link that actually worked!!!
        audio.play();
            alert("You didn't expect anything, right?");
                }
