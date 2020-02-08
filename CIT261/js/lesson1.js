var x= 'Error';

var r = confirm("Are you sure you want to send a payment?");

if(r == true) {
   x = 'Payment sent';
}
else {
   x = 'Payment cancelled';
}

alert(x);