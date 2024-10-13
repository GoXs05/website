// Script to manage audio playback

let currentlyPlayingAudio = null;

// Function to stop currently playing audio
function stopCurrentlyPlayingAudio() {
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0; // Reset to the beginning
        currentlyPlayingAudio = null;
    }
}

// Event listener to stop audio when leaving an article
document.addEventListener('hashchange', function() {
    stopCurrentlyPlayingAudio();
});

// Function to handle stopping audio on back link clicks
function handleBackLinkClicks() {
    const backLinks = document.querySelectorAll('.back-link');
    backLinks.forEach(link => {
        link.addEventListener('click', function() {
            stopCurrentlyPlayingAudio();
        });
    });
}

// Event listeners for audio players
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayers = document.querySelectorAll('.music-audio');

    audioPlayers.forEach(audioPlayer => {
        audioPlayer.addEventListener('play', function() {
            stopCurrentlyPlayingAudio();
            currentlyPlayingAudio = audioPlayer; // Set the currently playing audio to the current player
        });

        audioPlayer.addEventListener('pause', function() {
            // Reset the currently playing audio variable if paused
            if (currentlyPlayingAudio === audioPlayer) {
                currentlyPlayingAudio = null;
            }
        });

        audioPlayer.addEventListener('ended', function() {
            // Reset the currently playing audio variable if playback ends
            currentlyPlayingAudio = null;
        });
    });

    handleBackLinkClicks(); // Attach click handlers to back links
});