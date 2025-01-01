const quoteBtn = document.getElementById('quote-btn');
const outputDiv = document.getElementById('output');
const resultText = document.getElementById('result-text');


quoteBtn.addEventListener('click', () => {
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