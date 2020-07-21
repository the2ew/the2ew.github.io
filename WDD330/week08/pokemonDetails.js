'use strict';

function displayPokemonData(data, list) {
  list.innerHTML = "";
  
  var spriteRow = document.createElement('tr');
  var spriteItem = document.createElement('td');
  spriteItem.style.textAlign = "center";
  var sprite = document.createElement("img");
  sprite.setAttribute("src", data.sprites.front_default);
  sprite.setAttribute("alt", data.name + " sprite");
  sprite.setAttribute("width", "96");
  sprite.setAttribute("height", "96");
  spriteItem.appendChild(sprite);
  spriteRow.appendChild(spriteItem);
  list.appendChild(spriteRow);
  
  var nameRow = document.createElement('tr');
  var nameItem = document.createElement('td');
  nameItem.style.textAlign = "center";
  var capitalizedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  nameItem.innerHTML = capitalizedName + " types:";
  nameRow.appendChild(nameItem);
  list.appendChild(nameRow);
  
  data.types.forEach(function (typeKey) {
    var typeRow = document.createElement('tr');
    var typeItem = document.createElement('td');
    typeItem.style.textAlign = "center";
    var capitalizedTypeName = typeKey.type.name.charAt(0).toUpperCase() + typeKey.type.name.slice(1);
    typeItem.innerHTML = capitalizedTypeName;
    typeRow.appendChild(typeItem);
    list.appendChild(typeRow);
  });
}


function loadPokemonData() {
  var list = document.getElementById("pokemon-list");
  var detailsURL = this.getAttribute('data-pokemon-url');
  fetch(detailsURL)
  .then( response => response.json() )
  .then( data => displayPokemonData(data, list) )
  .catch( error => console.log('There was an error ' , error))
  .finally(function () {
    var buttonRow = document.createElement('tr');
    var buttonItem = document.createElement('td');
    buttonItem.style.textAlign = "center";
    buttonItem.style.paddingTop = "1rem";
    var backButton = document.createElement("button");
    backButton.innerHTML = "Go Back";
    backButton.onclick = refreshPokemon;
    buttonItem.appendChild(backButton);
    buttonRow.appendChild(buttonItem);

    list.appendChild(buttonRow);
    document.getElementById("load-box").style.display = "none";
  });
}