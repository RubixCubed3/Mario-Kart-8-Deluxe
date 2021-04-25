import { getNewRating } from './lib/Elo';
import flattenTracks from './lib/flattenTracks';

import tracksList from './data/MarioKart8Tracks.json';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let flatTracks = flattenTracks(tracksList);

let ratings = window.localStorage.getItem('trackRatings');

if (ratings) {
  ratings = JSON.parse(ratings);
} else {
 ratings = new Array(flatTracks.length).fill(1400);
}

function getRandomTracks() {
  let track1 = getRandomInt(flatTracks.length - 1);
  let track2;
  do {
    track2 = getRandomInt(flatTracks.length - 1);
  } while (track1 === track2);

  return [track1,  track2];
}

let button1 = document.querySelector('#button-1');
let button2 = document.querySelector('#button-2');

let currentTracks;

function showNewTracks() {
  currentTracks = getRandomTracks();
  button1.textContent = flatTracks[currentTracks[0]] + ': ' + ratings[currentTracks[0]];
  button2.textContent = flatTracks[currentTracks[1]] + ': ' + ratings[currentTracks[1]];
}

function onButtonClick(event) {
  let winner, loser;
  if (event.srcElement.id === 'button-1') {
    winner = currentTracks[0];
    loser = currentTracks[1];
  } else {
    winner = currentTracks[1];
    loser = currentTracks[0];
  }

  let oldWinnerRating = ratings[winner];
  let oldLoserRating = ratings[loser];

  let newWinnerRating = getNewRating(oldWinnerRating, oldLoserRating, 1);
  let newLoserRating = getNewRating(oldLoserRating, oldWinnerRating, 0);

  ratings[winner] = newWinnerRating;
  ratings[loser] = newLoserRating;

  window.localStorage.setItem('trackRatings', JSON.stringify(ratings));

  console.log('winnerRating', newWinnerRating);
  console.log('loserRating', newLoserRating);

  showNewTracks();
}

button1.addEventListener('click', onButtonClick);
button2.addEventListener('click', onButtonClick);

showNewTracks();
