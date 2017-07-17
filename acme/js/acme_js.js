$(document).ready(function(){
   
   getData();
   $('').hide();
   
});

function getData(){
   $.ajax({
      url: "/acme/js/acme.json",
      dataType: "json",
      success: function(data){
         console.log(data);
         $('#Home').html(data.Navigation.link1);
         $('#Anvils').html(data.Navigation.link2);
         $('#Explosives').html(data.Navigation.link3);
         $('#Decoys').html(data.Navigation.link4);
         $('#Traps').html(data.Navigation.link5);
      }
      
   });
}

//Code to make menu links work on same index.html page

$('#navigation').on('click', 'a', function(evt){
   evt.preventDefault();
   var link = $(this).text(); //"this" refers to whichever link clicked
   console.log(link);
   
   if(link != "Home"){
      $('#homecontent').hide();
      $('#navlinks').show();
      
      $.ajax({
         url: "/acme/js/acme.json",
         dataType: "json",
         success: function(data){
            console.log(data);
            var pic = (data[link].path);
            console.log(data[link]);
            $('title').replaceWith('<title>' + link + ' | ACME' + '</title>');
            $('.productname').html(data[link].name);
            $('#image').html('<img src="' + pic + '">');
            $('#summary').html(data[link].description);
            $('#manufac').html('<strong>Made by: </strong>' + data[link].manufacturer);
            $('#review').html('<strong>Reviews: </strong>' + data[link].reviews + '/5 stars');
            $('#price').html("<strong>Price: $</strong>" + data[link].price);
            console.log(data[link].reviews);
            
            
         }
      });
   }
else{
   $('title').replaceWith('<title>' + 'ACME | Home' + '</title>');
   $('#homecontent').show();
   $('#navlinks').hide();
   $('#productname').html('Welcome to Acme!');
}   
});