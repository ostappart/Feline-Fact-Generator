function getCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById("cat-fact").textContent = data.fact;
        })
        .catch(error => {
            console.error('Error fetching cat fact:', error);
            const backupFacts = [
                "Cats can make more than 100 different sounds, all equally charming and precious.",
                "Cats greet each other with a friendly BOOP! Boops are nose touches. That is what they do instead of shake hands.",
                "Cats have the ability to rotate their ears around 180 degrees to catch all the little sounds around them.",
            ];
            const randomIndex = Math.floor(Math.random() * backupFacts.length);
            document.getElementById("cat-fact").textContent = backupFacts[randomIndex];
        });
}
