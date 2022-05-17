/*
 * Author: Vesper Waddy ,iwaddy@ucsc.edu>, Nailea Llamas ,nllamas@ucsc.edu// NOTE:
 * Created: 9 May 2022
 * License: Public Domain
 */

//return Water, Earth, Fire, Air depending on length mod 4
function bender(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Water Bender"
  }
  else if (mod == 1) {
    return "Earth Bender"
  }
  else if (mod == 2) {
    return "Fire Bender"
  }
  else if (mod == 2) {
    return "Air Bender"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var element = bender(name);
  newText = "<p>You are a " + element +"</p>";
  document.getElementById("output").innerHTML = newText;
})
