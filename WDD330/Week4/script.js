var counter = 0;
var player = "X";

function mark(tdId) {
   console.log();
   if (tdId.innerHTML.length === 0) {
      if (counter === 0) {
         tdId.innerHTML = "X";
         player = "X"
         counter = 1;
      } else {
         tdId.innerHTML = "O";
         player = "O"
         counter = 0;
      }
   }
   var a1 = document.getElementById('a1').innerHTML;
   var a2 = document.getElementById('a2').innerHTML;
   var a3 = document.getElementById('a3').innerHTML;
   var b1 = document.getElementById('b1').innerHTML;
   var b2 = document.getElementById('b2').innerHTML;
   var b3 = document.getElementById('b3').innerHTML;
   var c1 = document.getElementById('c1').innerHTML;
   var c2 = document.getElementById('c2').innerHTML;
   var c3 = document.getElementById('c3').innerHTML;
   if ((a1.length > 0 && a1 === b1 && b1 === c1) ||
      (a2.length > 0 && a2 === b2 && b2 === c2) ||
      (a3.length > 0 && a3 === b3 && b3 === c3) ||
      (a1.length > 0 && a1 === a2 && a2 === a3) ||
      (b1.length > 0 && b1 === b2 && b2 === b3) ||
      (c1.length > 0 && c1 === c2 && c2 === c3) ||
      (a1.length > 0 && a1 === b2 && b2 === c3) ||
      (c1.length > 0 && c1 === b2 && b2 === a3)) {
      document.getElementById('result').innerHTML = player + " wins";
   } else {
      if (a1.length > 0 && a2.length > 0 && a3.length > 0 && b1.length > 0 && b2.length > 0 && b3.length > 0 && c1.length > 0 && c2.length > 0 && c3.length > 0) {
         document.getElementById('result').innerHTML = "Tie game";
      }
   }

   if (document.getElementById('result').innerHTML.length > 0) {
      window.setTimeout(clearBoard, 2000);
      counter = 0;
   }
}

function clearBoard() {
   var x = document.getElementsByTagName("TD");
   var i;
   for (i = 0; i < x.length; i++) {
      x[i].innerHTML = "";
   }
   document.getElementById('result').innerHTML = '';

}
