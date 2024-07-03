document.getElementById('loadData').addEventListener('click', () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('result').innerHTML = `
                <h2>Random Joke</h2>
                <p><strong>Setup:</strong> ${data.setup}</p>
                <p><strong>Punchline:</strong> ${data.punchline}</p>
            `;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

