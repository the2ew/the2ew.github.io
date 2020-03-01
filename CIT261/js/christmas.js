       // Begin 12 days of Christmas code //
//Debug
//var x= 5;
//alert(x);

//
//var inter = [ "and a","Two", "three"];
//If  dont use objects, use 3 variables to contain (dayName, //giftName, days), and use swith cases in for loop



//var c_gifts =
//{
//   dayName: "and a",
//   giftName: " Partridge in a pear tree"
//};
//
//var days = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth" ];
//
////Problem child below
//
//var christmas = [
//   [c_gifts.dayName,
//    c_gifts.giftName], 
//   
//   [c_gifts.dayName = " Two",
//    c_gifts.giftName = " Turtledoves"],
//   
//   [c_gifts.dayName = " Three",
//    c_gifts.giftName = " French hens"],
//   
//   [c_gifts.dayName = " Four",
//    c_gifts.giftName = " Calling birds "],
//   
//   [c_gifts.dayName = "Five",
//    c_gifts.giftName = " Golden rings"],
//   
//   [c_gifts.dayName = "Six",
//    c_gifts.giftName = " Geese alaying"],
//   
//   [c_gifts.dayName = "Seven",
//    c_gifts.giftName = " Swans aswimming"],
//   
//   [c_gifts.dayName = "Eight",
//    c_gifts.giftName = " Maids amilking"],
//   
//   [c_gifts.dayName = "Nine",
//    c_gifts.giftName = " Ladies dancing"],
//   
//   [c_gifts.dayName = "Ten",
//    c_gifts.giftName = " Lords aleaping"],
//   
//   [c_gifts.dayName = "Eleven",
//    c_gifts.giftName = " Pipers piping"],
//   
//   [c_gifts.dayName = "Twelve",
//    c_gifts.giftName = " Drummers drumming"],
//];

function twelveDays() {
   
   //Local variables only in scope of function
//   var firstDay = true;
//   firstDayLetter = 'A';
   
   var c_gifts =
{
   dayName: "and a",
   giftName: " Partridge in a pear tree"
};

var days = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth" ];

//Problem child below

var christmas = [
   [c_gifts.dayName,
    c_gifts.giftName], 
   
   [c_gifts.dayName = " Two",
    c_gifts.giftName = " Turtledoves"],
   
   [c_gifts.dayName = " Three",
    c_gifts.giftName = " French hens"],
   
   [c_gifts.dayName = " Four",
    c_gifts.giftName = " Calling birds "],
   
   [c_gifts.dayName = "Five",
    c_gifts.giftName = " Golden rings"],
   
   [c_gifts.dayName = "Six",
    c_gifts.giftName = " Geese alaying"],
   
   [c_gifts.dayName = "Seven",
    c_gifts.giftName = " Swans aswimming"],
   
   [c_gifts.dayName = "Eight",
    c_gifts.giftName = " Maids amilking"],
   
   [c_gifts.dayName = "Nine",
    c_gifts.giftName = " Ladies dancing"],
   
   [c_gifts.dayName = "Ten",
    c_gifts.giftName = " Lords aleaping"],
   
   [c_gifts.dayName = "Eleven",
    c_gifts.giftName = " Pipers piping"],
   
   [c_gifts.dayName = "Twelve",
    c_gifts.giftName = " Drummers drumming"],
];
   
   var i;
   var j;
   var christmasText = " ";
   
   for (i = 0; i < days.length;) {
      
      christmasText = "On the " + days[i] + " day of Christmas <br /> my true love gave to me <br />";
      
      document.getElementById("christmasSong").innerHTML += christmasText;
      i++
      
      for (j = 0; 1 > i; j--) {
         document.getElementById("christmasSong").innerHTML += christmas[j].dayName + christmas[j].giftName;
         alert(christmas[i].dayName);
      }
       
      
    //Troubleshooting alert
    //alert(days[i]);
   }

   
}

//alert(christmas[11]);
//alert(days[1]);

