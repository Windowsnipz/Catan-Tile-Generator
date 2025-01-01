const quoteBtn = document.getElementById('quote-btn');
const outputDiv = document.getElementById('output');
const resultText = document.getElementById('result-text');


quoteBtn.addEventListener('click', () => {

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

    



    fetch('https://api.kanye.rest/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parses JSON data
        })
        .then(data => {
            outputDiv.classList.add('section');
            resultText.textContent = data.quote;  // Display Kanye quote in result section
        })
        .catch (error => {
            console.error('There was a problem with the fetch operation');
        });
});

document.body.addEventListener('click', (event) => {
        outputDiv.classList.remove('section');
        resultText.textContent = '';
});