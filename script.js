const quoteBtn = document.getElementById('quote-btn');
const outputDiv = document.getElementById('output');
const resultText = document.getElementById('result-text');

// Creates an array of string names to represent the tiles and number of each tile
const tiles = [
    ...Array(4).fill("Wood"),
    ...Array(3).fill("Brick"),
    ...Array(4).fill("Sheep"),
    ...Array(4).fill("Wheat"),
    ...Array(3).fill("Ore"),
    ...Array(1).fill("Robber")
]

// This is the Fisher-Yates shuffle algorithm, shuffling the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array [j], array[i]];
    }
}

// Shuffle the tiles
shuffle(tiles);

// Function to display tiles one by one
let index = 0;
function displayNextTile() {
    if (index < tiles.length) {
        const tile = tiles[index];
        resultText.textContent = tile;
        index++;
    } else {
        resultText.textContent = "All tiles have been displayed! Please reload the page to shuffle again!";
    }
}


quoteBtn.addEventListener('click', displayNextTile);