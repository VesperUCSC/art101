/*
 * Author: Vesper Waddy ,iwaddy@ucsc.edu>, Nailea Llamas ,nllamas@ucsc.edu// NOTE:
 * Created: 27 April 2022
 * License: Public Domain
 */

//find output div and then assign to variable
var outputEl = document.getElementById("content");
//create a new element
var new1El = document.createElement("p");
var new2El = document.createElement("p");
//change HTML
new1El.innerHTML = "i am struggling";
new2El.innerHTML = "i just want time to shower";
//append new element to old element
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
//change CSS attributes
new1El.style.fontSize = "x-large";
new2El.style.fontSize = "x-large";
new1El.style.color = "black";
new2El.style.color = "black";
