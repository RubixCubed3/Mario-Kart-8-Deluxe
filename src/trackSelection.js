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

    return [track1, track2];
}

let image1 = document.querySelector('#image-1');
let image2 = document.querySelector('#image-2');
let name1 = document.querySelector('#name-1');
let name2 = document.querySelector('#name-2');
let rankingList = document.querySelector('#track-rankings');



let currentTracks;

function showNewTracks() {
    currentTracks = getRandomTracks();

    image1.src = `./trackimages/${('0' + currentTracks[0]).slice(-2)}.png`;
    name1.textContent = `Rating: ${ratings[currentTracks[0]]}`;

    image2.src = `./trackimages/${('0' + currentTracks[1]).slice(-2)}.png`;
    name2.textContent = `Rating: ${ratings[currentTracks[1]]}`;
}

function updateTrackRankingList() {
    let items = flatTracks.map((value, index) => {
        return {
            name: value,
            rating: ratings[index]
        }
    });

    items.sort((a, b) => b.rating - a.rating);
    items = items.map((value) => {
        return `<li>${value.name}: ${value.rating}</li>`;
    })
    rankingList.innerHTML = items.join('');
}

function onButtonClick(event) {
    let winner, loser;
    if (event.srcElement.id === 'image-1') {
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

    updateTrackRankingList();
    showNewTracks();
}

image1.addEventListener('click', onButtonClick);
image2.addEventListener('click', onButtonClick);

updateTrackRankingList();
showNewTracks();