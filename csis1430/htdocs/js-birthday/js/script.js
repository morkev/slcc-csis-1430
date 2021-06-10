var username = prompt("What's your name?");
var age = prompt("How old are you?");

if (age <= 50) {
  alert("Happy Birthday, " + username + "! You are " + age + ", and still look fresh like a letuce!");
}
else if (age == 69) {
  alert("Oh " + username + ", that can't be a coincidence! Nice, but still old.");
}
else if (age == 121 || age == 122 || age == 123 || age == 124 || age == 125 || age == 126) {
  alert("The oldest person who ever lived was 122. Are you a new record?");
}
else if (age > 126) {
  alert("There's no way! Happy Birthday anyway.");
}
else {
  alert("Happy Birthday, " + username + "! You are " + age + ". Dang, you're old!");
}
