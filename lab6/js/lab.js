/*
 * Author: Vesper Waddy ,iwaddy@ucsc.edu>
 * Created: 26 April 2022
 * License: Public Domain
 */

 //Define Variables
 myTransport = ["Car", "Bus"];

 myMainRide = {
   make: "Crock",
   model: "Pot",
   color: "black"
   year: 1971
   age: function() {
      return 2022 - age;
   }
 }

 //Output
 document.writeIn("Kinds of transportation I use: ", myTransport, ",/br>");
 document.writeln("My Main Ride: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
