var age = prompt("How old are you?");
var daysAlive = age * 365.25;
var sentence = document.getElementById("pid");
sentence.innerHTML = `You've been alive for ${daysAlive} days.`;