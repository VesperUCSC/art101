/*
 * Author: Vesper Waddy ,iwaddy@ucsc.edu>, Nailea Llamas ,nllamas@ucsc.edu// NOTE:
 * Created: 9 May 2022
 * License: Public Domain
 */

 //sortusername- a function that takes user input and sorts the letter of their name

  //Output
  function sortUserName(name) {
     //split string to array

     var nameArray = name.split('');
     console.log("nameArray =", nameArray);
     //sort the array

     var nameArraySort = nameArray.sort();
     console.log("nameArraySort =", nameArraySort);
     //join array back to a string

     var nameSorted = nameArraySort.join('');
     console.log("nameSorted =", nameSorted);
     //nate that the above lines could have been done as a single line
     //  username.toLower().split("").sort().join("")

     return nameSorted;
    }

  //were going to get the button elements
  var buttonEl = document.getElementById("my-button");
  //create an event handler within the JS file that listens for a button click
  buttonEl.addEventListener("click", function(){
    console.log("click");
    //prompt the user to input their name with the input() function
    var inputEl = document.getElementById("my-input");
    var name = inputEl.value;
    console.log("name", name);
    //call the function sortUserName
    sortUserName(name);
    //change the div with the input
    var divEl = document.getElementById("title");
    console.log("title", title);
    title.innerHTML = sortUserName(name);
  })
