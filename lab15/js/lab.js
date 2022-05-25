/*
 * Author: Vesper Waddy ,iwaddy@ucsc.edu>, Nailea Llamas ,nllamas@ucsc.edu// NOTE:
 * Created: 9 May 2022
 * License: Public Domain
 */

 // var endpoint = "http://numbersapi.com/42/";
 var endpoint = "https://xkcd.com/info.0.json";

 function getAjax() {
 	$.ajax({
   	url: endpoint,
     type: "GET"
   })
   .done(function(data){
   	console.log("Worked!");
   	$("#output").append("<h3>" + data.title + "</h3>");
   	$("#output").append("<img src=" + data.img + ">");
   	$("#output").append("<p>" + data.alt);
   })
   .fail(function(request, error){
   	$("#output").html("Something fucked up.");
   })
 }

 $("#activate").click(getAjax);
