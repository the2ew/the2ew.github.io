
'use strict';

var keyMargins = [];

function resetKey(elem) {
  var key = elem.dataset.key;
  var keyDiv = document.querySelectorAll('div [data-key="' + key + '"]')[0];
  keyDiv.classList.remove("playing");
}


function playSound(elem) {
  var soundSrc = elem.getAttribute('src');
  var audio = new Audio(soundSrc);
  audio.addEventListener('ended', function () {resetKey(elem)});
  audio.play();
}


function playKey(elem) {
  elem.classList.add("playing");
  var key = elem.dataset.key;

  var localKeyMargin = keyMargins[key] || 0;
  localKeyMargin += 10;
  if (localKeyMargin >= 100)
    localKeyMargin = 0;

  elem.style.marginTop = localKeyMargin + 'px';
  keyMargins[key] = localKeyMargin;
}


function getSound(evt) {
  var key = evt.keyCode - 32;
  var nodeList = document.querySelectorAll('[data-key="' + key + '"]');
  nodeList.forEach(function (item) {
    if (item.tagName.toLowerCase() === 'div')
      playKey(item);
    if (item.tagName.toLowerCase() === 'audio')
      playSound(item);
  });

}

document.body.addEventListener('keypress', getSound, false);
