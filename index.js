console.log('knock knock');
function generateKnockKnockJoke() {
    const whoStart = ["Knock knock"];
    const whoEnd = ["Who's there?", "Tank", "Cow says", "Atch", "Etch"];
    const punchline = [
        "Tank who?",
        "You're welcome.",
        "Cow says who?",
        "No, cow says moooo!",
        "Atch who?",
        "Bless you!",
        "Etch who?",
        "Bless you!"
    ];

    // Generate random indices
    const startIndex = Math.floor(Math.random() * whoStart.length);
    const endIndex = Math.floor(Math.random() * whoEnd.length);
    const punchlineIndex = endIndex * 2 - 1;  // Ensures correct pairing of setup and punchline

    // Create the joke
    const joke = `${whoStart[startIndex]}\n${whoEnd[endIndex]}\n${punchline[punchlineIndex]}`;
    return joke;
}

// Print the joke
console.log(generateKnockKnockJoke());



