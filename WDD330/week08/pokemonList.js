'use strict';

var PAGE_COUNT = 10;
var nextPage = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=" + PAGE_COUNT;
var prevPage = null;
var currentList = null;

function refreshPokemon() {
  if (currentList) {
    nextPage = currentList.next;
    prevPage = currentList.previous;
    var list = document.getElementById("pokemon-list");
    list.innerHTML = '';
    currentList.results.forEach(function (item) {
      var listRow = document.createElement('tr');
      var nameColumn = document.createElement('td');
      var capitalizedName = item.name.charAt(0).toUpperCase() + item.name.slice(1);
      nameColumn.innerHTML = capitalizedName;
      
      var buttonColumn = document.createElement('td');
      var detailsButton = document.createElement('button');
      detailsButton.setAttribute('data-pokemon-url', item.url);
      detailsButton.onclick = loadPokemonData;
      detailsButton.innerHTML = "More Details";
      buttonColumn.appendChild(detailsButton);
      
      listRow.appendChild(nameColumn);
      listRow.appendChild(buttonColumn);
      list.appendChild(listRow);
      document.getElementById("load-box").style.display = "block";
    });
  }
  
  if (prevPage)
    document.getElementById('load-prev').style.display = 'inline';
  else
    document.getElementById('load-prev').style.display = 'none';

  if (nextPage)
    document.getElementById('load-next').style.display = 'inline';
  else
    document.getElementById('load-next').style.display = 'none';
}


function loadNextPokemon() {
  if (nextPage) {
    fetch(nextPage)
   .then( response => response.json() )
   .then( data => {currentList = data; refreshPokemon();} )
   .catch( error => console.log('There was an error ' , error));
  }
}


function loadPrevPokemon() {
  if (prevPage) {
    fetch(prevPage)
   .then( response => response.json() )
   .then( data => {currentList = data; refreshPokemon();} )
   .catch( error => console.log('There was an error ' , error));
  }
}