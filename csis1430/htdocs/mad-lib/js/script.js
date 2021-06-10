var play = prompt("Type the number 1 if you want a short story, or type the number 2 if you want something more complex!")

if (play == 1) {
  var nounX = prompt("Enter your first noun.");
    var nounY = prompt("Enter your second noun!");
  var verbX = prompt("Enter your first verb.");
    var verbY = prompt("Enter your second verb.");
  var adjecX = prompt("Enter your first adjective.");
    var adjecY = prompt("Enter your second adjective.");

  alert("The " + adjecX + " person sitting by the " + nounX +
  " thought it would be smart to " + verbX + " across the street. However, the "
  + adjecY + " and wild " + nounY + " decided to " + verbY
  + " silently from the top of a Starbucks Coffee.")
}

else if (play == 2){
  var noun1 = prompt("Enter a place – e.g. kitchen, airport, bathroom.");
    var noun2 = prompt("Enter another noun – e.g. man, kid, monkey.");
      var noun3 = prompt("Please enter one last noun:");
  var verb1 = prompt("Enter a verb:");
    var verb2 = prompt("Write a verb in regular past – e.g. eated, drinked, stored).");
  var adjec1 = prompt("Enter an adjective – e.g. bad, small, old.");
    var adjec2 = prompt("Please enter another adjective.");
      var adjec3 = prompt("Write one last adjective:");
  var pron1 = prompt("Please write a pronoun:");
    var pron2 = prompt("Ups... one last pronoun!");
  var adverb1 = prompt("Write an adverb – e.g. gently, extremely, carefully.");
    var adverb2 = prompt("One more adverb. We are almost there!");
  var prepo1 = prompt("Write a preposition – e.g. by, with, about, until.");
    var prepo2 = prompt("Enter another preposition.");
  var conjunt1 = prompt("Please add a conjunction – e.g. and, but, while, because.");
    var conjunt2 = prompt("Write a second conjunction:");
  var interjec1 = prompt("Write an interjection – Wow, Oops, Dang");
    var interjec2 = prompt("You are one interjection away from your creation!");

  alert("One time way back in the " + noun1 + " I had to " + verb1 + " really " + adjec1
  + " . Me being the " + noun2 + " that I am decided that it would be " + adjec2 + ". Big "
  + interjec1 + "! It wasn’t. The only " + noun3 + " talking was the teacher, and " + pron1
  + " was interrupted " + prepo1 + " ... " + adverb1 + " cannon fire farts. "
  + pron2 + " said she was " + adjec3 + " so I couldn’t hold it " + prepo2 + " "
  + conjunt1 + " proceeded to tell a story of how she " + verb2 + " a famous athlete who did "
  + adverb2 + " the same thing. " + interjec2 + "! " + conjunt2 + " all I will say is goodbye, fellows!");
}

else {
  alert("Since you typed the wrong number, you will play the complex Mad Libs Game!")
  var noun1 = prompt("Enter a place – e.g. kitchen, airport, bathroom.");
    var noun2 = prompt("Enter another noun – e.g. man, kid, monkey.");
      var noun3 = prompt("Please enter one last noun:");
  var verb1 = prompt("Enter a verb:");
    var verb2 = prompt("Write a verb in regular past – e.g. eated, drinked, stored).");
  var adjec1 = prompt("Enter an adjective – e.g. bad, small, old.");
    var adjec2 = prompt("Please enter another adjective.");
      var adjec3 = prompt("Write one last adjective:");
  var pron1 = prompt("Please write a pronoun:");
    var pron2 = prompt("Ups... one last pronoun!");
  var adverb1 = prompt("Write an adverb – e.g. gently, extremely, carefully.");
    var adverb2 = prompt("One more adverb. We are almost there!");
  var prepo1 = prompt("Write a preposition – e.g. by, with, about, until.");
    var prepo2 = prompt("Enter another preposition.");
  var conjunt1 = prompt("Please add a conjunction – e.g. and, but, while, because.");
    var conjunt2 = prompt("Write a second conjunction:");
  var interjec1 = prompt("Write an interjection – Wow, Oops, Dang");
    var interjec2 = prompt("You are one interjection away from your creation!");


  alert("One time way back in the " + noun1 + " I had to " + verb1 + " really " + adjec1
  + " . Me being the " + noun2 + " that I am decided that it would be " + adjec2 + ". Big "
  + interjec1 + "! It wasn’t. The only " + noun3 + " talking was the teacher, and " + pron1
  + " was interrupted " + prepo1 + " ... " + adverb1 + " cannon fire farts. "
  + pron2 + " said she was " + adjec3 + " so I couldn’t hold it " + prepo2 + " "
  + conjunt1 + " proceeded to tell a story of how she " + verb2 + " a famous athlete who did "
  + adverb2 + " the same thing. " + interjec2 + "! " + conjunt2 + " all I will say is goodbye, fellows!");
}
