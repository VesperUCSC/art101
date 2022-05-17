/*
 * Author: Vesper Waddy ,iwaddy@ucsc.edu>, Nailea Llamas ,nllamas@ucsc.edu// NOTE:
 * Created: 9 May 2022
 * License: Public Domain
 */

$("#p1").prepend("<button id=button1>ah tss push it</button>")
$("#button1").click(function()
{$("#p1").toggleClass("selected")

})

$("#button2").click(function()
{$("#p2").toggleClass("selected")

})

$("#button3").click(function()
{$("#p3").toggleClass("selected")

})
