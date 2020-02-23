//var x= 'Error';
//
//var r = confirm("Are you sure you want to send a payment?");
//
//if(r == true) {
//   x = 'Payment sent';
//}
//else {
//   x = 'Payment cancelled';
//}
//
//alert(x);

function smartForm() {
  
//Code to reformat containAns div id
   document.getElementById('containAns').style.display ="block";
   
   
   var rushmore = document.getElementById('rushmore').value.toLowerCase();
//   var rushCompare = rushmore.toLowerCase();
   var capitol = document.getElementById('capitol').value.toLowerCase();
   
   
   if (document.getElementById('yes').checked){
      
       var radio = "yes";
   } 
   else if (document.getElementById('no').checked) {
      
      var radio = "no";
   }
   else {
      
      var radio ="Please select an answer";
   }
  
   
   var error = "";
   var correct = "";

   //Troubleshooting
//   alert(rushmore);
//   alert(capitol);
    alert(radio);
   
   if (rushmore !== "washington") {
     error = "The correct answer is Washington";
     document.getElementById('answers').innerHTML = error;
  } 
   else {
      correct = "You are correct!"
      document.getElementById('answers').innerHTML = correct;
   }
 
   
}

function clearDisplay(){
   document.getElementById('containAns').style.display ="none";
}

function showCode() {
   var code = "x";
   
   document.getElementById("codeView").innerHTML = code;
}