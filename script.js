const ourMovie = document.getElementById('ourMovie');

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        ourMovie.paused ? ourMovie.play() : ourMovie.pause();
    }
});

ourMovie.addEventListener('click', () => {
    ourMovie.paused ? ourMovie.play() : ourMovie.pause();
});

function showResponseButtons() {
    document.getElementById('responseButtons').style.display = 'block';
    document.querySelector('.popcorn-emoji').style.animation = 'none';
}

function respond(answer) {
    const responses = {
        yes: [
            "Yasss! 🎉", 
            "Starting the countdown! ⏳", 
            "DMing you the snack menu... 🍫"
        ],
        maybe: [
            "😏 I'll send reminders!", 
            "Penciling it in 📅", 
            "The popcorn hopes you'll come!"
        ]
    };
    
    alert(responses[answer].join('\n'));
}
